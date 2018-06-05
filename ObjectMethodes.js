/****** Object.values() ******/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
// Метод Object.values() возвращает массив значений свойств переданного ему объекта.

const icecreamColors = {
    chocolate: 'brown',
    vanilla: 'white',
    strawberry: 'red'
};

const colors = Object.values(icecreamColors);
// массив colors будет иметь вид ["brown", "white", "red"]

console.log('show method Object.values()');
console.log(colors);
/**********************************************************/

/****** Object.keys() ******/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
// Метод Object.keys() возвращает массив, состоящий из имён свойств объекта (ключей).

const types = Object.keys(icecreamColors);
//вот как будет выглядеть массив types: ["chocolate", "vanilla", "strawberry"]

console.log('show method Object.keys()');
console.log(types);
/**********************************************************/

/****** Object.entries() ******/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
// Метод Object.entries() возвращает, обработав переданный ему объект,
// массив, содержащий массивы, представляющие собой пары вида [ключ, значение],
// представляющие собой имена свойств и значения этих свойств.

const weather = {
    rain: 0,
    temperature: 24,
    humidity: 33
};

const entries = Object.entries(weather);
// в массив entries попадут следующие данные
// [['rain', 0], ['temperature', 24], ['humidity', 33]]

console.log('show method Object.entries()');
console.log(entries);
/**********************************************************/

/****** Оператор расширения и объекты ******/
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// Применение оператора расширения к объектам позволяет добавлять
// к ним новые свойства и значения без изменения исходных объектов
// (то есть, в результате подобных операций создаются новые объекты).
// Кроме того, этот оператор можно использовать для объединения объектов.
// Тут стоит отметить, что оператор расширения, применённый к объекту,
// не воздействует на объекты, вложенные в него.

const spreadableObject = {
    name: 'Robert',
    phone: 'iPhone'
};

const newObject = {
    ...spreadableObject,
    carModel: 'Volkswagen'
};
// объект newObject будет выглядеть так:
// { carModel: 'Volkswagen', name: 'Robert', phone: 'iPhone' }

console.log('show Object spreadable');
console.log(spreadableObject);
console.log(newObject);
/**********************************************************/

/****** Object.freeze() ******/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
// Метод Object.freeze() «замораживает» объект, предотвращая изменение
// существующих свойств этого объекта или добавление новых свойств и
// значений в объект. Существует ошибочное мнение, что этот метод аналогичен
// объявлению объектов с использованием ключевого слова const,
// однако, объекты-константы модифицировать можно.

const frozenObject = {
    name: 'Robert'
};

Object.freeze(frozenObject);
frozenObject.name = 'Henry';
// объект frozenObject не изменится, он сохранится в виде { name: 'Robert' }

console.log('show method Object.freeze()');
console.log(frozenObject);
/**********************************************************/

/****** Object.seal() ******/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal
// Метод Object.seal() позволяет «запечатать» объект, предотвратив
// добавление новых свойств. При этом существующие свойства можно менять.

const sealedObject = {
    name: 'Robert'
};

Object.seal(sealedObject);
sealedObject.name = 'Bob';
sealedObject.wearsWatch = true;
// объект sealedObject будет выглядеть так: { name: 'Bob' }

console.log('show method Object.seal()');
console.log(sealedObject);
/**********************************************************/

/****** Object.assign() ******/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// Метод Object.assign() позволяет объединять объекты, копируя свойства
// из одного объекта в другой. На самом деле, того же эффекта можно достичь
// с помощью вышеописанного оператора расширения, поэтому без этого метода
// вполне можно обойтись. Надо отметить, что этот метод, как и оператор расширения,
// не выполняет глубокого клонирования объектов. Если вам нужно готовое средство 
//для глубокого клонирования объектов — взгляните на инструменты библиотеки Lodash.

const firstObject = {
    firstName: 'Robert'
};

const secondObject = {
    lastName: 'Cooper'
};

const combinedObject = Object.assign(firstObject, secondObject);
// вот как будет выглядеть объект combinedObjec : { firstName: 'Robert', lastName: 'Cooper' }

console.log('show method Object.assign()');
console.log(combinedObject);
/**********************************************************/