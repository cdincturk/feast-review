// Function Declarations - Function Statement

// !!!!!!!!JAVASCRIPT'TE FONKSIYONLAR BİRER NESNEDİR.

function square(x) { // fonksiyonu yazarken kullandığımız değişkenler parametre** olarak adlandırılır.
    return x * x;
}

// square(3); -> burada oluşturduk. --> Kullandığımız değerlere de argüman diyoruz
// console.log(square(3)); -> burada çalıştırdık. square(3) şeklinde çalıştırılır.

// Fonksiyonu oluşturmakla çalıştırmak(invoke etmek) birbirinden farklı şeylerdir.

// Function Declarations --> Hoisted

// Fonksiyon satırı gelmeden console.log(square(3)); u function'ın yukarısına da taşısak çalışmaya devam eder. variable tanımlamalarındaki hoisted kavramıyla aynı şekilde çalışır.

// ---------------------------------------------------------------------------------------------------------------------

// ***Function Expressions****

// Eğer bir fonksiyonu bir değişkene atarsak bu şekildeki yapıya function expression verilir. Function Express yapısında optionaldır genelde function ismi kullanılmaz.
// Eğer isim kullanmazsak bu bir anonymous function olarak adlandırılır.

// const square = function (num) {
//     return num * num;
// }

// ****First Class Functions****

// Eğer bir fonsiyonu değişkene atarsak ona bir variable gibi davranabiliriz. Bu tipteki fonksiyonlara first class function denir.

// Javascript'te fonksiyonlar first class functiondır. Değişkenlerle ne yapabiliyorsak onu fonksiyonlarla da yapabiliriz.

// Önemli Uyarı!!!!!!!!!!!! Eğer bir fonksiyon function expression'sa hoisted olmaz. Yani fonksiyonun yukarısında o fonksiyonu invoke edemeyiz.

// ****First Class Functions Avantajları****

// Bir fonksiyonu başka bir fonksiyona arguman olarak alabiliriz.

// const addFive = function(num, func) {
//     console.log(num + func());
// }

// addFive(10, function() { return 5;})

// Örneğin react'ta functional componentler first class functionlar kullanılarak oluşturulmuştur.

// Diğer bir avantajı ise: Bir fonksiyonu başka bir fonksiyonun return ifadesinde kullanabiliriz.

// const myFunc = function() {
//     return function toDouble() {
//         console.log(num * 2);
//     }
//  }

//  myFunc(8)(); -> buradaki return içerdeki function'ın kendisini döner sonucunu dönmez o yüzden invoke edebilmemiz için () ifadesini kullandık.

// *****IIFE****** -> Immediately Invocable Function Expression

// Yahuu oluşturduğumuz fonksiyonları tekrar tekrar kullanmak için oluştururuz. Peki ya neden IIFE'e ihtiyaç duyuyoruz?
// Örneğin: Sayfa yüklenirken bir fonksiyonu çağırmak istiyoruz. Tek seferde orada kullanmak istiyoruz. 

// const sum = function() {
//     console.log(5 + 10)
// }(); --> buradaki () ifadesiyle fonksiyonu oluşturduk ve çağırdık. Eğer aşağısında console.log(sum) şeklinde çağırmaya çalışırsak undefined dönecektir. sum değişkenine atayacağım bir şey kalmadığı için undefined oluyor.
// Peki ya bunu function expressiondan decleration'a çevirirsem nasıl tepki verir? Javascript Engine'i variable'sız function() ifadesini gördüğü anda decleration gibi düşünür ve bir isim bekler. Eğer bu şekilde çıktı almak istersek require function name hatası alırız.
// Eğer bu require function name error'undan kurtulmak istiyorsak:
// (function() {
//     console.log(5 + 10)
// })(); --> fonksiyonun başına ve sonuna onu invoke edecek şekilde () ifadesini ekleyerek çağırabiliriz.

