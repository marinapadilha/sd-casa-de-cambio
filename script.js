const clearList = () => {
  const currencyList = document.getElementById('currency-list');
  currencyList.innerHTML = '';
};

const clearCurrencyInput = () => {
  const currencyInputElement = document.getElementById('currency-input');
  currencyInputElement.value = '';
};

const renderBaseCurrencyTitle = (base) => {
  const baseTitle = document.getElementById('title-base');
  baseTitle.innerHTML = `Valores referentes a: 1 ${base}`;
};

const handleRateItemList = (currency, value) => {
  // 1. Recuperar a lista
  const currencyList = document.getElementById('currency-list');
  
  // const fixedCurrency = currencyList.toFixed(2);

  // 2. Criar uma li
  const li = document.createElement('li');

  // 3. Popular a li com as informações
  // li.innerText = `${currency}: ${value}`; // interpreta como texto
  li.innerHTML = `<strong>${currency}:</strong> ${value}`;

  // 4. Inserir a li na ul
  currencyList.appendChild(li);

};
const handleRates = (rates) => {
  const ratesEntries = Object.entries(rates);
  ratesEntries.forEach((entry) => {
    const [currency, value] = entry;
    handleRateItemList(currency, value);
  });
};
const handleSearchEvent = async () => {
  const currencyElement = document.getElementById('currency-input');
  // console.log(currencyElement);
  const currencyValue = currencyElement.value;
  if (currencyValue === '') {
    alert('Preencha o campo de pesquisa!');
    return;
  }
  const object = await fetchExchangeRates(currencyValue);

  clearList();
  handleRates(object.rates);
  renderBaseCurrencyTitle(object.base);
  clearCurrencyInput();
};

const setupHtmlElements = () => {
  const searchButton = document.getElementById('search-button');
  searchButton.addEventListener('click', handleSearchEvent);
};

window.onload = () => {
  setupHtmlElements();
};
