const ResultCard = (result) => {
    return (
        <div>
            <h4>The perfect pet for you is a...</h4>
            <h3>{result.name}</h3>
            <p>{result.description}</p>
        </div>
    )
}

export default ResultCard;