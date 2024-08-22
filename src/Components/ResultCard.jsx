const ResultCard = (result) => {
    console.log(result)
    return (
        <div>
            <h4>The perfect pet for you is a...</h4>
            <h3>{result.result[0].name}</h3>
            <p>{result.result[0].description}</p>
        </div>
    )
}

export default ResultCard;