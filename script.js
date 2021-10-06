'use strict';

let title = prompt('Как называется Ваш проект?', 'Калькулятор вёрстки');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let screenPrice = +prompt('Сколько будет стоить данная работа?', '26000');
let adaptive = confirm('Нужен ли адаптив на сайте?');

let rollback = 13;
let screensStr = screens.toLowerCase()

let servicePercentPrice;
let allServicePrices;
let fullPrice;

let service1 = prompt('Какой тип дополнительной услуги нужен?', 'Метрика');
let servicePrice1 = +prompt('Сколько это будет стоить?', '2030');
let service2 = prompt('Какой тип дополнительной услуги нужен?', 'Хостинг');
let servicePrice2 = +prompt('Сколько это будет стоить?', '1500');
//объявления функций
const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

const getScreenPrice = function () {
    do {
        screenPrice += +prompt('Сколько будет стоить данная работа?', '26000');
    } while (condition) {
        screenPrice += +prompt('Сколько будет стоить данная работа?', '26000');
    }
}

const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return 'Даём скидку в 10%'
    } else if (price < 30000 && price >= 15000) {
        return 'Даём скидку в 5%'
    } else if (price < 15000 && price >= 0) {
        return 'Скидка не предусмотрена'
    } else
        return 'Что то пошло не так';
}

const getAllServicePrices = function () {
    return servicePrice1 + servicePrice2;
}

function getFullPrice() {
    return screenPrice + allServicePrices;
}

const getTitle = function () {
    let titleArr = title.split(' ');
    titleArr = titleArr.filter(function (str) {
        return /\S/.test(str);
    });
    title = titleArr.join(' ').toLowerCase();
    titleArr = title.split('');
    let first = titleArr[0].toUpperCase();
    titleArr.splice(0, 1)
    title = [first, ...titleArr].join("");
    return title;
}

const getServicePercentPrices = function (full, rollback) {
    servicePercentPrice = Math.ceil(full - (full * (rollback / 100)));
    return servicePercentPrice;
}

//вызов функций
showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
title = getTitle();

//мусор и логи
console.log(screensStr.split());
console.log(getRollbackMessage(fullPrice));
console.log(getServicePercentPrices(fullPrice, rollback));