// This module will handle all of the functions related to writing, modifying, reading local storage object for storing program data
export class localStorageAccess
{
constructor (saveRead)
{
    this.saveRead=saveRead;
}

localStorageStatus(status) //This will check whether the localStorage is empty
{
  this.status=status;
  if (!localStorage.getItem("taskStorage"))
    {
      console.log("Local Storage Empty");
      console.log(this.status);
      return "Empty Storage";
    
    }
  
  else
  {
    console.log("Local Storage is Not Empty");
    return "Storage NOT Empty"
  }
}

localStorageAccessRead() //This will read from the LocalStorage
{
    const read=localStorage.getItem("taskStorage");
    const localStorageReadJSON=JSON.parse(read);
    return localStorageReadJSON;

}

localStorageAccessWrite(save) //This will write to the LocalStorage
{
    this.save=save;
    const convertToString=JSON.stringify(this.save);
    localStorage.setItem("taskStorage",convertToString);
   
    
}

// This will check whether browser supports LocalStorage
storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }
  

}


