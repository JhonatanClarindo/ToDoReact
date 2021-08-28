import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import './taskDetails.css'
import Button from './Button'
const TaskDetails = () => {

    //params retorna o parametros da URL
    const params = useParams();
    const history = useHistory();

    const handleBackButton = () => {
        history.goBack();
    }
    
    return ( 
        <>
        <div className="back-button-container">
            <Button onClick={handleBackButton}>Voltar</Button>
        </div>
        <div className="task-details-container">
        
            <h2>{params.taskTitle}</h2>    
            <p>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Enim quod voluptates, porro provident est tenetur.
            </p>
        </div>
        </>
     );
}
 
export default TaskDetails;