//This Module will create and check for UUID
import { v4 as uuidv4 } from 'uuid';
import {initializeLocalStorage} from "./index.js";


export class uuIDManagement
{
    constructor()
    {   
        
    }

    createNewUUID()
    {
        let newUUID=uuidv4(); // This will generate a random UUID 
        
        return newUUID;
    }

    findUUID(searchUUID)
    {
        let currentStorage=initializeLocalStorage.localStorageAccessRead();
        for (let i = 0; i < currentStorage['completeTaskList'].length; i++) {
            let tasks = currentStorage['completeTaskList'][i]['tasks'];
    
            // Iterate over each task in the 'tasks' array
            for (let j = 0; j < tasks.length; j++) {
                if (tasks[j].UUID === searchUUID) {
                    console.log(`Task found at index ${i} in 'completeTaskList', task index ${j} in 'tasks':`, tasks[j]);
                    return [i,j];
                    // return (["completeTaskList"][i]["tasks"][j]); // Found the task, no need to continue searching
                }
            }
        }
    
        console.log("No task found with the UUID:", searchUUID);

    }

}