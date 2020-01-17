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
