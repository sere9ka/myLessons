// Получить все блоки с классом screen в изменяемую переменную ( let ) через метод querySelectorAll (далее мы будем переопределять ее значение)
'use strict';

const title = document.getElementsByTagName('h1')[0];
const buttonCalc = document.getElementsByClassName('handler_btn')[0];
const buttonRes = document.getElementsByClassName('handler_btn')[1];
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPer = document.querySelectorAll('.other-items.percent');
const otherItemsNum = document.querySelectorAll('.other-items.number');
const inputRange = document.querySelector(".rollback  input[type=range]");
const spanRange = document.querySelector(".rollback  span.range-value");

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const totalFullCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

let screenBlocks = document.querySelectorAll('.screen');

//старая часть работы
const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    servicePercentPrice: 0,
    allServicePrices: 0,
    fullPrice: 0,
    services: {},
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    start: function () {
        appData.asking();
        appData.addPrices();
        appData.getRollbackMessage();
        appData.getFullPrice();
        appData.getTitle();
        appData.getServicePercentPrices();

        appData.logger();
    },
    asking: function () {



        do {
            appData.title = prompt('Как называется Ваш проект?', 'Калькулятор вёрстки');
        } while (appData.isNumber(appData.title))


        for (let i = 0; i < 2; i++) {
            let price = 0;
            let name;
            do {
                name = prompt('Какие типы экранов нужно разработать?');
            } while (appData.isNumber(name));

            do {
                price = prompt('Сколько будет стоить данная работа?');
                price = price.split(' ').filter(function (str) {
                    return /\S/.test(str);
                });
                price = +price.join('')
            } while (!appData.isNumber(price))

            appData.screens.push({ id: i, name: name, price: price })
        }



        appData.adaptive = confirm('Нужен ли адаптив на сайте?');

        for (let i = 0; i < 2; i++) {
            let name;
            let servicePrice = 0;

            do {
                name = prompt('Какой тип дополнительной услуги нужен?');
            } while (appData.isNumber(name));

            do {
                servicePrice = prompt('Сколько это будет стоить?');
                servicePrice = servicePrice.split(' ').filter(function (str) {
                    return /\S/.test(str);
                });
                servicePrice = +servicePrice.join('')
            } while (!appData.isNumber(servicePrice)) {
            }
            appData.services[name + i] = +servicePrice;

        }
    },

    addPrices: function () {
        // for (let screen of appData.screens) {
        //     appData.screenPrice += +screen.price;
        // }

        appData.screenPrice = appData.screens.reduce(function (sum, screen) {
            return sum + screen.price
        }, 0);

        for (const key in appData.services) {
            appData.allServicePrices += appData.services[key]
        }
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


    getFullPrice: function () {
        appData.fullPrice = +appData.screenPrice + +appData.allServicePrices;
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
    },
    getServicePercentPrices: function () {
        appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
    },
    logger: function () {
        console.log(appData.screens);
        for (const key in appData) {
            console.log('Ключ: ' + key + ' ' + 'Значение: ' + appData[key]);
        }

    }
}

//объявления функций


//вызов функций

appData.start()


//мусор и логи