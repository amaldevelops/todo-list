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
      if (initializeLocalStorage.localStorageStatus()==="Empty Storage")
        {
          console.log("Local Storage is empty");
        }

        else
        {
          console.log("Local Storage is NOT empty");

          const currentLocalStorage=initializeLocalStorage.localStorageAccessRead();
      console.log(currentLocalStorage);
      console.log(currentLocalStorage["urgentAndImportant"].length);
      
      const taskListDiv=document.querySelector(".taskDisplay");

      for (let i=0;i<currentLocalStorage["urgentAndImportant"].length;i++)
        {
          const taskDiv=document.createElement("div");
          taskDiv.classList.add("individualTaskDetails");
          taskListDiv.append(taskDiv);
    
          const projectName=document.createElement("h2");
          // projectName.innerText=currentLocalStorage["urgentAndImportant"][i];
          projectName.innerText=JSON.stringify(currentLocalStorage["urgentAndImportant"][i]);
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


}




