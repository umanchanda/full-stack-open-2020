import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistic = (props) => {
  return (
    <p>{props.text} {props.value}</p>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const Statistics = (props) => {
  return (
    <div>
      <table>
        <tbody>
          <tr><th><Statistic text="good" value={props.good} /></th></tr>
          <tr><th><Statistic text="neutral" value={props.neutral} /></th></tr>
          <tr><th><Statistic text="bad" value={props.bad} /></th></tr>
          <tr><th><Statistic text="all" value={props.total} /></th></tr>
          <tr><th><Statistic text="average" value={(props.good - props.bad) / props.total} /></th></tr>
          <tr><th><Statistic text="positive" value={props.good / props.total * 100} /></th></tr>
          </tbody>
      </table>
    </div>
  )
}

const History = (props) => {
  if (props.total === 0) {
    return (
      <p>no feedback given</p>
    )
  }

  return <Statistics good={props.good} neutral={props.neutral} bad={props.bad} total={props.total} />
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text="good" />
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      
      <h1>statistics</h1>
      <History good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));