// Only function of this module is to Edit any tasks as per user request and changes will be stored by calling the localStorageAccess module
import {initializeLocalStorage} from "./index.js";

export class taskEdit
{

    constructor()
    {
        this.test={"urgentAndImportant":[{"taskId":"1","taskTitle":"","Description":"","dueDate":"","priority":"","projectName":""},
                                            
                                            {"taskId":"2",
                                            "taskTitle":"",
                                            "Description":"",
                                            "dueDate":"",
                                            "priority":"",
                                            "projectName":""}
                                        
                                           ],
            
            "notUrgentbutImportant":    [
                                            {"taskId":"3",
                                            "taskTitle":"",
                                            "Description":"",
                                            "dueDate":"",
                                            "priority":"",
                                            "projectName":""},
                                            
                                            {"taskId":"4",
                                            "taskTitle":"",
                                            "Description":"",
                                            "dueDate":"",
                                            "priority":"",
                                            "projectName":""}
                                        
                                           ]
                                        
        }
            
    }

    edit()
    {
        initializeLocalStorage.localStorageAccessWrite(this.test);
    }
}