import './inputs.css'

const SliderInput = ({props, onSelect}) => {

    const handleChange = (value) => {
        value < 3 ? onSelect(props.points.min) : onSelect(props.points.max)
    }

    const [min, max] = props.ends
    return (
        <>
        <label htmlFor="">{min}</label>
        <input
            type="range"
            min="1" max="5" step="1"
            onChange={(e) => {handleChange(e.target.value)}}></input>
            <label htmlFor="">{max}</label>
        </>
    );
}

export default SliderInput;