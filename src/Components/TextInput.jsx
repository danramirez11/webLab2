import './inputs.css'

const TextInput = ({prop}) => {
    return (
        <input type={prop.specific ? 'email' : 'text'} />
    );
}

export default TextInput;