const rangeInputs = document.querySelectorAll('input[type="range"]')

function handleInputChange(e) {
    let target = e.target
    if (e.target.type !== 'range') {
        target = document.getElementById('range')
    }
    const min = target.min
    const max = target.max
    const val = target.value

    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
    input.addEventListener('input', handleInputChange)
})


/*Loan caclulatr------------------*/

let price = document.getElementById('price');
let payment = document.getElementById('payment');
let period = document.getElementById('period');

let periodType = document.getElementsByName('periodType');
let rate = document.getElementById('rate')
let changeLoanElements = document.getElementsByClassName('change-loan');
let changePeriodTypeElement = document.getElementsByClassName('change-period-type')


Array.prototype.forEach.call(changeLoanElements, function(item) {
    item.addEventListener('change', changes);
});


Array.prototype.forEach.call(changePeriodTypeElement, function(item) {
    item.addEventListener('change', changePeriodType);
});

function changes(event){
    let paymont = payment.value;
    let priveValue = price.value;
    let periodValue = period.value;
    let periodTypeValue = 'year'
    let rateValue = rate.value;


    periodType.forEach((item)=> {
        if (item.checked) {
            periodTypeValue = item.value;
        }
    })
    if(periodTypeValue == 'year'){
        periodValue = periodValue * 12;
    }

    let downPrice = priveValue * paymont / 100;
    let amount = priveValue - downPrice;


    rateValue= rateValue/100;
    let monthly=rateValue/12;


    // let paymentMount =((amount*monthly)/(1-Math.pow((1+monthly),-periodValue))).toFixed(2);

    let paymentMount =Math.round(((amount*monthly)/(1-Math.pow((1+monthly),-periodValue))));

    let monthlyPaymentPriceElement = document.getElementById('monthly-payment-price');

    monthlyPaymentPriceElement.innerHTML = paymentMount + "$"

}

function changePeriodType(event){
    let periodValueElement = document.getElementById('periodValue');
    let periodTypeElement = document.getElementById('period-type');

    if(event.target.value === 'month'){
        let periodValue = period.value * 12;
        periodValueElement.innerHTML = periodValue;
        periodTypeElement.innerHTML = 'month';
        period.max = 240;
        period.min = 12;
        period.value = periodValue;

    } else {
        let periodValue = Math.round(period.value / 12);
        periodValueElement.innerHTML = periodValue;
        periodTypeElement.innerHTML = 'year';
        period.max = 20;
        period.min = 1;
        period.value = periodValue;

    }

    changes();
}



/*caclulatr------------------*/


