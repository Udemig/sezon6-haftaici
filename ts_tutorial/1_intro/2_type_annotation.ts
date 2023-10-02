/* Type Annotation:

Javascript'te değişkenlerin türlerini belirtmek gibi bir özellik mevcut
değil. Fakat typescriptte değişkenlerin türlerini belirtebiliyoruz.
Her değişkenin bir türü vardır ve bu tür doğrultusunda değerler
alabilir. Javascriptteki gibi her değişken her değeri alma durumu
yoktur. Bu sayede değişkenin türü belli olduğu için o değişkenin
içeriğini de bilmiş oluyoruz.

*/

let firstname_2: string = "hasan";
firstname_2 = "hilal";
firstname_2 = "ilker";

let age_1: number = 10;

/* 
>> Soru: const, let, var şeklinde tanımlanan değişkenlerde type tanımlamanın
önemi var mıdır?

>> Cevap: Genelde değişkenlerin typelarını belirtmediğimizde typescript otomatik
olarak bunların type'larını bulur. Fakat bazı durumlarda yanlış type bulma
ve type uyuşmazlığı gibi problemlere sebep olduğu için her değişkenin type'ını
set etmeyi alışkanlık haline getirmekte fayda var.

*/

/* Primitive Types:

Javascript'te her ne kadar değişkenlerin type'larını set etmiyor olsak bile
yine de basit seviyede birkaç tane type mevcuttur. Bu typelar değişkene
set edilen değere göre JRE (Javascript Runtime Environment) tarafından
otomatik olarak belirlenir. Typescript arkaplanda JS kullandığı için
bu type'lar typescript içerisinde de kullanılabilir haldedir.

- string
- number
- boolean
- object
- undefined
- null
- bigint (bu pek kullnaılmaz)
- symbol (bu pek kullanılmaz)

*/

/* typeof operatörü kendisinden sonra gelen değer veya değşikenin
türünü string halinde verir. Örn: */
console.log(typeof "test"); // "string"
console.log(typeof 10); // "number"
console.log(typeof true); // "boolean"

let firstname_3: string = "mehmet";
console.log(">>>  firstname_3:", firstname_3, typeof firstname_3);

let age_3: number = 30;
console.log(">>>  age_3:", age_3, typeof age_3);

let did_attend_1: boolean = true;
console.log(">>>  did_attend_1:", did_attend_1, typeof did_attend_1);

let student_info_1: object = {
  id: 1,
  firstname: "mehmet",
  lastname: "polat",
  birth_year: 1958,
  birth_place: "ankara",
};
console.log(">>>  student_info_1:", student_info_1, typeof student_info_1);

let foo_1 = true;
let foo_2: boolean = true;
console.log(">>>  foo_2:", foo_2, typeof foo_2);

let one = 1;
let foo_3 = one === 2;
console.log(">>>  foo_3:", foo_3, typeof foo_3);
