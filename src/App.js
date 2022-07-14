import React, { useState, useEffect } from 'react';
import './style2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { all_words } from './words.js';

export default function App() {
  const position = [0, 1, 2, 3, 4];
  const [guessOne, setGuessOne] = useState(['', '', '', '', '']);
  const [guessTwo, setGuessTwo] = useState(['', '', '', '', '']);
  const [guessThree, setGuessThree] = useState(['', '', '', '', '']);
  const [guessFour, setGuessFour] = useState(['', '', '', '', '']);
  const [guessFive, setGuessFive] = useState(['', '', '', '', '']);
  const [guessNumber, setGuessNumber] = useState(0);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [currentLetter, setCurrentLetter] = useState(['', '', '', '', '']);
  const [wordle, setWordle] = useState(
    all_words[Math.floor(Math.random() * all_words.length)]
  );

  const handleChange = (e) => {
    let word = e.target.value.toUpperCase().split('');
    let test = [];
    if (word.length > 5) {
      word = word.slice(0, 5);
    }
    setCurrentLetter(word);
  };

  function wordtyperow1(position) {
    // console.log(guessOne);
    if (guessOne[position] === '') {
      return 'none';
    } else if (guessOne[position].toLowerCase() === wordle[position]) {
      return 'correct';
    } else if (wordle.includes(guessOne[position].toLowerCase())) {
      return 'misplaced';
    } else return 'withtext';
  }

  function wordtyperow2(position) {
    // console.log(guessTwo);
    if (guessTwo[position] === '') {
      return 'none';
    } else if (guessTwo[position].toLowerCase() === wordle[position]) {
      return 'correct';
    } else if (wordle.includes(guessTwo[position].toLowerCase())) {
      return 'misplaced';
    } else return 'withtext';
  }
  function wordtyperow3(position) {
    // console.log(guessThree);
    if (guessThree[position] === '') {
      return 'none';
    } else if (guessThree[position].toLowerCase() === wordle[position]) {
      return 'correct';
    } else if (wordle.includes(guessThree[position].toLowerCase())) {
      return 'misplaced';
    } else return 'withtext';
  }
  function wordtyperow4(position) {
    // console.log(guessFour);
    if (guessFour[position] === '') {
      return 'none';
    } else if (guessFour[position].toLowerCase() === wordle[position]) {
      return 'correct';
    } else if (wordle.includes(guessFour[position].toLowerCase())) {
      return 'misplaced';
    } else return 'withtext';
  }
  function wordtyperow5(position) {
    // console.log(guessFive);
    if (guessFive[position] === '') {
      return 'none';
    } else if (guessFive[position].toLowerCase() === wordle[position]) {
      return 'correct';
    } else if (wordle.includes(guessFive[position].toLowerCase())) {
      return 'misplaced';
    } else return 'withtext';
  }

  const handleSubmit = () => {
    if (currentLetter.length === 5) {
      // console.log('word is good');
      const word = currentLetter.join('').toLowerCase();

      // console.log(word);

      if (currentLetter !== ['', '', '', '', '']) {
        // console.log('checking if word is duplicate');
        if (
          currentLetter === guessOne ||
          currentLetter === guessTwo ||
          currentLetter === guessThree ||
          currentLetter === guessFour ||
          currentLetter === guessFive
        ) {
          alert('WORD ALREADY GUESSED');
          return;
        }
      }

      if (all_words.includes(word)) {
        // console.log('word is in dictionary');
        // console.log('GUESS NUMBER ' + guessNumber);
        switch (guessNumber) {
          case 0:
            setGuessOne(currentLetter);
            break;
          case 1:
            setGuessTwo(currentLetter);
            break;
          case 2:
            setGuessThree(currentLetter);
            break;
          case 3:
            setGuessFour(currentLetter);
            break;
          case 4:
            setGuessFive(currentLetter);
            break;
        }

        setGuessNumber(guessNumber + 1);

        if (word === wordle) {
          alert('success! You got it right!');
          setSuccess('disabled');
        }

        if (guessNumber === 4 && word != wordle) {
          setMessage('Better luck next time. The word is ' + wordle);
          setSuccess('disabled');
        }
      } else {
        alert('word is NOT in dictionary');
      }
    } else {
      alert('not a 5 letter word');
    }
  };

  return (
    <div id="app">
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <center>
              <h1>WORDLE PRACTICE</h1>
              <h5>by tmgautham</h5>

              <table>
                <tbody>
                  <tr id="wordOne">
                    {guessOne.map((letter, position) => (
                      <td
                        key={position}
                        id={'r0c' + position}
                        className={wordtyperow1(position)}
                      >
                        {letter}
                      </td>
                    ))}
                  </tr>
                  <tr id="wordTwo">
                    {guessTwo.map((letter, position) => (
                      <td
                        key={position}
                        id={'r1c' + position}
                        className={wordtyperow2(position)}
                      >
                        {letter}
                      </td>
                    ))}
                  </tr>
                  <tr id="wordThree">
                    {guessThree.map((letter, position) => (
                      <td
                        key={position}
                        id={'r2c' + position}
                        className={wordtyperow3(position)}
                      >
                        {letter}
                      </td>
                    ))}
                  </tr>
                  <tr id="wordFour">
                    {guessFour.map((letter, position) => (
                      <td
                        key={position}
                        id={'r3c' + position}
                        className={wordtyperow4(position)}
                      >
                        {letter}
                      </td>
                    ))}
                  </tr>
                  <tr id="wordFive">
                    {guessFive.map((letter, position) => (
                      <td
                        key={position}
                        id={'r4c' + position}
                        className={wordtyperow5(position)}
                      >
                        {letter}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
              <div className="input-group mb-3">
                <h5>{message}</h5>
                <input
                  type="text"
                  className={'form-control' + success}
                  placeholder="your guess"
                  aria-label="your guess"
                  aria-describedby="your guess"
                  onChange={(e) => handleChange(e)}
                />
                <div className="input-group-append">
                  <button
                    className={'btn btn-outline-secondary ' + success}
                    type="button"
                    onClick={() => handleSubmit()}
                  >
                    SEND
                  </button>
                </div>
              </div>
            </center>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}
