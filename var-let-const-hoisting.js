// var - let - const

// let age; -> undefined ciktisi verir - baslangic degeri olmadan tanımlabilir.
let age = 28;
console.log(age);

age = 29;
console.log(age); // let ile tanımlanan değişkenin değeri değişebilir.

//const name; -> baslangic degeri olmadan tanımlanamaz.
const name = "Cenk";
// name = "Cenk"; -> const ile tanımlanan değişkenin değeri değişmez.
// console.log(name);



/*
const myArray = [1, 2, 3];
console.log(myArray);
myArray.pop(4);
console.log(myArray);

const fruits = {
    name: "Apple",
    price: 10
}

console.log(fruits);
fruits.price = 20;
console.log(fruits);

**Normalde const ile belirlediğimiz variable değişmemesi gerekirken pop sayesinde arrayden kaldırabildik ve aynı zamanda fruits objesinden de price'ı değiştirebildik.
Buradaki durum şu şekilde açıklanabilir: fruits'in hafızada olduğu yeri tutuyoruz. İçerdiği nesneler değişebilir. Mutable bir değişken olabilir. Referans olarak tuttuğum array ve obje değişmezken, içerisindeki değerler değişebilir.

Eğer;

const fruits = { 
    name: "Banana",
    price: 30
}

şeklinde bir değişim yaparsak; Assignment hatası dönecek ve bunun bir const yani değiştirilemez olduğunu söyleyecektir.

Eğer!;

objenin içindeki değeri değiştirilmesini istemiyorsak şu methodu kullanabiliriz:

Object.freeze(fruits);
*/


/* 
var --> global scope / functional scope
let --> block scope

var x = 1;
console.log(x); -> 1 çıktısı verir.

if (x == 10) {
    var x = 20;
    console.log(x); -> 20 çıktısı verir.
 }

console.log(x); -> 20 çıktısı verir.

---------------------------------------------------------------------------------------------------------------------

let y = 1;
console.log(y); -> 1 çıktısı verir.

if (y == 10) {
    let x = 20;
    console.log(y); -> 20 çıktısı verir.
 }

console.log(y); -> 1 çıktısı verir.

---------------------------------------------------------------------------------------------------------------------

var x = 1;
console.log(window.x); -> var ile oluşturulan değişken window nesnesine bağlı bir property olarak eklenir.

let x = 1;
console.log(window.x); -> let ile oluşturulan değişken window nesnesine bağlı bir property olarak eklenmez. undefined olarak çıktı verir.

-> const içinde aynısı geçerlidir. let gibi davranır.
*/


/* --HOISTING--

console.log(x); -> undefined çıktısı verir. Bu şekilde bir tanımlama yapıldığında var'ı globalde tanımlıyor ve undefined çıktısını veriyor. 
var x = 10;

*Fakat let ve const için aynı durum söz konusu değildir.
*Yukarıdaki şekilde tanımlarsak undefined çıktısı yerine ReferenceError access hatası verir. var gibi global'e tanımlanmaz.

*/

