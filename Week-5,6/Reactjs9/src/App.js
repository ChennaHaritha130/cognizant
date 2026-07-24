import React from 'react';
import ListOfPlayers from './components/ListOfPlayers';
import IndianPlayers from './components/IndianPlayers';

function App() {
  const flag = true;   // Change to false to see the other output

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>🏏 Cricket App - ES6 Features Demo</h1>

      {flag ? (
        <ListOfPlayers />
      ) : (
        <IndianPlayers />
      )}
    </div>
  );
}

export default App;