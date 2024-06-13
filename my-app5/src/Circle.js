import React from 'react'

function Circle({r}) {
  return (
    <div> Area of Circle of radius {r} cm is {3.14*r*r} cm.sq <br></br> Circumference of Circle of radius {r} cm is {2*3.14*r} cm</div>
  )
}

export default Circle