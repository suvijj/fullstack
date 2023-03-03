import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'
import Number from './components/Number'



const App = (props) => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [ searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  
  
  console.log('render', persons.length, 'persons')

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
    setPersons(persons.concat(newContact))
    setNewName('')
    setNewNumber('')
    }

  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }


  

  
  
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          <label>filter shown with:
           <input type="text" onChange={event => {setSearchTerm(event.target.value)}}/>
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
      {persons.filter((val) => {
        if(searchTerm == "") {
          return val
        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map(person =>
           <div>
           <p> {person.name} {person.number}</p>
          </div>
        )} 
    </div>
  )
}

export default App