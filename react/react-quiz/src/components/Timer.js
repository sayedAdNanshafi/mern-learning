import { useEffect } from "react"
import { useQuiz } from "../contexts/QuizContexts"

export default function Timer(){
    const {dispatch,secondsRemaining}=useQuiz()
    const mins=Math.floor(secondsRemaining/60)
    const secs=secondsRemaining%60
    useEffect(function(){
        
        const timer=setInterval(function(){
            dispatch({type:'tick'})   
        },1000)

        return function(){
            clearInterval(timer)
        }
        
    },[dispatch])
    return <div className="timer">
       {mins<10?'0':''}{mins}:{secs<10?'0':''}{secs}
    </div>
}