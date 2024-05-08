// Only function of this module is to Add New tasks as per user request and changes will be stored by calling the localStorageAccess module

import {localStorageAccess} from "./localStorageAccess.js";
import {initializeLocalStorage} from "./index.js";

export class taskNew
{
    // constructor()
    // {
        
        
    // }

    saveTask(newTaskObject)
    {
       
        this.newTaskObject=newTaskObject;

        if (initializeLocalStorage.localStorageStatus()==="Storage NOT Empty")
            {
                // alert("Local Storage is Not Empty")
                let currentLocalStorage=initializeLocalStorage.localStorageAccessRead();
                let setProjectName=newTaskObject["projectName"];
                currentLocalStorage[setProjectName].push(this.newTaskObject);
                console.log(typeof(currentLocalStorage));
                console.log(currentLocalStorage);
        
                return initializeLocalStorage.localStorageAccessWrite(currentLocalStorage);
            }
        else if(initializeLocalStorage.localStorageStatus()==="Empty Storage")
            {
                alert("Local Storage is Empty")
                return initializeLocalStorage.localStorageAccessWrite(this.newTaskObject);
            }
        


    }
}

