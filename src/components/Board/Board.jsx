import React from 'react'
import { Letter } from '..'
import './Board.css'
const Board = () => {
  return (
    <div className='div-wrapper' >

<div className='sur-div'  >
    <Letter letterPos={0} attempt={0}/>
    <Letter letterPos={1} attempt={0}/>
    <Letter letterPos={2} attempt={0}/>
    <Letter letterPos={3} attempt={0}/>
    <Letter letterPos={4} attempt={0}/>
</div>

<div className='sur-div'>
    <Letter letterPos={0} attempt={1}/>
    <Letter letterPos={1} attempt={1}/>
    <Letter letterPos={2} attempt={1}/>
    <Letter letterPos={3} attempt={1}/>
    <Letter letterPos={4} attempt={1}/>
</div>

<div className='sur-div'>
    <Letter letterPos={0} attempt={2}/>
    <Letter letterPos={1} attempt={2}/>
    <Letter letterPos={2} attempt={2}/>
    <Letter letterPos={3} attempt={2}/>
    <Letter letterPos={4} attempt={2}/>
</div>

<div className='sur-div'>
    <Letter letterPos={0} attempt={3}/>
    <Letter letterPos={1} attempt={3}/>
    <Letter letterPos={2} attempt={3}/>
    <Letter letterPos={3} attempt={3}/>
    <Letter letterPos={4} attempt={3}/>
</div>


<div className='sur-div'>
    <Letter letterPos={0} attempt={4}/>
    <Letter letterPos={1} attempt={4}/>
    <Letter letterPos={2} attempt={4}/>
    <Letter letterPos={3} attempt={4}/>
    <Letter letterPos={4} attempt={4}/>
</div>
<div className='sur-div'>
    <Letter letterPos={0} attempt={5}/>
    <Letter letterPos={1} attempt={5}/>
    <Letter letterPos={2} attempt={5}/>
    <Letter letterPos={3} attempt={5}/>
    <Letter letterPos={4} attempt={5}/>
</div>

    </div>
  )
}

export default Board