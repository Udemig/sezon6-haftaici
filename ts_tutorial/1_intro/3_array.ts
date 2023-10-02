/* Array:

Javascriptte bir diziye atanan değerler tür kontrolü olmadığı için
herhangi bir türden olabilir. Ama typescriptte tam tersi. Yani
her dizinin alabileceği değerlerin türleri belirlenmesi gerekir.
Bunu yapmak için değişken isminden sonra iki nokta konur ve type
ismi yazılır. Hemen ardından içi boş köşeli parantezler eklenir.
Böylece belirlenen türden bir dizi tanımlanmış olur. Örn:

const foo: string[] // string dizisi
const bar: number[] // number dizisi

*/

const students_1: string[] = ["hamit", "bedirhan", "buket", "ebru", "erkan"];

// Aşağıdaki atamalar hata verir çünkü string türünden değiller:
// students_1.push(10);
// students_1.push({ id: 1 });
// students_1.push(null);
// students_1.push(undefined);

const ages_2: number[] = [10, 20, 30];
const did_attend_2: boolean[] = [true, true, true, false, false];

//////////////////////////

/* Normalde bir dizinin alabileceği tür tek olması beklenir ama bazı
durumlarda farklı türlerde değerler eklenmesi gerekebilir. Bunu yapabilmek
için union type (type'ları birleştirmek) kullanmalıyız. Bu normalde
ilerleyen derslerin konusu ama her zaman bu duruma ihtiyaç duyabileceğimiz
için burada kısaca değinelim.

Union type oluşturmak için pipe karakter (|) kullanılır. Bunun anlamı
"ya bu type ya diğer type" şeklinde düşünülebilir.

*/

const students_3: (string | null)[] = ["uğur", null, "fatih", "gökhan", null];

/* Dizi elemanlarının türünü belirtirken union type kullanmak istediğimizde
yazacağımız birden fazla type'ı parantez içerisinde almalıyız. Çünkü eğer
bunu yapmazsak şöyle bir problem ortaya çıkar: */

const parantezli_dizi_1: (string | number)[] = [];

//let parantezsiz_dizi_1: string | number[];
let parantezsiz_dizi_1:
  | string //
  | number[]; //;

parantezsiz_dizi_1 = "test";
parantezsiz_dizi_1 = [1, 2, 3, 4];

// Örneğin bir değişken hem string hem number değer alması gerektiğinde
// union type yazarak bunu sağlayabiliriz.
// <input type="text" name="birth_year" value="1990" />

let birthYear: string | number = "1990";
console.log(">>>  birthYear:", birthYear, typeof birthYear);

birthYear = parseInt(birthYear);
console.log(">>>  birthYear:", birthYear, typeof birthYear);

/* Javascriptin sıradışı davranışlarına örnekler:
ali'yi sayısal ifadeye çevirmeye çalıştığımızda NaN döner ve bunun
türü number'dır. Sıfıra bölme işleminden Infinite döner ve bunun
türü de number'dır.
*/
console.log(parseInt("ali"), typeof parseInt("ali")); // Buradan `NaN` yani `Not A Number` döner.
console.log(10 / 0, typeof (10 / 0)); // Buradan `Infinite` döner.
