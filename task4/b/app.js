

function search(){
const city=document.getElementById("city").value;
const display=document.getElementsByClassName("display")[0];
// console.log(city);
weather(city);
async function weather(city) {
    const data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=24656f870ca2dbdaa21181709570f687`)
    const data1=await data.json();
    console.log(data1);
    display.innerHTML=`<h1>${data1.name}</h1>
    <h2>${data1.main.temp}</h2>
    <h3>${data1.weather[0].description}</h3>`;
}
}