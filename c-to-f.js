console.log(" 🔥🔥🔥Celsius to Fahrenheit🔥🔥🔥");

// c *(9/5) + 32

const CelsiusToFahrenheit = (celsius) => {
  return (celsius * (9 / 5) + 32).toFixed(2);
};

//console.log(process.argv);
//Array destructuring
const [, , celsius] = process.argv;
console.log("🌡️  " + CelsiusToFahrenheit(celsius));

// Browser to Node JS -> 6 months Delay 😊
