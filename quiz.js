class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.questionNumber = 0;
    this.resultNumber = 0;
    this.progresBar = 0;
  }

  getQuestion() {
    return this.questions[this.questionNumber];
  }

  // Rodo progresą
  showProgress() {
    this.questionNumber++;
    // this.progresBar = this.progresBar + 20;
    progress.innerText = this.questionNumber + 1;
    progressBarFull.style.width = `${this.progresBar + 20}%`;
    this.progresBar = this.progresBar + 20;
  }

  // Skaičiuoja teisingus atsakymus
  check(guess) {
    if (guess.innerText === this.getQuestion().answer) {
      return this.resultNumber++;
    }
    return this.resultNumber;
  }

  // Result page
  showResults() {
    let quiz = document.getElementById("quiz");
    quiz.innerHTML = `
    <h1>Teisingų atsakymų: ${this.resultNumber} </h1>
    <button class = "answbtn" onClick="start()">Restart</button>
    `;
    console.log(this.resultNumber);
  }
}
