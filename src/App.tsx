import * as React from 'react';
import './App.css';

interface SquareProps {

    value: number;
}
class Square extends React.Component <SquareProps, {}> {
    render() {
        return (
           <button className="square">
               {this.props.value}
           </button>
        );
    }
}

class Board extends React.Component {

    renderSquare(i: number) {
        return (
            <Square value={i} />
        );
    }
    render() {
        return (
            <div>
                <div className="status">{status}</div>
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
            <Board />
        );
    }
}

class App extends React.Component {
  render() {
    return (
     <Game />
    );
  }
}

export default App;
