import React from 'react';

export default function ToDo({todo,deleteData}){
    return(
        <li>
            <div className="val">{todo}</div>
            <button className="done" onClick={deleteData}>done</button>
        </li>       
    );
}