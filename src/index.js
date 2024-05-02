//This module contains the application logic for the To Do App and it will act as the intermediary for all the other modules
import "./index.css";
import{displayController} from "./displayController.js";
import {taskNew} from "./taskNew.js";
import {localStorageAccess} from "./localStorageAccess.js";

// Test Section
export const newUserInput=new displayController();
export const initializeLocalStorage=new localStorageAccess();


const runProgram=function()
{
    console.log("Index.js loaded");

    newUserInput.addNewTaskFormCaptureButtonClicked();
    newUserInput.urgentAndImportantButtonClicked();
    newUserInput.notUrgentButImportantButtonClicked();
    
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

runProgram();