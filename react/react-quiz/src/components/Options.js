import { useQuiz } from "../contexts/QuizContexts"

export default function Options({question}){
    const {dispatch,answer}=useQuiz()

    return <div className="options">
    {question.options.map((option,i)=><button className={`btn btn-option ${i===answer&&answer?'answer':''} ${answer!==null?(i===question.correctOption?'correct':'wrong'):''}`} key={option} disabled={answer!==null} onClick={()=>dispatch({type:'newAnswer',payload:i})}>{option}</button>)}
</div>
}