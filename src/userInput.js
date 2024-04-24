import { addTask } from "./addTask.js";

export class userInput
{
    constructor()
    {
        this.addNewTask=new addTask();
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




