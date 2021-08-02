import React,{useState,useEffect} from 'react';
import './App.css';
import Title from './components/Title';
import InputForm from './components/Input-Form';
import ToDos from './components/To-Dos';

function App() {

  let [data,setData] = useState([]);

  useEffect(()=>{
    let rawData = JSON.parse(localStorage.getItem("to-do"));
    if(rawData){
      setData([...rawData]);
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem("to-do",JSON.stringify(data));
  },[data]);

  function getData(userdata) {
    setData([...data,userdata])
  }

  function deleteData(e){
    let arr = data;
    arr.splice(arr.indexOf(e.target.previousElementSibling.innerText),1);
    setData([...arr])
    localStorage.setItem("to-do",JSON.stringify(data));
  }

  return (
    <div className="App">
      <Title/>
      <InputForm getData={getData}/>
      <ToDos data={data} deleteData={deleteData}/>
    </div>
  );
}

export default App;
