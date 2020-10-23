let tempStr = document.getElementById('weather-summary-temp').innerHTML;
let windspeedStr = document.getElementById('weather-summary-windspeed').innerHTML;
let temp = parseFloat(tempStr);
let windspeed = parseFloat(windspeedStr);

let windchill;
if (temp <= 50.0 && windspeed > 3.0) {
    //Calculate windchill:
    windchill = 35.74 + 0.6215 * temp - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temp * Math.pow(windspeed, 0.16));

    //Calculate Decimal Place
    let digits = 2;
    let multiplier = Math.pow(10, digits);
    windchill = Math.round(windchill * multiplier) / multiplier;
} else {
    windchill = "N/A";
}

document.getElementById('weather-summary-windchill').innerHTML = windchill;

