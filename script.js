// Input elements
var loanInput = document.querySelector("#loan-input-value");
var interestInput = document.querySelector("#intrest-input-value");
var tenureInput = document.querySelector("#tenure-input-value");
var button = document.querySelector("#butn");

var yearRadio = document.getElementById('year');
var monthRadio = document.getElementById('month');

var emiValue = document.querySelector("#loan-emi-value");
var interestValue = document.querySelector("#total-intrest-value");
var totalValue = document.querySelector("#total-emi-value");

// Initial input values
var loanAmount = parseFloat(loanInput.value);
var interestRate = parseFloat(interestInput.value) / 100;
var loanTenure = parseFloat(tenureInput.value);

// Check radio input
var frequency = yearRadio.checked ? 12 : 1;

// Total amount of payment
var n = loanTenure * frequency;
var interest = interestRate / frequency;

// Calculated EMI
const calculateEMI = () => {
    let emi = loanAmount * interest * (Math.pow(1 + interest, n) / (Math.pow(1 + interest, n) - 1));
    return emi;
};

// Update the result
var updateData = (emi) => {
    emiValue.innerHTML = Math.round(emi);

    let totalAmount = Math.round(n * emi);
    totalValue.innerHTML = totalAmount;

    let totalInterest = Math.round(totalAmount - loanAmount);
    interestValue.innerHTML = totalInterest;
};


const initialize = () => {
    let emi = calculateEMI();
    updateData(emi);
};
initialize();

// Refresh input values
const refreshInputs = () => {
    loanAmount = parseFloat(loanInput.value);
    interestRate = parseFloat(interestInput.value) / 100;
    loanTenure = parseFloat(tenureInput.value);
    frequency = yearRadio.checked ? 12 : 1;
    n = loanTenure * frequency;
    interest = interestRate / frequency;
};

//  button click event
button.addEventListener("click", () => {
    refreshInputs();
    let emi = calculateEMI();
    updateData(emi);
});
