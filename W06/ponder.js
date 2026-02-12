const numbers = ['one', 'two', 'three'];

const myList = document.querySelector('#myList');


const myNewList = numbers.map((number) => {
    const item = `<li>${number}</li>`;
    console.log(number);
    return item;
});

myList.innerHTML = myNewList.join('');

