import React from 'react'

function Contact(props) {
  return (
    <div className="mainContainer">
    {props.data.contact.map((h,i)=>{
      return <div key={i} style={{margin:'1em'}}> {h}</div>
    })}
  </div>
  )
}

export default Contact
