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
function calculate(netto) {
    const totalValueWithTax = netto * 1.21;
    const taxValue = totalValueWithTax - netto;
    const youngOnesProfit = netto / 100 * 2.9;
    const yearlyTaxes = netto - youngOnesProfit
    const yearlyTaxesProfit = yearlyTaxes / 100 * 10;
    const userProfit = yearlyTaxes - yearlyTaxesProfit;
    
document.querySelector(".total-outcome").textContent = `Totaal bedrag met 21% btw: €${totalValueWithTax.toFixed(2)}`
document.querySelector(".young-ones-profit").textContent = `Bedrag die YoungOnes profiteer: €${youngOnesProfit.toFixed(2)}`
document.querySelector(".yearly-tax").textContent = `Bedrag die voor inkomstenbelasting moet bewaren: €${yearlyTaxesProfit.toFixed(2)}%`
document.querySelector(".user-profit").textContent = `Jouw nieuwe bedrag: €${userProfit.toFixed(2)}`
}