const counterStyle = {
    backgroundColor: 'white',
    color: 'black',
    padding: '20px',
    borderRadius: '20px',
    border: 'none',
    'box-shadow': '0 0 4px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer'
}

import './inputs.css'

const CounterInput = () => {
    return (
        <>
        <input style={counterStyle}
            type="number" 
            min="1" max="999" step="1"></input>
        </>
)}

export default CounterInput;