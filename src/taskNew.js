// Only function of this module is to Add New tasks as per user request and changes will be stored by calling the localStorageAccess module

import {localStorageAccess} from "./localStorageAccess.js";
import {initializeLocalStorage} from "./index.js"

export class taskNew
{
    constructor()
    {

    }

    saveTask(newTaskObject)
    {

        // const saveTask=new localStorageAccess();
        // return saveTask.localStorageAccessWrite(newTaskObject);
        console.log(typeof(newTaskObject));

        return initializeLocalStorage.localStorageAccessWrite(newTaskObject);

    }
}
