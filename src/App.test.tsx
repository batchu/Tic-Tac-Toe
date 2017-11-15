import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App, Board, Game, Square} from './App';

import * as  ReactTestRenderer from 'react-test-renderer';

it('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);

});

it('Game renders properly', () => {
    const component = ReactTestRenderer.create(
        <Game/>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()

})

it("Board's handleClick should update the squares array based on the value passed to it", () => {

    const instance: Board = new Board()
    instance.handleClick(5)
    expect(instance.state.squares[5]).toEqual('X')

})

it("When a Square is clicked, it should invoke the function attached to the click event", () => {

    const instance: Square = new Square()
    instance.render()

})