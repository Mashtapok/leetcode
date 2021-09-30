const initialString = 'TxnbO^lbhk-emoaq_k';

const arrayFromString = initialString.split('').map(c => c.charCodeAt(0));
console.log(arrayFromString); // [84, 120, 110, 98, 79, 94, 108, 98, 104, 107, 45, 101, 109, 111, 97, 113, 95, 107]
console.log(String.fromCharCode(...arrayFromString)); // "TxnbO^lbhk-emoaq_k" - получим исходную строку

// В условии массив перебирается с помощью .map((c, i) => String(c).charCodeAt(0) - i % 10)
// Рассмотрим конкретный случай с c = 84, i = 0 (из массива arrayFromString), чтобы выяснить алгоритм и закономерность
// 84 = с - 0; следовательно c = 84 + 0, где 84 = c, 0 = i % 10;
// На основании этого создадим новый массив, произведя манипуляцию с числами

const mappedArray = arrayFromString.map((c, i) =>  c + i % 10)

console.log(String.fromCharCode(...mappedArray)) // получим ответ str === "TypeScript-forever"
