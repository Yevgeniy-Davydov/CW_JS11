
export let tabButtons = document.querySelectorAll(".tab");
export let tabPanels = document.querySelectorAll(".tab_panel");
// handle tabs
function handleTabClick (event){

    tabPanels.forEach((panel) =>{
        panel.hidden = true;
        
    });

    tabButtons.forEach((tab) =>{
        tab.setAttribute("aria-selected", false);
    });
    
    event.target.setAttribute("aria-selected", true);
    const id = event.target.id;
    const tabPanel = document.querySelector(`[aria-labelledby="${id}"]`);
    tabPanel.hidden = false;
        
};
  
//Tabs listener
tabButtons.forEach((button) => {
    button.addEventListener("click", handleTabClick)
});
  