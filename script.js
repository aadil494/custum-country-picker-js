const container = document.querySelector(".container");
selectBtn = container.querySelector(".select-btn");
options = container.querySelector(".options");
searchInput = container.querySelector("input");

// Array of some countries
let countries = [
  "Afghanistan",
  "Algeria",
  "Argentina",
  "Australia",
  "Bangladesh",
  "Belgium",
  "Bhutan",
  "Brazil",
  "Canada",
  "China",
  "Denmark",
  "Ethiopia",
  "Finland",
  "France",
  "Germany",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Italy",
  "Japan",
  "Malaysia",
  "Maldives",
  "Mexico",
  "Morocco",
  "Nepal",
  "Netherlands",
  "Nigeria",
  "Norway",
  "Pakistan",
  "Peru",
  "Russia",
  "Romania",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sweden",
  "Switzerland",
  "Thailand",
  "Turkey",
  "Uganda",
  "Ukraine",
  "United States",
  "United Kingdom",
  "Vietnam",
];

function addCountry(selectedCountry) {
  countries.forEach((country) => {
    let isSelected = country == selectedCountry ? "selected" : "";
    let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
    options.insertAdjacentHTML("beforeend", li);
  });
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
