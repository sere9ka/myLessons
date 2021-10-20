'use strict';

const title = document.getElementsByTagName('h1')[0];
const buttonCalc = document.getElementsByClassName('handler_btn')[0];
const buttonReset = document.getElementsByClassName('handler_btn')[1];
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');
const inputRange = document.querySelector(".rollback  input[type=range]");
const spanRange = document.querySelector(".rollback  span.range-value");
const screenOne = document.querySelector('.screen');
const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const totalFullCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];
const checkboxs = document.querySelectorAll('input[type=checkbox]');
const checkCMS = document.getElementById('cms-open');
const selectCms = document.getElementById('cms-select');
const variantsCms = document.querySelector('.hidden-cms-variants');
const cmsInput = document.getElementById('cms-other-input');
const cmsBlock = document.querySelector('.hidden-cms-variants > .main-controls__input');

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
        this.addTitle()
        this.default()
        buttonCalc.addEventListener('click', this.buttonStopped);
        buttonPlus.addEventListener('click', this.addScreenBlock);
        inputRange.addEventListener('input', this.getRollbackValue);
        buttonReset.addEventListener('click', this.reset);
        checkCMS.addEventListener('change', this.cms);
    },
    getSelect: function () {
        
        if (selectCms.value == '50') {
            cmsBlock.style.display = 'block';
            cmsInput.value = +50;
            cmsInput.disabled = true;
        } else if (selectCms.value == 'other') {
            cmsBlock.style.display = 'block';
            cmsInput.value = +'';
            cmsInput.disabled = false;
        } else {
            cmsBlock.style.display = 'none';
        }
    },
    cms: function() {
        
        variantsCms.style.display = 'flex';
        selectCms.addEventListener('change', appData.getSelect)
    },
    pullScreens: () => screens = document.querySelectorAll('.screen'),

    addTitle: function () {
        document.title = title.textContent
    },
    default: function () {
        inputRange.defaultValue = 10;
        spanRange.textContent = inputRange.value + '%';

    },
    buttonStopped: function () {
        let select;
        let input;
        appData.pullScreens()
        screens.forEach(screen  => {
            input = screen.querySelector('input');
            select = screen.querySelector('select');
        })
        if (select.selectedIndex == 0 || input.value == 0 || input.value == null) {
            appData.init()
        } else {
            appData.start()
        }

    },
    blockedFunc: function() {
        const selectsType = document.querySelectorAll('select');
        const inputs =  document.querySelectorAll('.screen > .main-controls__input > input');

        selectsType.forEach((selectType) => selectType.disabled = !selectType.disabled);
        inputs.forEach((input) => input.disabled = !input.disabled);
        checkboxs.forEach((checkbox) => checkbox.disabled = !checkbox.disabled);
        buttonCalc.classList.toggle('display--none');
        buttonReset.classList.toggle('display--none');
        
    },
    start: function () {
        this.addScreens()
        this.addServices()
        this.addPrices();
        // this.logger();
        this.showResult()
    },
    resetValue: function () {
        appData.title = '',
        appData.screens = [],
        appData.count = 0,
        appData.screenPrice = 0,
        appData.adaptive = true,
        appData.rollback = 10,
        appData.servicePercentPrice = 0,
        appData.servicePricesPercent = 0,
        appData.servicePricesNumber = 0,
        appData.fullPrice = 0,
        appData.servicesNumber = {},
        appData.servicesPercent = {},

        total.value = this.screenPrice;
        totalCount.value = this.count;
        totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber
        totalFullCount.value = this.fullPrice
        totalCountRollback.value = this.servicePercentPrice

        checkboxs.forEach((checkbox) => checkbox.checked = false);

        screens.forEach((screen, index) => {
            if (index !== 0) {
                screen.remove()
            } else {
                const select = screen.querySelector('select');
                const input = screen.querySelector('input');
                select.selectedIndex = 0;
                input.value = '';
            }
        })
        variantsCms.style.display = 'none';
    },
    reset: function() {
        appData.blockedFunc()
        appData.resetValue()
        appData.init();
    },
    showResult: function () {
        total.value = this.screenPrice;
        totalCount.value = this.count;
        totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber
        totalFullCount.value = this.fullPrice
        totalCountRollback.value = this.servicePercentPrice

        this.blockedFunc()
    },
    addScreens: function () {
        this.pullScreens();
        screens.forEach((screen, index)  => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;
            this.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value
            })
            this.count += +input.value
        })
    },

    addServices: function () {
        otherItemsPercent.forEach(item => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                this.servicesPercent[label.textContent] = +input.value;
            }
        })
        otherItemsNumber.forEach(item => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value;
            }
        })


    },
    addScreenBlock: function () {
        screens = document.querySelectorAll('.screen'); //без этого не видит новый предпоследий элемент коллекции
        const cloneScreen = screens[0].cloneNode(true);
        cloneScreen.querySelector('input').value = '';
        screens[screens.length - 1].after(cloneScreen);
    },
    addPrices: function () {
        this.screenPrice = this.screens.reduce((sum, screen) => {
            return sum + screen.price
        }, 0);
        for (const key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key]
        }
        for (const key in this.servicesPercent) {
            this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100)
        }
        this.fullPrice = (+this.screenPrice + +this.servicePricesNumber + +this.servicePricesPercent) * (cmsInput.value / 100 + 1) ;

        this.servicePercentPrice = Math.ceil(this.fullPrice - (this.fullPrice * (this.rollback / 100)));
    },
    getRollbackValue: function (event) {
        let valueInputRange = event.target.value;
        spanRange.textContent = valueInputRange + '%';
        this.rollback = +valueInputRange;
    },
    logger: function () {
        console.log(this.screens);
        for (const key in this) {
            console.log('Ключ: ' + key + ' ' + 'Значение: ' + this[key]);
        }

    }
}

//объявления функций


//вызов функций

appData.init()


//мусор и логи