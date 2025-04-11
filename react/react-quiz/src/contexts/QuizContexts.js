import { createContext, useContext, useEffect, useReducer } from "react"
const QuizContext=createContext();

const initialState={
    questions:[],
    status:'',
    index:0,
    answer:null,
    points:0,
    highScore:0,
    secondsRemaining:null
}
const SECS_PER_QUESTION=30;
function reducer(state,action){
    switch(action.type){
        case 'dataReceived':
            return {...state,questions:action.payload,status:'ready'}
        case 'dataFailed':
            return {...state,status:'error'}
        case 'load':
            return {...state,status:'loading'}
        case 'start':
            return {...state,status:'active',secondsRemaining:state.questions.length*SECS_PER_QUESTION}
        case 'nextQuestion':
            return {...state,answer:null,index:state.index+1}
            
        case 'newAnswer':
            const question=state.questions.at(state.index)
            return {...state,answer:action.payload,points:action.payload===question.correctOption?state.points+question.points:state.points}
        case 'finish':
            return{...state,status:'finished',highScore:state.points>state.highScore?state.points:state.highScore}
        case 'restart':
            return {...initialState,status:'ready',questions:state.questions};
        case 'tick':
            return {...state,secondsRemaining:state.secondsRemaining-1,status:state.secondsRemaining===0?'finished':state.status,highScore:state.points>state.highScore?state.points:state.highScore}
        default:
            throw new Error('unknown action')
    }
}

function QuizProvider({children}) {
   const [{questions,status,index,answer,points,highScore,secondsRemaining},dispatch]=useReducer(reducer,initialState)

   const numQuestions=questions.length
   const totalPoints=questions.reduce((acc,cur)=>acc+cur.points,0);
   useEffect(function(){
           async function fetchData() {
               dispatch({type:'load'})
               try {
               const res=await fetch('http://localhost:8000/questions')
               const data=await res.json()
               console.log(data)
               dispatch({type:'dataReceived',payload:data})
           } catch (error) {
                  dispatch({type:'dataFailed'})
                   
               }
               
           }
           fetchData()
       },[])

    return <QuizContext.Provider value={{questions,status,numQuestions,index,answer,points,totalPoints,highScore,secondsRemaining,dispatch}}>{children}</QuizContext.Provider>
}

function useQuiz(){
    const context=useContext(QuizContext);
    if(context===undefined) throw new Error('Quiz context was use outside of provider')
    return context
}
export {QuizProvider,useQuiz}