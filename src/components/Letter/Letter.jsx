import React,{useContext,useEffect} from 'react'
import { board } from '../board'
import { AppContext } from '../../App'
import './Letter.css'
const Letter = ({letterPos,attempt}) => {
   const {attempts,setGameOver,disabledLetter,setDisabledLetter,word } =useContext(AppContext);
 
   const letter = board[attempt][letterPos] //board[0][0] board[1][0]
   let green =letter === word[letterPos]
 
  let almost=letter!=='' && letter !==green && word.includes(letter)
    let disabled = letter!=="" && !green && !almost
  let wrong = !green && !almost && letter!=='' 

  const letterState =
    attempts.rowAttempts > attempt &&
      
    (`${green ? 'green' : almost ? 'almost' : 'wrong'}`);

useEffect(()=>{
  if (disabled){
    setDisabledLetter((prev)=>[...prev,letter])
  }
},[attempts.rowAttempts])


  

  return (
    <div className={`letter-div ${letterState}`}>
        {letter}
        </div>
  )
}

export default Letter