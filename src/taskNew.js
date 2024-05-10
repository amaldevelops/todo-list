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
       

        if (initializeLocalStorage.localStorageStatus()==="Storage NOT Empty")
            {
                // alert("Local Storage is Not Empty")
                let currentLocalStorage=initializeLocalStorage.localStorageAccessRead();
                // let setProjectName=newTaskObject["completeTaskList"][0]["projectName"];
                // currentLocalStorage[setProjectName].push(this.newTaskObject);
                // console.log(typeof(currentLocalStorage));
                console.log(newTaskObject);
                // console.log(initializeLocalStorage)
        
                return initializeLocalStorage.localStorageAccessWrite(currentLocalStorage);
            }
        else if(initializeLocalStorage.localStorageStatus()==="Empty Storage")
            {
                alert("Local Storage is Empty")
                return initializeLocalStorage.localStorageAccessWrite(this.newTaskObject);
            }
        


    }
}

