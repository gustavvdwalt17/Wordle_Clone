import React from 'react'
import './GamerOver.css'
const GameOver = () => {
  const handleClick = () =>{
             setTimeout(()=>
            window.location.reload(),500
            ) 
  }
  return (
    <div className='gameover'>
      <h1 style={{color:'white'}}>Game Over</h1>
      <button onClick={handleClick}>Play Again</button>
    </div>
  )
}

export default GameOver