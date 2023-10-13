/* Fonksiyon parametresine fonksiyon göndermek:

Bazı fonksiyonların parametrelerine başka bir fonksiyon göndermek
mümkündür. Bu tarz fonksiyonların türlerini yazacağız.

Soru: Daha önceden kullandığımız bazı fonksiyonların parametrelerine
fonksiyon gönderiyorduk. Bunlar neler olabilir?

Cevap: Array fonksiyonlarının çoğu (örn map(), forEach(), reduce(),
filter() gibi.)

*/

type ExampleFnType_2 = (
  param1: () => number, // fonksiyon türü
  param2: () => string,
  param3: (param1: number, param2: string) => void
) => void;

const exmapleFn_5: ExampleFnType_2 = (
  param1: () => number, // fonksiyon türü
  param2: () => string,
  param3: (param1: number, param2: string) => void
): void => {
  console.log("exampleFn_5 invoked.");
  console.log(">>> param1:", param1, typeof param1);
  console.log(">>> param2:", param2, typeof param2);
  console.log(">>> param3:", param3, typeof param3);

  /* Bir fonksiyonun parametresindeki değişkenlerin fonksiyon
  olmasını istemesinin sebebi bu fonksiyonun çağırıldığı
  noktada bu parametreye özel bir fonksiyon tanımlanmasını
  mecburi kılmak ve bu özel fonksiyonu dış fonksiyon gövdesinde
  kullanmak içindir. */

  param1();
  param2();
  param3(10, "test");

  console.log("----------------------------");
};

/* exampleFn_5'in invoke ediyoruz. */
exmapleFn_5(
  () => 10, // single line arrow function implementation
  () => "test",
  (param1: number, param2: string): void => {
    console.log("param3'e gönderilen fonksiyon çağırıldı.");
    console.log(">>>  param1:", param1, typeof param1);
    console.log(">>>  param2:", param2, typeof param2);
  }
);

/* Örnek: Array'lerdeki map() fonksiyonunu tek başına kullanılacak
şekilde type'ını yazıp implement ediniz. */

const names_6: string[] = ["ilker", "mehmet", "meryem", "samet"];

const name_lenghts_6 = names_6.map((item, index, originalArray) => {
  return item.length;
});

console.log(">>>  name_lenghts_6:", name_lenghts_6);

/*

map() fonksiyonunun içinde bir döngü vardır ve bu döngü dizinin
eleman sayısı kadar döner. Bu döngü içerisinde param1'e gönderdiğimiz
fonksiyon defalarca çağırılır. Örnek implementasyon kabaca şu
şekilde olabilir:

for (let i = 0; i < names_6.length; i++) {
    callback(names_6[i], i, names_6);
}

*/

type MapFnType_1 = (
  callback: (item: any, index: number, originalArray: any[]) => any,
  arr: any[]
) => any[];

const mapFn_1: MapFnType_1 = (
  callback: (item: any, index: number, originalArray: any[]) => any,
  arr: any[]
) => {
  console.log("mapFn_1 çağırıldı.");

  const resultArr: any[] = [];

  for (let i = 0; i < arr.length; i++) {
    let currentItem = arr[i];
    console.log(">>>  currentItem:", currentItem);

    // Döngü içerisinde parametreden gelen fonksiyonu çağırıyoruz.
    let callbackResult = callback(currentItem, i, arr);

    resultArr.push(callbackResult);
    console.log(">>>  resultArr:", resultArr);
  }

  return resultArr;
};

const result_2 = mapFn_1(
  (item, index) => {
    console.log("callback fonksiyonu çağırıldı.");
    console.log(">>>  index:", index);
    console.log(">>>  item:", item);

    console.log("-----------------------");

    return item.length;
  }, //
  ["istanbul", "izmir", "ankara", "antalya", "muş"]
);
console.log(">>>  result_2:", result_2);

/* Ödev: Array'lerdeki `reduce()` fonksiyonunun type'ını ve
implementasyonunu yazınız. */

/* Gerçek dünya problemi: Örneğin çok sayfalı bir proje yapıyoruz.
Projede birkaç adet frontend developer var ve hepsi farklı sayfalar
yapıyorlar. Sayfaların çoğu formlardan oluşuyor. Formların hepsinde
save (kaydet) ve cancel (iptal) butonları vardır. Bunlar sabittir.
Bir de formun başlığı vardır bir de çerçevesi vardır.

type CreateFormFnType = (
    title: string,
    formCreator: () => ReactComponent
) => ReactComponent;

function createForm(
    title: string,
    formCreator: () => ReactComponent
): ReactComponent {
    const CustomComponent = formCreator()

    return <>
        <h1>{title}</h1>
        <br />
        <CustomComponent />

        <button>Save</button>
        <button>Cancel</button>
    </>
}

*/
