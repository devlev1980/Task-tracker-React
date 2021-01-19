import './App.css';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useEffect, useState} from 'react'
import AddTask from "./components/AddTask";

function App() {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([]);
    const apiUrl = 'http://localhost:5000/tasks'

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks();
            setTasks(tasksFromServer)

        }
        getTasks();
    }, []);

    // Fetch Tasks from db.json
    const fetchTasks = async () => {
        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log('Data from db.json', data);
        return data
    }
    // Fetch single Task from db.json
    const fetchTask = async (id) => {
        const res = await fetch(`${apiUrl}/${id}`);
        // console.log('Data from db.json', data);
        const data = res.json()
        return data
    }

    // Delete task
    const onDeleteTask = async id => {
        // console.log('delete', id);
        await fetch(`${apiUrl}/${id}`, {
            method: 'DELETE'
        })
        setTasks(tasks.filter((task) => task.id !== id));

    };


    // Set reminder
     const onSetReminder = async (id) => {
        const taskToToggle = await fetchTask(id);
        console.log('aaa',taskToToggle)
        const updatedTask = {...taskToToggle,reminder: !taskToToggle.reminder};

        const res = await fetch(`${apiUrl}/${id}`,{
            method: 'PUT',
            headers: {
               'Content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        });

        const data = await res.json();

        // console.log('Set reminder', id)
        // const reminder = e.target.checked;
        // console.log(reminder)
        setTasks(
            tasks.map((task) =>
                task.id === id ? {...task, reminder: !taskToToggle.reminder} : task
            )
        )
    }
    // setTasks(tasks.map((task) => (
    //     task.id === id ? {...task, reminder: !task.reminder} : task
    // )))

    // Add task
    const addTask = async (task) => {
        // console.log('Add task', task)
        // const id = Math.floor(Math.random() * 10000) + 1;
        // const newTask = {id, ...task}
        // setTasks([...tasks, newTask]);


        const res = await fetch(`${apiUrl}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(task)
        });

        const data = await res.json();
        setTasks([...tasks, data])


    }

    return (
        <div className="container">
            <Header showAddTask={showAddTask} showTask={() => setShowAddTask(!showAddTask)}/>
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
