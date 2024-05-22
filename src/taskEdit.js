// Only function of this module is to Edit any tasks as per user request and changes will be stored by calling the localStorageAccess module
import {initializeLocalStorage} from "./index.js";
import {uuidInstance} from "./index.js";
import {newUserInput} from "./index.js";

export class taskEdit
{

    constructor()
    {
        

    }

    edit(clickedEditButtonInstance)
    {
        
        // Get the inner HTML content of the element
        const innerHTML = clickedEditButtonInstance.innerHTML;
        // console.log("Inner HTML is : " + innerHTML);

        // Extracting JSON string from the HTML string
        const jsonString = innerHTML.match(/\{.*\}/)[0];

        // Parsing JSON string into a JavaScript object
        const jsonObject = JSON.parse(jsonString);

        // Accessing the taskTitle property
        const taskTitle = jsonObject.taskTitle;

        // Output the taskTitle
        // console.log(taskTitle);

        // console.log(initializeLocalStorage.localStorageAccessRead());
        this.taskEditForm(jsonObject);

    }

    taskEditForm(taskDetailsToEdit) //This will bring up the task input form with the existing task details
    {
        // console.log("Task Edit Form activated")
        // console.log(taskDetailsToEdit.projectName);
        const popover=document.querySelector(".newTaskDiv");
        const popupOpened = popover.togglePopover();


        let form = document.querySelector("#newTaskForm");
        form.querySelector("select[name='projectName']").value = taskDetailsToEdit["projectName"];
        form.querySelector("input[name='taskTitle']").value = taskDetailsToEdit.taskTitle;
        form.querySelector("input[name='taskDetails']").value = taskDetailsToEdit.taskDetails;
        form.querySelector("input[name='dueDate']").value = taskDetailsToEdit.dueDate;
        form.querySelector("select[name='priority']").value = taskDetailsToEdit.priority;
        form.querySelector("input[name='UUID']").value = taskDetailsToEdit["UUID"];

        // const UUID=document.querySelector('.UUID');
        // UUID.innerText=taskDetailsToEdit.UUID;

        
        // const taskIndex=this.findUUID(UUID.innerHTML);

        const taskIndex=uuidInstance.findUUID(taskDetailsToEdit["UUID"]);
              
        this.saveAmendedTask(taskIndex);
  

    }

    saveAmendedTask(taskIndex)
    {
        let currentStorage = initializeLocalStorage.localStorageAccessRead();
        document.querySelector(".editTask").addEventListener('click',()=>
            {
                       
              let addNewTaskFormData = new FormData(document.querySelector("#newTaskForm"));
              let newTaskObject = {   
                                    completeTaskList:[{
                                    projectName:addNewTaskFormData.getAll("projectName").toString(),
                                    
                                    tasks:[{taskTitle:addNewTaskFormData.getAll("taskTitle").toString(),
                                    taskDetails:addNewTaskFormData.getAll("taskDetails").toString(),
                                    dueDate:addNewTaskFormData.getAll("dueDate").toString(),
                                    priority:addNewTaskFormData.getAll("priority").toString(),
                                    UUID:addNewTaskFormData.getAll("UUID").toString(),
                                    projectName:addNewTaskFormData.getAll("projectName").toString()
                                    }]
                                    }]
                                    
        
                                };
        
              
              console.log(taskIndex);

              console.log(newTaskObject);

              

            (currentStorage["completeTaskList"][taskIndex[0]]["tasks"][taskIndex[1]])=newTaskObject["completeTaskList"][0]["tasks"][0];

            console.log(currentStorage);

            initializeLocalStorage.localStorageAccessWrite(currentStorage);

            newUserInput.clearDisplayForCurrentTaskList();
            newUserInput.updateDisplayTaskList(0);


         
            });
    }
}