import './inputs.css'

const CheckInput = ({props, onSelect}) => {
    return (
        <button onClick={() => {onSelect(props.points)}}>
            {props.answer}
        </button>
    )
}

export default CheckInput;