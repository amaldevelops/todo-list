// Only functionality of this module is to capture user inputs and to update the display as required

import {taskNew} from "./taskNew.js";
import {taskEdit} from "./taskEdit.js";
import {initializeLocalStorage} from "./index.js";
import {newTaskEdit} from "./index.js";
import {newProjectAdd} from "./index.js";
import {taskNewSave} from "./index.js";
import {newUserInput} from "./index.js";

export class displayController
{
    constructor()
    {



    }

    addNewTaskFormCaptureButtonClicked()
    {
        document.querySelector(".addNewTask").addEventListener('click',()=>
        {
          let addNewTaskFormData = new FormData(document.querySelector("#newTaskForm"));
          let newTaskObject;
    
            newTaskObject = {   
                                completeTaskList:[{
                                projectName:addNewTaskFormData.getAll("projectName"),
                                
                                tasks:[{taskTitle:addNewTaskFormData.getAll("taskTitle").toString(),
                                taskDetails:addNewTaskFormData.getAll("taskDetails").toString(),
                                dueDate:addNewTaskFormData.getAll("dueDate").toString(),
                                priority:addNewTaskFormData.getAll("priority").toString()}]
                                }]
                                
    
                            };

                            console.log(newTaskObject["completeTaskList"][0]["projectName"]);
                            console.log(newTaskObject);
    
            taskNewSave.saveTask(newTaskObject);
     
        });

 
    }

    addNewProjectButtonClicked()
      {
        document.querySelector(".addNewProjectButton").addEventListener('click',()=>
        {
          newProjectAdd.newProjectAdd();

        });
            
      }

    urgentAndImportantButtonClicked()
      {
            document.querySelector(".urgentImportantButton").addEventListener('click',()=>
            {
              // const urgentImportantData=initializeLocalStorage.localStorageAccessRead();
              newUserInput.clearDisplayForCurrentTaskList();
              newUserInput.updateDisplayTaskList(0);
              // console.log(urgentImportantData);

            });

      }

    notUrgentButImportantButtonClicked()
      {
        document.querySelector(".notUrgentButImportantButton").addEventListener('click',()=>
        {
          // const notUrgentButImportantData=initializeLocalStorage.localStorageAccessRead();
          // console.log(notUrgentButImportantData);

          // newTaskEdit.edit();
          newUserInput.clearDisplayForCurrentTaskList();
          newUserInput.updateDisplayTaskList(1);
          
        });
            
      }

    
    updateDisplayTaskList(selectedProject)
    {
      this.selectedProject=selectedProject;
        
      if (initializeLocalStorage.localStorageStatus()==="Empty Storage")
        {
          console.log("Local Storage is empty");
        }

        else
        {
          console.log("Local Storage is NOT empty");

          const currentLocalStorage=initializeLocalStorage.localStorageAccessRead();
          console.log(currentLocalStorage);
          console.log(this.selectedProject);
          // console.log(currentLocalStorage["completeTaskList"].length);

               
          const taskListDiv=document.querySelector(".taskDisplay");
          console.log(currentLocalStorage["completeTaskList"][this.selectedProject]["tasks"]);


          for (let i=0;i<currentLocalStorage["completeTaskList"][this.selectedProject]["tasks"].length;i++)
            {
              const taskDiv=document.createElement("div");
              taskDiv.classList.add("individualTaskDetails");
              taskListDiv.append(taskDiv);
        
              const projectName=document.createElement("h2");
              // projectName.innerText=currentLocalStorage["urgentAndImportant"][i];
              projectName.innerText=JSON.stringify(currentLocalStorage["completeTaskList"][0]["tasks"][i]);
              taskDiv.append(projectName);

              this.editButton=document.createElement("button");
              this.editButton.classList.add("editButton");
              this.editButton.innerText="Edit Task";
              taskDiv.append(this.editButton);
        
              const deleteButton=document.createElement("button");
              deleteButton.classList.add("deleteButton");
              deleteButton.innerText="Delete Task";
              taskDiv.append(deleteButton);

              this.editButton.addEventListener('click',()=>
                {
                  console.log("Edit Button Clicked");
                });

              deleteButton.addEventListener('click',()=>
                {
                  console.log("Delete Button Clicked");
                });
        }
        }
      
    }

    clearDisplayForCurrentTaskList()
    {
      
      const taskListDiv = document.querySelector(".taskDisplay");

    // Remove all child elements of taskListDiv
    while (taskListDiv.firstChild) {
        taskListDiv.removeChild(taskListDiv.firstChild);
    }





    }

}




