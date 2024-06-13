import React from 'react'

function Circle({r}) {
    const pi = Math.PI;
  return (
    
    <div> Area of Circle of radius {r} cm is {pi*r*r} cm.sq <br></br> Circumference of Circle of radius {r} cm is {2*pi*r} cm</div>
  )
}

export default Circle