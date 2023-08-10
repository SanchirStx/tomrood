import "./App.css";
import Header from "./component/Header";
// import Card from "./components/Card";
// import Home from "./components/Home";
import Tasks from "./component/Tasks";
import React, { useState } from "react";
import AddTask from "./component/AddTask";
// import HideBtn from "./component/hideBtn"
import Task from "./component/Task";
import Tolow from"./component/Tolow";
import Swiper from"./component/Swiper"
import HomeScreen from "./component/HomeScreen";
import ContactScreen from "./component/ContactScreen";
import LayoutScreen from "./component/LayoutScreen";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


// jsx

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Read a book",  
    isVisible: true },
    { id: 2, text: "Shop for groceries",  
    isVisible: true },
    { id: 3, text: "Meet John", 
     isVisible: true },
  ]);
  // const ner = "Baigal";
  // let bool = false;

  // delete
  const deleteTask = (id) => {
    // console.log("delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // add Task

  const addTask = (task) => {
    const taskId = Math.floor(Math.random() * 100000);
    const newTask = { id: taskId, text: task };
    console.log(newTask);
    setTasks([...tasks, newTask]);
  };

  // const [showAddTask, setShowAddTask] = useState(false);

  return (
    <div className="container">

      {/* <div className="App">{1 + 1}</div>
      <h2>{ner}</h2>
      <h1>{bool === true ? "True bna" : "False bna"}</h1> */}
      {/* <Card /> */}
      {/* <Home /> */}

      {/* <Header onAdd={() => setShowAddTask(!showAddTask)} />

      {showAddTask && <AddTask onAdd={addTask}/>}

      <br/>

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No Tasks"
      )} */}
      {/* <HideBtn todos={tasks} /> */}
      {/* <Tolow/> */}
      {/* <Swiper/> */}
    
      <Router>
      <Routes>
            <Route path="/" element={<LayoutScreen/>}/>
            <Route path="home" element={<HomeScreen/>}/>
            <Route path="contact" element={<ContactScreen/>}/>
      </Routes>
      </Router>
    </div>
  
  );
}


export default App; 