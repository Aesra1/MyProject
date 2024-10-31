function buttonClicked() {
    var searchedData = document.getElementById("country_input").value
    
    fetch(`https://restcountries.com/v3.1/name/${searchedData}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
  
            var country = data[0]
  
            document.getElementById("country_name").innerHTML = country.name.common
            document.getElementById("capital").innerHTML = country.capital ? country.capital[0] : "N/A"
            document.getElementById("area").innerHTML = `${country.area.toLocaleString()} km²`
            document.getElementById("continent").innerHTML = country.continents ? country.continents[0] : "N/A"
            document.getElementById("region").innerHTML = country.region
            document.getElementById("subregion").innerHTML = country.subregion || "N/A"
            document.getElementById("population").innerHTML = country.population.toLocaleString()
            document.getElementById("language").innerHTML = country.languages ? Object.values(country.languages).join(", ") : "N/A"
            document.getElementById("timezone").innerHTML = country.timezones ? country.timezones.join(", ") : "N/A"
            document.getElementById("location").innerHTML = `Lat: ${country.latlng[0]}, Long: ${country.latlng[1]}`
            document.getElementById("map_link").innerHTML = `<a href="${country.maps.googleMaps}" target="_blank">View on Google Maps</a>`
            
            document.getElementById("flag").src = country.flags.png
            document.getElementById("coat_of_arms").src = country.coatOfArms?.png || ""
        })
        .catch(error => {
            console.error("Error fetching country data:", error)
            document.getElementById("country-info").innerHTML = `<p>Country not found. Please try again.</p>`
        })
  }
  //to fetch country data
  function fetchCountryData(countryName) {
      document.getElementById("country_input").value = countryName
      buttonClicked()
  }
  
  const fs = require('fs')
  const path = require('path')
  // create function
  document.getElementById('btnCreate').addEventListener('click', function() {
      let fileName = document.getElementById('fileName').value
      let fileContents = document.getElementById('fileContents').value
      let filePath = path.join(__dirname, 'Files', `${fileName}.txt`)
  
      fs.writeFile(filePath, fileContents, (err) => {
          if (err) {
              return console.error('Error creating file:', err)
          }
          
          localStorage.setItem('fileName', fileName)
          localStorage.setItem('fileContents', fileContents)
          
          window.location.href = 'crud.html'
      })
  })
  