import {useState} from 'react'
import Person from './components/Person'

//jääty 2.7


const App = (props) => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if(persons.find((person) => newName === person.name)) {
      alert("${newName} is already added to the phonebook");
    } 
    const contactObject = {
      content: newName,
      name: persons.name
    }
   
    setPersons(persons.concat(contactObject))
    setNewName('') 
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
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
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
          <Person key={person.name} person={person} />
        )}
    </div>
  )

}

export default App