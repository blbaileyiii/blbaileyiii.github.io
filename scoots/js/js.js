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

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', toggleMenuTxt, false);

function toggleMenuTxt(x) {
    mainnav.classList.toggle('responsive');
    let menu = document.getElementById("toggleMenu");
    if (menu.innerHTML === "☰ Menu" || menu.innerHTML == "&#9776; Menu") {
        menu.innerHTML = "✖ Close";
    } else {
        menu.innerHTML = "☰ Menu";
    }
}

// To solve the mid resizing issue with responsive class on
window.onresize = toggleMenuResize;

function toggleMenuResize(x) {
    if (window.innerWidth > 800) {
        mainnav.classList.remove('responsive');
        document.getElementById("toggleMenu").innerHTML = "☰ Menu";
    }            
}

/* Fonts from Google Fonts - more at https://fonts.google.com */
WebFont.load({google: {families: ["Sansita Swashed", "Chewy", "Federo", "Andika", "Libre Barcode 39 Extended Text"]}});
