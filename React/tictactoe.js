import React from "react";
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.checkClick = this.checkClick.bind(this);
  }

  checkClick() {
    if (this.props.display == null && this.props.winner == null) {
      this.props.changeArray(this.props.index);
    }
  }

  render() {
    return (
      <button className="square" onClick={() => this.checkClick()}>
        {this.props.display}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ],
      nextPlayer: "X",
      winner: null
    };
    this.changeArray = this.changeArray.bind(this);
    this.checkWin = this.checkWin.bind(this);
    this.pauseGame = this.pauseGame.bind(this);
    this.reStart = this.reStart.bind(this);
  }

  pauseGame(winner) {
    this.setState({ winner: winner });
  }

  checkWin() {
    let tmp = this.state.array;
    //heng
    for (let i = 0; i < tmp.length; i++) {
      if (
        tmp[i][0] === tmp[i][1] &&
        tmp[i][1] === tmp[i][2] &&
        tmp[i][0] !== null
      ) {
        return tmp[i][0];
      }
    }
    //shu
    for (let j = 0; j < tmp.length; j++) {
      if (
        tmp[0][j] === tmp[1][j] &&
        tmp[1][j] === tmp[2][j] &&
        tmp[0][j] !== null
      ) {
        return tmp[0][j];
      }
    }
    //xie
    let winner = tmp[1][1];
    if (tmp[0][2] === winner && winner === tmp[2][0] && tmp[0][2] != null) {
      return winner;
    }
    if (tmp[0][0] === winner && winner === tmp[2][2] && tmp[0][0] != null) {
      return winner;
    }
    return false;
  }

  changeArray(index) {
    let tmp = this.state.array;
    tmp[parseInt(index / 3)][index % 3] = this.state.nextPlayer;
    this.setState({ array: tmp });
    const next = this.state.nextPlayer === "X" ? "O" : "X";
    this.setState({ nextPlayer: next });
    const res = this.checkWin();
    if (res !== false && res !== null) {
      this.pauseGame(res);
    } else {
      let checkNull = false;
      for (let i = 0; i < tmp.length; i++) {
        for (let j = 0; j < tmp.length; j++) {
          if (tmp[i][j] == null) checkNull = true;
        }
      }
      if (!checkNull) {
        this.pauseGame("No one");
      }
    }
  }

  reStart() {
    this.setState({ nextPlayer: "X" });
    this.setState({
      array: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ]
    });
    this.setState({ winner: null });
  }

  renderSquare(i) {
    return (
      <Square
        index={i}
        changeArray={this.changeArray}
        display={this.state.array[parseInt(i / 3)][i % 3]}
        winner={this.state.winner}
      />
    );
  }

  render() {
    const status = `Next player: ${this.state.nextPlayer}`;

    return (
      <div>
        {this.state.winner == null ? (
          <div className="status">{status}</div>
        ) : (
          <>
            <p>{this.state.winner} Win the game!</p>
            <button onClick={() => this.reStart()}>Restart</button>
          </>
        )}
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;