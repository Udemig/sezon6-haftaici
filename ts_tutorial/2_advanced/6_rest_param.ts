/* Rest param:

Parametre listesinin belirsiz ve sınırsız olduğu durumlarda rest
parametre kullanılır. 

Özellikler:

- Bir parametreyi rest haline getirmek için spread operator (üç nokta)
  kullanılır.

- Bir rest parametreden sonra başka bir parametre yazılmaz. Çünkü
  fonksiyonu invoke ederken gönderilen parametreler sırasıyla gönderilir
  ve rest parametrenin sırasına gelindiğinde artık o noktadan sonraki
  tüm parametreler rest'e aktarılır. Bu yüzden rest paramdan sonra
  parametre yazılmaz.


*/

console.log();
console.log("test");
console.log(10, {}, () => 10, { id: 1 });

function exampleFn_8(...param1: string[]) {
  console.log(">>>  param1:", param1);
}

/* param1'in değeri boş dizi oldu. */
exampleFn_8();

/* Tüm parametreler dizi haline dönüştürülüp param1'e aktarılır. */
exampleFn_8("foo", "bar", "baz");
