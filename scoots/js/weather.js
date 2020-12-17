const daysAbv = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

let apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.5083&lon=-86.9458&exclude=minutely,hourly&units=imperial&appid=61c06afff8be57bc36e4e0cf4f4020bb";
//let apiURL ="https://api.openweathermap.org/data/2.5/onecall?lat=42.6526&lon=-73.7562&exclude=minutely,hourly&units=imperial&appid=61c06afff8be57bc36e4e0cf4f4020bb"
const apiIconURL = "https://openweathermap.org/img/wn/"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.table(jsObject);

    let curr = jsObject.current;
    let daily = jsObject.daily;
    let alerts = jsObject.alerts;
    console.log(alerts);


    //let iconsrc = apiIconURL + jsObject.weather[0].icon + "@2x.png";

    let currtemp = parseFloat(curr.temp);
    
    let windspeed = parseFloat(curr.wind_speed);

    document.getElementById('weather-current-temp').textContent = currtemp + "°F";
    document.getElementById('weather-current-desc').textContent =  curr.weather[0].description;
    document.getElementById('weather-current-windspeed').textContent = windspeed +" mph";
    document.getElementById('weather-current-humidity').textContent = curr.humidity + "%";

    let windchill;
    if (currtemp <= 50.0 && windspeed > 3.0) {
        //Calculate windchill:
        windchill = 35.74 + 0.6215 * currtemp - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * currtemp * Math.pow(windspeed, 0.16));

        //Calculate Decimal Place
        let digits = 2;
        let multiplier = Math.pow(10, digits);
        windchill = (Math.round(windchill * multiplier) / multiplier) + "°F";
    } else {
        windchill = "N/A";
    }

    document.getElementById('weather-current-windchill').textContent = windchill;


    for (i = 0; i < 3; i++) {
        let li = document.createElement('li');
        let ul = document.createElement('ul');
        let day = document.createElement('li');
        let iconLi = document.createElement('li');
        let icon = document.createElement('img');
        let temp = document.createElement('li');        
        
        let date = new Date(daily[i].dt * 1000);
        day.textContent = daysAbv[date.getDay()];
  
        icon.src = apiIconURL + daily[i].weather[0].icon + ".png";
        icon.alt = daily[i].weather[0].description;
  
        temp.textContent = daily[i].temp.day + "°F";

        iconLi.append(icon);
  
        li.append(ul);
        ul.append(day)
        ul.append(iconLi);
        ul.append(temp);
  
        document.getElementById('weather-three-day').appendChild(li);
    }

    if(alerts != null ) {
        let event = document.getElementById('event');
        let desc = document.getElementById('description');
        event.textContent = "Weather Advisory: " + alerts[0].event;
        description.textContent = alerts[0].description;
        document.getElementById('alert').classList.toggle('hidden');
    }
});
