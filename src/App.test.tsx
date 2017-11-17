import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App, Board, Game, Square} from './App';

import * as enzyme from 'enzyme';

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

    const squareValue = 'X'
    let onClickwasCalled: boolean = false
    const onClick = () => {
        onClickwasCalled = true
    }
    enzyme.configure({adapter: new enzyme.EnzymeAdapter()})

    const instance = enzyme.shallow(<Square
        value={squareValue}
        onClick={onClick}
    />)

    expect(instance.find("button")).toEqual('X')
    expect(onClickwasCalled).toBeTruthy()

})