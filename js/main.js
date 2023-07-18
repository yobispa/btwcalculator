console.log('main.js');

const calculateBtn = document.querySelector('.calculateBtn');
const getValue = document.querySelector('.netto')

calculateBtn.addEventListener('click', inputValidate)

function inputValidate() {
    const value = getValue.value;
    if (value == '') {
        alert('Type something in');
    } else if (value <= 0) {
        alert('Type a positive number');
    } else {
        calculate(value);
    }
}
function calculate(amount) {
    const totalValueWithTax = amount * 1.21;
    const taxValue = totalValueWithTax - amount;
    const youngOnesProfit = totalValueWithTax / 100 * 2.9;
    const youngOnesProfitTax = youngOnesProfit / 100 * 121;
    const yearlyTaxes = amount - youngOnesProfitTax
    const yearlyTaxesProfit = yearlyTaxes / 100 * 10;
    const userProfit = yearlyTaxes - yearlyTaxesProfit;
    
document.querySelector(".total-outcome").innerHTML = `Totaal bedrag met 21% btw: €${totalValueWithTax.toFixed(2)} <br><br> bedrag btw: €${taxValue.toFixed(2)}`
document.querySelector(".young-ones-profit").textContent = `Bedrag die YoungOnes moet krijgen: €${youngOnesProfitTax.toFixed(2)}`
document.querySelector(".yearly-tax").textContent = `Bedrag die voor inkomstenbelasting moet bewaren: €${yearlyTaxesProfit.toFixed(2)}`
document.querySelector(".user-profit").textContent = `Jouw nieuwe bedrag: €${userProfit.toFixed(2)}`
}