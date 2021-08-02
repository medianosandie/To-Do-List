import React,{useState} from 'react';

export default function InputForm({getData}){

    let [userInputData,setUserInputData] = useState('');

    function getUserInputData(e){
        setUserInputData(e.target.value);
    }

    function submitUserInputData() {
        getData(userInputData);
        setUserInputData('');
    }
    return(
        <div className="input-form">
           <input value={userInputData} type="text" id="input-text" onChange={getUserInputData}/>
           <button id="tambah" onClick={submitUserInputData}>Add</button>
        </div>
    );
}