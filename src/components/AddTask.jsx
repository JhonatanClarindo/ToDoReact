import React, {useState} from 'react';

import './AddTask.css'
import Button from './Button';

//funcao que irá pegar o value digitado no input
const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('');

  /* o bloco de codigo abaixo pega o valor digitado no input atraves do value */  
    const handleInputData = (e) => {
        setInputData(e.target.value)

    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        setInputData('')
    }
    return (
        <div className="add-task-container">
            <input onChange={handleInputData} 
            value={inputData}
            className="add-task-input" 
            type="text"/>
           
           <div className="add-task-container-button">
            <Button onClick={handleAddTaskClick}>Adicionar</Button>
           </div>
        </div> 
     );
}
 
export default AddTask;
