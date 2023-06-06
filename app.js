//Temperature in kelvin
const kelvin = 293;

//celsius is 273 degress less than kelvin
const celsius = kelvin - 273;

//Fahrenheit = Celsius * (9/5) + 32
//using Math.floor() to convert decimal to whole number
let fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahreheit.`)
