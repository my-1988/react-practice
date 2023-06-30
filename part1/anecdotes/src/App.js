import { useState } from 'react'

const Title = ({ title }) => (
  <h1>{title}</h1>
)

const Display = ({ display, vote }) => (
  <div>
    <Title title='Anecdote of the day' />
    <p>{display}</p>
    <p>has {vote} votes</p>
  </div>
)

const MostVoted = ({ maxAnecdote, maxVote }) => {

  return (
    < div >
      <Title title='Anecdote with most votes' />
      <p>{maxAnecdote}</p>
      <p>has {maxVote} vote</p>
    </div >
  )
}

const Button = ({ handelClicked, text }) => (
  <button onClick={handelClicked}>{text}</button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const points = new Array(anecdotes.length).fill(0)
  const [vote, setVote] = useState(points)
  const [selected, setSelected] = useState(0)
  const [mostVote, setMostVote] = useState(0)
  let num = 0
  const handelClickNext = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
  }
  const handelClickVote = () => {
    const newVote = [...vote]
    newVote[selected] += 1
    let max = newVote[0]
    for (let temp = 1; temp < anecdotes.length; temp++) {
      if (newVote[temp] >= max) {
        num = temp
        max = newVote[temp]
      }
    }
    setVote(newVote)
    setMostVote(num)
    // console.log('cnt' + max)
    //console.log('num' + num)
    // setSelected(maxVote)

  }

  return (
    <div>
      <Display display={anecdotes[selected]} vote={vote[selected]} />
      <Button handelClicked={handelClickVote} text='vote' />
      <Button handelClicked={handelClickNext} text='next anecdote' />
      <MostVoted maxAnecdote={anecdotes[mostVote]} maxVote={vote[mostVote]} />
    </div>
  )
}

export default App