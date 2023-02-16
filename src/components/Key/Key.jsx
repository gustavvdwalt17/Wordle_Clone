import React,{useContext} from 'react'
import './keys.css'
import { AppContext } from '../../App'
// import { board } from '../board'
const Key = ({keyVal,disable}) => {

 
    const { board,selectLetter,handleEnter,handleDelete,disabledLetter } =useContext(AppContext);
  const handleClick = (e) =>{
    
    if (keyVal==='ENTER'){
      handleEnter(keyVal)
    }else if (keyVal==='DELETE'){
handleDelete(keyVal)
    }
    selectLetter(keyVal)
  }


  return (
    <div className={`keys ${disable ? 'disabled' : ''}`}  onClick={handleClick}>
  
      <small >
        {keyVal}
        </small>
    </div>
  )
}

export default Key