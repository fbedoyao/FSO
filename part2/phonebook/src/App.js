import { useState } from 'react'

import Filter from './Filter.js'
import PersonForm from './PersonForm.js'
import Persons from './Persons.js'


const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      phone: '994994121' 
    },
    {
      name: 'Fernando',
      phone: '986911850'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [filter, setFilter] = useState('');

  const personsToShow = showAll
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter))

  const hasPerson = (personObject) => {
    console.log(persons)
    for(let i = 0; i < persons.length; i++){
      if(JSON.stringify(persons[i].name) === JSON.stringify(personObject.name)){ //Object equality
        return true;
      }
    }
    return false;
  }

  const addContact = (event) => {
    event.preventDefault();
    console.log('button clicked', event.target);
    const personObject = {name: newName, phone: newPhone}
    if(!hasPerson(personObject)){
      console.log(`${newName} is not in the array`)
      const copy = [...persons]
      const newPersonObject = 
      {
        name: newName,
        phone: newPhone
      }
      setPersons(copy.concat(newPersonObject))
    } else {
      alert(`${newName} is already added in the phonebook`)
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    setShowAll(false)
  }

  console.log(personsToShow)

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter handler = {handleFilterChange} />
      <h2>Add contact</h2>
      <PersonForm handleNameChange = {handleNameChange} handlePhoneChange = {handlePhoneChange} addContact = {addContact}/>
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow}/>
    </div>
  )
}

export default App
