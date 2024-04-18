export class userInput
{
    constructor(task)
    {
        console.log(task);

        document.querySelector(".addNewTask").addEventListener('click', function()
    {
        // const mainPane=document.querySelector(".mainPane");
        

        let addNewTaskFormData = new FormData(document.querySelector("#newTaskForm"));
        let newTaskObject = {   
                            taskTitle:addNewTaskFormData.getAll("taskTitle"),
                            taskDetails:addNewTaskFormData.getAll("taskDetails"),
                            dueDate:addNewTaskFormData.getAll("dueDate"),
                            priority:addNewTaskFormData.getAll("priority"),
                            projectName:addNewTaskFormData.getAll("projectName")

                        };

        console.log(newTaskObject);


    })

    }

    saveTask(saved)
    {
        console.log(saved)
    }
}

const newTask=new userInput();
newTask.saveTask("Hello Amal");
