// Import the React and React-DOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React component
const App = function() {
    const buttonText = 'Click Me!';
    const labelText = 'Enter name:'
    return (
        <div>
            <label className="label" htmlFor="name">{labelText}</label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                {buttonText}
            </button>
       </div>
    );
}

// Take the React component and show it on the screen
ReactDOM.render(
    <App />,    
    document.querySelector('#root'),
);