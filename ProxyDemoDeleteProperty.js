// Перехватчик deleteProperty вызывается при обращению к методу delete.

// Следующий пример демонстрирует вызов нужной нам функции и выполнение 
// определённых действий при попытке удаления свойства объекта.

const cars = {
    merc: 's320',
    buggati: 'veyron'
};

const handler = {
    deleteProperty: function(target, prop){
        if (prop in target){
            console.log(`${prop} has been removed `); // Результат -> merc has been removed
            delete target[prop];
        }
    }
};

console.log(cars.merc); // Результат -> "s320"

const proxy = new Proxy(cars, handler);
delete proxy.merc;

console.log(cars.merc); // Результат -> undefined