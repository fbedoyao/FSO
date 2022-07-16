const Persons = (props) => {
    return (
        <div>
            <ul>
                {props.personsToShow.map( person =>
                <li key = {person.id}> {person.name} {person.number} <button onClick = {() => props.removeHandler(person.id, person.name)}>Remove</button></li>  
                )}
            </ul>
        </div>
    )
}

export default Persons