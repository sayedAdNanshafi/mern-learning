import { useEffect,useReducer } from 'react'

import Header from './Header'
import Main from './Main'
import Loader from './Loader'
import Error from './Error'
import StartScreen from './StartScreen'
import Question from './Question'
import NextButton from './NextButton'
import Progress from './Progress'
import FinishScreen from './FinishScreen'
import Timer from './Timer'
const SECS_PER_QUESTION=30;
const initialState={
    questions:[],
    status:'',
    index:0,
    answer:null,
    points:0,
    highScore:0,
    secondsRemaining:null
}

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
export default function App(){
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
    return <div className='app'>
        <Header />
        <Main>
            {status==='ready'&&<StartScreen numQuestions={numQuestions} dispatch={dispatch}/>}
            {status==='error'&&<Error/>}
            {status==='loading'&&<Loader/>}
            {status==='active'&&<>
            <Progress index={index} answer={answer} points={points} numQuestions={numQuestions} totalPoints={totalPoints}/>
            <Question question={questions[index]} dispatch={dispatch} answer={answer}
            />
            <footer>

            <Timer dispatch={dispatch} secondsRemaining={secondsRemaining}/>
            <NextButton dispatch={dispatch} answer={answer} index={index} numQuestions={numQuestions}/>
            </footer>
            
            </>
            }
            {status==='finished'&&<FinishScreen points={points} totalPoints={totalPoints} highScore={highScore} dispatch={dispatch}/>}
        </Main>
        
    </div>
}
