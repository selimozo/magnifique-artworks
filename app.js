console.log();
const year = document.getElementById("year")
const yearContent = document.createTextNode(new Date().getFullYear())
year.appendChild(yearContent)