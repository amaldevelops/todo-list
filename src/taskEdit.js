// Only function of this module is to Edit any tasks as per user request and changes will be stored by calling the localStorageAccess module
import {initializeLocalStorage} from "./index.js";
import {uuidInstance} from "./index.js";

export class taskEdit
{

    constructor()
    {
        this.currentStorage = initializeLocalStorage.localStorageAccessRead();

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

    taskEditForm(taskDetailsToEdit)
    {
        // console.log("Task Edit Form activated")
        // console.log(taskDetailsToEdit.projectName);
        const popover=document.querySelector(".newTaskDiv");
        const popupOpened = popover.togglePopover();


        let form = document.querySelector("#newTaskForm");
        form.querySelector("select[name='projectName']").value = "urgentAndImportant";
        form.querySelector("input[name='taskTitle']").value = taskDetailsToEdit.taskTitle;
        form.querySelector("input[name='taskDetails']").value = taskDetailsToEdit.taskDetails;
        form.querySelector("input[name='dueDate']").value = taskDetailsToEdit.dueDate;
        form.querySelector("select[name='priority']").value = taskDetailsToEdit.priority;

        const UUID=document.querySelector('.UUID');
        UUID.innerText=taskDetailsToEdit.UUID;

        
        // const taskIndex=this.findUUID(UUID.innerHTML);

        const taskIndex=uuidInstance.findUUID(UUID.innerHTML);

        
        
        
        this.saveAmendedTask(taskIndex);
  

    }

    // findUUID(searchUUID)
    // {

    //     for (let i = 0; i < this.currentStorage['completeTaskList'].length; i++) {
    //         let tasks = this.currentStorage['completeTaskList'][i]['tasks'];
    
    //         // Iterate over each task in the 'tasks' array
    //         for (let j = 0; j < tasks.length; j++) {
    //             if (tasks[j].UUID === searchUUID) {
    //                 console.log(`Task found at index ${i} in 'completeTaskList', task index ${j} in 'tasks':`, tasks[j]);
    //                 return [i,j];
    //                 // return (["completeTaskList"][i]["tasks"][j]); // Found the task, no need to continue searching
    //             }
    //         }
    //     }
    
    //     console.log("No task found with the UUID:", searchUUID);

    // }

    saveAmendedTask(taskIndex)
    {
        document.querySelector(".editTask").addEventListener('click',()=>
            {
                       
              let addNewTaskFormData = new FormData(document.querySelector("#newTaskForm"));
              let newTaskObject = {   
                                    completeTaskList:[{
                                    projectName:addNewTaskFormData.getAll("projectName").toString(),
                                    
                                    tasks:[{taskTitle:addNewTaskFormData.getAll("taskTitle").toString(),
                                    taskDetails:addNewTaskFormData.getAll("taskDetails").toString(),
                                    dueDate:addNewTaskFormData.getAll("dueDate").toString(),
                                    priority:addNewTaskFormData.getAll("priority").toString()
                                    }]
                                    }]
                                    
        
                                };
        
              
              console.log(taskIndex);

              console.log(newTaskObject);

              

            (this.currentStorage["completeTaskList"][taskIndex[0]]["tasks"][taskIndex[1]])=newTaskObject["completeTaskList"][0]["tasks"][0];

            console.log(this.currentStorage);

            initializeLocalStorage.localStorageAccessWrite(this.currentStorage);



            // console.log(this.currentStorage["completeTaskList"][taskIndex[0]]["tasks"][taskIndex[1]]);


            
            //   return (newTaskObject);

    // 
            //   newUserInput.clearDisplayForCurrentTaskList();
            //   newUserInput.updateDisplayTaskList(0);
         
            });
    }
}