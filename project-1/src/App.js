// import logo from './logo.svg';
// import React, { useState } from 'react';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // componentDidUpdate - executa toda vez que o component atualiza
  useEffect(() => {
    console.log('componentDidUpdate');
  });

  // componentDidMount - executa 1x
  useEffect(() => {
    console.log('componentDidUpdate');
  }, []);

  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', 'eventFn');

    // componentWillUnmount - limpeza
    return () => {
      document.querySelector('h1').removeEventListener('click', 'eventFn');
    };
  }, []);

  // com dependência - executa toda vez que a dependência mudar
  useEffect(() => {
    console.log('Contador 1 mudou para', counter);
    console.log('Contador 2 mudou para', counter2);
  }, [counter, counter2]);

  return (
    <div className="App">
      <h1>Contador 1: {counter}</h1>
      <h1>Contador 2: {counter2}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter2(counter2 + 1)}>+</button>
    </div>
  );
}

export default App;

// function App() {
//   const [reverse, setReverse] = useState(false);
//   const [counter, setCounter] = useState(0);
//   const reverseClass = reverse ? 'App-logo-reverse' : '';

//   const handleClick = () => {
//     setReverse(!reverse);
//   };

//   const handleIncrement = () => {
//     setCounter((prevCounter) => prevCounter + 1);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>

//         <h1>Contador: {counter}</h1>
//         <p>
//           <button type="button" onClick={handleClick}>
//             Reverse{`${reverseClass}`}
//           </button>
//         </p>
//         <p>
//           <button type="button" onClick={handleIncrement}>
//             Increment
//           </button>
//         </p>
//       </header>
//     </div>
//   );
// }
