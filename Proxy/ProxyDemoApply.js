// Перехватчик apply позволяет вызывать прокси с параметрами.
// Он позволяет переопределять функции. 

// В следующем примере мы, с помощью прокси, переопределим функцию,
// которая умножает два числа. Прокси меняет поведение функции,
// прибавляя 1 к результату умножения.

function multiply (a, b) {
    return a * b;
}

const handler = {
    apply: function(target, thisArg, argumentsList) {
        return target(argumentsList[0], argumentsList[1]) + 1;
    }
};

var proxy = new Proxy(multiply, handler);

console.log(multiply(2, 5)); // Результат -> 10
console.log(proxy(2, 5)); // Результат -> 11
