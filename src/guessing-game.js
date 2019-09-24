class GuessingGame {
  // Init default values

  constructor() {
    this.numberGuess = 0;
    this.min = 0;
    this.max = 0;
  }

  // Set range where our value exist

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  // guessing method which return supposed number

  guess() {
    this.numberGuess = Math.round(this.max - (this.max - this.min) / 2);
    return this.numberGuess;
  }

  // set max range to numberGuess

  lower() {
    this.max = this.numberGuess;
  }

  // set min range to numberGuess

  greater() {
    this.min = this.numberGuess;
  }
}

module.exports = GuessingGame;
