import Preview from './components/Preview'
import './App.scss'
import UserInput from './Components/UserInput'
import { useState } from 'react'

function App() {
  const[exps , setExps] = useState([])
  const[edus, setEdus] = useState([])
  function getExps(newExps){
    setExps(newExps)
    
  }
  function getEdus(newEdus){
    setEdus(newEdus)
    console.log(newEdus)
  }
return(
  <>
  <UserInput getEdus={getEdus} getExps={getExps}></UserInput>
  <Preview edus={edus} exps={exps}></Preview></>
)

}

export default App
