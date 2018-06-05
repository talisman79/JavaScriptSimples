// Перехватчик construct выполняется при вызове оператора new. 

// В следующем примере мы передадим через прокси новое значение,
// к которому добавлен символ валюты, функции-конструктору.

function formatCurrency(format) {
    this.format = format;
}

const handler = {
    construct: function(target, args) {
        return new target("$" + args[0]);
    }
};

const proxy = new Proxy(formatCurrency, handler);

console.log(new proxy('100').format); // Результат -> $100