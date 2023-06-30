import { useState } from "react"

const Title = ({ title }) => (
  <h1> {title} </h1>
)

const Button = ({ props, handleClick }) => (
  <button onClick={handleClick}>{props}</button>
)

const StatisticsLine = ({ text, value }) => (
  <p>{text} {value}</p>
)

const Statistics = ({ goodcnt, neutralcnt, badcnt, totalcnt }) => {
  const positive = (goodcnt / totalcnt * 100).toFixed(1) + '%'
  if (totalcnt === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
      <StatisticsLine text='good' value={goodcnt} />
      <StatisticsLine text='neutral' value={neutralcnt} />
      <StatisticsLine text='bad' value={badcnt} />
      <StatisticsLine text='total' value={totalcnt} />
      <StatisticsLine text='average' value={((goodcnt - badcnt) / totalcnt).toFixed(1)} />
      <StatisticsLine text='positive' value={positive} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [goodcnt, setGood] = useState(0)
  const [neutralcnt, setNeutral] = useState(0)
  const [badcnt, setBad] = useState(0)
  const [totalcnt, setTotal] = useState(0)
  let newcnt = 0

  const handleGood = () => {
    newcnt = goodcnt + 1
    setGood(newcnt)
    setTotal(newcnt + neutralcnt + badcnt)
  }

  const handleNeurtal = () => {
    newcnt = neutralcnt + 1
    setNeutral(neutralcnt + 1)
    setTotal(newcnt + goodcnt + badcnt)
  }

  const handleBad = () => {
    newcnt = badcnt + 1
    setBad(badcnt + 1)
    setTotal(newcnt + neutralcnt + goodcnt)
  }
  return (
    <div>
      <Title title='give feedback' />
      <Button props='good' handleClick={handleGood} />
      <Button props='neutral' handleClick={handleNeurtal} />
      <Button props='bad' handleClick={handleBad} />
      <Statistics goodcnt={goodcnt} neutralcnt={neutralcnt} badcnt={badcnt} totalcnt={totalcnt} />
    </div>
  )
}

export default App