// Получить все блоки с классом screen в изменяемую переменную ( let ) через метод querySelectorAll (далее мы будем переопределять ее значение)
'use strict';

const title = document.getElementsByTagName('h1')[0];
const buttonCalc = document.getElementsByClassName('handler_btn')[0];
const buttonReset = document.getElementsByClassName('handler_btn')[1];
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');
const inputRange = document.querySelector(".rollback  input[type=range]");
const spanRange = document.querySelector(".rollback  span.range-value");

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const totalFullCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen');

//старая часть работы
const appData = {
    title: '',
    screens: [],
    count: 0,
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    servicePercentPrice: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicesNumber: {},
    servicesPercent: {},
    init: function () {
        appData.addTitle()
        buttonCalc.addEventListener('click', appData.buttonStopped);
        buttonPlus.addEventListener('click', appData.addScreenBlock);
        inputRange.addEventListener('input', appData.getRollbackValue);
    },
    addTitle: function () {
        document.title = title.textContent
    },
    buttonStopped: function () {
        let select;
        let input;
        screens = document.querySelectorAll('.screen');
        screens.forEach(function (screen) {
            input = screen.querySelector('input');
            select = screen.querySelector('select');
        })
        if (select.selectedIndex == 0 || input.value == 0 || input.value == null) {
            appData.init()
        } else {
            appData.start()
        }
    },
    start: function () {
        appData.addScreens()
        appData.addServices()
        appData.addPrices();
        // appData.logger();
        appData.showResult()
    },
    showResult: function () {
        total.value = appData.screenPrice;
        totalCount.value = appData.count;
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber
        totalFullCount.value = appData.fullPrice
        totalCountRollback.value = appData.servicePercentPrice
    },
    addScreens: function () {
        screens = document.querySelectorAll('.screen');
        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;
            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value
            })
            appData.count += +input.value
        })
    },

    addServices: function () {
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value;
            }
        })
        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value;
            }
        })


    },
    addScreenBlock: function () {
        screens = document.querySelectorAll('.screen'); //без этого не видит новый предпоследий элемент коллекции
        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreen);
    },
    addPrices: function () {
        appData.screenPrice = appData.screens.reduce(function (sum, screen) {
            return sum + screen.price
        }, 0);
        for (const key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key]
        }
        for (const key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100)
        }
        appData.fullPrice = +appData.screenPrice + +appData.servicePricesNumber + +appData.servicePricesPercent;

        appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
    },
    getRollbackValue: function (event) {
        let valueInputRange = event.target.value;
        spanRange.textContent = valueInputRange;
        appData.rollback = valueInputRange;
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

appData.init()


//мусор и логи