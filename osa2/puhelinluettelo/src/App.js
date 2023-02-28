import {useState} from 'react'
import Person from './components/Person'




const App = (props) => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const contactObject = {
      content: newName,
      id: persons.length
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
          <Person key={person.id} person={person} />
        )}
    </div>
  )

}

export default App