// Only functionality of this module is to capture user inputs and to update the display as required

import { taskNew } from "./taskNew.js";

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
                                taskTitle:addNewTaskFormData.getAll("taskTitle"),
                                taskDetails:addNewTaskFormData.getAll("taskDetails"),
                                dueDate:addNewTaskFormData.getAll("dueDate"),
                                priority:addNewTaskFormData.getAll("priority"),
                                projectName:addNewTaskFormData.getAll("projectName")
    
                            };
    
            this.addNewTask.saveTask(newTaskObject);
            
        })

        

    }

    addNewProjectButtonClicked()
      {
            
      }

    urgentAndImportantButtonClicked()
      {
            

      }

    notUrgentButImportantButtonClicked()
      {
            
      }

    
    updateDisplayTaskList()
    {

    }


}




