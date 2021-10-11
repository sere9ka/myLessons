'use strict';

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
    getFullPrice: function () {
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
    }
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

appData.start()

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
