import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as enzyme from 'enzyme';
import * as ReactTestRenderer  from 'react-test-renderer';
import * as Adapter from 'enzyme-adapter-react-16';

import  App from './App'
import { Board, Game, Square, Link} from './App';

test('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);

});

test('Game renders properly', () => {
    const component = ReactTestRenderer.create(
        <Game/>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()

})

test.skip("Board's handleClick should update the squares array based on the value passed to it", () => {

    const instance: Board = new Board()
    instance.handleClick(5)
    expect(instance.state.squares[5]).toEqual('X')

})

test("When a Square is clicked, it should invoke the function attached to the click event", () => {

    const squareValue = 'X'
    let onClickwasCalled: boolean = false
    const onClick = () => {
        onClickwasCalled = true
    }
    enzyme.configure({adapter: new Adapter()})
    const instance = enzyme.shallow(<Square
        value={squareValue}
        onClick={onClick}
    />)

    expect(instance.find("button")).toEqual('X')
    expect(onClickwasCalled).toBeTruthy()

})

test('Link changes the class when hovered', () => {
    const component = ReactTestRenderer.create(
      <Link page="http://www.facebook.com">Facebook</Link>
    );
    let tree = component.toJSON();
  
    expect(tree).toMatchSnapshot();
  
    // manually trigger the callback
    if(tree!=null)
    tree.props.onMouseEnter();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  
    // manually trigger the callback
    if(tree!=null)
    tree.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

