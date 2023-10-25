import React, { useState } from 'react';

import Todo from './components/todo/todo';

function App() {
  const [todo, setTodo] = useState<string>(''); 
  return (
    <div className="App">
      <Todo todo={todo} setTodo={setTodo} /> 
    </div>
  );
}

export default App;
