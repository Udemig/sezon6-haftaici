/*
OOP (Object Oriented Programming - Nesne Tabanlı Programlama):

Bugüne kadar hep projelerimizi fonksiyonlar kullanarak geliştirdik. Fakat projelerin kapsamı
genişledikçe (yani projeler büyüdükçe) fonksiyonel programlama yaklaşımı proje yönetimini
zorlaştırmaya başlar. Bu yüzden mühendisler büyük projeleri yaparken yazılımcıların
işlerini kolaylaştıracak yeni programlama yaklaşımları arayışına girdiler. Bunun neticesinde
bazı yöntemler geliştirdiler fakat dünyada en çok kabul edilen yöntem OOP oldu.

OOP'yi kabaca şu şekilde tanımlayabiliriz: Etrafımızda bulunan nesnelerin özelliklerini (property)
ve davranışlarını (method) modelleyerek yapılan programlama yöntemidir. Buradaki nesneden kasıt
iş yapan herhangi birşeydir. Bunu kod yazarken kullandığımız veritabanı tablosundaki satır,
kullanıcının authentication bilgileri, bir sayfanın içerisindeki form elemanlarının value'larının
bir bütün halinde kullanımı şeklinde genişletebiliriz. Bu konuları ilerleyen derslerde örnekler
halinde göreceğiz ve bu sayede daha iyi netleşecektir.

OOP yaklaşımının içerisinde en önemli iki adet tür vardır. Bunlar class'lar ve interface'lerdir.
Typescript'te (ve diğer birçok OOP tabanlı dilde) OOP yazarken yeni keywordler kullanacağız.
Bunlar genel olarak class, interface, extends, instanceof, implements gibi keywordlerdir.

>> Class (sınıf):

Bir objenin özelliklerinin ve davranışlarının bir bütün halinde tutulduğu yapıdır. Typescriptte
bir class tanımlamak istediğimizde `class` keywordüyle başlar, sonra isim yazılır, sonra da
süslü parantezler kullanılarak class'ın gövdesi yazılır.

*/

class RotaryDialPhone_1 {
  // Burası class'ımızın gövdesi. Burada property'ler ve method'lar bulunacak.

  /*
  Örnek property'leri aşağıya yazalım:
  Property yazmak için doğrudan property ismini yazıyoruz, hemen peşine iki nokta koyuyoruz
  sonra da bu property'nin türünü yazıp satırın sonuna noktalı virgül yazıyoruz.
  */
  handset_type: "integrated" | "seperated" = "integrated";
  dialpad_type: "rotary" | "santral" = "rotary";
  body: "horizontal" | "vertical" = "horizontal";

  cable_socket_model: "usa_standard" | "europe_standard" | "asia_standard" =
    "usa_standard";

  /*
  Örnek method'ları aşağıya yazalım:
  Method yazmak için doğrudan method ismini yazıyoruz, sonra parantezler ve bu parantezlerin
  içine parametreleri yazıyoruz, sonra opsiyonel olarak dönüş türünü yazıyoruz, son olarak da
  süslü parantez kullanarak methodun gövdesini yazıyoruz.
  */

  openHandset() {
    console.log("Opening handset.");
  }

  dialTheNumber(targetPhoneNumber: string): boolean {
    console.log("Dialling that phone number:", targetPhoneNumber);
    console.log("Ringing the phone...");

    // Şimdilik örnek olması açısından true dönderelim.
    return true;
  }

  closeHandset() {
    console.log("Closing handset.");
  }

  /* Class içerisindeki tüm elemanların başlangıç kısımları aynıdır. Yani hem methodda
  hem property'de doğrudan isim yazılarak tanımlanır. Peki bu elemanların property mi
  yoksa method mu olduğunu nasıl anlarız? Kendisinden sonraki karakter iki nokta ise
  bu bir property'dir, parantez ise methoddur.
  */
}

/*
>> Class'ların kullanımı:

Bir class'ı tanımlamak aynı bir type'ı veya bir fonksiyonu tanımlamak gibidir. Bu
tanımlanan ifadeleri kullanana kadar bunlar pasif durumdadır. Bir class'ı kullanmak
(yani aktif etmek) için `new` keywordünü kullanırız. Böylece bu class'ın çalışan bir
kopyasını oluştururuz ve bu kopyaya "obje (object)" denir.

*/

// Aşağıdaki satırda yeni bir obje oluşturduk ve bu objenin referansını bir değişkene aktardık:
const erkanin_antika_telefonu = new RotaryDialPhone_1();

// Oluşturduğumuz objenin property'lerini set ediyoruz:
erkanin_antika_telefonu.body = "horizontal";
erkanin_antika_telefonu.cable_socket_model = "europe_standard";
erkanin_antika_telefonu.dialpad_type = "rotary";
erkanin_antika_telefonu.handset_type = "integrated";

// Objenin method'larını invoke ediyoruz (çağırıyoruz):
erkanin_antika_telefonu.openHandset();

const dialResult_1 = erkanin_antika_telefonu.dialTheNumber("2321234567");

if (dialResult_1) {
  console.log("Karşı taraf telefonu açtı ve görüşme yapılıyor.");
}

erkanin_antika_telefonu.closeHandset();

/* Obje ile class arasındaki ilişki şu şekildedir: Class'lar tanımlanmış olan ifadelerdir
objeler ise bu tanımlanmış ifadenin çalışan halidir. Class'lar bilgisayarın hafızasında
(RAM'inde) yer kaplamaz, ama objeler için RAM'de yer ayrılır.

JSON objeleri ile class objeleri arasındaki farklar ve benzerlikler nelerdir:
Benzerlikler:
- Her ikisi de objedir. Fakat `new` keywordünü kullanarak oluşturduğumuz objenin
  bir ismi vardır ama JSON objelerinin bir ismi yoktur (yani anonimdir).

- JSON objeleri için type yazılabilir ama class'lar için type yazmaya gerek yoktur
  çünkü class'ların kendisi zaten başlı başına bir type'tır. Dolayısıyla bir değişkenin
  türünü belirtmek için class'ları da kullanabiliriz.

- JSON objeleri arasında inheritence (miras) yapılamaz, class'lar arasında yapılabilir.

*/

// Örnek JSON type'ı:
type ExampleJsonObjectType = {
  prop1: string;
  prop2: string;
  prop3: () => void;
  prop4: () => void;
};

// Yukarıdaki JSON type'ına göre oluşturulmuş bir JSON objesi:
const exampleJsonObject: ExampleJsonObjectType = {
  prop1: "test",
  prop2: "example",
  prop3: () => {
    console.log("This is an arrow function.");
  },

  prop4() {
    console.log("This is a method.");
  },
};

exampleJsonObject.prop3();
exampleJsonObject.prop4();

// Yukarıda tanımlanan objelerin typeof'larını ekrana yazdıralım:
console.log(typeof exampleJsonObject.prop3); // "function"
console.log(typeof exampleJsonObject); // "object"
console.log(typeof erkanin_antika_telefonu); // object

console.log(exampleJsonObject); // Burada isimsiz şekilde objeyi ekrana yazar.
console.log(erkanin_antika_telefonu); // Class'ın ismiyle birlikte objeyi ekrana yazar.

/* `this` kullanımı:

Bir class'ın birden fazla kopyası (obje) oluşturulabilir ve her objenin kendine ait
property ve methodları bulunur. Bu methodlar içerisinden objenin kendi kendisine
erişebilmesi için `this` keywordünü kullanırız. Bu sayede bir methoddan diğer
property veya methodlara erişim sağlayabiliriz.

Özellikler:

- `this` keywordü sadece methodlar içerisinde kullanılır.
- this ifadesi şuanki objeye işaret eder, class'a işaret etmez.
- 
- 

*/

class ExampleClass_1 {
  prop1: string = "";
  prop2: number = 0;
  prop3: boolean = true;

  method1(param1: string) {
    this.prop1 = param1;
    console.log(this.prop1);

    this.method2();
  }

  method2() {
    this.prop2++;
    console.log(this.prop2);
  }

  method3() {
    this.prop3 = !this.prop3;
    console.log(this.prop3);
  }
}
const obj_1 = new ExampleClass_1();
const obj_2 = new ExampleClass_1();
const obj_3 = new ExampleClass_1();

obj_1.method1("obj_1'e ait değer");
obj_2.method1("obj_2'e ait değer");
obj_3.method1("obj_3'e ait değer");

obj_2.method1("foo");
obj_2.method1("bar");
obj_2.method1("baz");
