$(document).ready(function(){
    $("#searchBtn").on("click", function() {
        var searchValue = $("#searchText").val();

        $("#searchText").val("");
        console.log(searchValue);
    
        searchWeather(searchValue);
        fiveDay(searchValue);
    });
    
    $(".history").on("click", "li", function () {
        var city = $(this).text()
        searchWeather(city);
        fiveDay(searchValue);
    })

});

function searchWeather(searchText) {
    console.log(searchText)
    $.ajax({
        type: "GET",
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchText + "&appid=e62facd2394fa5ea9004691f3f101acd&units=imperial",
        dataType: "json", 
        success: function(data) {
            console.log(data)
            $("#temp1").text(data.main.temp + " F")
            $("#hum1").text(data.main.humidity + "%")
            $("#wind1").text(data.wind.speed + " MPH")
            var coords = data.coord;
            getUvIndex(coords.lat, coords.lon)    
        }, 
        error: function(error){
            console.log(error);
        }
        


    })
    
}

function getUvIndex (lat, long) {
    console.log(lat, long)
    $.ajax({
        type: "GET",
        url: "http://api.openweathermap.org/data/2.5/uvi/forecast?appid=e62facd2394fa5ea9004691f3f101acd&lat="+lat+"&lon="+long+"&cnt=1",
        dataType: "json", 
        success: function(data) {
            console.log(data[0].value)
            $("#ind1").text(data[0].value)
        }, 
        error: function(error){
            console.log(error);
        }
       


    })
}

function fiveDay (searchText){
    $.ajax({
        type: "GET",
        url: "http://api.openweathermap.org/data/2.5/forecast?q= "+searchText+" &appid=e62facd2394fa5ea9004691f3f101acd&units=imperial",
        dataType: "json", 
        success: function(data) {
            // console.log(data)
        for (let i = 0; i < data.list.length; i++) {
            const element = data.list[i];
            if(element.dt_txt.indexOf("15:00:00") !== -1){
                console.log(element);
                var card = $("<div>").addClass("card border-dark mb-3")
                var cardHeader = $("<div>").addClass("card-header")
                var cardBody = $("<div>").addClass("card-body text-dark")
                var temp = $("<p>").addClass("card-text").text(element.main.temp)
                cardBody.append(temp)
                card.append(cardHeader, cardBody)
                $(".wrapper3").append(card);
            }
            
        }
        }, 
        error: function(error){
            console.log(error);
        }
       


    })

}

