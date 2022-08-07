import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Comp from './Comp';
import {useSelector, useDispatch} from "react-redux";
import {incNumber,decNumber} from "./actions/index"


function App() {
  const myState=useSelector((state)=> state.changethenum)
  const dispatch = useDispatch();
  const [nam, setName] = useState('');
  const handleInput = event => {
    setName(event.target.value);
    
  };
  return (
    <div className="App">
      <h1>To Do using Redux🚀</h1>
      <input type="text" onChange={handleInput}></input>
      <button onClick={()=> dispatch(incNumber(nam))}>+</button>
      {
        myState.map(x=>{
          return (<div>{x}</div>)

        })
      }
    </div>
  );
}

export default App;
