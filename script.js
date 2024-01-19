const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const button = document.getElementById("button");
const errorMessageDay = document.getElementById("error-message-day");
const labelDay = document.getElementById("label-day");
const labelMonth = document.getElementById("label-month");
const labelYear = document.getElementById("label-year");
const errorMessageMonth = document.getElementById("error-message-month");
const errorMessageYear = document.getElementById("error-message-year");

const resultsAge = document.getElementById("results-age");
const resultsMonths = document.getElementById("results-months");
const resultsDays = document.getElementById("results-days");


button.addEventListener("click", () => {
    const inputDay = parseInt(day.value);
    const inputMonth = parseInt(month.value);
    const inputYear = parseInt(year.value);

    const currentDate = new Date();
    const birthDate = new Date(inputYear, inputMonth - 1, inputDay);

    const ageInMilliseconds = currentDate - birthDate;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;

    const ageYears = Math.floor(ageInDays / 365);
    const ageMonths = Math.floor((ageInDays % 365) / 30.44);
    const ageDays = Math.floor((ageInDays % 365) % 30);

    errorMessageDay.textContent = day.value === "" ? "this is field is required" : (!isValidDate(inputDay, inputMonth, inputYear) || birthDate > currentDate) ? "must be a valid date" :  "";
     
    errorMessageMonth.textContent = month.value === "" ? "this is field is required" : (month.value > 12 || month.value === "0") ? "must be a valid month" : "" ;
    
    errorMessageYear.textContent = year.value === "" ? "this is field is required" :  "";

    if (errorMessageDay.textContent || errorMessageMonth.textContent || errorMessageYear.textContent) {
        labelDay.style.color = "hsl(0, 100%, 67%)";
        labelMonth.style.color = "hsl(0, 100%, 67%)";
        labelYear.style.color = "hsl(0, 100%, 67%)";
        day.style.border = "1px solid hsl(0, 100%, 67%)";
        month.style.border = "1px solid hsl(0, 100%, 67%)";
        year.style.border = "1px solid hsl(0, 100%, 67%)";
    } else {
        labelDay.style.color = "";
        labelMonth.style.color = "";
        labelYear.style.color = "";
        day.style.border = "";
        month.style.border = "";
        year.style.border = "";
    }

    resultsAge.innerText = ageYears || "- -";
    resultsMonths.innerText = ageMonths || "- -";
    resultsDays.innerText = ageDays || "- -";
   

    setTimeout(() => {
    resultsAge.classList.add("animate");
    resultsMonths.classList.add("animate");
    resultsDays.classList.add("animate");
    }, 500)
});

function isValidDate(day, month, year) {
    const lastDayOfMonth = new Date(year, month, 0).getDate();
    return day >= 1 && day <= lastDayOfMonth && month >= 1 && month <= 12 && year >= 0;
}
