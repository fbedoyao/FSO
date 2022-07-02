import { useState } from 'react'


const StatiticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
}


const Statistics = (props) => {

  if(props.good > 0 || props.neutral > 0 || props.bad > 0){
    return(
      <div>
        <h1>statistics</h1>
        <table>
          <StatiticsLine text={'Good'} value={props.good}/>
          <StatiticsLine text={'Neutral'} value={props.neutral}/>
          <StatiticsLine text={'Bad'} value={props.bad}/>
          <StatiticsLine text={'All'} value={props.good + props.neutral + props.bad}/>
          <StatiticsLine text={'Average'} value={(props.good*1 + props.neutral*0 + props.bad*-1)/(props.good + props.neutral + props.bad)}/>
          <StatiticsLine text={'Positive'} value={(props.good/(props.good+props.neutral+props.bad))*100}/>  
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
}

const Button = (props) => {
  return (
    <>
      <button onClick = {props.handlerButton}>
        {props.name}
      </button>
    </>
  );
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodBtnHandler = () => {
    setGood(good+1)
  }

  const neutralBtnHandler = () => {
    setNeutral(neutral+1)
  }

  const badBtnHandler = () => {
    setBad(bad+1)
  }


  console.log(good);

  return (
    <div>
      <h1>give feedback</h1>
      <Button name='Good' handlerButton = {goodBtnHandler}/>
      <Button name='Neutral' handlerButton = {neutralBtnHandler}/>
      <Button name='Bad' handlerButton = {badBtnHandler}/>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default App
