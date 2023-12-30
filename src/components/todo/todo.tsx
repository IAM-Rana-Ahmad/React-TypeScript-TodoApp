import React, { FormEvent, useState } from 'react';

// import navbar from the navbar component
import Navbar from '../Navbar/Navbar';

// import todoCss
import './todo.css'




interface TodoProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}


// Deffining the todo properties
interface TodoItem {
  id: number;
  task: string;
  marked: boolean;
  length: number;
}

const Todo: React.FC<TodoProps> = ({ todo, setTodo }) => {

  // Define the state for add the todo in addTodo state variable
  const [addTodo, setAddTodo] = useState<TodoItem[]>([]);
  // Define the state variable for track or generate the id for each todo
  const [idCounter, setIdCounter] = useState(1);
  // Define the search state variable for holding the search bar value
  const [search, setSearch] = useState("")
  // Define the state variable to hold the value of the sub heading
  const [subHeading, setSubHeading] = useState<string>()
  // Define the toogle the application theme from light to dark as a state variable
  const [toogle, setToogle] = useState(false)


  // define the function to set the toogle state variable from false to true
  const handleToogle = () => {
    setToogle(!toogle)
  }



  //  define the function to add the todo to the state variable addTodo
  const addTask = (e: FormEvent) => {
    e.preventDefault();
    if (!todo) {
      alert("Please enter something");
    } else {
      const newTodo: TodoItem = { id: idCounter, length: todo.length, task: todo, marked: false };
      localStorage.setItem("text", todo)
      setAddTodo([...addTodo, newTodo]);
      setTodo('');
      setIdCounter(idCounter + 1);
    }
  };


  // define and handle the delete a specific todo functionality
  const handleDelete = (id: number) => {
    const tasks = addTodo.filter((item) => item.id !== id);
    setAddTodo(tasks);
  };


  //  define the amark the specific todo
  const handleMark = (id: number) => {
    const updatedTasks = addTodo.map((item) => {
      if (item.id === id) {
        return { ...item, marked: !item.marked };
      }
      return item;
    });
    setAddTodo(updatedTasks);
  };


  // define and handle the upperCase a todo functionality
  const handleUpperCase = (id: number) => {
    const updatedTasks = addTodo.map((item) => {
      if (item.id === id) {
        return { ...item, task: item.task.toUpperCase() };
      }
      return item;
    });
    setAddTodo(updatedTasks);
  };


  // define and handle the lowerCase a todo functionality
  const handleLowerCase = (id: number) => {
    const updatedTasks = addTodo.map((item) => {
      if (item.id === id) {
        return { ...item, task: item.task.toLowerCase() };
      }
      return item;
    });
    setAddTodo(updatedTasks);
  };


  // define the function to handle the serach functionality
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    addTodo && addTodo.length > 0
      ? setAddTodo(
        addTodo.filter((item) =>
          item.task.toLowerCase().includes(search.toLowerCase())
        )
      )

      : alert("Enter something to find first");
  };



  //  define the subHeading function
  const handleSubHeading = () => {
    const string = prompt("enter a sub heading")
    if (string) {
      setSubHeading(string)
    } else {
      alert("Enter sub heading first")
    }
  }


  // function for deleting the subHeading
  const handleDeleteSubHeading = () => {
    setSubHeading("")
  }




  return (
    <>


      {/* Use the import navbar over here */}
      <Navbar toogle={toogle} handleToogle={handleToogle} />



      {/* Main div which wraps the whole todo component */}
      <div className={`container-fluid py-5 h-100 ${toogle ? "bg-dark" : "bg-warning"}`}>

        {/* Container to define the search bar */}
        <div className='container '>
          <p className='fs-2 fw-bold text-white'>Serach for your tasks</p>
          <form className="d-flex" role="search">
            {/* Search Bar */}
            <input onChange={(e) => setSearch(e.target.value)} className="form-control me-2 p-3" type="search" placeholder="Enter your task name.." aria-label="Search" />
            <button onClick={handleSearch} className="btn btn-info " type="submit">Search</button>
          </form>
        </div>
        {/* Container div is end here */}




        {/* This is the container div fo the add todo input and other */}
        <div className="container">

          {/* defining the row */}
          <div className="row d-flex justify-content-center mt-5">

            {/* Main heading */}
            <h2 className="text-secondary text-center display-3 fw-bold mt-5">MY TODO APP</h2>

            {/* Defining the column inside the row */}
            <div className="col-xxl-8 mt-5">
              <h1 className='text-center display-4 fw-bold text-white'>ADD YOUR TASKS</h1>

              {/* Input tag to add the todos */}
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

                {/* button to add the todo */}
                <button className="btn btn-info" type="submit" onClick={addTask} id="button-addon2">
                  Add Task
                </button>
              </div>
            </div>
            {/* The column is end here */}
          </div>
          {/* The row for this input or button tag is end here */}



          {/* row div to wrap our todos */}
          <div className="row d-flex justify-content-center">


            {/* here we map over the addTodo state variable to show the particular todo */}
            {addTodo.map((item) => (

              // Column for showing the todos inside the row
              <div className="col-xxl-8" key={item.id}>
                <div className="card w-100 mb-3 shadow-lg">
                  <div className="card-body">


                    {/* Todo or task heading */}
                    <h5 className={item.marked ? "card-header text-decoration-line-through" : "card-header"}>{item.task}</h5>

                    <span>

                      {/* para for the sub heading */}
                      <p>{subHeading}</p>

                      {/* Button for add the sub heading */}
                      <button onClick={handleSubHeading} className='btn btn-sm btn-outline-primary my-3'>add sub heading</button>

                      {/* button for deleting the sub heading */}
                      <button onClick={handleDeleteSubHeading} className='btn btn-sm btn-outline-primary my-3'>Delete heading</button>


                    </span>


                    {/* para for showing the length of the todo */}
                    <p>Total Number of Words:{item.length}</p>
                    <div className="d-flex justify-content-between flex-wrap  ">

                      {/* button for delete the todo */}
                      <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>
                        Delete
                      </button>

                      {/* button for mark the todo */}
                      <button className="btn btn-primary" onClick={() => handleMark(item.id)}>
                        {item.marked ? "Unmark" : "Mark"}
                      </button>

                      {/* button for upperCase the todo */}
                      <button className='btn btn-success' onClick={() => handleUpperCase(item.id)}>
                        To UpperCase
                      </button>

                      {/* button for lowerCase the todo */}
                      <button className='btn btn-info' onClick={() => handleLowerCase(item.id)}>
                        To LowerCase
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* the row for the todos are end here */}
        </div>
        {/* the column for todo is end here */}
      </div>
      {/* the container for input tag and other is end here */}
    </>
  );
};

export default Todo;
