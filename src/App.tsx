import * as React from 'react';
import './App.css';

interface SquareProps {
    value: string;
    onClick: () => void
}
class Square extends React.Component<SquareProps, {}> {
    render() {
        return (
            <button
                className="square"
                onClick={() => this.props.onClick()}
            >
                {this.props.value}
            </button>
        );
    }
}

interface BoardProps {

}

interface BoardState {
    squares: Array<string>
}

class Board extends React.Component<BoardProps, BoardState> {

    constructor() {
        super()
        this.state = {
            squares: Array(9).fill(null)
        }
    }

    handleClick(i: number) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({ 'squares': squares })
    }

    renderSquare(i: number) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="status">Game Status</div>
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

interface LinkProps {
    page: string
}

interface LinkState {
    class: STATUS
}

enum STATUS {
    NORMAL = 'NORMAL',
    HOVERED = 'HOVERED'
}

class Link extends React.Component<LinkProps, LinkState> {

    constructor(props: LinkProps) {
        super(props);

        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseLeave = this._onMouseLeave.bind(this);

        this.state = {
            class: STATUS.NORMAL,
        };
    }

    _onMouseEnter() {
        this.setState({ class: STATUS.HOVERED });
    }

    _onMouseLeave() {
        this.setState({ class: STATUS.NORMAL });
    }

    render() {
        return (
            <a
                className={this.state.class}
                href={this.props.page || '#'}
                onMouseEnter={this._onMouseEnter}
                onMouseLeave={this._onMouseLeave}
            >
                {this.props.children}
            </a>
        );
    }

}

export default class App extends React.Component {
    render() {
        return (
            <Link page="https://batchu.net"> Batchu</Link>
        );
    }
}

export { Game }
export { Board }
export { Square }
export { Link }
