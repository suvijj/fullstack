import React from 'react'

const Person = ({person, pressDelete}) => {

    const label = person.deletoi
    
    return (
        <div>
          <li>{person.content}
          <button onClick={pressDelete}>{label}</button>
          </li>
        </div>

    )
  }

export default Person