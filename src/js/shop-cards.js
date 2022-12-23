const lego = [
  {
    id: 1,
    img: 'https://content1.rozetka.com.ua/goods/images/big/286051517.png',
    name: 'Конструктор LEGO DUPLO Town Пожежна машина 21 деталь',
    price: 999,
  },
  {
    id: 2,
    img: 'https://content1.rozetka.com.ua/goods/images/big/191709270.jpg',
    name: 'Конструктор LEGO DUPLO Town Експедиція на шаттлі 23 деталі',
    price: 629,
  },
  {
    id: 2,
    img: 'https://content2.rozetka.com.ua/goods/images/big/181794057.jpg',
    name: 'Конструктор LEGO DUPLO Гараж і автомийка 112 деталей',
    price: 3699,
  },
];

const liRef = document.querySelector('.list');

const markUp = lego.reduce(
  (acc, { id, img, name, price }) =>
    acc +
    `<li data-product-id='${id}'>
  <img src="${img}" alt="${name}" width = '200px'>
  <h1>Product Name: ${name}</h1>
  <p>Price: ${price}</p>
  <button type='button'>Add to card</button>
  <button type='button'>Add to favorite</button>
  </li>`,
  ''
);

liRef.insertAdjacentHTML('beforeend', markUp);
