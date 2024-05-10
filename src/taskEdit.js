// Only function of this module is to Edit any tasks as per user request and changes will be stored by calling the localStorageAccess module
import {initializeLocalStorage} from "./index.js";

export class taskEdit
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

    edit()
    {
        
        initializeLocalStorage.localStorageStatus();
        initializeLocalStorage.localStorageAccessWrite(this.test);

    }
}