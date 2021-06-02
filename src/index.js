import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './index.css';




const title = React.createElement('a', { href: "reactjs.org" }, "Hello, React!");
console.log(title);
ReactDOM.render(title, document.getElementById('root'));

const JSXLink = < a href = "reactjs.org" > Hello,
    React! < /a>;

console.log(JSXLink);