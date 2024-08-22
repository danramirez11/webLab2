import './inputs.css'

const SliderInput = ({props}) => {
    const [min, max] = props.ends
    return (
        <>
        <label htmlFor="">{min}</label>
        <input
            type="range"
            min="1" max="100" step="1"></input>
            <label htmlFor="">{max}</label>
        </>
    );
}

export default SliderInput;