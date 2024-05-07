// Only functionality of this module is to capture user inputs and to update the display as required

import {taskNew} from "./taskNew.js";
import {taskEdit} from "./taskEdit.js";
import {initializeLocalStorage} from "./index.js";
import {newTaskEdit} from "./index.js";

export class displayController
{
    constructor()
    {
        this.addNewTask=new taskNew();
        this.addNewTaskFormCaptureButtonClicked();

    }

    addNewTaskFormCaptureButtonClicked()
    {
        document.querySelector(".addNewTask").addEventListener('click',()=>
        {
    
            let addNewTaskFormData = new FormData(document.querySelector("#newTaskForm"));
            let newTaskObject = {   
                                projectName:addNewTaskFormData.getAll("projectName"),
                                taskTitle:addNewTaskFormData.getAll("taskTitle"),
                                taskDetails:addNewTaskFormData.getAll("taskDetails"),
                                dueDate:addNewTaskFormData.getAll("dueDate"),
                                priority:addNewTaskFormData.getAll("priority")
                                
    
                            };
    
            return this.addNewTask.saveTask(newTaskObject);
     
        })

 
    }

    addNewProjectButtonClicked()
      {
        document.querySelector(".addNewProjectButton").addEventListener('click',()=>
        {
          alert("Button clicked");
        });
            
      }

    urgentAndImportantButtonClicked()
      {
            document.querySelector(".urgentImportantButton").addEventListener('click',()=>
            {
              const urgentImportantData=initializeLocalStorage.localStorageAccessRead();
              console.log(urgentImportantData);

            });

      }

    notUrgentButImportantButtonClicked()
      {
        document.querySelector(".notUrgentButImportantButton").addEventListener('click',()=>
        {
          // const notUrgentButImportantData=initializeLocalStorage.localStorageAccessRead();
          // console.log(notUrgentButImportantData);

          newTaskEdit.edit();
          


        });
            
      }

    
    updateDisplayTaskList()
    {
      const currentLocalStorage=initializeLocalStorage.localStorageAccessRead();
      console.log(currentLocalStorage);
      
      const taskListDiv=document.querySelector(".taskDisplay");

      const taskDiv=document.createElement("div");
      taskDiv.classList.add("individualTaskDetails");
      taskListDiv.append(taskDiv);

      const projectName=document.createElement("h2");
      projectName.innerText="Project Name: " + JSON.stringify(currentLocalStorage["urgentAndImportant"][0]["projectName"]);
      taskDiv.append(projectName);

      const taskName=document.createElement("p");
      taskName.innerText="Task Title: " + JSON.stringify(currentLocalStorage["urgentAndImportant"][0]["taskTitle"]);
      taskDiv.append(taskName);

      const taskDetails=document.createElement("p");
      taskDetails.innerText="Description: " + JSON.stringify(currentLocalStorage["urgentAndImportant"][0]["Description"]);
      taskDiv.append(taskDetails);

      const dueDate=document.createElement("p");
      dueDate.innerText="Due Date: " + JSON.stringify(currentLocalStorage["urgentAndImportant"][0]["dueDate"]);
      taskDiv.append(dueDate);

      const priority=document.createElement("p");
      priority.innerText="Priority: " + JSON.stringify(currentLocalStorage["urgentAndImportant"][0]["priority"]);
      taskDiv.append(priority);

      const editButton=document.createElement("button");
      editButton.classList.add("editButton");
      editButton.innerText="Edit Task";
      taskDiv.append(editButton);

      const deleteButton=document.createElement("button");
      deleteButton.classList.add("deleteButton");
      deleteButton.innerText="Delete Task";
      taskDiv.append(deleteButton);

      




      




    }


}




