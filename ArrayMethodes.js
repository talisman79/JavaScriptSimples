/****** .filter() ******/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// Создаёт новый массив основываясь на том, соответствуют ли 
// элементы массива определённому условию.

const studentsAge = [17, 16, 18, 19, 21, 17];
const ableToDrink = studentsAge.filter(age => age > 18);
// Массив ableToDrink будет содержать два значения: [19, 21]

console.log('show method .filter');
console.log(ableToDrink);
/**********************************************************/

/****** .map() ******/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// позволяет создать новый массив, основанный на 
// каким-то образом обработанных значениях другого массива. 
// Этот метод отлично подходит для модификации данных, он,
// благодаря тому, что не вносит изменений в исходный массив.

const numbers = [2, 3, 4, 5];
const dollars = numbers.map( number => '$' + number );
// Вот как будет выглядеть массив dollars: ['$2', '$3', '$4', '$5']

console.log('show method .map');
console.log(dollars);
/**********************************************************/

/****** .reduce() ******/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// Метод позволяет свести массив к единственному значению,
// накапливаемому в элементе-приёмнике. 
// Значение, возвращаемое этим методом, может быть любого типа.
// Например, это может быть объект, массив, строка или число.

const numbersArray = [5, 10, 15];
const total = numbersArray.reduce( (accumulator, currentValue) => accumulator + currentValue );
// в константу total будет записано число 30

console.log('show method .reduce');
console.log(total);
/**********************************************************/

/****** .forEach() ******/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// Метод применяет переданную ему функцию к каждому элементу массива.

const emotions = ['happy', 'sad', 'angry'];
console.log('show method .forEach');
emotions.forEach( emotion => console.log(emotion) );
/**********************************************************/

/****** .some() ******/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// Метод проверяет, соответствует ли хотя бы один элемент 
// массива условию, задаваемому передаваемой ему функцией.

const userPrivileges = ['user', 'user', 'user', 'admin'];
const containsAdmin = userPrivileges.some( element => element === 'admin');
// в containsAdmin будет записано true

console.log('show method .some');
console.log(containsAdmin);
/**********************************************************/

/****** .every() ******/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// Метод похож на вышеописанный метод .some(), но он возвращает
// true только в том случае, если все элементы массива соответствуют
// условию, задаваемому передаваемой этому методу функцией.

const ratings = [3, 5, 4, 3, 5];
const goodOverallRating = ratings.every( rating => rating >= 3);
//goodOverallRating будет равно true

console.log('show method .every');
console.log(goodOverallRating);
/**********************************************************/

/****** .includes() ******/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
// Метод позволяет узнать, содержит ли массив заданное значение.
// Он похож на метод .some(), но он проверяет не соответствие
// элементов массива некоему условию, а наличие в массиве
// заданного при его вызове значения.

const names = ['sophie', 'george', 'waldo', 'stephen', 'henry'];
const includesWaldo = names.includes('waldo');
// includesWaldo получит значение true

console.log('show method .includes');
console.log(includesWaldo);
/**********************************************************/

/****** .from() ******/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
// Статический метод позволяет создавать массивы на основании
// других массивов или строк. Этому методу, при необходимости,
// можно передать функцию для выполнения мэппинга, что позволяет
// воздействовать на данные, которые попадут в новый массив.

const newArray = Array.from('hello');
//массив newArray будет иметь вид ['h', 'e', 'l', 'l', 'o']

console.log('show method .from');
console.log(newArray);

const doubledValues = Array.from([2, 4, 6], number => number * 2);
// в массив doubleValues будут записаны следующие данные: [4, 8, 12]
console.log(doubledValues);
/**********************************************************/

/****** Оператор расширения и массивы spread operator ******/
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// Оператор расширения (spread operator, …), в применении к массивам,
// позволяет разворачивать их, извлекая из них их элементы.
// Этот оператор полезен, например, при необходимости выполнения объединения
// нескольких массивов. Кроме того, его использование позволяет избавиться от
// необходимости использовать метод .splice() в том случае, если нужно удалить
// из массива какие-то элементы, так как он может быть скомбинирован 
// с методом .slice(), что позволяет избежать изменения исходного массива.

const spreadableOne = [1, 2, 3, 4];
const spreadableTwo = [5, 6, 7, 8];

const combined = [...spreadableOne, ...spreadableTwo];
// массив combined будет выглядеть так: [1, 2, 3, 4, 5, 6, 7, 8]

console.log('show spread operator');
console.log(combined);

const animals = ['squirrel', 'bear', 'deer', 'salmon', 'rat'];
const mammals = [...animals.slice(0,3), ...animals.slice(4)];
//массив mammals примет следующий вид: ['squirrel', 'bear', 'deer', 'rat']

console.log(mammals);
/**********************************************************/