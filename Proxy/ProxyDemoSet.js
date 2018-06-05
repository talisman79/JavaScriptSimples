// Проанализировав этот пример, можно заметить, 
// что если после объявления proxyObj попытаться 
// задать новое свойство объекта, будет вызван 
// перехватчик и в объекте будет сохранено 
// значение свойства, изменённое им.

let handler = {    
    set: function(target, name, value){
        target[name] = value * 10;
    }
}

let obj = {
    a: 1,
    b: 2    
};

let proxyObj = new Proxy(obj, handler);

proxyObj.c = 3;

console.log(proxyObj.a); // Результат 1
console.log(proxyObj.b); // Результат 2
console.log(proxyObj.c); // Результат 30