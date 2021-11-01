import React, { useState, useEffect } from 'react';
import classes from './App.module.css';

function App() {
  const miniAppURL = "http://127.0.0.1:5500/index.html";
  const message = "Ten string pochodzi z launchera!";

  const [loadApp, setLoadApp] = useState(false);

  // load app when launcher is fully loaded
  useEffect(() => {
    setLoadApp(true);
  }, [])

  return (
    <div className={classes.app}>
      <h1>Launcher 😉</h1>
      <p>A tutaj mini apka:</p>
      {loadApp && <iframe className={classes.miniApp} title="mojaApka" src={`${miniAppURL}?msg=${message}`} frameBorder="0" ></iframe>}
    </div>
  );
}

export default App;
