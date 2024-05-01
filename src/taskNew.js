// Only function of this module is to Add New tasks as per user request and changes will be stored by calling the localStorageAccess module

// export function addTask()
// {
//     console.log("addTask Imported");
// }

import {localStorageAccess} from "./localStorageAccess";

export class taskNew
{
    constructor()
    {

    }

    saveTask(newTaskObject)
    {
        console.log(newTaskObject);
        const saveTask=new localStorageAccess();

    }
}
