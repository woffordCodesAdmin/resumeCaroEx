import React from 'react'

function Header(props) {
  return (
    <div className="mainContainer">
      {props.data.hobbies.map((h,i)=>{
        return <div key={i} style={{margin:'1em'}}> {h}</div>
      })}
    </div>
  )
}

export default Header
