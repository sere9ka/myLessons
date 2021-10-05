'use strict';

let rollback = 13;
let title = prompt('Как называется Ваш проект?');
console.log(title);
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
console.log(screens);
let screenPrice = prompt('Сколько будет стоить данная работа?');
console.log(screenPrice);
let adaptive = confirm('Нужен ли адаптив на сайте?');
console.log(adaptive);
let service1 = prompt('Какой тип дополнительной услуги нужен?');
console.log(service1);
let servicePrice1 = prompt('Сколько это будет стоить?');
console.log(servicePrice1);
let service2 = prompt('Какой тип дополнительной услуги нужен?');
console.log(service2);
let servicePrice2 = prompt('Сколько это будет стоить?');
console.log(servicePrice2);

let fullPrice = +screenPrice + +servicePrice1 + +servicePrice2
console.log(fullPrice);

let str = screens.toLowerCase()
console.log(str.split());

let rollbackPrice = fullPrice * (rollback/100)

let servicePercentPrice = Math.ceil(+fullPrice - +rollbackPrice);
console.log(servicePercentPrice);

if (fullPrice >= 30000) console.log('Даём скидку в 10%');
else if (fullPrice < 30000 && fullPrice >= 15000) console.log('Даём скидку в 5%');
else if (fullPrice < 15000 && fullPrice >= 0) console.log('Скидка не предусмотрена');
else console.log('Что то пошло не так');