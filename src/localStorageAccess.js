// This module will handle all of the functions related to writing, modifying, reading local storage object for storing program data
export class localStorageAccess
{
constructor (objectInOut)
{
this.objectInOut=objectInOut;
}

localStorageAccessRead()
{

    const taskName=localStorage.getItemItem("TaskName");
    console.log(taskName);
}

localStorageAccessWrite()
{
    localStorage.setItem("TaskName","Local Storage Works, Yayyy!!");
}

}

// new testWrite=new localStorageAccess();
// testWrite.localStorageAccessWrite();
// testWrite.localStorageAccessRead();
