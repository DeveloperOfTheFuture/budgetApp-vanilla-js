const balance = document.querySelector('#balance');
const moneyPlus = document.querySelector('#money-plus');
const moneyMinus = document.querySelector('#money-minus');
const list = document.querySelector('#list');
const form = document.querySelector('#form');
const text = document.querySelector('#text');
const amount = document.querySelector('#amount');

const dummyTransactions = [{
    id: 1,
    text: 'App',
    amount: -20
  },
  {
    id: 2,
    text: 'Salary',
    amount: 520
  },
  {
    id: 3,
    text: 'Game',
    amount: -100
  },
  {
    id: 4,
    text: 'Bank transfer',
    amount: 10
  },
];

let transactions = dummyTransactions;

// Add transactions to DOM
function addTransactionDOM(transaction) {
  const sign = transaction.amount < 0 ? '-' : '+';

  const item = document.createElement('li');
  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
  item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span> <button class="delete-btn">x</button>
  `;

  list.appendChild(item);
}

// Update balance, income, expense
function updateValues() {
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);

  const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

  balance.textContent = `$${total}`;
  moneyPlus.textContent = `$${income}`;
  moneyMinus.textContent = `$${expense}`
}

// Init transactions
function init() {
  list.innerHTML = '';

  transactions.forEach(addTransactionDOM);
  updateValues();
}

init();