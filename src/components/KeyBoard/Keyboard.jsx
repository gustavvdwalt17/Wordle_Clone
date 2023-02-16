import React,{useContext} from 'react'
import './keyboard.css'
import Key from '../Key/Key';
import { AppContext } from '../../App';
const Keyboard = () => {
    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
    const {attempts,setGameOver,disabledLetter } =useContext(AppContext);
   
    return (
    <div className='keyboard-div'>
<div className='keys-board'>
        {keys1.map((key,index)=>{
        // disable={disabledLetter.includes(key)} 
       return <Key keyVal={key}  key={index} disable={disabledLetter.includes(key)}     /> 
             

        })}
</div>
<div className='keys-board'>
        {keys2.map((key,index)=>{
           
       return <Key keyVal={key} key={index} disable={disabledLetter.includes(key)}        /> 
             

        })}
</div>
  
<div className='keys-board'>
    <Key keyVal={'ENTER'}/>
        {keys3.map((key,index)=>{
           
       return <Key keyVal={key}  key={index} disable={disabledLetter.includes(key)}      /> 
             

        })}
        <Key keyVal={'DELETE'}/>
</div>

    </div>
  )
}

export default Keyboard