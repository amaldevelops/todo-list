// Only function of this module is to Add New tasks as per user request and changes will be stored by calling the localStorageAccess module

import {localStorageAccess} from "./localStorageAccess.js";
import {initializeLocalStorage} from "./index.js";

export class taskNew
{
    constructor()
    {
        
        
    }

    saveTask(newTaskObject)
    {

        let currentLocalStorage=initializeLocalStorage.localStorageAccessRead();
        let setProjectName=newTaskObject["projectName"];
        currentLocalStorage[setProjectName].push(newTaskObject);
        console.log(typeof(currentLocalStorage));
        console.log(currentLocalStorage);

        return initializeLocalStorage.localStorageAccessWrite(currentLocalStorage);

    }
}

