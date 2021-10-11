'use strict';

<<<<<<< HEAD
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
=======
const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    servicePercentPrice: 0,
    allServicePrices: 0,
    fullPrice: 0,
    service1: '',
    service2: '',
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    start: function () {
        appData.asking();
        appData.logger();
    },
    asking: function () {
        appData.title = prompt('Как называется Ваш проект?', 'Калькулятор вёрстки');
        appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
    
        do {
            appData.screenPrice = prompt('Сколько будет стоить данная работа?');
            appData.screenPrice = appData.screenPrice.split(' ').filter(function (str) {
                return /\S/.test(str);
            });
            appData.screenPrice = +appData.screenPrice.join('')
        } while (!appData.isNumber(appData.screenPrice)) {
        }
        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
        appData.getRollbackMessage();
        appData.getAllServicePrices();
        appData.getFullPrice();
        appData.getTitle();
        appData.getServicePercentPrices();
    },
    getRollbackMessage: function () {
        if (appData.fullPrice >= 30000) {
            return 'Даём скидку в 10%'
        } else if (appData.fullPrice < 30000 && appData.fullPrice >= 15000) {
            return 'Даём скидку в 5%'
        } else if (appData.fullPrice < 15000 && appData.fullPrice >= 0) {
            return 'Скидка не предусмотрена'
        } else
            return 'Что то пошло не так';
    },
    getAllServicePrices: function () {
        let servicePrice;
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                appData.service1 = prompt('Какой тип дополнительной услуги нужен?', 'Метрика');
                do {
                    servicePrice = prompt('Сколько это будет стоить?', '2030');
                    servicePrice = servicePrice.split(' ').filter(function (str) {
                        return /\S/.test(str);
                    });
                    servicePrice = +servicePrice.join('')
                } while (!appData.isNumber(servicePrice)) {
                    
                }
            } else if (i === 1) {
                appData.service2 = prompt('Какой тип дополнительной услуги нужен?', 'Формы');
                do {
                    servicePrice = prompt('Сколько это будет стоить?', '2030');
                    servicePrice = servicePrice.split(' ').filter(function (str) {
                        return /\S/.test(str);
                    });
                    servicePrice = +servicePrice.join('')
                } while (!appData.isNumber(servicePrice)) {
    
                }
            }
            appData.allServicePrices += +servicePrice
        }
        return appData.allServicePrices;
    }, 
    getFullPrice: function() {
        appData.fullPrice = +appData.screenPrice + +appData.allServicePrices;
        return appData.fullPrice;
    },
    getTitle: function () {
        let titleArr = appData.title.split(' ');
        titleArr = titleArr.filter(function (str) {
            return /\S/.test(str);
        });
        appData.title = titleArr.join(' ').toLowerCase();
        titleArr = appData.title.split('');
        let first = titleArr[0].toUpperCase();
        titleArr.splice(0, 1)
        appData.title = [first, ...titleArr].join("");
        return appData.title;
    },
    getServicePercentPrices: function () {
        appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
        return appData.servicePercentPrice;
    },
    logger: function () {
        for (const key in appData) {
           console.log('Ключ: ' + key + ' ' + 'Значение: ' + appData[key]); 
        }
        // console.log('title: ' + appData.title);
        // console.log('screens: ' + appData.screens);
        // console.log('adaptive: ' + appData.adaptive);
        // console.log('service1: ' + appData.service1);
        // console.log('service2: ' + appData.service2);
        // console.log('sum service: ' + appData.service2);
        // console.log('screenPrice: ' + appData.screenPrice);
        // console.log('fullPrice: ' + appData.fullPrice);
        // console.log('servicePercentPrice: ' + appData.servicePercentPrice);
        // console.log('allServicePrices: ' + appData.allServicePrices);        
    }
} 

//объявления функций


//вызов функций

appData.start()


//мусор и логи
>>>>>>> lesson07
