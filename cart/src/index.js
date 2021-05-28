import faker from 'faker';

document.querySelector(
  '#dev-cart'
).innerHTML = `<h3>Total number of products in cart are: ${faker.datatype.number()}</h3>`;
