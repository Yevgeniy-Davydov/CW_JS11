import { tabButtons, tabPanels } from "./tabs.js";
import { durationBetweenDates } from "./date.js";
import { getDateFromStorage, storeDatesInStorage } from "./storage.js";
import {
  selectCountry,
  selectYear,
  dateArrowBlock,
  tableHolidays,
  tab,
} from "./holidaysTab.js";

// DOM variables

let form = document.querySelector(".form");
let startDate = document.querySelector(".start_date");
let plusWeek = document.querySelector(".plus_week");
let plusMonth = document.querySelector(".plus_month");
let endDate = document.querySelector(".end_date");
let selectWeekend = document.querySelector(".select_days");
let selectUnit = document.querySelector(".select_unit");
let resultOfCalculation = document.querySelector(".result");
let resultSection = document.querySelector(".results");
let table = document.querySelector(".table");

//handle DOM Elements
const handleSubmit = (event) => {
  event.preventDefault();

  if (startDate.value === "" || endDate.value === "") {
    return;
  }

  let resultDateCalculation = durationBetweenDates(
    startDate.value,
    endDate.value,
    selectUnit.value,
    selectWeekend.value
  );
  resultOfCalculation.textContent = ` result: ${resultDateCalculation}`;
  createResultRow(startDate.value, endDate.value, resultDateCalculation);
  storeDatesInStorage(startDate.value, endDate.value, resultDateCalculation);
};

const handleStartInput = () => {
  endDate.setAttribute("min", startDate.value);
  endDate.disabled = false;
};

const handleEndInput = () => {
  startDate.setAttribute("max", endDate.value);
};

const handlePlusWeek = () => {
  addDays(7);
};
const handlePlusMonth = () => {
  addDays(30);
};

// presets
function addDays(numberOfDays) {
  let start = startDate.valueAsDate;
  start.setDate(start.getDate() + numberOfDays);

  endDate.value = start.toISOString().substring(0, 10);
}
// create a row
function createResultRow(start, end, result) {
  resultSection.hidden = false;
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${start}</td>
    <td>${end}</td>
    <td>${result}</td>`;
  table.append(row);
}
// init
function init() {
  let dates = getDateFromStorage();
  dates.forEach((date) => {
    let { start, end, result } = date;
    createResultRow(start, end, result);
  });
}
init();

// // Event Listeners
form.addEventListener("submit", handleSubmit);
startDate.addEventListener("change", handleStartInput);
endDate.addEventListener("change", handleEndInput);
plusWeek.addEventListener("click", handlePlusWeek);
plusMonth.addEventListener("click", handlePlusMonth);
