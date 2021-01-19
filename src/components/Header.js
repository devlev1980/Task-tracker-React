import React from 'react';
import PropTypes from 'prop-types';
import Button from "./Button";
import style from './header.css'
import AddTask from "./AddTask";
const Header = ({showTask,showAddTask}) => {
    return (
        <div className='header'>
            <div className='header_wrapper'> <h1>Task tracker</h1>
                <Button color={'white'} text={showAddTask ? 'Close': 'Add'} background={showAddTask ? '#E70E02' : '#4CB944'} showTask={showTask}/>
            </div>
        </div>
    );
};

Header.propTypes = {

};

export default Header;
