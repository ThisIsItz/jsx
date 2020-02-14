// Import the React and React-DOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React component
const App = function() {
    return <div>Hi there!</div>
}

// Take the React component and show it on the screen
ReactDOM.render(
    <App />,    
    document.querySelector('#root'),
);