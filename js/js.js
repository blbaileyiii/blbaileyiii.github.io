window.onload = updateVars;

function updateVars(){
    /*
    * Input: None;
    * Processing: new Date() --> currYear; 
    *             document.lastModified --> string;
    * Output: currYear, lastUpdated;
    */     
    
    //Processing:
    let currDate = new Date();
    let currYear = currDate.getFullYear();

    let lastUpdated = "Last Updated: " + document.lastModified;

    //Output:
    document.getElementById('currYear').textContent = currYear;
    document.getElementById('lastUpdated').innerHTML = lastUpdated;
}