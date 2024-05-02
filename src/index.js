//This module contains the application logic for the To Do App and it will act as the intermediary for all the other modules

//ES6 Module Imports
import "./index.css";
import{displayController} from "./displayController.js";
import {taskNew} from "./taskNew.js";
import {localStorageAccess} from "./localStorageAccess.js";

//ES6 Module Exports
export const newUserInput=new displayController();
export const initializeLocalStorage=new localStorageAccess();

// Program initialization code
const runProgram=function()
{
    console.log("Index.js loaded");

    newUserInput.addNewTaskFormCaptureButtonClicked();
    newUserInput.urgentAndImportantButtonClicked();
    newUserInput.notUrgentButImportantButtonClicked();
    newUserInput.addNewProjectButtonClicked();
    
    initializeLocalStorage.localStorageAccessWrite();

    //Code to check for Local Storage availability
    if (initializeLocalStorage.storageAvailable("localStorage")) 
    {
        console.log("Yippee! We can use localStorage awesomeness");
    } 
    
    else 
    
    {
        console.log("Too bad, no localStorage for us");
    }

}  


runProgram(); // Run the program