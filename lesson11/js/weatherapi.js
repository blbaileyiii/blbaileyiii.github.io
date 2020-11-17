const daysAbv = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

let file = document.documentURI.split(/[/.]/g).slice(-2,-1).toString();
let id;
switch(file) {
    case "sodasprings":
        id = "5607916"
        break;
    case "fishhaven":
        id = "5585010"
        break;
    case "preston":
        id = "5604473"
        break;
    default:
        id = "5604473"
        break;
}

let apiURL = "http://api.openweathermap.org/data/2.5/weather?id=" + id + "&units=imperial&appid=61c06afff8be57bc36e4e0cf4f4020bb";
const apiIconURL = "https://openweathermap.org/img/w/"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let iconsrc = apiIconURL + jsObject.weather[0].icon + ".png";
    let desc = jsObject.weather[0].description;

    let temp = parseFloat(jsObject.main.temp_max);
    let windspeed = parseFloat(jsObject.wind.speed);

    document.getElementById('weather-summary-desc').textContent = jsObject.weather[0].description;
    document.getElementById('weather-summary-temp').textContent = temp + "°F";
    document.getElementById('weather-summary-windspeed').textContent = windspeed +" mph";
    document.getElementById('weather-summary-humidity').textContent = jsObject.main.humidity + "%";

    let windchill;
    if (temp <= 50.0 && windspeed > 3.0) {
        //Calculate windchill:
        windchill = 35.74 + 0.6215 * temp - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temp * Math.pow(windspeed, 0.16));

        //Calculate Decimal Place
        let digits = 2;
        let multiplier = Math.pow(10, digits);
        windchill = (Math.round(windchill * multiplier) / multiplier) + "°F";
    } else {
        windchill = "N/A";
    }

    document.getElementById('weather-summary-windchill').textContent = windchill;
    
  });

apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=" + id + "&units=imperial&appid=61c06afff8be57bc36e4e0cf4f4020bb";

  fetch(apiURL)
  .then((response) => response.json())
  .then((fiveDays) => {
    console.log(fiveDays);

    const fiveDaysAt1800 = fiveDays.list.filter(entry => new Date(entry.dt_txt).getHours() == 18 );
    console.log(fiveDaysAt1800);

    for (i = 0; i < fiveDaysAt1800.length; i++) {
        let li = document.createElement('li');
        let day = document.createElement('p');
        let icon = document.createElement('img');
        let temp = document.createElement('p');

        let date = new Date(fiveDaysAt1800[i].dt_txt);
        day.textContent = daysAbv[date.getDay()];

        icon.src = apiIconURL + fiveDaysAt1800[i].weather[0].icon + ".png";
        icon.alt = fiveDaysAt1800[i].weather[0].description;

        temp.textContent = fiveDaysAt1800[i].main.temp + "°F";

        li.append(day);
        li.append(icon);
        li.append(temp);

        document.getElementById('five-day-flex').appendChild(li);

    }

    


    



  });
  


  


