import React from 'react';
import styles from './Task.css'
import {FaTrash} from 'react-icons/fa'

const Task = ({task,onRemove,onSetreminder}) => {


    return (
        <div className='task'>
            <ul>
                <li className={task.reminder? 'active': ''}>
                    <div>
                        <h3>{task.text}</h3>
                        <p>{task.date}</p>
                        <div>
                            <label htmlFor="reminder">Reminder</label>
                            <input type="checkbox" id='reminder' checked={task.reminder}  onChange={(e)=> onSetreminder(task.id,e)} />
                        </div>
                    </div>
                    <FaTrash style={{color: '#fff',cursor: 'pointer'}} onClick={()=> onRemove(task.id)}/>
                </li>
            </ul>

        </div>
    );
};

Task.propTypes =
{

};

export default Task;
