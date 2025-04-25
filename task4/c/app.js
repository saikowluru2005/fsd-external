async function weather(){
    const display=document.getElementsByClassName('data')[0]
    const data=await fetch('https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=24656f870ca2dbdaa21181709570f687')
    const data1=await data.json()
    // console.log(data1)
    display.innerHTML=`<tr><td>${data1.name}</td><td>${data1.main.temp}</td>`
    
}
// weather()