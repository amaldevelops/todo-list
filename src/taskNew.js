// Only function of this module is to Add New tasks as per user request and changes will be stored by calling the localStorageAccess module

import {localStorageAccess} from "./localStorageAccess";

export class taskNew
{
    constructor()
    {

    }

    saveTask(newTaskObject)
    {
        // console.log(newTaskObject);
        const saveTask=new localStorageAccess();
        return saveTask.localStorageAccessWrite(newTaskObject);

    }
}
