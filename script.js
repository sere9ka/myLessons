'use strict';

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 13;
let servicePercentPrice;
let allServicePrices;
let fullPrice;
let service1;
let service2;
let servicePrice;

//объявления функций

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function () {
    title = prompt('Как называется Ваш проект?', 'Калькулятор вёрстки');
    screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');

    do {
        screenPrice = prompt('Сколько будет стоить данная работа?');
    } while (!isNumber(screenPrice)) {

    }

    adaptive = confirm('Нужен ли адаптив на сайте?');
}

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
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
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt('Какой тип дополнительной услуги нужен?', 'Метрика');
            do {
                servicePrice = prompt('Сколько это будет стоить?', '2030');
            } while (!isNumber(servicePrice)) {
                
            }
        } else if (i === 1) {
            service2 = prompt('Какой тип дополнительной услуги нужен?', 'Формы');
            do {
                servicePrice = prompt('Сколько это будет стоить?', '2030');
            } while (!isNumber(servicePrice)) {

            }
        }
        sum += +servicePrice
    }
    return sum;
}

function getFullPrice() {
    return +screenPrice + +allServicePrices;
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

const getServicePercentPrices = function () {
    return Math.ceil(fullPrice - (fullPrice * (rollback / 100)));
}

//вызов функций

asking()
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);
showTypeOf(fullPrice);
showTypeOf(servicePercentPrice)


//мусор и логи
console.log("allServicePrices", allServicePrices);
console.log(screens.toLowerCase().split());
console.log(getRollbackMessage(fullPrice));
console.log(getServicePercentPrices());