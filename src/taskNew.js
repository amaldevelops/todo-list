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
                let currentLocalStorage=initializeLocalStorage.localStorageAccessRead();
                let setProjectName=(newTaskObject["projectName"]).toString();
                console.log(setProjectName);
                (currentLocalStorage["completeTaskList"][0]["tasks"]).push(newTaskObject);
                
                for (let i=0; i<currentLocalStorage["completeTaskList"].length;i++ )
                    {

                        if (currentLocalStorage["completeTaskList"][i]["projectName"]===setProjectName)
                            {
                                console.log("Found the Project");
                                console.log(currentLocalStorage["completeTaskList"][i]["projectName"]);
                            }
                        
                        else
                        {
                            console.log("Project Not found");
                            console.log(currentLocalStorage["completeTaskList"][i]["projectName"]);
                        }

                    }

        
                return initializeLocalStorage.localStorageAccessWrite(currentLocalStorage);
            }
        else if(initializeLocalStorage.localStorageStatus()==="Empty Storage")
            {
                alert("Local Storage is Empty")
                return initializeLocalStorage.localStorageAccessWrite(this.newTaskObject);
            }
        


    }
}

