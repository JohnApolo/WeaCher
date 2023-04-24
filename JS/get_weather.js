apiKey = "e817e36af1b345499da43429232404";
forecastAPIURL = "http://api.weatherapi.com/v1/forecast.json?";
var whenValue = 0;

loading = document.getElementById("Loading");
//Weather data UI
locationTxt = document.getElementById("Location");
dateTxt = document.getElementById("Date");
iconImg = document.getElementById("StatusIcon");
weatherTxt = document.getElementById("Weather");
avghumidityTxt = document.getElementById("Avghumidity");
sunriseTxt = document.getElementById("Sunrise");
sunsetTxt = document.getElementById("Sunset");
dWitRTxt = document.getElementById("DWitR");
dWitSTxt = document.getElementById("DWitS");
totalSnowcmTxt = document.getElementById("TotalSnowcm");
moonPhaseTxt = document.getElementById("MoonPhase");
avgtempCTxt = document.getElementById("AvgtempC");
mintempCTxt = document.getElementById("MintempC");
avgtempFTxt = document.getElementById("AvgtempF");
mintempFTxt = document.getElementById("MintempF");
maxwindKphTxt = document.getElementById("MaxwindKph");
maxwindMphTxt = document.getElementById("MaxwindMph");

async function getapi(url) {
    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    if (response) {
        loading.style.display = "none";
    }
    DisplayWeatherData(data);
}

function DisplayWeatherData(data)
{
    _forcastArr = data.forecast.forecastday[whenValue - 1];

    const _dateFormat = new Date(_forcastArr.date);
    const _day = _dateFormat.getDate();
    const _month = _dateFormat.getMonth() + 1;
    const _year = _dateFormat.getFullYear();

    iconImg.src = _forcastArr.day.condition['icon'];
    locationTxt.innerHTML = data.location['name'] + ", " + data.location['country'];
    dateTxt.innerHTML = _month + "/" + _day + "/" + _year;
    weatherTxt.innerHTML = _forcastArr.day.condition['text'];
    avghumidityTxt.innerHTML = _forcastArr.day['avghumidity'];
    sunriseTxt.innerHTML = _forcastArr.astro['sunrise'];
    sunsetTxt.innerHTML = _forcastArr.astro['sunset'];
    dWitRTxt.innerHTML = _forcastArr.day['daily_chance_of_rain'];
    dWitSTxt.innerHTML = _forcastArr.day['daily_chance_of_snow'];
    totalSnowcmTxt.innerHTML = _forcastArr.day['totalsnow_cm'];
    moonPhaseTxt.innerHTML = _forcastArr.astro['moon_phase'];
    avgtempCTxt.innerHTML = _forcastArr.day['avgtemp_c'];
    mintempCTxt.innerHTML = _forcastArr.day['mintemp_c'];
    avgtempFTxt.innerHTML = _forcastArr.day['avgtemp_f'];
    mintempFTxt.innerHTML = _forcastArr.day['mintemp_f'];
    maxwindKphTxt.innerHTML = _forcastArr.day['maxwind_kph'];
    maxwindMphTxt.innerHTML = _forcastArr.day['maxwind_mph'];
}

function CitySelected()
{
    _cityValue = document.getElementById("City").value;
    whenValue = parseInt(document.getElementById("When").value, 10);

    queryURL = forecastAPIURL + "key=" + apiKey + "&q=" + _cityValue + "&days=" + whenValue + "&aqi=no&alerts=no";

    getapi(queryURL);
    loading.style.display = "block";
}