ReactJS:
--------------
### 1. Which version of React JS have you worked on ?
16.13.0 <-- This is UI renewal project

17.0.0 <-- For private project


### 2. Have you used hooks ? which hooks have you worked with ?
useState, useEffect, useContext <-- But I use useState for private


### 3. Explain Virtual DOM
Virtual DOM is a virtual representation in memory of the Real DOM.
React will apply the application state changes to the Virtual DOM.


### 4. How is the JSX syntax written in the code, displayed as HTML on the browser ?
When you use JSX, You can write React UI element easily.
And JSX use Virtual DOM and it's similar HTML syntax but JSX has some rules. For example you should use className instead of class.
Actually you can use any HTML5 tag , or you can use custom component like tag.


### 5. Difference between functional and State components

- Functional component is basic Javascript function.
You can accept props to functional component.
React lifecycle methods can't use function component.
When you don't need to use state , you should use functional component.
```
import React from "react";

const Person = props => (
  <div>
    <h1>Hello, {props.name}</h1>
  </div>
);
```

export default Person;

- Class component make use of ES6 class and extend the Component class in React.
Sometimes calles stateful component as they tend to implement logic and state.
React lifecycle method can be used inside class component.
You can pass props down to class components and access them with this.props.

```
import React, { Component } from "react";

class Person extends Component {
  constructor(props){
    super(props);
    this.state = {
      myState: true;
    }
  }
  
  render() {
    return (
      <div>
        <h1>Hello Person</h1>
      </div>
    );
  }
}

export default Person;
```

### 6. Component life cycle
React component lifecycle has three categories - Mounting, Updating and Unmounting.
- render() is the most used lifecycle method.
- componentDidMount happens as soon as your component is mounted.
- componentDidUpdate happens as soon as updating.
- componentWillUnmount happens before component unmount and destroyed.
- shouldComponentUpdate is used performance optimize. It is called if you need to tell React not to re-render for a certain state or props change.

Redux:
----------
1. What is the need to use Redux library in a ReactJS application
When app become comlicated , Redux can help prediction state updating for View layer.

Redux three principles

1. Single source of truth
2. State is read-only
3. Changes are made with pure functions (reducer)


2. Redux flow
Redux has three major parts State, Actions, Reduces.
State: status of application
Action: action maded by user like click button
Reducer: method for updating state triggered by action
Store: store state satus

Basically , first action dispatched triggered by user movement and reducer update state in store. 

Adv Javascript:
----------------------
1. Explain callbacks and Promises
callback is is any executable code that is passed as an argument to other code.
promise is object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

2. Difference between GET and POST ajax calls
GET is designed for getting data from the server. POST is designed for modifying data on the server.

According to HTML 2.0 states, 
If the processing of a form is idempotent (i.e. it has no lasting observable effect on the state of the world), then the form method should be GET. Many database searches have no visible side-effects and make ideal applications of query forms.

If the service associated with the processing of a form has side effects (for example, modification of a database or subscription to a service), the method should be POST.

In your AJAX call, you need to use whatever method your server supports. You should always design your server so that operations that modify data are called by POST/PUT/DELETE. Other comments have links to REST, which generally maps C/R/U/D to "POST or PUT"