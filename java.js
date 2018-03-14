let updateNYT = function (nyt) {
  console.log("Got NYT data", nyt)
  let NYTContent = nyt.results[0].abstract
  jQuery("#news1Content").text(NYTContent)
  let NYTTitle = nyt.results[0].title
  jQuery("#news1Title").text(NYTTitle)
}


let getNYT = function (event) {
  let NYTurl = "https://api.nytimes.com/svc/topstories/v2/national.json?" +
  "api-key=0d90c222ab6b4fd8a80341a3a4aa66fd"
  fetch(NYTurl).then(convertToJSON).then(updateNYT).catch(displayError)
}

let updateWeather = function(weat){
  console.log("Got weather data ", weat)
  let weatherContent = "Current Chicago weather is " + weat.weather[0].description + " with temperature " + weat.main.temp + " degrees F"
  jQuery("#news2Content").text(weatherContent)
}

let getWeather = function (event){
  let latitude = '41.8781';
  let longitude = '-87.6298';
  let apiKey = 'f2ff381dbb445b1fac4898def5d10fc4'

  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL += '&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURL).then(convertToJSON).then(updateWeather).catch(displayError);

}

let updateWSJ = function (wsj) {
  console.log("Got WSJ data ", wsj)
  let WSJContent = wsj.articles[0].description
  jQuery("#news3Content").text(WSJContent)
  let WSJTitile = wsj.articles[0].Title
  jQuery("#news3Title").text(WSJTitle)
}

let getWSJ = function (event) {
  let WSJurl = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=c1fddc1982d34c84a9bc9f630047ff22';
  fetch(WSJurl).then(convertToJSON).then(updateWSJ).catch(displayError)
}

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }


window.onload = getNYT()
window.onload = getWeather()
window.onload = getWSJ()
