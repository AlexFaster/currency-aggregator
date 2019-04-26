import React from 'react';
import UserList from "./component/UserList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
        <article>
            <UserList/>
        </article>
    </div>
  );
}

export default App;
