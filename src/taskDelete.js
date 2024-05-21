// Only function of this module is to delete any tasks as per user request and this will be stored by calling the localStorageAccess module
import {uuidInstance} from "./index.js";
export class taskDelete
{
    constructor()
    {

    }

    delete()
    {
        console.log("Delete Button Clicked");
        console.log(uuidInstance.createNewUUID());
    }
}