import React, { useState } from 'react'
import {v4 as uuiv4} from 'uuid'
import {BrowserRouter as Router, Route} from 'react-router-dom'
// import axios from 'axios'

import Header from './components/Header'
import './components/Tasks'
import './App.css' 
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import TaskDetails from './components/taskDetails'

//iniciando criando a funcao... variavel task e será usado o setTask para renderizar 
const App = () => {
  
  const [tasks, setTask] = useState ([
 
    {
      id: '1',
      title: 'estudar Node',
      completed: false,
    }, 
    {
      id: '2',
      title: 'ler documentação',
      completed: false,

    },

  ]);


  /*o bloco abaixo irá fazer um loop em cada função. entao ele pega o ID da task que esta recebendo e verifica se é igual
  sendo verdadiro, irá pular para o completed e alterar par ao inverso dela*/
  const handleTaskClick = (taskId) => { 
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return {...task, completed: !task.completed}
      
      return task;
    })
    setTask(newTasks)

  }
    /*bloco para a adicao de um tarefa */
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuiv4(),
        completed: false,
      },
    ];
    setTask(newTasks);
  }

/* bloco abaixo usado para remover uma tarefa. => btn X */
  const handleTaskDelete = ( taskId ) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)

    setTask(newTasks)

  }


 return (
   /* o Router abaixo é usado para identificar a rota para cada component já que o react nao usa paginas como no HTML
   entao, passamos a rota para ele e assim ele segue*/
  <Router>
      <div className = "container">
      
          <Header />
          <Route path="/" exact render={() => (

            <>
            {/* barra de input e btn */}
            <AddTask handleTaskAddition={handleTaskAddition} />
            
            {/* { o bloco abaixo irá renderizar as barras de tarefas criadas que sao as tasks. O handlTaskDelete será o 
            btn de deletar, o handleTaskClick será usado para verificarçao de tarefa concluida } */}
            <Tasks
            tasks={tasks}
            handleTaskClick={handleTaskClick}
            handleTaskDelete={handleTaskDelete} /> 
            

            </>
            /*no bloco abaixo estamos passando os parametro para a page do details. Note que podemos que o caminho deste 
            diretorio será o title da task. E o componente esta sendo chamado logo após*/
          )} />
          
              <Route path="/:taskTitle" exact component={TaskDetails} />
         </div>
         </Router> 
 );   
}

export default App;