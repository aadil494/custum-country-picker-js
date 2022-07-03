const container = document.querySelector(".container");
selectBtn = container.querySelector(".select-btn");
options = container.querySelector(".options");
searchInput = container.querySelector("input");

// Array of some countries

let countries = [];

// Get the countries from api
let getCountries = function () {
  return fetch("https://countriesnow.space/api/v0.1/countries/")
    .then((response) => response.json())
    .then((data) => {
      countries = data.data.map((item) => {
        return item.country;
      });
      addCountry();
    });
};
function addCountry(selectedCountry) {
  if (countries.length < 1) {
    getCountries();
  } else {
    countries.forEach((country) => {
      let isSelected = country == selectedCountry ? "selected" : "";
      let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
      options.insertAdjacentHTML("beforeend", li);
    });
  }
}

function updateName(selectedLi) {
  searchInput.value = "";
  addCountry(selectedLi.innerText);
  console.log(selectedLi.innerText);
  selectBtn.firstElementChild.innerText = selectedLi.innerText;
  container.classList.remove("active");
}

searchInput.addEventListener("keyup", () => {
  let arr = [];
  let searchVal = searchInput.value.toLowerCase();
  arr = countries
    .filter((data) => {
      return data.toLowerCase().startsWith(searchVal);
    })
    .map((data) => `<li onclick="updateName(this)">${data}</li>`)
    .join("");

  options.innerHTML = arr ? arr : `<p>Ooops! country not found</p>`;

  console.log(arr);
});

selectBtn.addEventListener("click", () => {
  container.classList.toggle("active");
  addCountry();
});
