
export function storeDatesInStorage (start, end, result){
    let rowObject = {start, end, result};
    let results = getDateFromStorage();
    results.push(rowObject);
    if (results.length > 10){
      results.shift(results[0]);
    };
  
  
  localStorage.setItem("dates", JSON.stringify(results))
  
};
 export function getDateFromStorage (){
  return JSON.parse(localStorage.getItem("dates")) || [];
};