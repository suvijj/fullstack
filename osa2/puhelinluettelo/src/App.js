import { useState, useEffect } from 'react'
import axios from 'axios'
import personsService from './services/persons'
import Person from './components/Person'
import Number from './components/Number'

//Jääty tehtävään 2.12-2.15


const App = (props) => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [ searchTerm, setSearchTerm] = useState('')



  useEffect(() => {
    personsService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const newContact = {
      name: newName,
      number: newNumber,
      id: persons.length +1,
    }

    let matchPerson = null;
    
    for(const person of persons) {
      if(person.name === newName) {
        matchPerson = person;
        break;
      }
    }
    if(matchPerson !==null) {
      alert("This contact is already added to phonebook");
    }
     else {
      personsService
      .create(newContact)
        .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
    }
  }
  
  
  const pressDeleteOf = id => {
    const person = persons.find(n => n.id === id)
    const changedPerson = { ...person, deletoi: !person.deletoi }
  
    personsService
      .update(id, changedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
      })
      .catch(error => {
        alert(
          `the note '${person.name}' was already deleted from server`
        )
        setPersons(person.filter(n => n.id !== id))
      })
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const personsToShow = searchTerm
  ? persons
  : persons.filter(val)
    if(searchTerm === "") {
      return val
    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val
    }
  }
  

  
  
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          <label>filter shown with:
           <input type="text" onChange={() => {setSearchTerm(!searchTerm)}}/>
          </label>
        </div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          <label>name:
           <input type="text" value={newName} onChange={handlePersonChange}/>
          </label>
        </div>
          <label> number:
            <input type="number" value={newNumber} onChange={handleNumberChange}/>
          </label>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {personsToShow.map(person =>
        <Person
        key={person.id}
        person={person.name}
        number={person.number}
        pressDelete={() => pressDeleteOf(person.id)} />
      )}
  </div>
  
)

export default App