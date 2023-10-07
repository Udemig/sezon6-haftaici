/* Enum:
Ardarda sayılabilen data gruplarına enum denir. Yeni bir enum tanımlamak
için `enum` keywordünü kullanırız. Sonra enum'a bir isim veririrz ve
süslü parantezler içerisine enum değerlerini ekleriz.

Önemli not: "Sayılabilen" ifadesinden kasıt "peşpeşe söylenebilen"
demektir. Yani matematikteki sayıları saymak demek değildir. Örneğin
ev türleri peşpeşe söylenebilen ifadelerdir (villa, dublex, triplex,
müstakil, apartman dairesi gibi).

Özellikler:

- Eleman sayısı değişmeyecek olan dataları ifade etmek için kullanılır.
  Sık sık değişkenlik gösteren data gruplarını enum olarak yazmak
  mantıklı değildir.

- Bir data grubunun enum olması yada olmaması arasında kesin bir
  çizgi yoktur. Yani buna o esnada biz karar vereceğiz. Örneğin
  gün ve ay isimleri enum olabilir çünkü bu data gruplarının değişmeyeceği
  çok barizdir. Ama durak isimleri nadiren de olsa değişir. Bu durumda
  durak isimlerini enum olarak tutmak veya tutmamak programcının
  inisiyatifine kalmıştır. Enumlarla ilgili genel amaç sık sık
  değişkenlik göstermeyen dataları gruplamaktır.

- Az miktarda elemana sahip olan data gruplarını enum haline getirmek
  daha mantıklıdır. Bu yüzden sayıları enum yapamayız çünkü sayılar
  sonsuza kadar gider. Fakat rakamları enum yapmak mümkündür. Tabi
  burada bakacağımız en önemli nokta bu enum'yı yapmak bizim işimizi
  kolaylaştırıp kolaylaştırmadığıdır. Örneğin rakamlarla çalışıyorsak
  ve bunlarla matematiksel/mantıksal işlemler yapacaksak bu datayı
  göstermek için enum kullanamayız. Çünkü enumlarda matematiksel işlem
  yapılamaz. Bu yüzden 0-9 aralığında bile olsa rakamları number olarak
  tanımlamamız gerekir.

- Enum elemanları değişken tanımlama kurallarına bağlı olarak ve tırnaksız
  şekilde yazılmalı. Dolayısıyla elemanlar rakamla başlayamaz, özel
  karakter içeremez, alt tire kullanılabilir ama genel olarak pascal case
  yöntemiyle elemanlar yazılır.

- Enum'ların sonuna "Enum" ekini eklemek faydalıdır. Çünkü bu şekilde
  diğer türlerden ilk bakışta ayrılması kolay olur. Çünkü tüm türler
  pascal case ile yazılır bu yüzden hangi türün hangi yöntemle tanımlandığını
  sonek ekleyerek daha kolay şekilde anlaşılabilir. Örn:

  type FooType
  enum FooEnum

*/

enum DaysEnum_1 {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

console.log(DaysEnum_1[1]); // Tuesday
console.log(DaysEnum_1.Tuesday); // 1
console.log(DaysEnum_1[DaysEnum_1.Tuesday]); // Tuesday
console.log(DaysEnum_1[DaysEnum_1.Monday]); // Monday

/* Soru: Enum'lar nerelerde kullanılır:
Kısa cevap: Union'ların kullanıldığı her yerde kullanılabilir.
Uzun cevap: Bu ödev olsun.

*/

type OperatingSystemName_2 =
  | "linux"
  | "macos"
  | "unix"
  | "ios"
  | "android"
  | "windows";

enum OperatingSystemNameEnum_1 {
  Linux,
  MacOS,
  Unix,
  iOS,
  Android,
  Windows,
}

enum UserStatusEnum_1 {
  Active,
  Passive,
  EmailNotVerified,
}

/* immediate call function:
Bir fonksiyonun tanımlandığı anda çağırılması ve
birdaha asla çağırılmamasını sağlayan yöntemdir.

Örneğin useEffect() hook'una asenkron fonksiyon
gönderemeyiz sadece senkron fonksiyon gönderebiliriz.
Bu yüzden eğer useEffect() içerisinde bir asenkron
bölgeye ihtiyaç duyacak olursak bunu yapmanın
tek yolu immediate call function yazmaktır.

* Aşağıdaki kod hata verecektir:
useEffect(async () => {
})

* Aşağıdaki kod çalışacaktır:
useEffect(() => {
    (async () => {
        // burası asenkron bölgedir ve hemen çağırılır   
    })()
})

*/

// bu örnek bir immediate call function'dır
(() => {
  console.log("test");
  console.log("test");
})();
// İkinci parantez hemen önünde tanımlanmış
// olan fonksiyonu invoke (call) eder.

const example = () => {};
example;
example();

enum ClientAuthStatusEnum_1 {
  NotLoggedIn,
  LoggedIn,
  OneTimePassword,
}

enum ApiStatusEnum_1 {
  Success,
  Fail,
  Pending,
}

enum HttpMethodsEnum_1 {
  Get,
  Put,
  Post,
  Push,
  Delete,
  Options,
  Patch,
}

/* Enum'lar nasıl kullanılır:

*/

// today_1'in türünü belirttikten sonra enum'ın herhangi bir elemanını set ettik.
let today_1: DaysEnum_1;
today_1 = DaysEnum_1.Thursday;

// today_2'ye tür belirtmedik ama enum'ın herhangi bir elemanını set ettiğimizden
// dolayı bu değişkenin türü otomatik olarak DaysEnum_1 oldu.
let today_2 = DaysEnum_1.Friday;

console.log(">>>  today_1:", today_1, typeof today_1);

console.log(
  ">>>  today_1'in string karşılığı",
  DaysEnum_1[today_1],
  typeof DaysEnum_1[today_1]
); // "Thursday"

console.log(">>>  3'ün string karşılığı", DaysEnum_1[3], typeof DaysEnum_1[3]); // "Thursday"

console.log(">>>  today_2:", today_2);

function detectWeekend_1(param1: DaysEnum_1) {
  /* Enum değerlerini hem if ile hem switch ile kullanmak mümkündür.
  Swtich kullanırken enum'ın her bir değeri için ayrı `case`'ler
  yazmak gerekir ama if kullanırken büyük/küçük karşılaştırmaları
  yaparak daha kısa bloklar yazmak mümkündür. */

  // Burada tek bir değer karşılaştırılıyor
  if (param1 === DaysEnum_1.Monday) {
    console.log("First day of week is hard.");
  } else if (param1 === DaysEnum_1.Friday) {
    console.log("Tomorrow will be fun.");
  }

  // Burada iki değer aralığı karşılaştırılıyor.
  if (param1 >= DaysEnum_1.Monday && param1 <= DaysEnum_1.Friday) {
    console.log("Hardwork will be good.");
  }

  // Burada her item için ayrı ayrı case'ler kullanılıyor.
  switch (param1) {
    case DaysEnum_1.Monday:
    case DaysEnum_1.Tuesday:
    case DaysEnum_1.Wednesday:
    case DaysEnum_1.Thursday:
    case DaysEnum_1.Friday:
      return "You're in weekdays, enjoy your job.";
      break;

    case DaysEnum_1.Saturday:
    case DaysEnum_1.Sunday:
      return "You're in weekend, enjoy your holiday.";
      break;
  }
}

console.log("Monday: ", detectWeekend_1(DaysEnum_1.Monday));
console.log("Saturday: ", detectWeekend_1(DaysEnum_1.Saturday));

// büyük küçük karşıltırması stringler ile de yapılabilir.
console.log(">> ", "0" < "A"); // true
