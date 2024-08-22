import './inputs.css'
import { useState } from 'react';

const CheckInput = ({props, onSelect}) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        console.log('clicked')
        setIsSelected(!isSelected);
        onSelect(props.points);
    }

    return (
        <button className={isSelected? 'selected' : ''} onClick={handleClick}>
            {props.answer}
        </button>
    )
}

export default CheckInput;