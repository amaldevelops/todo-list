// Only function of this module is to Edit any tasks as per user request and changes will be stored by calling the localStorageAccess module
import {initializeLocalStorage} from "./index.js";

export class taskEdit
{

    constructor()
    {
        this.test={"urgentAndImportant":[                                       
                                            {"taskId":"2",
                                            "taskTitle":"Test1",
                                            "Description":"Test1 Description",
                                            "dueDate":"01/06/2024",
                                            "priority":"High",
                                            "projectName":"urgentAndImportant"}
                                        
                                           ],
            
            "notUrgentbutImportant":    [
                                            {"taskId":"3",
                                            "taskTitle":"",
                                            "Description":"",
                                            "dueDate":"",
                                            "priority":"",
                                            "projectName":"urgentAndImportant"},
                                            
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