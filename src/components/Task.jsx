import React from 'react';
import {CgClose, CgInfo} from 'react-icons/cg'
import {useHistory} from 'react-router-dom'

import "./Task.css"

const Task = ({ task, handleTaskClick, handleTaskDelete }) => {

//o bloco de código abaixo irá empurrar para a página de detalhes da tarefa, usando o hook da useHistory

const history = useHistory();

const handleTaskClickDetails =() => {
    history.push(`/${task.title}`)
}
    
    
    return (<div className="task-container" 
    style={task.completed ? {borderLeft: '6px solid rgb(129, 255, 3)'} : {}}>

        <div className="task-title" onClick={() => handleTaskClick(task.id)}>
            {task.title}
        </div>

        <div className="buttons-container">
            <button className="remove-task-button" onClick={() => handleTaskDelete(task.id)}>
                <CgClose />
            </button>
            <button className="see-details-task-button" onClick={handleTaskClickDetails}>
                <CgInfo />
            </button>
        </div>

    </div>
    );
    //  return <div className="task-container">{task.title}</div>
};
 
export default Task;