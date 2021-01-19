import Button from "./Button";
import * as styles from './AddTask.css'
import {useState} from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [textError,setTextError] = useState(false)
    const [dateError,setDateError] = useState(false);
    const [isDisable,setIsDisable] = useState(false);
    const [reminder, setReminder] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            setTextError(true)
        }else{
            setTextError(false)
        }
        onAdd({text, date, reminder})
        setText('')
        setDate('')
        setReminder(false);
    }
    const validateText = (e)=>{
        setText(e.target.value);
        e.target.value ? setTextError(false) : setTextError(true) ;
        e.target.value ? setIsDisable(false) : setIsDisable(true)

    }
    const validateDate = (e)=> {
        setDate(e.target.value);
        e.target.value ? setDateError(false) : setDateError(true) && setIsDisable(true)
        e.target.value ? setIsDisable(false) : setIsDisable(true)
    }

    return (
        <form className='add_form' onSubmit={onSubmit}>
            <div className="form_control">
                <label htmlFor="task">Task</label>
                <input type="text" id='task' placeholder='Add task' value={text}
                       onChange={(e) => validateText(e)}/>
            </div>
            {textError && <strong style={strongStyle}>This field is required</strong>}


            <div className="form_control">
                <label htmlFor="date">Date</label>
                <input type="text" id='date' placeholder='Add date' value={date}
                       onChange={(e) => validateDate(e)}/>
            </div>
            {dateError && <strong style={strongStyle}>This field is required</strong>}


            <div className="form_control">
                <label htmlFor="reminder" className='reminder'>Reminder</label>
                <input type="checkbox" id='reminder' checked={reminder} placeholder='Add task' value={reminder}
                       onChange={(e) => setReminder(e.target.checked)}/>
            </div>
            <button className='btn btn_add' disabled={isDisable}>Save Task</button>
        </form>
    );
};

AddTask.propTypes = {};
const strongStyle = {
    color: '#E70E02'
}

export default AddTask;

