import React, { Component } from 'react';
import dictionary from '../assets/dictionary.txt'
import Hangman from './Hangman.js';

//initializing the array variable that will hold the dictionary words
let words = [];

class Words extends Component {
    //constructor
    constructor(props) {
        super(props);
        this.updateUsedLetters = this.updateUsedLetters.bind(this);

        //initializing states
        this.state = {
            result: "",    
            chosenWord: null,  
            word: [],   
            usedLetters: [], 
            gameState: 0  
        }
    }

    // //Reading text file
    componentDidMount() {
        fetch(dictionary)
            .then(result => result.text())
            .then(text => {
                // concats text to words
                words += text;
                // Ignoring the legal part of the dictionary text file and placing the index at 'START'
                let startingIndex = words.lastIndexOf("START") + 6;
                words = (words.slice(startingIndex)).split("\n");

                //getting a random word from the dictionary words
                const randomWord = words[Math.floor(Math.random() * words.length)]

                //this is a function that generate underscores according to the number of letters
                function createUnderscores() {
                    let underscores = []
                    for (let index = 0; index < randomWord.length; index++) {
                        underscores.push("_");
                    }
                    return underscores;
                }

                //updating states
                this.setState({
                    chosenWord: randomWord, 
                    word: createUnderscores(),
                })
            });
    }

    //Thid function checks if the player is winning or loosibg
    handleGameState() {
        const word = this.state.word;
        const gameState = this.state.gameState;

        // checks if the word still have hidden letters, represented here by underscores 
        if (!word.includes("_")) {
            this.setState({
                result: "winning"
            })
        }
        // If the game state reach 10,there are no more lives left
        if (gameState === 10) {
            this.setState({
                result: "loosing"
            })
        }
    }

    // Adding the selected letter to the array of used letters
    updateUsedLetters = (e) => {
        //letters from the keyboard are in uppercase, we need to convert them to lowercase before storing them
        const newLetter = e.target.value.toLowerCase();
        let currArray = this.state.usedLetters;

        currArray.push(newLetter);

        //updating states
        this.setState({
            usedLetters: currArray
        }, () => this.update(newLetter));
    }

    // Adds the newly chosen letter if it is in the word to guess and updates the life counter 
    update(newLetter) {
        const chosenWord = this.state.chosenWord.toLowerCase();
        const word = this.state.word;
        let life = 0

        //checks if the letter added is in the word to guess
        if (chosenWord.includes(newLetter)) {
            // if the letter added is in the word to guess, then replace the underscore by it
            for (var i = 0; i < chosenWord.length; i++) {
                if (chosenWord[i] === newLetter) {
                    word[i] = newLetter
                } else {
                    continue;
                }
            }
            //increments consummed lives if the letter added is not in the word
        } else {
            life += 1;
        }
        // Updating states
        this.setState({
            word: word,
            gameState: this.state.gameState + life
        }, () => this.handleGameState())//calling the function that checks the game state
    }

    //this is a function that generate underscores according to the number of letters
    generateUnderscores() {
        const chosenWord = this.state.chosenWord;
        let arr = [];

        for (let index = 0; index < chosenWord.length; index++) {
            arr.push("_");
        }
        // Updating word state with the new hidden word
        this.setState({
            word: arr
        })
    }

    // reseting all the states for a new game
    reset = () => {
        this.setState({
            result: "",    
            chosenWord: words[Math.floor(Math.random() * words.length)], //getting a new random word from the dictionary
            usedLetters: [], 
            gameState: 0  
        }, () => this.generateUnderscores())//calling the generate underscores function to hide the new word
    }

    render() {
        return (
            <div>
                <Hangman 
                    result={this.state.result}
                    usedLetters={this.state.usedLetters}
                    gameState={this.state.gameState}
                    word={this.state.word}
                    restart={this.reset}
                    updateUsedLetters={this.updateUsedLetters}
                    chosenWord={this.state.chosenWord}
                />
            </div>
        )
    }
}

export default Words;