import state1 from '../images/state1.GIF'
import state2 from '../images/state2.GIF'
import state3 from '../images/state3.GIF'
import state4 from '../images/state4.GIF'
import state5 from '../images/state5.GIF'
import state6 from '../images/state6.GIF'
import state7 from '../images/state7.GIF'
import state8 from '../images/state8.GIF'
import state9 from '../images/state9.GIF'
import state10 from '../images/state10.gif'
import state11 from '../images/state11.GIF'

//This function is going to display the right picture according to the state of the game given as props
function ImageState(props) {
    
    let currentImage = null;
    const gameState = props.gameState;
    
    switch (gameState) {
        case 0:
            currentImage = state1;
            break;
        case 1:
            currentImage = state2;
            break;
        case 2:
            currentImage = state3;
            break;
        case 3:
            currentImage = state4;
            break;
        case 4:
            currentImage = state5;
            break;
        case 5:
            currentImage = state6;
            break;
        case 6:
            currentImage = state7;
            break;
        case 7:
            currentImage = state8;
            break;
        case 8:
            currentImage = state9;
            break;
        case 9:
            currentImage = state10;
            break;
        case 10:
            currentImage = state11;
            break;
        default:
            currentImage = null;
            break;
    }
    return (
        <div className='img-container'>
            <img src={currentImage} alt="hangman pc" />
        </div>
    );
}
export default ImageState;