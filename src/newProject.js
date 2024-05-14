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
                            "taskDetails":"Buy 2x Cartons of Milk",
                            "dueDate":"01/06/2024",
                            "priority":"High"
                            },

                            {
                            "taskTitle":"Buy Rice",
                            "taskDetails":"Buy 10Kg of Rice",
                            "dueDate":"11/06/2024",
                            "priority":"Medium"
                            }

                        ]
            },
            {
                "projectName":"notUrgentButImportant",
                "tasks":[
                            {
                            "taskTitle":"Wash The Car",
                            "taskDetails":"Take the Car to a Car Wash",
                            "dueDate":"22/05/2024",
                            "priority":"Medium"
                            },
                            {
                                "taskTitle":"Cut Grass",
                                "taskDetails":"Cut grass in the front yard",
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