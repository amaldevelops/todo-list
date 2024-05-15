// Only function of this module is to Add New tasks as per user request and changes will be stored by calling the localStorageAccess module

import {localStorageAccess} from "./localStorageAccess.js";
import {initializeLocalStorage} from "./index.js";

export class taskNew
{


    saveTask(newTaskObject)
    {
       

        if (initializeLocalStorage.localStorageStatus()==="Storage NOT Empty")
            {
                let currentLocalStorage=initializeLocalStorage.localStorageAccessRead();
                let setProjectName=(newTaskObject["completeTaskList"][0]["projectName"]).toString();
                console.log(setProjectName);
                let addNewTask=newTaskObject["completeTaskList"][0]["tasks"];
                
                for (let i=0; i<currentLocalStorage["completeTaskList"].length;i++ )
                    {
                        console.log(currentLocalStorage["completeTaskList"].length);

                        if (currentLocalStorage["completeTaskList"][i]["projectName"]===setProjectName)
                            {
                                console.log(currentLocalStorage["completeTaskList"][i]["projectName"]);
                                currentLocalStorage["completeTaskList"][i]["tasks"].push(addNewTask);
                                console.log(currentLocalStorage);
                                return initializeLocalStorage.localStorageAccessWrite(currentLocalStorage);


                            }

                        else if (currentLocalStorage["completeTaskList"][i]["projectName"]!=setProjectName)
                        {
                            currentLocalStorage["completeTaskList"].push({projectName:setProjectName},addNewTask);
                            console.log(currentLocalStorage);
                            return initializeLocalStorage.localStorageAccessWrite(currentLocalStorage);

                        };
                        
                        

                    }
                    console.log("Project Not found");

        
            }
        
        else if(initializeLocalStorage.localStorageStatus()==="Empty Storage")
            {
                console.log("Local Storage is Empty")
                return initializeLocalStorage.localStorageAccessWrite(newTaskObject);
            }
        


    }
}

