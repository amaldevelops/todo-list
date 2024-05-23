// Only function of this module is to delete any tasks as per user request and this will be stored by calling the localStorageAccess module
import { uuidInstance } from "./index.js";
import { initializeLocalStorage } from "./index.js";
import { newUserInput } from "./index.js";

export class taskDelete {
  constructor() {}

  buttonInstance(clickedEditButtonInstance) {
    // Get the inner HTML content of the element
    const innerHTML = clickedEditButtonInstance.innerHTML;
    // console.log("Inner HTML is : " + innerHTML);

    // Extracting JSON string from the HTML string
    const jsonString = innerHTML.match(/\{.*\}/)[0];

    // Parsing JSON string into a JavaScript object
    const jsonObject = JSON.parse(jsonString);

    // Accessing the taskTitle property
    const taskTitle = jsonObject.taskTitle;

    // console.log(initializeLocalStorage.localStorageAccessRead());
    this.delete(jsonObject);
  }

  delete(taskDetailsToEdit) {
    console.log(taskDetailsToEdit);

    const taskIndex = uuidInstance.findUUID(taskDetailsToEdit["UUID"]);

    console.log(taskIndex);

    let currentStorage = initializeLocalStorage.localStorageAccessRead();

    const taskLocation =
      currentStorage["completeTaskList"][taskIndex[0]]["tasks"]; //[taskIndex[1]];

    taskLocation.splice(taskIndex[1], 1);
    console.log(taskLocation);

    initializeLocalStorage.localStorageAccessWrite(currentStorage);

    newUserInput.clearDisplayForCurrentTaskList();
    newUserInput.updateDisplayTaskList(0);
  }
}
