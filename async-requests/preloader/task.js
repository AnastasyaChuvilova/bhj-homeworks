const loader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');

function renderCurrencies(data) {
  itemsContainer.innerHTML = '';
  for (const currencyCode in data) {
    const currency = data[currencyCode];

    const itemHTML = `
      <div class="item">
        <div class="item__code">${currency.CharCode}</div>
        <div class="item__value">${currency.Value.toFixed(2)}</div>
        <div class="item__currency">руб.</div>
      </div>
    `;

    itemsContainer.insertAdjacentHTML('beforeend', itemHTML);
  }
}

function loadCurrencies() {
  loader.classList.add('loader_active');

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses', true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      renderCurrencies(data.response.Valute);
    } 
    loader.classList.remove('loader_active');
  };

  xhr.send();
}

loadCurrencies();