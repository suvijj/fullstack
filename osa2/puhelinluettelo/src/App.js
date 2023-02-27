import { useState } from 'react'
import Contacts from './components/Contacts'
import Number from './components/Contacts'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState(
    'new contact'
    )

  const handleAddPerson = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      content: setPersons,
      id: persons.length + 1,
    }

    setNewName(newName.concat(personObject))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <form onSubmit={addPerson}>
          <input
          value={setNewName}
          onChange={handleAddPerson}/>
          <button type="submit">add</button>
          </form>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {Contacts.map(contact => 
          <Contacts key={contact.id} contact={contact} />
        )}
      </ul>
    </div>
  )

}

export default App