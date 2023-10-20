/*
Fonksiyondan fonksiyon return etmek:

Bazı fonksiyonlardan fonksiyon döner. Bunun sebebi dış fonksiyonun bazı gizli
kalması gereken algoritmaları implement etmesi neticesinde buradaki gizli
değişkenlere erişebilen bir iç fonksiyon üretmesi ve bunu döndermesi gerekir.
Bu dönen fonksiyon vasıtasıyla dış fonksiyonda implement edilen gizli değişkenler
üzerinde algoritma çerçevesinde değişiklik yapılabilir.

>> Soru: Önceden kullandığımız fonksiyonlardan bazılarından fonksiyon dönüyordu.
Bunlar neler olabilir?

>> Cevap: useDispatch() ve useState() fonksiyonları fonksiyon dönderir. Aslında
useState'den tuple döner ama tuple'ın ikinci itemi fonksiyondur dolayısıyla
useState de fonksiyon dönderir diyebiliriz.

const dispatch = useDispatch();
dispatch({
  type: "falanReducer/filanCase",
  payload: {
    foo: "foo",
    bar: "bar",
  },
});

const ahmet = useDispatch();
const x = useDispatch();
const elonMusk = useDispatch();

*/

/* Örnek: Bir fonksiyonumuz olsun, bu fonksiyon parametre almasın ama bir
fonksiyon döndersin. Dönen bu fonksiyonun parametresinde string alsın
ve hiçbirşey döndermesin.

Cevap:
*/

type ExampleFnType_7 = () => (param1: string) => void;

const exampleFn_7: ExampleFnType_7 = (): ((param1: string) => void) => {
  console.log("exampleFn_7 çağırıldı.");

  return (param1: string): void => {
    console.log("dönen fonksiyon çağırıldı, param1: ", param1);
  };
};

const result_1 = exampleFn_7();
console.log(">>>  result_1:", result_1, typeof result_1);

result_1("merhaba dünya");

/*
>> Soru: useDispatch() fonksiyonunun type'ını ve kabaca implementasyonunu yazın.

>> Cevap: Öncelikle useDispatch'in kullanımını hatırlayalım. useDispatch'i kullanmadan
önce redux toolkitin kurulum aşamaları vardır. Bunu yapabilmek için ihtiyacımız
olan üç şey var. Birincisi createSlice, ikincisi configureStore, üçüncüsü de
Provider componenti. Bunları kullanarak bir store objesi oluşturduğumuzda
arkaplanda yapılan işlemler tahminen neler olabilir? Cevap: React'ta bir child
component (veya child componentten çağırılan bir fonksiyon) kendi kapsayıcılarının
hepsine ulaşabilir. Dolayısıyla useDispatch'i kullandığımızda Provider kapsayısıcını
bulur. Bunun içerisindeki store objesine ulaşır. Bu store objesi içerisinde bizim
createSlice ile oluşturduğumuz state'lere ulaşır. Sonra bu state'ler üzerinde
değişiklik yapabilmek için bir iç fonksiyon üretir ve bunu dönderir. İşte bu
fonksiyon bizim `dispatch` değişkenine aktardığımız fonksiyondur.

*/

/* En nihayetinde useDispatch'in çalışabilmesi için bize gizli bir store objesi
lazım. Bu store objesine dışarıdan erişilemediğini sadece useDispatch içerisinde
erişilebildiğini farzedelim. */

/* Şimdilik bu gizli değişkenin türü any olsun. Normalde redux'ta bu gizli değişkenin
bir türü vardır ama şuan asıl konumuz bu olmadığı için any türünü verebiliriz. */
const privateStoreObject: any = {};

/* Mesela redux'ta oluşturduğumuz slice veya reducer'ların tuttuğu state'lerin her
biri aşağıdaki yapıya benzer şekilde key-value pairlar halinde tutulur. Biz dispatch
fonksiyonu ile ilgili property'yi set ederiz. Aşağıdaki örnekte bu işlemi yapıyoruz. */
privateStoreObject["categoryReducer/currentCategory"] = null;
privateStoreObject["categoryReducer/categories"] = null;
privateStoreObject["userReducer/currentUser"] = null;

/* useDispatch fonksiyonunun type'ı aşağıdaki gibidir. Fakat bu type biraz review
ile daha okunabilir hale getirebiliriz. Daha aşağıdaki type'a bakınız. */
type UseDispatchFnType_1 = () => (param1: {
  type: string;
  payload: any;
}) => void;

/* Biraz code review yaparak yukarıda tanımladığımız bazılarına göre gayet hoş
görünen ama şahsen bana göre ortalama görünen type'ı daha okunabilir, yönetilebilir
ve geliştirilebilir (readable, managaeable, extendable) hale getirdik. */
type ActionType_1 = {
  type: string;
  payload: any;
};

type DispatchFnType_1 = (actionObject: ActionType_1) => void;

type UseDispatchFnType_2 = () => DispatchFnType_1;

/* Felsefe: Don't talk, show me code. (Linus Torwalds - Linux kerneli yazan abimiz) */

/* Type'ını yazdığımız useDispatch fonksiyonunun implementasyonunu da yazalım. */

// Meryem İpekçi'nin cevabı:
const useDispatch_1: UseDispatchFnType_2 = () => {
  console.log("useDispatch_1 fonksiyonu çağırıldı.");

  return (actionObject: ActionType_1): void => {
    console.log(
      "return edilen fonksiyon invoke edildi, actionObject: ",
      actionObject
    );

    if (typeof privateStoreObject[actionObject.type] !== "undefined") {
      console.log("Found state: ", privateStoreObject[actionObject.type]);
      privateStoreObject[actionObject.type] = actionObject.payload;
    }

    console.log("Store objesinin son durumu: ", privateStoreObject);
  };
};

const dispatch = useDispatch_1();
dispatch({
  type: "categoryReducer/currentCategory",
  payload: {
    foo: "foo",
    bar: "bar",
  },
});

const ahmet = useDispatch_1();
const x = useDispatch_1();
const elonMusk = useDispatch_1();

ahmet({
  type: "categoryReducer/currentCategory",
  payload: {
    id: 1,
    name: "Örnek kategori",
  },
});

x({
  type: "categoryReducer/categories",
  payload: [
    { id: 1, name: "test 1" },
    { id: 2, name: "test 2" },
    { id: 3, name: "test 3" },
    { id: 4, name: "test 4" },
  ],
});

elonMusk({
  type: "userReducer/currentUser",
  payload: "örnek state",
});

/* Sonuç olarak bir fonksiyonun içinden yeni bir fonksiyonun oluşturulup bunun
return edilmesinin amacı gizli değişkenleri bir algoritma doğrultusunda kontrollü
şekilde yönetebilmektir.

Ayrıca sintaks olarak peşpeşe fonksiyon dönderme type'ları ve implementasyonu
yazmak mümkündür. Pratik olarak bu şekilde bir kullanıma ihtiyaç duymayız ama
sintaks olarak doğrudur. Örneğin aşağıdaki ifadelere bakınız.
*/
type ExampleFnType_5 = () => () => () => () => () => () => void;

const exampleFn_5: ExampleFnType_5 = () => {
  console.log("exampleFn_5 here.");

  return () => {
    console.log("level 1 invoked");

    return () => {
      console.log("level 2 invoked");

      return () => {
        console.log("level 3 invoked");

        return () => {
          console.log("level 4 invoked");

          return () => {
            console.log("level 5 invoked");

            return;
          };
        };
      };
    };
  };
};

const foo = exampleFn_5();
const result_3 = foo();
const result_4 = result_3()();
const result_5 = result_4()();
