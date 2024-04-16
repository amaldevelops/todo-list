// export function addTask()
// {
//     console.log("addTask Imported");
// }

export class addTask
{
    constructor(task)
    {
        console.log(task);
        const addNewTask=document.querySelector(".addNewTask");
        addNewTask.onclick=function()
        {
            alert("Button clicked");
        }
    }

    saveTask(saved)
    {
        console.log(saved)
    }
}
