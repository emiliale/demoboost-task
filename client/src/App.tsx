import React from 'react';

function App() {

  fetch('http://localhost:5000/greeting')
    .then(response => response.json())
    .then(data => console.log(data));

  return (
    <div>
      app
    </div>
  );
}

export default App;
