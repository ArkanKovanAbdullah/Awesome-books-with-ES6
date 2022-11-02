import Collect from './modules/class.js';
import * as variables from './class.js';

variables.booksContainer.classList.add('books-list');
const bookie = new Collect();
bookie.displayBooks();

document.forms[0].onsubmit = (event) => {
  event.preventDefault();
  const thisForm = event.target;
  const title = thisForm[0].value;
  const author = thisForm[1].value;

  if (title === '' || author === '') {
    const section = document.getElementById('form-section');
    const message = document.createElement('p');
    message.innerHTML = 'Please put something into the fields';
    section.insertAdjacentElement('afterend', message);
    setTimeout(() => { message.remove(); }, 3000);
  } else {
    bookie.addBook(title, author);
    thisForm[0].value = '';
    thisForm[1].value = '';
  }
  window.localStorage.setItem('storedBooks', JSON.stringify(bookie.books));
};

variables.listBtn.addEventListener('click', () => {
  listOfBooksOnScreen.classList.remove('display-none');
  addNewBookForm.classList.add('display-none');
  contact.classList.add('display-none');
});

variables.addNewBtn.addEventListener('click', () => {
  listOfBooksOnScreen.classList.add('display-none');
  addNewBookForm.classList.remove('display-none');
  contact.classList.add('display-none');
});

variables.contactBtn.addEventListener('click', () => {
  listOfBooksOnScreen.classList.add('display-none');
  addNewBookForm.classList.add('display-none');
  contact.classList.remove('display-none');
});

const dateNow = document.getElementById('todays-date');
const today = new Date();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const date = today.getDate();
const hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();

dateNow.innerHTML = `${month}/${date}/${year}, ${hours}:${minutes}:${seconds}`;