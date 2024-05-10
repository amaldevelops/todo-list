//This module will create a new Project
import {initializeLocalStorage} from "./index.js";

export class newProject
{
    constructor()
    {
        this.test={"completeTaskList":
        [
            {
                "projectName":"urgentAndImportant",
                "tasks":[
                            {
                            "taskTitle":"Buy Milk",
                            "Description":"Buy 2x Cartons of Milk",
                            "dueDate":"01/06/2024",
                            "priority":"High"
                            },

                            {
                            "taskTitle":"Buy Rice",
                            "Description":"Buy 10Kg of Rice",
                            "dueDate":"11/06/2024",
                            "priority":"Medium"
                            }

                        ]
            },
            {
                "projectName":"notUrgentbutImportant",
                "tasks":[
                            {
                            "taskTitle":"Wash The Car",
                            "Description":"Take the Car to a Car Wash",
                            "dueDate":"22/05/2024",
                            "priority":"Medium"
                            },
                            {
                                "taskTitle":"Cut Grass",
                                "Description":"Cut grass in the front yard",
                                "dueDate":"19/05/2024",
                                "priority":"High"
                            }

                        ]

            }
            
        ]        
            }
    }

    newProjectAdd()
    {
        initializeLocalStorage.localStorageStatus();
        initializeLocalStorage.localStorageAccessWrite(this.test);
    }

}