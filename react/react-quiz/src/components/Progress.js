import { useQuiz } from "../contexts/QuizContexts"

export default function Progress(){
    const {points,totalPoints,numQuestions,answer,index}=useQuiz()
    
    return <header className="progress">
        <progress max={numQuestions} value={index+Number(answer!==null)}/>
        <p>Question <strong>{index+1}</strong> / {numQuestions}</p>
        <p><strong>{points}</strong>/{totalPoints} Points</p>
    </header>
}