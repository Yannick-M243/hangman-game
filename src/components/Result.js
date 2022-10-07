//This is a component that displays the result
function Result(props) {
    if (props.result === "winning") {
        return (
            <div className="alert alert-success w-50 py-2 my-3" role="alert">
                You've Won. The word is {props.correctWord}
            </div>
        ); 
    } else if (props.result === "loosing") {
        return (
            <div className="alert alert-danger w-50 py-2 my-3 text-center " role="alert">
                You've lost. The correct word was {props.correctWord}
            </div>
        );
    }
    return "";
}
export default Result;