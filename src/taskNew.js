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
                // console.log(setProjectName);
                let addNewTask=newTaskObject["tasks"][0];
                // console.log(addNewTask);
                
                for (let i=0; i<=currentLocalStorage["completeTaskList"].length;i++ )
                    {

                        if (currentLocalStorage["completeTaskList"][i]["projectName"]==setProjectName)
                            {
                                // console.log("Found the Project");
                                console.log(currentLocalStorage["completeTaskList"][i]["projectName"]);
                                currentLocalStorage["completeTaskList"][i]["tasks"].push(addNewTask);
                                return initializeLocalStorage.localStorageAccessWrite(currentLocalStorage);


                            }
                        
                        else
                        {
                            console.log("Project Not found");
                            // console.log(currentLocalStorage["completeTaskList"][i]["projectName"]);
                            
                        }
                        // console.log(currentLocalStorage);


                    }

        
            }
        else if(initializeLocalStorage.localStorageStatus()==="Empty Storage")
            {
                alert("Local Storage is Empty")
                return initializeLocalStorage.localStorageAccessWrite(this.newTaskObject);
            }
        


    }
}

