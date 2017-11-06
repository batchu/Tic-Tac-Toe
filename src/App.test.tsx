import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import Game from './App';
import Board from './App';
import Square from './App';
import * as  ReactTestRenderer from 'react-test-renderer';

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('Game renders without crashing', ()=>{

  const component = ReactTestRenderer.create(
    <Game />
  )

  const tree = component.toJSON();
 expect(tree).toMatchSnapshot();
})
