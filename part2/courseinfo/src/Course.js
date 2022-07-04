import Header from './Header.js'
import Content from './Content.js'
import Total from './Total.js'

const Course = (props) => {
  
    return (
      <div>
        <Header course = {props.name}/>
        <Content parts = {props.parts} />
        <Total parts = {props.parts}/>
      </div>
    )
  }

export default Course;