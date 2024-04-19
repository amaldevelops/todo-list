import { addTask } from "./addTask";

export class userInput
{
    constructor()
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

        console.log(newTaskObject);
        // const newTask=
        new addTask(newTaskObject);
        // newTask(newTaskObject);
        console.log(typeof(newTask));

        return newTaskObject;



    })

    }

    saveTask(saved)
    {
        console.log(saved)
    }
}

const newTask=new userInput();
newTask.saveTask("Hello Amal");
