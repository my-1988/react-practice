const Header = ({ course }) => (
 <h1> { course }</h1>
);

const Part = ({ name, exercises}) => (
  <p> { name } {exercises} </p>
);

const Content = ({ part }) => (
  <div>
    <Part name={part[0].name} exercises={part[0].exercises} />
    <Part name={part[1].name} exercises={part[1].exercises} />
    <Part name={part[2].name} exercises={part[2].exercises} />
  </div>
)

const Total = ({ Number }) => (
  <p> Number of exercises {Number[0].exercises + Number[1].exercises + Number[2].exercises }</p>
)

const App = () => {
  const course = {
    name: 'Half Stack application development',
    part: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const {name,  part} = course

  return (
    <div>
      <Header course={name} />
      <Content part={part} />
      <Total Number={part} />
    </div>
  )
}

export default App