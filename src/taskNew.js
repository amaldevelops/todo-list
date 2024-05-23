// Only function of this module is to Add New tasks as per user request and changes will be stored by calling the localStorageAccess module

import { localStorageAccess } from "./localStorageAccess.js";
import { initializeLocalStorage } from "./index.js";
import { newProjectAdd } from "./index.js";
import { v4 as uuidv4 } from "uuid";

export class taskNew {
  constructor() {}

  saveTask(newTaskObject) {
    let setProjectName =
      newTaskObject["completeTaskList"][0]["projectName"].toString(); //This will get the project name from new task
    let projectName = newTaskObject["completeTaskList"][0]["projectName"];

    let addNewTask = newTaskObject["completeTaskList"][0]["tasks"][0]; //This will get the Tasks from new task
    let newUUID = uuidv4(); // This will generate a random UUID
    console.log(uuidv4());
    addNewTask.projectName = projectName;
    addNewTask.UUID = newUUID;
    console.log(addNewTask);

    if (initializeLocalStorage.localStorageStatus() === "Storage NOT Empty") {
      let currentLocalStorage = initializeLocalStorage.localStorageAccessRead();

      for (let i = 0; i < currentLocalStorage["completeTaskList"].length; i++) {
        console.log(currentLocalStorage["completeTaskList"].length);

        if (
          currentLocalStorage["completeTaskList"][i]["projectName"] ===
          setProjectName
        ) {
          //This code will add tasks to existing project lists
          console.log(
            currentLocalStorage["completeTaskList"][i]["projectName"]
          );

          currentLocalStorage["completeTaskList"][i]["tasks"].push(addNewTask);
          console.log(currentLocalStorage);

          return initializeLocalStorage.localStorageAccessWrite(
            currentLocalStorage
          );
        }
      }
      console.log("Project Not found");
      newProjectAdd.newProjectAdd(setProjectName);
      this.saveTask(newTaskObject);
    } else if (
      initializeLocalStorage.localStorageStatus() === "Empty Storage"
    ) {
      console.log("Local Storage is Empty");
      return initializeLocalStorage.localStorageAccessWrite(newTaskObject);
    }
  }
}
