import React from 'react';
import classes from './App.module.css';


function App() {
  return (
    <div className={classes.app}>
      <h1>Launcher 😉</h1>
      <p>A tutaj mini apka:</p>
      <iframe className={classes.miniApp} title="mojaApka" src="http://127.0.0.1:5500/index.html" frameBorder="0"></iframe>
    </div>
  );
}

export default App;
