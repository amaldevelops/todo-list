// Only functionality of this module is to capture user inputs and to update the display as required

import {taskNew} from "./taskNew.js";
import {taskEdit} from "./taskEdit.js";
import {initializeLocalStorage} from "./index.js";
import {newTaskEdit} from "./index.js";
import {taskDeleteNow} from "./index.js";
import {newProjectAdd} from "./index.js";
import {taskNewSave} from "./index.js";
import {newUserInput} from "./index.js";
import {taskStatusInstance} from "./index.js";



export class displayController
{
    constructor()
    {



    }

    clickedAddNewTask()
    {
      document.querySelector(".addNewTaskButton").addEventListener('click',()=>
      {
        const popover=document.querySelector(".newTaskDiv");
        const popupOpened = popover.togglePopover();

        document.querySelector("#newTaskForm").reset();
        const UUID=document.querySelector('.UUID');
        UUID.innerText="UUID";

      });
    }

    addNewTaskFormCaptureButtonClicked()
    {
        document.querySelector(".addNewTask").addEventListener('click',()=>
        {
                   
          let addNewTaskFormData = new FormData(document.querySelector("#newTaskForm"));
          let newTaskObject;
    
            newTaskObject = {   
                                completeTaskList:[{
                                projectName:addNewTaskFormData.getAll("projectName").toString(),
                                
                                tasks:[{taskTitle:addNewTaskFormData.getAll("taskTitle").toString(),
                                taskDetails:addNewTaskFormData.getAll("taskDetails").toString(),
                                dueDate:addNewTaskFormData.getAll("dueDate").toString(),
                                priority:addNewTaskFormData.getAll("priority").toString()}]
                                }]
                                
    
                            };


          // console.log(`Newly captured Task info : + ${newTaskObject}`);
          // console.log(newTaskObject);
          // console.log(newTaskObject["tasks"]);
    
          taskNewSave.saveTask(newTaskObject);

          newUserInput.clearDisplayForCurrentTaskList();
          newUserInput.updateDisplayTaskList(0);
     
        });

 
    }

    addNewProjectButtonClicked()
      {
        document.querySelector(".addNewProjectButton").addEventListener('click',()=>
        {
          newProjectAdd.newProjectAdd();


        });
            
      }

    urgentAndImportantButtonClicked()
      {
        document.querySelector(".urgentImportantButton").addEventListener('click',()=>
        {
          this.clearDisplayForCurrentTaskList();
          this.updateDisplayTaskList(0);

        });

      }

    notUrgentButImportantButtonClicked()
      {
        document.querySelector(".notUrgentButImportantButton").addEventListener('click',()=>
        {
          this.clearDisplayForCurrentTaskList();
          this.updateDisplayTaskList(1);
          
        });
            
      }

    
    updateDisplayTaskList(selectedProject)
    {
      this.selectedProject=selectedProject;
        
      if (initializeLocalStorage.localStorageStatus()==="Empty Storage")
        {
          console.log("Local Storage is empty");
        }

        else
        {
          console.log("Local Storage is NOT empty");

          const currentLocalStorage=initializeLocalStorage.localStorageAccessRead();
          // console.log(currentLocalStorage);
          // console.log(this.selectedProject);
               
          const taskListDiv=document.querySelector(".taskDisplay");
          // console.log(currentLocalStorage["completeTaskList"][this.selectedProject]["tasks"]);

          const title=document.createElement("h1");
          title.innerText="Welcome to Amal's To do App, below you can find the selected Project list";
          taskListDiv.append(title);


          for (let i=0;i<currentLocalStorage["completeTaskList"][this.selectedProject]["tasks"].length;i++)
            {
              const projectName=document.createElement("h1");
              projectName.innerText="Project Name: " + currentLocalStorage["completeTaskList"][this.selectedProject]["projectName"];
              taskListDiv.append(projectName);

              const taskDiv=document.createElement("div");
              taskDiv.classList.add("individualTaskDetails");
              taskListDiv.append(taskDiv);
        
              const taskFullDetails=document.createElement("p");
              taskFullDetails.innerText=JSON.stringify(currentLocalStorage["completeTaskList"][this.selectedProject]["tasks"][i]);
              // taskDiv.append(taskFullDetails);

              const taskTitle=document.createElement("p");
              taskTitle.innerText="Task Title: " + currentLocalStorage["completeTaskList"][this.selectedProject]["tasks"][i]["taskTitle"];
              taskDiv.append(taskTitle);

              const taskDetails=document.createElement("p");
              taskDetails.innerText="Task Details: " + currentLocalStorage["completeTaskList"][this.selectedProject]["tasks"][i]["taskDetails"];
              taskDiv.append(taskDetails);

              const taskDueDate=document.createElement("p");
              taskDueDate.innerText="Task Due Date: " + currentLocalStorage["completeTaskList"][this.selectedProject]["tasks"][i]["dueDate"];
              taskDiv.append(taskDueDate);

              const taskPriority=document.createElement("p");
              taskPriority.innerText="Task Priority: " + currentLocalStorage["completeTaskList"][this.selectedProject]["tasks"][i]["priority"];
              taskDiv.append(taskPriority);

              const taskProjectName=document.createElement("p");
              taskProjectName.innerText="Project Name: " + currentLocalStorage["completeTaskList"][this.selectedProject]["projectName"];
              taskDiv.append(taskProjectName)

              const taskUUID=document.createElement("p");
              taskUUID.innerText="Task UUID: " + currentLocalStorage["completeTaskList"][this.selectedProject]["tasks"][i]["UUID"];
              taskDiv.append(taskUUID)


              const buttonDiv=document.createElement("div");
              buttonDiv.classList.add("buttonDiv");
              taskListDiv.append(buttonDiv);

              this.editButton=document.createElement("button");
              this.editButton.classList.add("editButton");
              this.editButton.innerText="Edit Task";
              buttonDiv.append(this.editButton);

              this.completeButton=document.createElement("button");
              this.completeButton.classList.add("completeButton");
              this.completeButton.innerText="Completed";
              buttonDiv.append(this.completeButton);
        
              this.deleteButton=document.createElement("button");
              this.deleteButton.classList.add("deleteButton");
              this.deleteButton.innerText="Delete Task";
              buttonDiv.append(this.deleteButton);

              this.editButton.addEventListener('click',()=>
                {
                  const clickedEditButtonInstance=this.editButton;
                  const taskFullDetailsInstance=taskFullDetails;

                  newTaskEdit.edit(taskFullDetailsInstance);


                });

              this.deleteButton.addEventListener('click',()=>
                {
                  const clickedEditButtonInstance=this.deleteButton;
                  const taskFullDetailsInstance=taskFullDetails;
                  taskDeleteNow.buttonInstance(taskFullDetailsInstance);
                  
                });

                this.completeButton.addEventListener('click',()=>
                  {
                    const clickedCompleteButtonInstance=this.completeButton;
                    const taskFullDetailsInstance=taskFullDetails;
                    taskStatusInstance.toggleTaskStatus(taskFullDetailsInstance);
                    
                  });
        }
        }
      
    }

    clearDisplayForCurrentTaskList()
    {
      
      const taskListDiv = document.querySelector(".taskDisplay");

    // Remove all child elements of taskListDiv
    while (taskListDiv.firstChild) {
        taskListDiv.removeChild(taskListDiv.firstChild);
    }


    }

}




