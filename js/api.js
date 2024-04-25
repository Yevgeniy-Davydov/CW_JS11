

const API_KEY = "DHsBO4d0uBc1OqARTMuLhM0d76R7UlUn";
const API_URL = "https://calendarific.com/api/v2";


export async function getCountries() {

    const response = await fetch(`${API_URL}/countries?api_key=${API_KEY}`); 

    const data = await response.json();

    if(!response.ok){
      throw new Error ("Can't get the countries")
    }
    return data;

}

export async function getHolidays(value, year) {
    const response = await fetch(
        `${API_URL}/holidays?&api_key=${API_KEY}&country=${value}&year=${year}`
      ); 

    const data = await response.json();

    if(!response.ok){
      throw new Error ("Can't get the list of holidays")
    }
    return data;

}
