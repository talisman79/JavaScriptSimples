// Перехватчик get выполняется при попытке доступа к свойству объекта с использованием прокси. 

let handler = {
    get: function(target, name){
        return name in target ? target[name] : "Key does not exist";
    }
}

let obj = {
    c: "car",
    b: "bike"
};

let proxyObj = new Proxy(obj, handler);

console.log(proxyObj.b);
console.log(proxyObj.c);
console.log(proxyObj.l);