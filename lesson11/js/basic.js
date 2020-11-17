const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

let currDate = new Date();
let currDay = currDate.getDay();
let currYear = currDate.getFullYear();   

let lastUpdate = new Date(document.lastModified);
let day = days[lastUpdate.getDay()];
let date = lastUpdate.getDate();
let month = months[lastUpdate.getMonth()];
let year = lastUpdate.getFullYear(); 

// Format Ex. Wednesday, 24 July 2020.    
let lastUpdatedTxt = "Last Updated: " + day + ", " + date + " " + month + " " + year + ".";

document.getElementById('currYear').textContent = currYear;
document.getElementById('lastUpdated').innerHTML = lastUpdatedTxt;

/* Fonts from Google Fonts - more at https://fonts.google.com */
WebFont.load({google: {families: ["Abril Fatface", "Playfair+Display"]}});