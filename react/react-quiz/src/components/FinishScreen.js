import { useQuiz } from "../contexts/QuizContexts"

export default function FinishScreen(){
    const {points,totalPoints,highScore,dispatch}=useQuiz()
    
    const percentage=(points/totalPoints)*100
    return <>
     <p className="result">You Scored <strong>{points}</strong> out of {totalPoints} ({Math.ceil(percentage)}%)</p>
     <p className="highscore">HighScore : {highScore}</p>
     <button className="btn btn-ui" onClick={()=>dispatch({type:'restart'})}>Restart Quiz</button>
    </>
    
}