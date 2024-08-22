import './inputs.css'

const CounterInput = ({props, onSelect}) => {

    const selectOptions = (value) => {
        value < 2 ? onSelect(props.min) : onSelect(props.max)
    }


    return (
        <>
        <input
            type="number" 
            min="1" max="999" step="1"
            onChange={(e) => selectOptions(e.target.value)}
            ></input>
        </>
)}

export default CounterInput;