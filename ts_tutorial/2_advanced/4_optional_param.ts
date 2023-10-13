/* Opsiyonal parametre:

Normalde bir fonksiyonun tüm parametrelerini doldurmak şarttır. Fakat
bazı durumlarda bazı parametrelerin hiç yazılmaması durumu oluşabilir.
Bunu sağlayabilmek için parametrenin opsiyonel olduğunu belirtmek gerekir.
Bir parametrenin opsiyonel olduğunu göstermek için sonuna soru işareti
eklenir.

Özellikler:

- Opsiyonel olan bir parametreye istersek undefined değerini gönderebiliriz
  yada istersek hiç değer göndermeyiz.

- Opsiyonel parametreye bir değer göndermezsek bu parametrenin değeri
  `undefined` olur. Aynı şekilde türü de `undefined` olur.

- Opsiyonel bir parametreden sonraki parametreler required olamaz.
  Yani opsiyonel parametreleri parantezin son tarafında tutmak gerekir.
  Yada başka bir ifadeyle opsiyonel parametreden sonraki tüm parametreler
  de opsiyonel olmalı.

- 


*/

function exampleFn_6(param1: number, param2: string, param3?: object) {
  console.log(">>>  param1:", param1, typeof param1);
  console.log(">>>  param2:", param2, typeof param2);
  console.log(">>>  param3:", param3, typeof param3);

  console.log("---------");
}

exampleFn_6(10, "test", { id: 1 }); // normal şekilde param3'e değer gönderdik.
exampleFn_6(10, "test", undefined); // param3'e undefined gönderilebilir
exampleFn_6(10, "test"); // param3'e hiçbirşey gönderilmeden fonksiyonu çağırdık.

/* Bir parametre gerekliyse yani requiredsa onu listenin üst yani baş
taraflarına almak gerekir. Çünkü opsiyonel parametreden sonra required
parametre yazılamaz. Bu yüzden aşağıdaki örnekte param4 required olduğu
için yukarı çektik. */

function exampleFn_7(
  param0: number, // required param
  param4: number, // param4 burada olabilir.
  param1?: string, // Bu bir opsiyonel parametredir ve bundan sonraki tüm
  // parametreler de opsiyonel olmalı.
  param2?: object,
  param3?: number
  //param4: number, // param4 burada duramaz çünkü kendisinden önce
  // opsiyonel parametreler var.
) {
  console.log("exampleFn_7 çağırıldı.");
}

exampleFn_7(
  10, // param0'a gider
  20 // param4'e gider
);
