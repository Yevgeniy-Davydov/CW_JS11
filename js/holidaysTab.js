import { getCountries, getHolidays } from "./api.js";
import { showAlert, hideAlert } from "./alet.js";


export let tab = document.querySelector(".tab_holidays");

export const form = document.querySelector(".form_holidays");
export const selectCountry = document.querySelector(".select_country");
export const selectYear = document.querySelector(".select_year");
export const tableHolidays = document.querySelector(".table_holidays");
const listHolidays = document.querySelector(".list_holidays");
export let dateArrowBlock = document.querySelector(".date_of_holiday");
export let arrow = document.querySelector(".arrow");
let resultsBlock = document.querySelector(".results_list"); 

const handleTabSelect = async () => {
  generateYearsSelect();
  
  const countriesResponse = await getCountries();
  generateCountrySelect(countriesResponse);
  
};
const handleForm = async (event) => {
  event.preventDefault();
  
  const holidaysResponse = await getHolidays(selectCountry.value, selectYear.value);
  handleList(holidaysResponse);
  
  resultsBlock.hidden = false;

  // if (arrow.classList.contains("arrow up")) {
  //   // arrow.className = "arrow"
  //   console.log("arrow up")
  // }
  
  // try {
  // } catch (error) {
  //   // showAlert(error.meta.error_type);
  //   showAlert();

    
  // }
};
export function generateCountrySelect(data) {
  const {
      response: { countries },
    } = data;

  countries.forEach((country) => {
    let countryName = country.country_name;
    let countryId = country["iso-3166"];

    let option = document.createElement("option");
    option.innerHTML = countryName;
    option.value = countryId;
    selectCountry.appendChild(option);

  });
}

const handleSelectCountry = () => {
  let optionToHide = document.querySelector(".select_pleceholder");
  optionToHide.hidden = true;
  selectYear.disabled = false;
};
const generateYearsSelect = () => {
  let currentYear = new Date().getFullYear();

  for (let i = 2001; i <= 2049; i++) {
    let option = document.createElement("option");
    option.innerHTML = i;
    option.value = i;
    selectYear.appendChild(option);
  }

  selectYear.value = currentYear;
};
const handleArrow = () => {
  arrow.classList.toggle("up");
};
export function handleList(data) {
  const {
        response: { holidays },
      } = data;

  let copyHolidays = holidays;

  const handleCopy = () => {
    copyHolidays.reverse();
    createListOfHolidays(copyHolidays);
  };

  dateArrowBlock.addEventListener("click", handleCopy);

  createListOfHolidays(holidays);
}

function clearTable() {
  listHolidays.innerHTML = "";

 
}

function createListOfHolidays(array) {
  clearTable();

  array.forEach((holiday) => {
    let name = holiday.name;
    let date = holiday.date.iso.substring(0, 10);
    const row = document.createElement("tr");

    row.innerHTML = `
          <td>${date}</td>
          <td>${name}</td>`;
    listHolidays.append(row);
  });
};

tab.addEventListener("click", handleTabSelect);
form.addEventListener("submit", handleForm);
selectCountry.addEventListener("change", handleSelectCountry);
dateArrowBlock.addEventListener("click", handleArrow);
