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
      const taskListDiv=document.querySelector(".taskDisplay");

      const taskDiv=document.createElement("div");
      taskListDiv.append(taskDiv);


      const projectName=document.createElement("h2");
      const currentLocalStorage=initializeLocalStorage.localStorageAccessRead();
      console.log(currentLocalStorage);
      projectName.innerText=JSON.stringify(currentLocalStorage);

      taskDiv.append(projectName);




    }


}




