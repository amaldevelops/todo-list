//This module contains the application logic for the To Do App and it will act as the intermediary for all the other modules
import "./index.css";
import{displayController} from "./displayController.js";
import {taskNew} from "./taskNew.js";
import { localStorageAccess } from "./localStorageAccess.js";

// Test Section

const newUserInput=new displayController();
// newUserInput.addNewTaskFormCapture();

const testWrite=new localStorageAccess();
testWrite.localStorageAccessWrite();
console.log(testWrite.localStorageAccessRead());