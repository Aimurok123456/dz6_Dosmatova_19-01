
// №1 . Дан массив.
// Запишите первый элемент этого массива в переменную elem1,
// второй - в переменную elem2, третий - в переменную elem3,
// а все остальные элементы массива - в переменную arr.

// let newArr = ['V', 'JK', 'третий', 'четвертый', 'пятый', 'шестой', 'седьмой'];
// let [elem1, elem2, ...arr] = newArr;
// document.write(elem1 + '| '+ elem2 + '|' +arr);


// №2. Дан массив.
//     Запишите последний элемент этого массива в переменную elem1,
//     а предпоследний - в переменную elem2
//     (подсказка: используйте метод reverse() )

let newArr = ['первый', 'второй', 'третий', 'четвертый', 'пятый', 'JK', 'V'];
newArr.reverse();
let [elem1, elem2] = newArr;
document.write(elem1 + '|'+ elem2);


// №3.Сделайте функцию,
//     которая получает имя пользователя
//     и выводит на экран 'Привет, Имя' (вместо Имя - полученное параметром имя).
//     По умолчанию (то есть если не передать параметр)
//     функция должна выводить 'Привет, Аноним'.

function func (a = 'Аноним') {
    alert('Привет, '+ a );
}

let name = 'UserName';
func();