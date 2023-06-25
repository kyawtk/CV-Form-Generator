import Preview from './components/Preview'
import './App.scss'
import UserInput from './Components/UserInput'
import { useState, useEffect } from 'react'

function App() {
  const[exps , setExps] = useState([])
  const[edus, setEdus] = useState([])
  const [pinfo, setPinfo] = useState({});

  function handleChange(e) {
    const { name, value, type } = e.target;

    if (type === 'file') {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = function (event) {
        setPinfo((currentInfo) => {
          return { ...currentInfo, [name]: event.target.result };
        });
      };

      reader.readAsDataURL(file);
    } else {
      setPinfo((currentInfo) => {
        return { ...currentInfo, [name]: value };
      });
    }
  }
  useEffect(() => {
    console.log(pinfo);
  }, [pinfo]);
  function getExps(newExps){
    setExps(newExps)
    
  }
  function getEdus(newEdus){
    setEdus(newEdus)
    console.log(newEdus)
  }
return(
  <>
  <UserInput handleChange={handleChange} getEdus={getEdus} getExps={getExps}></UserInput>
  <Preview pinfo={pinfo} edus={edus} exps={exps}></Preview></>
)

}

export default App
