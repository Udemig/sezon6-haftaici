/* Function type:

Typescriptte (ve js'de) 5 yöntem kullanarak fonksiyon tanımlanabilir.
Bu yöntemler aşağıda sıralanmıştır:

1- İsimli fonksiyon
2- İsimsiz fonksiyon
3- Arrow function
4- Single line arrow function
5- Immediate call function

1 ve 5 hariç diğerleri bir değişkene aktarılarak yazılan
fonksiyonalrdır. Dolayısıyla ortada bir değişken, bir değer
ve değerin değişkene aktarılması söz konusudur. Bir değer
olduğuna göre bunun türü de olmalıdır. Sonuç olarak atadığımız
fonksiyonun türünü yazmamız gerekir.

Fonksiyonun türünden kasıt parametre listesi ve dönüş türüdür.
Yani bu bilgileri yazdığımızda bir fonksiyon türü yazmış oluruz.

*/

// 1- normal isimli fonksiyon örneği:
function exampleFn_1() {}

// 2- isimsiz fonksiyon kullanım örneği:
const exampleFn_2: ExampleFnType_1 = function (no1: number) {
  return no1 * 2;
};

// 3- arrow function örneği:
const exampleFn_3: ExampleFnType_1 = (no1: number) => {
  return no1 * 3;
};

// 4- single line arrow function örneği:
const exampleFn_4: ExampleFnType_1 = (no1: number) => no1 * 4;

const result_1 = exampleFn_4(10);
console.log(">>>  result_1:", result_1);

type ExampleFnType_1 = (no1: number) => number;

/* Soru: İki sayı ile matematiksel işlem yapabilmek için fonksiyonlar
tanımlamamızı sağlayan bir fonksiyon türü yazınız. */

type BasicMathOperationFnType_1 = (a: number, b: number) => number;

/* Önemli not: Fonksiyon type'ındaki ok ile implementasyondaki ok aynı
değildir. Yukarıdaki ok fonksiyonun dönüş türünü gösterir, aşağıdaki
ok ise fonksiyonun gövdesini gösterir. */

const sumOperation_1: BasicMathOperationFnType_1 = (
  a: number,
  b: number
): number => {
  return a + b;
};

/* Not: Değişkenin type'ını belirttiğimiz için parametrelerin türlerini
ve fonksiyonun dönüş türünü yazmamız şart değildir. Ama genel olarak
bunu yazmak iyi bir alışkanlıktır. */
const multiplyOperation_1: BasicMathOperationFnType_1 = (a, b) => {
  return a * b;
};

/* Soru: Bir string alan ve bu stringi isim, ortanca isim, soyisim
ifadelerine dönüştürüp geri dönderen bir fonksiyon türü yazıp
implement ediniz. Örnek:

exampleFn("emir buğra köksalan")
exampleFn("hasan yalsız")
exampleFn("samet")
exampleFn("a")
exampleFn("alihandro gomez jose roble de alfonso villa de santos")
exampleFn("foo    bar      baz")
exampleFn("a           b            c")
exampleFn("       a           b            c     ")

*/

type NameInfoType_1 = {
  firstname: string;
  // soru işareti sayesinde property'leri opsiyonel yapabiliriz
  middlename?: string;
  lastname?: string;
};

const result: NameInfoType_1 = {
  firstname: "test",
  middlename: "",
  lastname: "",
};
const result1: NameInfoType_1 = {
  firstname: "test",
};

type NameParserFnType_1 = (input: string) => NameInfoType_1;

/* Type'ı belirttik, şimdi fonksiyonun implementasyonunu yazalım. */

const nameParser_1: NameParserFnType_1 = (input: string): NameInfoType_1 => {
  // Boş string olup olmadığını kontrol ediyoruz. Çünkü
  // girilen değerde mutlaka birşeyler yazıyor olmalı.
  if (input.trim().length === 0) {
    return {
      firstname: "",
    };
  }

  // Boşluk karakterine göre ayır
  let words = input.split(" ");

  // Uzunluğu sıfır olan itemleri diziden çıkarıyoruz.
  // Yani boşlukları kaldırıyoruz.
  words = words.filter((item) => item.length > 0);

  const result: NameInfoType_1 = {
    firstname: words.shift() as string,
  };

  if (words.length == 1) {
    /* Eğer words'ün uzunluğu 1 ise inputa iki kelime girilmiş
    demek oluyor. Dolayısıyla ikinci kelime soyisim olur. */
    result.lastname = words.shift() as string;
  } else if (words.length > 1) {
    /* Eğer words'ün uzunluğu 1'den büyükse bu çok miktarda kelime
    girildiği anlamına gelir. O zaman son kelimeyi soyisim olarak
    atarız, kalanları join yapıp ortanca isim olarka atarız. */

    // pop() fonksiyonu son itemi verir.
    result.lastname = words.pop() as string;

    // kalan itemleri boşluk karakteriyle birleştiriyoruz.
    result.middlename = words.join(" ");
  }

  return result;
};

let result_4: NameInfoType_1;

result_4 = nameParser_1("emir buğra köksalan");
console.log(">>>  result_4:", result_4);

result_4 = nameParser_1("hasan yalsız");
console.log(">>>  result_4:", result_4);

result_4 = nameParser_1("samet");
console.log(">>>  result_4:", result_4);

result_4 = nameParser_1("a");
console.log(">>>  result_4:", result_4);

result_4 = nameParser_1(
  "alihandro gomez jose roble de alfonso villa de santos"
);
console.log(">>>  result_4:", result_4);

result_4 = nameParser_1("foo    bar      baz");
console.log(">>>  result_4:", result_4);

result_4 = nameParser_1("a           b            c");
console.log(">>>  result_4:", result_4);

result_4 = nameParser_1("       a           b            c     ");
console.log(">>>  result_4:", result_4);

/* Ödev: Bu fonksiyonun dönüş türünü tuple'a çevirip tekrar implement edin. */
