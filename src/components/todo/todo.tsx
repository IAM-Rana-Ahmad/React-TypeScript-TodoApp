import React, { FormEvent, useState } from 'react';
import Navbar from '../Navbar/Navbar';

interface TodoProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

interface TodoItem {
  id: number;
  task: string;
  marked: boolean; 
  length:number;
}

const Todo: React.FC<TodoProps> = ({ todo, setTodo }) => {
  const [addTodo, setAddTodo] = useState<TodoItem[]>([]);
  const [idCounter, setIdCounter] = useState(1);

  const addTask = (e: FormEvent) => {
    e.preventDefault();
    if (!todo) {
      alert("Please enter something");
    } else {
      const newTodo: TodoItem = { id: idCounter, length:todo.length, task: todo, marked: false };
      setAddTodo([...addTodo, newTodo]);
      setTodo('');
      setIdCounter(idCounter + 1);
    }
  };

  const handleDelete = (id: number) => {
    const tasks = addTodo.filter((item) => item.id !== id);
    setAddTodo(tasks);
  };

  const handleMark = (id: number) => {
    const updatedTasks = addTodo.map((item) => {
      if (item.id === id) {
        return { ...item, marked: !item.marked };
      }
      return item;
    });
    setAddTodo(updatedTasks);
  };

  const handleUpperCase = (id: number) => {
    const updatedTasks = addTodo.map((item) => {
      if (item.id === id) {
        return { ...item, task: item.task.toUpperCase() };
      }
      return item;
    });
    setAddTodo(updatedTasks);
  };

  const handleLowerCase = (id: number) => {
    const updatedTasks = addTodo.map((item) => {
      if (item.id === id) {
        return { ...item, task: item.task.toLowerCase() };
      }
      return item;
    });
    setAddTodo(updatedTasks);
  };

  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="row d-flex justify-content-center mt-5">
        <h2 className="text-info text-center display-3 fw-bold mt-5">MY TODO APP</h2>
        <div className="col-xxl-8 mt-5">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control p-3 fs-4"
              placeholder="Enter Your Work"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button className="btn btn-outline-secondary" type="submit" onClick={addTask} id="button-addon2">
              Add Task
            </button>
          </div>
        </div>
      </div>

      <div className="row d-flex justify-content-center">
        {addTodo.map((item) => (
          <div className="col-xxl-8" key={item.id}>
            <div className="card w-100 mb-3 shadow-lg">
              <div className="card-body">
                <h5 className={item.marked ? "card-header text-decoration-line-through" : "card-header"}>{item.task}</h5>
                <p>Total Number of Words:{item.length}</p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>
                    Delete
                  </button>
                  <button className="btn btn-primary" onClick={() => handleMark(item.id)}>
                    {item.marked ? "Unmark" : "Mark"}
                  </button>
                  <button className='btn btn-success' onClick={()=>handleUpperCase(item.id)}>
                    To UpperCase
                  </button>
                  <button className='btn btn-info' onClick={()=>handleLowerCase(item.id)}>
                    To LowerCase
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Todo;
