import React from 'react';
import './style.css';
import { all_words } from './words.js';

export default function App() {
  return (
    <div id="app">
      <div class="container">
        <div class="row">
          <div class="col"></div>
          <div class="col">
            <div id="wordle-box">
              <div id="word1" className="word">
                <div className="btn disabled cell">A</div>
                <div className="btn disabled cell">P</div>
                <div className="btn disabled cell">&nbsp;&nbsp;</div>
                <div className="btn disabled cell">&nbsp;&nbsp;</div>
                <div className="btn disabled cell">&nbsp;&nbsp;</div>
              </div>
              <div id="word2" className="word">
                <div className="btn disabled cell">&nbsp;&nbsp;</div>
                <div className="btn disabled cell">&nbsp;&nbsp;</div>
                <div className="btn disabled cell">&nbsp;&nbsp;</div>
                <div className="btn disabled cell">&nbsp;&nbsp;</div>
                <div className="btn disabled cell">&nbsp;&nbsp;</div>
              </div>
              <div id="word3" className="word">
                <div className="btn disabled cell">&nbsp;&nbsp;</div>
                <div className="btn disabled cell">&nbsp;&nbsp;</div>
                <div className="btn disabled cell">&nbsp;&nbsp;</div>
                <div className="btn disabled cell">&nbsp;&nbsp;</div>
                <div className="btn disabled cell">&nbsp;&nbsp;</div>
              </div>
              <div id="word4" className="word">
                <div className="btn disabled cell">&nbsp;&nbsp;</div>
                <div className="btn disabled cell">&nbsp;&nbsp;</div>
                <div className="btn disabled cell">&nbsp;&nbsp;</div>
                <div className="btn disabled cell">&nbsp;&nbsp;</div>
                <div className="btn disabled cell">&nbsp;&nbsp;</div>
              </div>
              <div id="word5" className="word">
                <div className="btn disabled cell">&nbsp;&nbsp;</div>
                <div className="btn disabled cell">&nbsp;&nbsp;</div>
                <div className="btn disabled cell">&nbsp;&nbsp;</div>
                <div className="btn disabled cell">&nbsp;&nbsp;</div>
                <div className="btn disabled cell">&nbsp;&nbsp;</div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="your guess"
                aria-label="your guess"
                aria-describedby="your guess"
              />
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">
                  SEND
                </button>
              </div>
            </div>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </div>
  );
}
