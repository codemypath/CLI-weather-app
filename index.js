'use strict'
// Incuding modules
const request = require('request');


//Accepting params   
const city = process.argv.slice(2).join(' ');

let days  = 2;
//Adding API key to the variable, removing space from the start and the end of city variable and assigning API endpoint to the url variable
let apiKey = 'xxxxxx';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//Sending API request and check if response is 200 status code or not
request(url, function (err, response, body) {
    if(err){
      console.error(err);
      return;
    }
    if(response.statusCode!=200){
      console.log("There is no city with such name in DB");
    } else {
      let weather = JSON.parse(body);
      let message = `Temperature in ${weather.name} is ${weather.main.temp}°C, wind speed of ${weather.wind.speed}km/h, humidity of ${weather.main.humidity}%`
      console.log(message);
    }
  });


 

  