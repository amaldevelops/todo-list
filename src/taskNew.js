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

       
        // console.log(typeof(newTaskObject));
        // console.log(newTaskObject.projectName[0]);
        console.log(newTaskObject["projectName"]);

        return initializeLocalStorage.localStorageAccessWrite(newTaskObject["projectName"]);

    }
}
