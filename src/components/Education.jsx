import React from 'react'

function Education(props) {
  return (
    <div className="mainContainer">
    {props.data.education.map((h,i)=>{
      return <div key={i} style={{margin:'1em'}}> {h}</div>
    })}
  </div>
  )
}

export default Education
