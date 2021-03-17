import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const visit = (obj, fn) => {
//   const values = Object.values(obj)
//   const keys = Object.entries(obj);
//   console.log(keys)
//   values.forEach(val => 
//       val && typeof val === "object" ? visit(val, fn) : fn(val))
// }

// // Quick test
// const print = (val) => console.log()

// const person = {
//   name: {
//       first: "John",
//       last: "Doe"
//   },
//   age: 15,
//   secret: {
//       secret2: {
//           secret3: {
//               val: "I ate your cookie"
//           }
//       }
//   }
// }

// visit(person, print)

/* Output
John
Doe
15
I ate your cookie
*/
