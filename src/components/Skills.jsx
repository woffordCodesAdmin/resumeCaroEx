import React from 'react'

function Skills(props) {
  return (
    <div className="mainContainer">
    {props.data.workXp.map((h,i)=>{
      return <div key={i} style={{margin:'1em'}}> {h}</div>
    })}
  </div>
  )
}

export default Skills
