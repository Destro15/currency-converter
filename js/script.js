{
    const calculateResult = (amount, currency) => {
        const rateEUR = 4.76
        const rateGBP = 5.36
        const rateUSD = 4.46

        switch (currency) {
            case "EUR":
                return amount / rateEUR;


            case "GBP":
                return amount / rateGBP;


            case "USD":
                return amount / rateUSD


        }
    };
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        const resultElement = document.querySelector(".js-result");


        const amount = +amountElement.value;
        const currency = currencyElement.value;
        let result = calculateResult(amount, currency);

        const resultText = (amount, currency, result) => { resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>` }

        resultText(amount, currency, result);


    });
}