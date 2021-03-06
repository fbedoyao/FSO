import Header from './Header.js'
import Content from './Content.js'
import Total from './Total.js'
import Counter from './Counter.js'

const App = () => {

  const course = {
    name: 'Half Stack application developnent',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using propts to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }

    ]
  };
  
  return (
    <div>
      <Header course = {course.name}/>
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
      <Counter/>
    </div>
  )
}

export default App