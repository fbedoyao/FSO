import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './Filter.js'
import PersonForm from './PersonForm.js'
import Persons from './Persons.js'

import personService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([]) 
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
    const personObject = {name: newName, number: newPhone}
    if(!hasPerson(personObject)){
      const copy = [...persons]
      const newPersonObject = 
      {
        name: newName,
        number: newPhone
      }
      //setPersons(copy.concat(newPersonObject))
      personService
        .create(newPersonObject)
        .then(response => {
          setPersons(copy.concat(response.data))
        })
    } else {
      if(window.confirm(`${personObject.name} is already in the phonebook. Do you want to replace the old number with the new one?`)){
        const contactWithOldNumber = persons.find(person => person.name === personObject.name)
        const contactWithNewNumber = {...contactWithOldNumber, number: personObject.number}
        personService
          .update(contactWithOldNumber.id, contactWithNewNumber)
          .then(response => {
            setPersons(persons.map(person => person.id !== contactWithOldNumber.id ? person : response.data))
          })
      }
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

  const removeHandler = (id, name) => {
    if(window.confirm(`Are you sure you want to delete ${name}?`)){
      personService
      .remove(id)
      .then(() => {
        personService
          .getAll()
          .then(response => {
            setPersons(response.data)
          })
      })
    }
  }

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })

  }, [])


  return (
    <div>
      <h1>Phonebook</h1>
      <Filter handler = {handleFilterChange} />
      <h2>Add contact</h2>
      <PersonForm handleNameChange = {handleNameChange} handlePhoneChange = {handlePhoneChange} addContact = {addContact}/>
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} removeHandler={removeHandler}/>
    </div>
  )
}

export default App
