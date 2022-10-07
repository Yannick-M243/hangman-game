import React, { Component } from 'react';
import Result from './Result.js'
import Help from './Help.js'
import ImageState from './ImageState.js';

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-"];

function Hangman(props) {
    const word = props.word;
    const gameState = props.gameState;
    const result = props.result;
    const usedLetters = props.usedLetters;
    const restart = props.reset;
    const chosenWord = props.chosenWord;
    const updateUsedLetters = props.updateUsedLetters;
    const livesLeft = (10 - gameState);

    console.log(usedLetters);
    //creating buttons for each letter of the alphabet
    let buttons = alphabet.map((letter, key) => {
        //check if the button clicked has been clicked before, if yes then disable it
        if (usedLetters.includes(letter.toLowerCase())) {
            return <div key={key}>
                <button value={letter} className="btn btn-secondary">
                    {letter}
                </button>
            </div>
            //disabling letters when the results are showing
        } else if (result === "winning" || result === "loosing") {
            return <div key={key}>
                <button value={letter} className="btn btn-outline-secondary">
                    {letter}
                </button>
            </div>
            //If the button haven't been clicked unable it
        } else {
            return <div key={key}>
                <button onClick={updateUsedLetters} value={letter} className="letter-btn btn btn-outline-secondary">
                    {letter}
                </button>
            </div>
        }
    })

    return (
        <div>
            <div className='d-flex justify-content-between'>
                <div>
                    <h1 className='m-3'>Hangman Game</h1>
                </div>
                <div>
                    <button className='btn btn-info m-2'>Help?</button>
                    <button className='btn btn-outline-warning m-2' onClick={restart}>Reset</button>
                </div>
            </div>
            <h5 className='m-3'>Lives lefts : {livesLeft}</h5>
            <ImageState gameState={gameState} />
            <h1 className='m-3 word'>{word}</h1>
            <div className='keyboard d-flex justify-content-center flex-wrap mx-auto'>
                {buttons}
            </div>
            <Result result={result} correctWord={chosenWord} />
        </div>
    );
}

export default Hangman;