import React, { useState } from 'react';

// import the todo component from the todo
import Todo from './components/todo/todo';

function App() {
  // Here i can define the satate variable todo for hold the value of todo
  const [todo, setTodo] = useState<string>(''); 
  return (
    <div className="App">

      {/* Here i can use the todo component and pass the todo state variable and setTodo function to it */}
      <Todo todo={todo} setTodo={setTodo} /> 
    </div>
  );
}

export default App;
