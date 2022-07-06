const PersonForm = (props) => {
    return (
        <div>
            <form onSubmit={props.addContact}>
            <div>
            name: <input onChange = {props.handleNameChange}/>
            </div>
            <div>
            phone: <input onChange = {props.handlePhoneChange}/>
            </div>
            <div>
            <button type="submit">add</button>
            </div>
            </form>
        </div>
    )
}

export default PersonForm