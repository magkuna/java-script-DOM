const collection = document.querySelector('h1');
collection.style.color = 'red';
collection.style.textDecoration = 'underline';

const collection2 = document.querySelectorAll ('p');
let i;
for (i = 0; i < collection2.length; i++){
    collection2[i].style.backgroundColor= 'yellow';
}

collection2[0].style.textDecoration= 'underline';