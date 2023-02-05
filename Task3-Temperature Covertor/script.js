let temprature = () => {
    let opt = document.querySelector("#temp-to");
    let display = document.querySelector(".value");
    var a = document.querySelector("#number-in").value;
    if (opt.value == "cel") {
        console.log(a, "Celsius to Fahenheit", opt.value)
        let F = a * (9 / 5) + 32
        display.innerHTML = F.toFixed(4) + " ºFahrenheit"
       
    } else {
        console.log(a, "Fahrenheit to Celsius", opt.value)
        let C = (a - 32) * (5 / 9)
        display.innerHTML = C.toFixed(4) + " ºCelsius"
      
    }
}

