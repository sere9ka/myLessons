const title = "Проект JavaScript 0.1";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 1200;
let rollback = 13;
const fullPrice = 15000;
let adaptive = true;

console.log( typeof title);
console.log( typeof fullPrice);
console.log( typeof adaptive);
console.log( screens.length );
console.log("Стоимость вёрстки экранов " +screenPrice+ " долларов");
console.log("Стоимость разработки сайта " +fullPrice+ " долларов");

let str = screens.toLowerCase()
console.log(str.split());

let rollbackPrice = fullPrice * (rollback/100)
console.log(rollbackPrice);