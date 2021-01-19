import React from 'react';
import Task from "./Task";
import styles from './Tasks.css'
const Tasks = ({tasks,onRemove,onSetReminder}) => {
    return (
        <div className='tasks'>
            {tasks.map((task,index)=> (
                <Task task={task} key={index} onRemove={onRemove} onSetreminder={onSetReminder} />
            ))}
        </div>
    );
};


export default Tasks;
