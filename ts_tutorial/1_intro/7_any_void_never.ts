/* `any` type: Bir değişkene farklı türlerde değerler atanabilmesini istediğimiz
zaman bu değişkenin türünü `any` olarak set etmeliyiz. Bu durumda bu değişken
aynı javascript'teymiş gibi davranır ve bu değişken için otomatik tamamlama
özelliği iptal olur. Çünkü bu değişkenin türü `any` olduğu için o anda değişkenin
içerisinde ne olduğunu editör bilemez ve otomatik tamamlama özelliğini açamaz.

Özellikler:

- Sonradan farklı türde değerler atanabileceği için `any` olarak tanımlanan
  değişkenin access modifier'ı `let` veya `var` olmalı.

- Normal şartlarda any türünün varlığı typescript'e aykırıdır. Çünkü typescriptteki
  amaç her değişkenin türünün belli olmasıdır. Bu durumda any'nin gerçek varoluş
  sebebi acil durumları kurtarabilmek içindir. Bir proje geliştirirken bazen çok
  acil tasklar yapılması gerekir. Böyle bir durumla karşılaştığımızda her değişkenin
  türünü bulmak ve yazmak için zaman olmayabiliyor. Bu acil durumu kurtarana kadar
  değişkenlerin türlerini any olarak set edebiliriz. Fakat acil durumu atlattıktan
  sonra mutlaka tüm any'leri silip olması gereken türleri yazmalıyız.

*/

let foo_4: any;

var foo_5: any;
foo_5 = 10;
foo_5 = "test";
foo_5 = {
  id: 1,
};

foo_5 = new Date();

foo_5 = { firstname: "test" };

foo_5 = () => {
  console.log("foo_5 function invoked.");
};

foo_5 = undefined;
foo_5 = null;

const foo_6 = "test";

/* void type: Bir fonksiyondan değer dönmediği durumda o fonksiyonun dönüş
türü olarak set edilir.

Özellikler:

- Bir fonksiyondan değer dönmeyeceğini belirtmek için kullanılır. Bu şartı
  belirttiğimizde artık o fonksiyon içerisinde return ifadesini kullanamayız.
  Dolayısıyla fonksiyonun içerisindeki return ifadesinin kullanımını kısıtlamış
  oluruz.

*/

// Aşağıdaki fonksiyondan değer dönderilemez çünkü dönüş türü void'dir.
function printLog_1(param1: string): void {
  console.log("param1: ", param1);

  // Aşağıdaki satır hata verir:
  // return "test";
}

// Aşağıdaki fonksiyonun dönüş türünü açıkça belirtmediğimiz için otomatik
// olarak return ifadesinden dönen değerin türü bu fonksiyonun dönüş türü olur.
function printLog_2(param1: string) {
  return "test";
}

printLog_1("test");
printLog_1("foo");
printLog_1("bar");

/* never type: Bir fonksiyon return ile değil de throw ile durdurulacaksa
o fonksiyonun dönüş türü `never` olarak belirlenmelidir.

>> Exception Handling:

Bir fonksiyonu durdurmanın iki yolu vardır. Birincisi return, ikincisi throw.
throw komutunun (ifadesinin) görevi kendisinden sonra gelen değeri yukarı fırlatmaktır.
Genelde kendisinden sonra gelen değer olarak `new Error()` ifadesi kullanılır.

Throw edilen değeri yakalamak için try-catch bloğu kullanılır.

Javascriptte (ve typescriptte ve garbage collected olan diğer dillerde) bir fonksiyonu
durdurmak için bu iki adet mekanizma kullanılır (return ve throw).

*/

function fn1(): number {
  console.log("fn1 invoked.");

  return 10;

  console.log("fn1 finished.");
}

function fn2(): never {
  console.log("fn2 invoked.");

  throw new Error("An error occured.");

  console.log("fn2 finished.");
}

function fn3(): void {
  console.log("test");
}

function fn4(): void {
  console.log("test");
  return;
}

function fn5(): never {
  throw "test";
}

let fn1_result = fn1();
let fn2_result;

try {
  fn2_result = fn2();
} catch (err) {
  console.log(err);
}

console.log(">>>  fn1_result:", fn1_result);
console.log(">>>  fn2_result:", fn2_result);

/* Sonuç olarak kısaca şu şekilde toparlayabiliriz:
any'de type belli olmadığı için herşey döner, void'den hiçbirşey
dönmez, never'dan herhangi birşey throw edilir (yani return hiç
kullanılmaz).

*/
