import './App.css'
import TimerA from './components/timer1'
import TimerB from './components/timer2'
import { Addition, Subtraction, Multiplication, Division, mainNum } from "./components/funcs"

const App = () => {

  return (
    <>
      <TimerA time="TIME"></TimerA>
      <TimerB></TimerB>
      <div className='list-wrapper'>
        <ul>
          <h3>Exercise 3</h3>
          <li>{Addition()}</li>
          <li>{Subtraction()}</li>
          <li>{Multiplication()}</li>
          <li>{Division()}</li>

        </ul>

      </div>

    </>
  )
}

export default App
