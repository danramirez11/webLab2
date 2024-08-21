const checkStyle = {
    backgroundColor: 'white',
    color: 'black',
    padding: '20px',
    borderRadius: '20px',
    border: 'none',
    'box-shadow': '0 0 4px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer'
}

const CheckInput = (props) => {
    return (
        <button style={checkStyle}>
            Hola hola
        </button>
    )
}

export default CheckInput;