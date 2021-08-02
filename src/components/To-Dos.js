import React from 'react';
import ToDo from './To-Do';

export default function ToDos({data,deleteData}){
    return(
        <div className="to-dos">
           <ul>
            {data.map((todo)=>(
                <ToDo todo={todo} key={Math.random()*1} deleteData={deleteData}/>
            ))}
           </ul>
       </div>
    );
}