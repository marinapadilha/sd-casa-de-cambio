// Constantes no nível do escopo do projeto (snakecase);
const BASE_URL = 'https://api.exchangerate.host';
const LATEST_ENDPOINT = '/latest';

const buildLatestExchangeUrl = (currency) => {
  return `${BASE_URL}${LATEST_ENDPOINT}?base=${currency}`;
}

/* console.log(buildLatestExchangeUrl('BRL')); */

const fetchExchangeRates = async (currency) => {
  try {
    const urlToFetch = buildLatestExchangeUrl(currency);
    const response = await fetch(urlToFetch);
    const json = await response.json();
    const exchangeRates = {
      rates: json.rates,
      base: json.base
    };
    return exchangeRates;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
fetchExchangeRates("BRL")
  .then((result) => console.log(result));