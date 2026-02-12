const numbers = ['one', 'two', 'three'];

const myList = document.querySelector('#myList');

const students = [
    { last: 'Andrus', first: 'Aaron' },
    { last: 'Masa', first: 'Manny' },
    { last: 'Tanda', first: 'Tamanda' }
];

const myStudentList = document.querySelector('#myStudentList');


const myNewList = numbers.map((number) => {
    const item = `<li>${number}</li>`;
    console.log(number);
    return item;
});

myList.innerHTML = myNewList.join('');

const studentList = students.map((student) => {
    const item = `<li>${student.first} ${student.last}</li>`;
    return item;
});

studentContainer.innerHTML = studentList.join('');