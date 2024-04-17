export class userInput
{
    constructor(task)
    {
        console.log(task);

        document.querySelector(".addNewTask").addEventListener('click', function()
    {
        const mainPane=document.querySelector(".mainPane");
        alert("Hello Amal");



    })

    }

    saveTask(saved)
    {
        console.log(saved)
    }
}

const newTask=new userInput();
newTask.saveTask("Hello Amal");
