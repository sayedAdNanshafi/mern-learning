

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
import { useQuiz } from '../contexts/QuizContexts'

export default function App(){
    const {status}=useQuiz()
    
    
    return <div className='app'>
        <Header />
        <Main>
            {status==='ready'&&<StartScreen/>  }
            {status==='error'&&<Error/>}
            {status==='loading'&&<Loader/>}
            {status==='active'&&<>
            <Progress />
            <Question />
            <footer>

            <Timer />
            <NextButton />
            </footer>
            
            </>
            }
            {status==='finished'&&<FinishScreen />}
        </Main>
        
    </div>
}
