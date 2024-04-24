import { addTask } from "./addTask";

export class userInput
{
    constructor()
    {


    }

    addNewTaskFormCapture()
    {
        document.querySelector(".addNewTask").addEventListener('click', function()
        {
    
            let addNewTaskFormData = new FormData(document.querySelector("#newTaskForm"));
            let newTaskObject = {   
                                taskTitle:addNewTaskFormData.getAll("taskTitle"),
                                taskDetails:addNewTaskFormData.getAll("taskDetails"),
                                dueDate:addNewTaskFormData.getAll("dueDate"),
                                priority:addNewTaskFormData.getAll("priority"),
                                projectName:addNewTaskFormData.getAll("projectName")
    
                            };
    
            return addNewTask.saveTask(newTaskObject);
            
        })

    }


}

const newUserInput=new userInput();
newUserInput.addNewTaskFormCapture();

const addNewTask=new addTask();

