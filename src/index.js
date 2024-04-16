import "./index.css";
import {addTask} from "./addTask.js"

// Test Section
const newTask=new addTask();
newTask.saveTask("Hello Amal");


function component() {
    const element = document.createElement('div');
 
    // Lodash, now imported by this script
    element.innerHTML = "Hello Webpack";
   element.classList.add('hello');
 
    return element;
  }
 
  document.body.appendChild(component());