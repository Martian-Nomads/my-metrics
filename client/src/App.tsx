import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Really digging this react logo. Shame it has to go :(
        </p>
		<Button variant="contained" color="primary">
			Material UI button!
		</Button>
      </header>
    </div>
  );
}

export default App;
