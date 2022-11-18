const searchBtn = document.querySelector("#search-btn");
const cryptoInput = document.querySelector("#country-input");
const result = document.querySelector("#result");

searchBtn.addEventListener('click', () => {
    let cryptoName = cryptoInput.value;
    let finalUrl = `https://api.coingecko.com/api/v3/coins/${cryptoName}`;
    countryApi(finalUrl)
})

function countryApi(api) {
    fetch(api)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            // console.log(data.genesis_date)
            // console.log(data.image.large)
            // console.log(data.name)
            // console.log(data.symbol)
            // console.log(data.market_data.current_price.usd)
            // console.log(data.market_data.ath.usd)
            // console.log(data.market_data.market_cap.usd)
            result.innerHTML = `
            <img src="${data.image.large}" class="flag-img">
            <h2>${data.name}</h2>
            <div class="wrapper"
                <div class="data-wrapper">
                    <h4>Genesis Date:</h4>
                    <span>${data.genesis_date}</span>
                </div>
            </div>
            <div class="wrapper"
                <div class="data-wrapper">
                    <h4>Current Price:</h4>
                    <span>${data.market_data.current_price.usd}</span>
                </div>
            </div>
            <div class="wrapper"
                <div class="data-wrapper">
                    <h4>All time High:</h4>
                    <span>${data.market_data.ath.usd}</span>
                </div>
            </div>
            <div class="wrapper"
                <div class="data-wrapper">
                    <h4>Symbol:</h4>
                    <span>${data.symbol}</span>
                </div>
            </div>
            <div class="wrapper"
                <div class="data-wrapper">
                    <h4>Market Cap:</h4>
                    <span>${data.market_data.market_cap.usd.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                </div>
            </div>
            `
        })
        .catch(() => {
            if(cryptoInput.value.length == 0) {
                result.innerHTML = `
                <h3>The input field cannot be empty</h3>
                `
            } else {
                result.innerHTML = `
                <h3>Please enter a valid country name.</h3>
                `
            }

        })
}

//commit