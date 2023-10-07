/* Tuple:

Uzunluğu sabit olan ve diziyen benzeyen veri türüdür. Fakat tuple'da
dizi elemanlarının her birinin türü ayrı ayrı belirlenir. Bu özellik
tuple'ı dizilerden ayıran en büyük özelliktir.

Özellikler:

- Tuple türü köşeli parantez ile başlar ve biter.

- Tuple kullanım amacı diziler gibi değildir dolayısıyla diziye ekleme
  ve çıkarma işlemleri yapılmaz.

- 

*/

type RgbColorType = {
  red: number;
  green: number;
  blue: number;
};

const rgb_color_1: [number, number, number, number] = [100, 0, 0, 255];

/* Tuple'lar dizilerin başka bir formu olduğu için dizi üzerinde
mevcut olan fonksiyonları çağırabiliriz. Ama özellikle push() fonksiyonu
(ve ekleme-çıkarma yapan diğer fonksiyonlar) sintaks açısından doğru
olsalar bile mantıksal olarak bunların kullanımı yanlıştır. Çünkü
tuple'ın tanımı gereği eleman sayısı sabit olmalıdır. */
//rgb_color_1.push(10);

const ip_address_1: [number, number, number, number] = [192, 168, 123, 132];

// join() yapmak BU DEĞİŞKEN İÇİN mantıklıdır.
console.log("IP: ", ip_address_1.join("."));

const names_5: string[] = ["foo", "bar", "baz"];
names_5.push("test");

const tcno1: ["x" | "y" | "z" | "foo"] = ["x"];
const tcno2: [string] = ["12345678910"];
const tcno3: [number] = [12345678910];

// union type
type UnionType1 = "foo" | "bar" | "baz";
type UnionType2 = "foo";

/* Örnek: Ziyaretçilerin useragent bilgisini parse edip bu bilgiyi daha
anlaşılır şekilde bir tuple değerine aktardıktan sonra bu tuple'ı
sunucuya gönderen bir task aldığımızı düşünelim. Buradaki tuple datasını
oluşturun. */

type UserAgentType_1 = [
  string, // browser name
  number, // browser version
  string, // operating system name
  [number, number, number] // operating system version
];

const emir_browser_info_1: UserAgentType_1 = [
  "Chrome",
  116,
  "Mac OS X",
  [10, 15, 7],
];

type VersionTupleType_1 = [number, number, number];

type OperatingSystemName_1 =
  | "linux"
  | "macos"
  | "unix"
  | "ios"
  | "android"
  | "windows";

type EngineNameType_1 = "webkit" | "blink" | "gecko" | "other";

type UserAgentType_2 = [
  OperatingSystemName_1, // operating system name
  VersionTupleType_1, // operating system version
  string, // browser name
  VersionTupleType_1, // browser version
  EngineNameType_1 // engine name
];

const hasan_browser_info_1: UserAgentType_2 = [
  "linux",
  [2022, 0, 0],
  "chrome",
  [109, 0, 0],
  "blink",
];

/* Tuple kullanım yöntemi:

- Tuple'ın itemlerine aynı dizi elemanlarına ulaşıyormuş gibi index
  numarasını vererek ulaşabiliriz. Bu yöntemi hem get hem set yapmak
  için kullanabiliriz.

- Tuple'lar gerçekte dizidirler. Dolayısıyla diziler üzerinde yapılabilen
  tüm işlemler tuple'lar üzerinde de yapılabilir. Örneğin map(), forEach(),
  join(), find(), findIndex() gibi fonksiyonların hepsi tuple'lar için
  kullanılabilir. Ama yukarıda da belirtildiği gibi ekleme-çıkarma
  yapılan fonksiyonları kullanmak tuple'ın mantığına ve amacına
  aykırı olacağı için kullanılmamalıdır.

*/

console.log("Hasanın tarayıcısının ismi: ", hasan_browser_info_1[2]);
console.log("Hasanın tarayıcısının engine ismi: ", hasan_browser_info_1[4]);

// Tuple içerisinde dizi örneği: Birinci eleman string, ikinci eleman
// string dizisi.
type ExampleTuple_1 = [string, string[]];
const foo: ExampleTuple_1 = ["test", ["test", "test"]];
