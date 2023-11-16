import React from 'react'

function Gallery(props) {
  return (
    <div className="mainContainer">
    {props.data.gallery.map((h,i)=>{
      return <img key={i} src={h}style={{margin:'1em',width:'23%'}}  />
    })}
  </div>
  )
}

export default Gallery
