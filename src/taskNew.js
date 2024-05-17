// Only function of this module is to Add New tasks as per user request and changes will be stored by calling the localStorageAccess module

import {localStorageAccess} from "./localStorageAccess.js";
import {initializeLocalStorage} from "./index.js";
import {newProjectAdd} from "./index.js"

export class taskNew
{
    constructor()
    {


    }


    saveTask(newTaskObject)
    {
        let setProjectName=(newTaskObject["completeTaskList"][0]["projectName"]).toString();//This will get the project name from new task


        if (initializeLocalStorage.localStorageStatus()==="Storage NOT Empty")
            {
                let currentLocalStorage=initializeLocalStorage.localStorageAccessRead();
                // console.log(setProjectName);
                let addNewTask=newTaskObject["completeTaskList"][0]["tasks"][0];//This will get the Tasks from new task
                
                for (let i=0; i<currentLocalStorage["completeTaskList"].length;i++ )
                    {
                        console.log(currentLocalStorage["completeTaskList"].length);

                        if (currentLocalStorage["completeTaskList"][i]["projectName"]===setProjectName)//This code will add tasks to existing project lists
                            {
                                console.log(currentLocalStorage["completeTaskList"][i]["projectName"]);
                                currentLocalStorage["completeTaskList"][i]["tasks"].push(addNewTask);
                                console.log(currentLocalStorage);
                             
                                return initializeLocalStorage.localStorageAccessWrite(currentLocalStorage);


                            }

                        else if (currentLocalStorage["completeTaskList"][i]["projectName"]!==setProjectName) //This code will add a new Project list if it does not exist
                        {
                            // currentLocalStorage["completeTaskList"].push({projectName:setProjectName,tasks:[addNewTask]});
                            // currentLocalStorage["completeTaskList"].push({projectName:setProjectName});
                            // console.log(currentLocalStorage);

                            // return initializeLocalStorage.localStorageAccessWrite(currentLocalStorage);
                            newProjectAdd.newProjectAdd(setProjectName);

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

