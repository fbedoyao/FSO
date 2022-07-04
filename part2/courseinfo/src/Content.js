import Part from './Part.js'

const Content = (props) => {

    const { parts } = props;


    return (
        <div>
            {parts.map(part => 
                <Part part = {part.name} exercise = {part.exercises} key={part.id}/>
            )}           
        </div>
    )
}

export default Content