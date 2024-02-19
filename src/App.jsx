import React from 'react';
import Routing from './Routing';
import './App.css';

function App() {
  return (
    <div>
      <Routing></Routing>
    </div>
  );
}

export default App;

// Netlify Deployment
// public -> (make file) --redirects -> (inside file) /*/index.html 200 -> npm run build -> netlify login -> sites -> drag and drop build file