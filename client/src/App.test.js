import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';

import PlayersCard from './components/PlayersCard';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  }); 

  test('should have text [player name]',  async ()=>{
    const {findByText} = await render(<PlayersCard />)
    findByText(/alex morgan/i);
}) 
test("renders the placeholder country without crashing", () => {
  const country = render(<App />);

  country.findByPlaceholderText("country");
});

test("renders the placeholder name without crashing", () => {
  const name = render(<App />);

  name.findByPlaceholderText("name");
});

test("renders the placeholder txt country without crashing", () => {
  const country = render(<App />);

  country.findByPlaceholderText("country");
});