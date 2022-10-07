//This is a component that displays the result
function Result(props) {
    if (props.result === "winning") {
        return <h2 className="result">You've Won. The word is {props.correctWord}</h2>;
    } else if (props.result === "loosing") {
        return <h2 className="result">You've lost. The correct word was {props.correctWord}</h2>;
    }
    return "";
}
export default Result;