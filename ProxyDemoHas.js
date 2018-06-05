// Перехватчик has вызывается при выполнении оператора in. 

// В следующем примере мы проверяем, входит ли в ключ подстрока ar.
// Для начала проверим, существует ли ключ, и, если это так, проверим,
// содержит ли он интересующую нас подстроку. Если будут выполнены оба условия,
// мы вернём логическое значение true, в противном случае — вернём false.

const handler = {
    has: function (target, key) {
        if(key in target && key.includes("ar")){
            return true;
        }
        return false;
    }
};

const user = {
    car: 'Bentley',
    bar: 4,
    hotel: "no"
};

const proxy = new Proxy(user, handler);

console.log('car' in proxy); // Результат -> true
console.log('car' in user); // Результат -> true
console.log('hotel' in proxy); // Результат -> false
console.log('hotel' in user); // Результат -> true
console.log('spacebar' in proxy); // Результат -> false
console.log('spacebar' in user); // Результат -> false