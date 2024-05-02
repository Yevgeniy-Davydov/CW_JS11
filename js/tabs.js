export let tabButtons = document.querySelectorAll(".tab");
export let tabPanels = document.querySelectorAll(".tab_panel");
const tabCalculator = document.querySelector(".tab_calculator");
const tabHolidays = document.querySelector(".tab_holidays");
// handle tabs
function handleTabClick(event) {
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });

  tabButtons.forEach((tab) => {
    tab.setAttribute("aria-selected", false);
  });

  event.target.setAttribute("aria-selected", true);
  const id = event.target.id;
  const tabPanel = document.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false;
}

function handleCalcTabUrl() {
  let searchParam = new URLSearchParams(window.location.search);
  searchParam.set("activeTab", "calculator");
  window.location.search = searchParam.toString();
  console.log("calc tab");
}
function handleHoliTabUrl() {
  let searchParam = new URLSearchParams(window.location.search);
  searchParam.set("activeTab", "holidays");
  window.location.search = searchParam.toString();
  console.log("holi tab");
}

//Tabs listener
tabButtons.forEach((button) => {
  button.addEventListener("click", handleTabClick);
});

tabCalculator.addEventListener("click", handleCalcTabUrl);
tabHolidays.addEventListener("click", handleHoliTabUrl);
