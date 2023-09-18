const fromCurrencySelect = document.getElementById('fromCurrency');
const toCurrencySelect = document.getElementById('toCurrency');
const amountInput = document.getElementById('amount');
const convertButton = document.getElementById('convert');
const convertedAmountSpan = document.getElementById('convertedAmount');

// Fixed exchange rates (replace with actual rates if needed)
const exchangeRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.74,
    JPY: 109.21,
    CAD: 1.26,
};

// Populate currency dropdowns
for (const currency in exchangeRates) {
    const option1 = document.createElement('option');
    option1.value = currency;
    option1.textContent = currency;

    const option2 = document.createElement('option');
    option2.value = currency;
    option2.textContent = currency;

    fromCurrencySelect.appendChild(option1);
    toCurrencySelect.appendChild(option2);
}

// Handle currency conversion
convertButton.addEventListener('click', () => {
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    const amount = parseFloat(amountInput.value);

    if (!fromCurrency || !toCurrency || isNaN(amount)) {
        alert('Please enter valid values.');
        return;
    }

    const conversionRate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
    const convertedAmount = (amount * conversionRate).toFixed(2);
    convertedAmountSpan.textContent = convertedAmount;
});
