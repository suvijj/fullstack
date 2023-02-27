import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App'

const Contacts = ({contact}) => {
    return(
      <li>{contact.content}</li>
    )
  }

  export default Contacts