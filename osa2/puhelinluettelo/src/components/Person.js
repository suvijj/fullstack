import React from 'react'

const Person = ({person, pressDelete}) => {
    return (
        <div>
          <li>{person.content}
          <button
            onClick={() => pressDelete(person.id)}
            >delete</button>
          </li>
        </div>

    )
  }

export default Person