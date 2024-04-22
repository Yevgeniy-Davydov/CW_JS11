

export function durationBetweenDates(start, end, unit, type) {
    let difference = Math.floor(Math.abs(new Date(end) - new Date(start)));
  
    switch (type) {
      case "working-days":
        difference = (getWorkdaysBetweenDates(start, end)) * 86400000;
        break;
  
      case "weekend":
        difference = (getWeekendsBetweenDates(start, end)) * 86400000;
        break;
    };
  
    switch (unit) {
      case "seconds":
        return `${Math.floor(difference / 1000)} ${unit}`;
  
      case "minutes":
        return `${Math.floor(difference / 60000)} ${unit}`;
  
      case "hours":
        return `${Math.floor(difference / 3600000)} ${unit}`;
  
      case "day":
        let amountDays = Math.floor(difference / 86400000);
        let unitDays = amountDays === 1 ? "day" : "days";
  
        return `${amountDays} ${unitDays}`;
    }
};
function isWeekend(date) {
  let day = new Date(date).getDay();
  return day === 0 || day === 6;
};

function getWeekendsBetweenDates(startDate, endDate) {
  let count = 0;

  let currentDate = new Date(startDate);
  while (currentDate < new Date(endDate)) {
    if (isWeekend(currentDate)) { 
      count++ 
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return count;

};

function getWorkdaysBetweenDates (startDate, endDate){
  let count = 0;

  let currentDate = new Date(startDate);
  while (currentDate < new Date(endDate)) {
    if (!isWeekend(currentDate)) { 
      count++ 
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return count;

};