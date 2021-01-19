import style from './button.css'

const Button = ({color,text,background,showTask}) => {
    return (
        <div>
            <button className={'btn btn_add'} style={{color: color,background: background}} onClick={showTask}>{text}</button>
        </div>
    );
};



export default Button;
