function loadWishlist() {
    const savedCountries = JSON.parse(localStorage.getItem("countryWishlist")) || [];
    const wishlistDiv = document.getElementById("wishlist");
    wishlistDiv.innerHTML = "";

    if (savedCountries.length > 0) {
        savedCountries.forEach((country, index) => {
            const countryCard = document.createElement("div");
            countryCard.className = "country-card";

            countryCard.innerHTML = `
                <h2>${country.name}</h2>
                <p><strong>Capital:</strong> ${country.capital}</p>
                <p><strong>Area:</strong> ${country.area}</p>
                <p><strong>Continent:</strong> ${country.continent}</p>
                <p><strong>Region:</strong> ${country.region}</p>
                <p><strong>Subregion:</strong> ${country.subregion}</p>
                <p><strong>Population:</strong> ${country.population}</p>
                <p><strong>Languages:</strong> ${country.languages}</p>
                <p><strong>Time Zones:</strong> ${country.timezone}</p>
                <p><strong>Location:</strong> ${country.location}</p>
                <p><strong>Map:</strong> ${country.mapLink !== "N/A" ? `<a href="${country.mapLink}" target="_blank">View Map</a>` : "N/A"}</p>
                <p><strong>Flag:</strong></p>
                <img src="${country.flagSrc}" alt="Flag of ${country.name}" width="100">
                <p><strong>Coat of Arms:</strong></p>
                <img src="${country.coatOfArmsSrc}" alt="Coat of Arms of ${country.name}" width="100">
                <button onclick="deleteCountry(${index})" class="button delete-button">Delete</button>
            `;

            wishlistDiv.appendChild(countryCard);
        });
    } else {
        wishlistDiv.innerHTML = "<p>Your wishlist is empty.</p>";
    }
}

function deleteCountry(index) {
    const savedCountries = JSON.parse(localStorage.getItem("countryWishlist")) || [];
    savedCountries.splice(index, 1);
    localStorage.setItem("countryWishlist", JSON.stringify(savedCountries));
    loadWishlist();
}

window.onload = loadWishlist;
