// Only functionality of this module is to capture user inputs and to update the display as required

import {taskNew} from "./taskNew.js";
import {taskEdit} from "./taskEdit.js";
import {initializeLocalStorage} from "./index.js";
import {newTaskEdit} from "./index.js";
import {taskDeleteNow} from "./index.js";
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
          newUserInput.clearDisplayForCurrentTaskList();
          newUserInput.updateDisplayTaskList(0);
     
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
          this.clearDisplayForCurrentTaskList();
          this.updateDisplayTaskList(0);

        });

      }

    notUrgentButImportantButtonClicked()
      {
        document.querySelector(".notUrgentButImportantButton").addEventListener('click',()=>
        {
          this.clearDisplayForCurrentTaskList();
          this.updateDisplayTaskList(1);
          
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
               
          const taskListDiv=document.querySelector(".taskDisplay");
          console.log(currentLocalStorage["completeTaskList"][this.selectedProject]["tasks"]);

          const title=document.createElement("h1");
          title.innerText="Welcome to Amal's To do App, below you can find the selected Project list";
          taskListDiv.append(title);


          for (let i=0;i<currentLocalStorage["completeTaskList"][this.selectedProject]["tasks"].length;i++)
            {
              const projectName=document.createElement("h1");
              projectName.innerText="Project Name" + JSON.stringify(currentLocalStorage["completeTaskList"][this.selectedProject]["projectName"]);
              taskListDiv.append(projectName);

              const taskDiv=document.createElement("div");
              taskDiv.classList.add("individualTaskDetails");
              taskListDiv.append(taskDiv);
        
              const taskFullDetails=document.createElement("p");
              taskFullDetails.innerText=JSON.stringify(currentLocalStorage["completeTaskList"][this.selectedProject]["tasks"][i]);
              // taskFullDetails.innerText=(currentLocalStorage["completeTaskList"][this.selectedProject]["tasks"][i]["taskTitle"]);
              taskDiv.append(taskFullDetails);

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
                  const clickedEditButtonInstance=this.editButton;
                  const taskFullDetailsInstance=taskFullDetails;

                  newTaskEdit.edit(taskFullDetailsInstance);


                });

              deleteButton.addEventListener('click',()=>
                {
                  taskDeleteNow.delete();
                  
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




