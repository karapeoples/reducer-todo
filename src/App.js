import React, {useState} from 'react';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import './components/Todo.css';

const  tasks =[
  {
    task: 'Organize Garage',
    id: 1,
    completed: false
  },
  {
    task: 'Clean Living Room',
    id: 2,
    completed: false
  },
  {
    task: 'Buy Bleach',
    id: 3,
    completed: false
  },
  {
    task: 'Vacuum Cabinets',
    id: 4,
    completed: false
  },
  {
    task: 'Pick/Price Paint',
    id: 5,
    completed: false
  },
  {
    task: 'Make Appointments',
    id: 6,
    completed: false
  },
];




const App = () => {
  const [toDoList, setToDoList]=useState(tasks)
  /* state = {
    toDoList: tasks,
  }; */

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  //state changes below:

  

  const addNewTask = newTaskName => {
    setToDoList([
        ...toDoList,
        {
          task: newTaskName,
          id: Date.now(),
          completed: false,
          
        },
      ],
    )
  };  
  


  const toggleCompleted = id => {
      setToDoList( toDoList.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    )
  };
    


  const clearCompleted = () => {
      setToDoList( toDoList.filter(item => {
        return !item.completed;
      }),
    )
  };
    
  

  
  
    return (
      <div className='appDiv'>
        <div className='paper'>
          <div className='pattern'>
            <div className='notes'>
              <h1>Errand Tracker</h1>
              <ToDoList errands={toDoList} toggleCompleted={toggleCompleted} />
            </div>
          </div>
        </div>
        <ToDoForm addNewTask={addNewTask} clearCompleted={clearCompleted} />
      </div>
    );
};

export default App;
