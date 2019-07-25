// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
// This is a function based component
// component that using the function keyword
/*
const App = function() {
    return <div>Hi there!</div>
};
*/

/*
// we could call this function inside the button to display 'click on me'
function getButtonText() {
    return 'Click on me!';
}
*/

// ES2015 arrow function
// most common convention for multi line
// the "style" format in the button is different using JSX vs HTML
// you are not supposed to use the keywork "class" inside a JSX element
// instead we use "className"
// We do this to not confuse the class declaration
// we can reference different JavaScript variables inside our JSX
// we can also call a function inside of our JSX
// when using JSX we also change the "for" parameter to "htmlFor"
const App = () => {
    const buttonText = { text: 'Click me' };
    const labelText = 'Enter name:';

    // this is creating a style object and referencing it into the button style 
    // the JSX standard is creating an object for the styling 
    // const style = { backgroundColor: "blue", color: "white" };

    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: "blue", color: "white" }}>
                {buttonText.text}
            </button>
        </div>
    );
};

// Take the react component and show it on the screen 
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);