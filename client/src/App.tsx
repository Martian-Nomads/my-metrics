import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto';
import Button from '@material-ui/core/Button';
import Accessibility from '@material-ui/icons/Accessibility';

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
			<Accessibility></Accessibility>
		</Button>
      </header>
    </div>
  );
}

export default App;
