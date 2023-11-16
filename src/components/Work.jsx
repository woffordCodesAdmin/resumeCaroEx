import React from 'react'

function Work(props) {
  return (
    <div className="mainContainer">
    {props.data.jobs.map((h,i)=>{
      return <div key={i} style={{margin:'1em'}}> {h}</div>
    })}
  </div>
  )
}

export default Work
