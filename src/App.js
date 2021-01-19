import './App.css';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react'
import AddTask from "./components/AddTask";

function App() {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Learn JS',
            date: '19.02.2021',
            reminder: true
        },
        {
            id: 2,
            text: 'Learn React',
            date: '18.02.2021',
            reminder: false
        },
        {
            id: 3,
            text: 'Learn Angular',
            date: '18.02.2021',
            reminder: false
        }
    ]);
    // Delete task
    const onDeleteTask = id => {
        console.log('delete', id);
        setTasks(tasks.filter((task) => task.id !== id))
    };
    // Set reminder
    const onSetReminder = (id, e) => {
        console.log('Set reminder', id)
        const reminder = e.target.checked;
        console.log(reminder)
        setTasks(tasks.map((task) => (
            task.id === id ? {...task, reminder: !task.reminder} : task
        )))


    }
    // Add task
    const addTask = (task) => {
        console.log('Add task', task)
        const id = Math.floor(Math.random() * 10000) + 1;
        const newTask = {id, ...task}
        setTasks([...tasks, newTask])
    }

    return (
        <div className="container">
            <Header showAddTask={showAddTask} showTask={()=> setShowAddTask(!showAddTask)} />
            {showAddTask && <AddTask onAdd={addTask}/>}
            {
                tasks.length > 0 ?
                    <Tasks tasks={tasks} onRemove={onDeleteTask} onSetReminder={onSetReminder}/>
                    : <p>No Tasks to to show</p>
            }
        </div>
    );
}

export default App;
