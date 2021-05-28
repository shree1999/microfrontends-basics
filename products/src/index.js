import faker from 'faker';

let products = '';

for (let i = 0; i < 5; i++) {
  products += `<h2>${faker.commerce.productName()}</h2>`;
}

document.querySelector('#dev-products').innerHTML = products;
