const subButt = document.querySelector("#subButt");
const APIKey = "f7b8955be6fdb480a97e98728fc60b78";
const cityName = document.querySelector("#cityName");
const current = document.querySelector(".current");
const forecast = document.querySelector(".forecast");
const forecastHead = document.querySelector(".forecastHead");
let city;

  subButt.addEventListener('click', function () {
    const forecastElements = document.querySelectorAll("li");
    forecastElements.forEach(element => {
        element.remove();
    });
    const offWithTheHead = document.querySelectorAll("h3");
        offWithTheHead.forEach(element => {
            element.remove();
        });
    const listKiller = document.querySelectorAll("ul");
        listKiller.forEach(element => {
            element.remove();
        });
    const imageRemover = document.querySelectorAll("img");
        imageRemover.forEach(element => {
            element.remove();
        });
    createForecast() 
  });

  function createForecast() {
    let city = cityName.value;
    const queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=imperial`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}&units=imperial`;
;
    fetch(queryUrl).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {

            const cityArray = [data.name, data.weather[0].icon, data.main.temp, data.wind.speed, data.main.humidity];
        
            const cityname = `data.name`;
        
            const cityWeather = {
                name: cityArray[0],
                icon: cityArray[1],
                temp: cityArray[2],
                wind: cityArray[3],
                humid: cityArray[4],
            };
            const ul = document.createElement("ul");
            ul.setAttribute('class', 'col-6 col-lg-6');
            ul.style.fontSize = "20px";

            const nameLi = document.createElement("li")
            nameLi.textContent = `${data.name} (Today)`;
            nameLi.style.fontSize = "40px";
            ul.appendChild(nameLi);

            const tempLi = document.createElement("li");
            tempLi.textContent = `Temperature: ${data.main.temp}°`;
            ul.appendChild(tempLi);

            const windLi = document.createElement("li");
            windLi.textContent = `Wind Speed: ${data.wind.speed}mph`;
            ul.appendChild(windLi);

            const humidLi = document.createElement("li");
            humidLi.textContent = `Humidity: ${data.main.humidity}%`;
            ul.appendChild(humidLi);

            current.appendChild(ul);

            const img = document.createElement("img");
            img.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            img.setAttribute('class', 'col-6 col-lg-6');
            img.style.height = "150px";
            img.style.width = "150px";

            current.appendChild(img);
            
            console.log(data);
            localStorage.setItem(cityname, JSON.stringify(cityWeather));

          });
        }
      });
      fetch(forecastUrl).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log(data);
            const h3 = document.createElement("h3");
            h3.textContent= "5 Day Forecast"
            const ui1 = document.createElement("ui1");
            const li1 = document.createElement("li");
            li1.textContent= `${data.list[3].dt_txt}`
            const li2 = document.createElement("li");
            li2.textContent= `Temp: ${data.list[3].main.temp}°`
            const li3 = document.createElement("li");
            li3.textContent= `Humidity: ${data.list[3].main.humidity}%`
            const li4 = document.createElement("li");
            li4.textContent= `Wind Speed: ${data.list[3].wind.speed}mph`

            const ui2 = document.createElement("ui1");
            const li5 = document.createElement("li");
            li5.textContent= `${data.list[11].dt_txt}`
            const li6 = document.createElement("li");
            li6.textContent= `Temp: ${data.list[11].main.temp}°`
            const li7 = document.createElement("li");
            li7.textContent= `Humidity: ${data.list[11].main.humidity}%`
            const li8 = document.createElement("li");
            li8.textContent= `Wind Speed: ${data.list[11].wind.speed}mph`

            const ui3 = document.createElement("ui1");
            const li9 = document.createElement("li");
            li9.textContent= `${data.list[19].dt_txt}`
            const li10 = document.createElement("li");
            li10.textContent= `Temp: ${data.list[19].main.temp}°`
            const li11 = document.createElement("li");
            li11.textContent= `Humidity: ${data.list[19].main.humidity}%`
            const li12 = document.createElement("li");
            li12.textContent= `Wind Speed: ${data.list[19].wind.speed}mph`

            const ui4 = document.createElement("ui1");
            const li13 = document.createElement("li");
            li13.textContent= `${data.list[27].dt_txt}`
            const li14 = document.createElement("li");
            li14.textContent= `Temp: ${data.list[27].main.temp}°`
            const li15 = document.createElement("li");
            li15.textContent= `Humidity: ${data.list[27].main.humidity}%`
            const li16 = document.createElement("li");
            li16.textContent= `Wind Speed: ${data.list[27].wind.speed}mph`

            const ui5 = document.createElement("ui1");
            const li17 = document.createElement("li");
            li17.textContent= `${data.list[35].dt_txt}`
            const li18 = document.createElement("li");
            li18.textContent= `Temp: ${data.list[35].main.temp}°`
            const li19 = document.createElement("li");
            li19.textContent= `Humidity: ${data.list[35].main.humidity}%`
            const li20 = document.createElement("li");
            li20.textContent= `Wind Speed: ${data.list[35].wind.speed}mph`


            forecastHead.appendChild(h3);
            forecast.appendChild(ui1);
            ui1.appendChild(li1);
            ui1.appendChild(li2);
            ui1.appendChild(li3);
            ui1.appendChild(li4);
            forecast.appendChild(ui2);
            ui2.appendChild(li5);
            ui2.appendChild(li6);
            ui2.appendChild(li7);
            ui2.appendChild(li8);
            forecast.appendChild(ui3);
            ui3.appendChild(li9);
            ui3.appendChild(li10);
            ui3.appendChild(li11);
            ui3.appendChild(li12);
            forecast.appendChild(ui4);
            ui4.appendChild(li13);
            ui4.appendChild(li14);
            ui4.appendChild(li15);
            ui4.appendChild(li16);
            forecast.appendChild(ui5);
            ui5.appendChild(li17);
            ui5.appendChild(li18);
            ui5.appendChild(li19);
            ui5.appendChild(li20);

  });
}});
  };