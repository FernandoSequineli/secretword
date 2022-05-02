import "./Game.css";

const Game = ({ verifyLetter }) => {
  return (
    <div className="game">
      <p className="points">
        <span>Score: 0</span>
      </p>
      <h1>Guess the word</h1>
      <h3 className="tip">
        Tip: <span>Tip...</span>
      </h3>
      <div className="wordContainer">
        <span className="letter">A</span>
        <span className="blankSquare"></span>
      </div>
      <div className="letterContainer">
        <p>Try to guess a letter:</p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button>Play!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letters already used:</p>
        <span>a,</span>
        <span>b,</span>
      </div>
    </div>
  );
};

export default Game;
