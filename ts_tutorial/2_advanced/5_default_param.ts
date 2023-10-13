/* Default parametre:

Bazı opsiyonel parametrelerin set edilmesini mecburi bırakmadığımız
zamanlarda bunun undefined olmasını istemiyorsak kendimiz bu
parametreye bir standart değer gönderebiliriz.

Özellikler:

- Default değer belirtmek için eşittir kullanarak atama işlemi
  yapıyormuş gibi değeri belirtiriz.

- Bu yöntemi eğer ilgili parametrenin undefined kalmasını istemiyorsak
  kullanabiliriz.

- 

- 


*/

const initialState = {
  foo: "foo",
  bar: "bar",
};

function createState(state: object = initialState) {
  console.log(">>>  state:", state);
}

/* İlgili parametreye değer göndermezsek o zaman o parametrenin
değeri default olarak atadığımız değer olur. */
createState();

/* İstersek bu parametreye parametrenin türüne bağlı kalarak
ƒarklı bir değer gönderebiliriz. */
createState({
  id: 1,
});

/* Bir parametreye default değer atamak için iki yöntem kullanabiliriz.
Birincisi yukarıdaki örnekteki gibi fonksiyonun dışındaki bir değişkeni
default değer olarak atayabiliriz. İkincisi de aşağıdaki örnekteki
gibi değeri doğrudan parametreye atayabiliriz. */

function exampleFn_8(param1: object = { id: 1 }, param2: string = "test") {
  console.log(">>>  param1:", param1);
  console.log(">>>  param2:", param2);
}
