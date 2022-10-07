//This is the help component that renders the help container when the user clicks on help
function Help(props) {
    let helpState = props.helpState;

    if (helpState) {
        return (
            <div className="help-container alert alert-info alert-dismissible" role="alert">
                <button className='btn btn-danger m-2' onClick={props.hide} >X</button>
                <h3>Need Help?</h3>
                <p>
                    Hangman a simple guessing game, the pupose of the game is to figure out what is the hidden word.
                    When you start the game a random word is selected from the dictionary and hidden from you.
                    You need to select the letters from the onscreen keyboard one by one to try to find the hidden word,
                    if the word contain the letter you have selected, it will appear on the screen, if not you will lose one life.
                    If you reach 0 lives left and you still haven't found the hidden word, You've lost.
                </p>

            </div>
        );
    } else {
        return '';
    }

}
export default Help;