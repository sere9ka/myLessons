'use strict';

let rollback = 13;
let title = prompt('Как называется Ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой тип дополнительной услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой тип дополнительной услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

let fullPrice = screenPrice + servicePrice1 + servicePrice2

let str = screens.toLowerCase()

let rollbackPrice = fullPrice * (rollback/100)

let servicePercentPrice = Math.ceil(fullPrice - rollbackPrice);

if (fullPrice >= 30000) console.log('Даём скидку в 10%');
else if (fullPrice < 30000 && fullPrice >= 15000) console.log('Даём скидку в 5%');
else if (fullPrice < 15000 && fullPrice >= 0) console.log('Скидка не предусмотрена');
else console.log('Что то пошло не так');

console.log(title);
console.log(screens);
console.log(screenPrice);
console.log(adaptive);
console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);
console.log(fullPrice);
console.log(str.split());
console.log(servicePercentPrice);