import { taskNew } from "./taskNew.js";

export class displayController
{
    constructor()
    {
        this.addNewTask=new taskNew();
        this.addNewTaskFormCapture();

    }

    addNewTaskFormCapture()
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


}




