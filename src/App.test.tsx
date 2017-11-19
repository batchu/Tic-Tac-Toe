import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as enzyme from 'enzyme';
import * as ReactTestRenderer from 'react-test-renderer';
import * as Adapter from 'enzyme-adapter-react-16';

import App from './App'
import { Board, Game, Square } from './App';

//Run once before all tests
beforeAll(()=>{
    enzyme.configure({ adapter: new Adapter() })
})

//An elementary test to verify that the entire App loads without a hiccup
test('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);

});

//A snapshot test to verify the Game component's UI did not change unexpectedly after being loaded
//More at https://facebook.github.io/jest/docs/en/snapshot-testing.html
test('Game renders properly', () => {
    //Create an instance of the Component
    const component = ReactTestRenderer.create(
        <Game />
    )

    //Retreive it's JSON
    const tree = component.toJSON()

    //Compare it with the stored snapshot
    expect(tree).toMatchSnapshot()

})

test.skip("Board's handleClick should update the squares array based on the value passed to it", () => {

    const instance: Board = new Board()
    instance.handleClick(5)
    expect(instance.state.squares[5]).toEqual('X')

})

test("When a Square is clicked, it should invoke the function attached to the click event", () => {

    //Create the necessary input values for the test case
    const squareValue = 'X'
    const mockOnClick = jest.fn()

    const wrapper  = enzyme.shallow(<Square
        value={squareValue}
        onClick={mockOnClick}
    />)

    wrapper.find('button').simulate('click')
    expect(wrapper.find("button").props().children).toEqual('X')
    expect(mockOnClick.mock.calls.length).toBe(1)

})