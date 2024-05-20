// Only function of this module is to Edit any tasks as per user request and changes will be stored by calling the localStorageAccess module
import {initializeLocalStorage} from "./index.js";

export class taskEdit
{

    constructor()
    {
        
    }

    edit(clickedEditButtonInstance)
    {
        
        console.log("Edit Button Clicked");
        console.log(clickedEditButtonInstance);
        console.log(typeof(clickedEditButtonInstance));

        // Get the inner HTML content of the element
        const innerHTML = clickedEditButtonInstance.innerHTML;
        console.log("Inner HTML is : " + innerHTML);

        // Extracting JSON string from the HTML string
        const jsonString = innerHTML.match(/\{.*\}/)[0];

        // Parsing JSON string into a JavaScript object
        const jsonObject = JSON.parse(jsonString);

        // Accessing the taskTitle property
        const taskTitle = jsonObject.taskTitle;

        // Output the taskTitle
        console.log(taskTitle);

        // console.log(initializeLocalStorage.localStorageAccessRead());
        this.taskEditForm(jsonObject);

    }

    taskEditForm(taskDetailsToEdit)
    {
        // const taskEditDiv=document.createElement("div");
        
        // const taskEditForm=document.createElement("form");
        console.log("Task Edit Form activated")
        console.log(taskDetailsToEdit.projectName);
        const popover=document.querySelector(".newTaskDiv");
        const popupOpened = popover.togglePopover();


        let form = document.querySelector("#newTaskForm");
        form.querySelector("select[name='projectName']").value = "urgentAndImportant";
        form.querySelector("input[name='taskTitle']").value = taskDetailsToEdit.taskTitle;
        form.querySelector("input[name='taskDetails']").value = taskDetailsToEdit.taskDetails;
        form.querySelector("input[name='dueDate']").value = taskDetailsToEdit.dueDate;
        form.querySelector("select[name='priority']").value = taskDetailsToEdit.priority;

    }
}