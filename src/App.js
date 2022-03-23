import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Message } from "./components/Message/Message";

const lastName = "Sokol";

function App() {
 return (
    <div className="App">
        <Message name="Alexander" lastName={lastName} />
        <Message name="Sveta" age={17} />
         
    </div>
  );
}

//<Message name={name} asd={15 + 2} doSmth={foo} bold={true} />
//<Message name="Other name" asd={20 + 10} doSmth={foo} />


// export class AppClass extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
