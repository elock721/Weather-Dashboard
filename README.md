Weather Dashboard Overview

This weather dashboard application allows you to search for a city's current weather

When you search for your desired city, the following weather characteristics will be returned - temperature (fahrenheit), humidity, wind speed, and UV index

A 5 day forecast will populate as well with the date's above and the temperature (fahrenheit)/humidity

As soon as all the weather information about your searched city populates, it will be logged directly below the search bar 

The table below will log the 8 most recent searches only

All of the individual cities in the history table below the search bar also become clickable shortcut links to display that certain city's current weather

------------------------------------------------

Psuedo Code

When the user enters a city and clicks search, the searchWeather function is connected to an API call from openweathermap.org that retrieves the city name, temperature (fahrenheit), humidity, and wind speed 

The geUvIndex function below it is created specifically for the UV Index

The fiveDay function will simultaneously populate the 5 day forcast of the searched city complete with temperature (fahrenheit) and humidity as well as the date on top

All cards for the 5 day function are created with jQuery 

The saveSearch function then logs it in local storage 

And finally the populateSearch function adds the last city search query to the history below the search bar as a clickable shortcut for the city's weather
