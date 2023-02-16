import './index.css'
import Board from "./components/Board/Board";
import { Keyboard } from "./components";
import {GameOver} from './components';
import React,{createContext,useEffect,useState} from 'react';
import { board } from './components/board';
import words from  './random.txt'
export const AppContext = createContext();
function App() {

const [attempts,setAttempts]=useState({colAttempts:0,rowAttempts:0})
const [theboard,setBoard]=useState(board)
const [gameOver,setGameOver] = useState(false)
const [disabledLetter,setDisabledLetter] = useState([])
const [word,setWord]=useState("")


const generateWords = async () => {

let randomWords
let randomWord
await fetch(words).then((response) =>response.text())
 .then((result) => { 
 const wordArray = result.split("\r\n")
 randomWords = wordArray[Math.floor(Math.random()*wordArray.length)]
randomWord=randomWords.toUpperCase()

 })

return {randomWord}
}
useEffect(()=>{
generateWords().then((words)=>{
setWord(words.randomWord)

})
},[])


const handleDelete=(key)=>{
 
 const newBoard={...theboard}
 newBoard[attempts.rowAttempts][attempts.colAttempts-1]=""
setAttempts({...attempts,colAttempts:attempts.colAttempts-1}) 

setBoard(newBoard)
}

const handleEnter=()=>{
 
  if (attempts.colAttempts !==5) return

  let currWord=""
  for (let i=0; i<5;i++){
    currWord = currWord + board[attempts.rowAttempts][i]
  };
  if (currWord===word){
    setAttempts({...attempts,colAttempts:0,rowAttempts:attempts.rowAttempts+1}) 
    setGameOver(true)
  }else{
 return setAttempts({...attempts,colAttempts:0,rowAttempts:attempts.rowAttempts+1}) 
  }
}
const selectLetter=(key)=>{
  if (key==='ENTER' || key==='DELETE') return
  if (attempts.colAttempts >4 )return
 setAttempts({...attempts,colAttempts:attempts.colAttempts+1}) 
const newBoard={...theboard}
newBoard[attempts.rowAttempts][attempts.colAttempts]=key
setBoard(newBoard)

  }


  return (
    <div className="App">
 
      <h1 style={{color:'white',textAlign:'center'}}>Wordle</h1>
{!gameOver ? (
<div className='app'>
  <AppContext.Provider value={{
  board,
  selectLetter,
  handleEnter,
  word,
  attempts,
  setGameOver,handleDelete,disabledLetter,setDisabledLetter
  
}}  >

<Board/>
<Keyboard/>
</AppContext.Provider>
</div>
):(
  <div>

 <GameOver/>
  </div>
)}

  
  </div>  );

    
}

export default App;
