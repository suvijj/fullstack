import {useState} from 'react'
import Person from './components/Person'
import Number from './components/Number'

//alert ei toimi?


const App = (props) => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
    
  const addPerson = (event) => {
    event.preventDefault()
    const newContact = {
      name: newName,
      number: newNumber
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

  
  
  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map(person =>
           <div>
           <p> {person.name} {person.number}</p>
          </div>
        )} 
    </div>
  )

}

export default App