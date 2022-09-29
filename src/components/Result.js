//This is a component that displays the result
function Result(props) {
    if (props.result === "winning") {
        return <h2 className="result">You've Won.</h2>;
    } else if (props.result === "loosing") {
        return <h2 className="result">You've lost.</h2>;
    }
    return "";
}
export default Result;