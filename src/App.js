// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import FeedContainer from "./component/FeedContainer"; // Adjust the path based on your folder structure
import "./styles/App.css"; // Optional: Add any global styles here

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{textAlign:"center"}}>Dynamic Feed Layout</h1>
      </header>
      <main>
        <FeedContainer />
      </main>
    </div>
  );
}

export default App;

