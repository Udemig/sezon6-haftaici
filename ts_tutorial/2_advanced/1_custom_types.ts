/* Custom type:

Bugüne kadar hep primitive type'ları kullandık. Fakat gerçek dünya
problemlerinde çoğu zaman o anki yaptığımız işe özel daha spesifik
type'lara ihtiyaç duyarız. Bunları yazmak için `type` keyword'üne
ihtiyaç vardır.

Aşağıdaki amaçlar için type'lar yazılır:
- Tuple (bunu daha önceden gördük)
- Object
- Enum
- Fonksiyon'ların type'ları

*/

/*
1- Object'lerin type'ları

Örneğin bir API'ye istek attık ve şu şekilde bir data geldi:

{
  "status": "error",
  "errorMessage": "User not authenticated or your account suspended.",
  "exceptionType": "UserNotFoundException"
}

Bu datanın type'ını `object` şeklinde vermek mümkündür fakat bu
yöntemi kullandığımızda otomatik tamamlama özelliği aktif olmaz
ve mantıksal olarak doğru bir yöntem kullanmış olmayız. Bu yüzden
yukarıdaki dataya özel yeni bir type tanımlamamız gerekir.

Bir json objesinin type'ını yazmak istediğimizde aşağıdaki maddeleri
uygulayarak type yazabiliriz:

- Önce type'ımıza bir isim buluruz. Bu isimlendirme genelde objenin
  amacını kullandığımız bir isimdir. Örneğin LoginResponseType,
  ErrorResponseType gibi. Sonra eşittir diyerek sanki bir değer
  ataması yapıyormuşuz gibi bir type tanımlarız.
- Oluşturacağımız type bir obje ise süslü parantezle başlarız. Sonra
  süslü parantezin arasına bu objede bulunacak olan property'leri
  yazarız. Sonra her property'nin eğer primitive type'ı karşılıyorsa
  ilgili primitive type'ı yazarız, eğer bu property daha farklı
  bir type gerektiriyorsa o zaman o type'ı yazarız. Property'lerin
  type'ını belirtmek için iki nokta kullanılır.
- Property'lerin arasını virgül ile ayırırız.


*/

type ErrorResponseType_1 = {
  status: string;
  errorMessage: string;
  exceptionType: string;
};

const response_1: ErrorResponseType_1 = {
  status: "test",
  errorMessage: "example error here",
  exceptionType: "login error",
};

/* Soru: Sınıftaki öğrencilerin bilgilerini ve bu bilgilerin listesini
tutan bir type yazınız. */

type StudentInfoType_1 = {
  id: number;
  name: string;
  age: number;
  gender: "male" | "female";
  address: {
    street: string;
    city: string;
  };
  is_active: boolean;
  season_no: number;
  branch: "weekday" | "weekend";
};

const student_1: StudentInfoType_1 = {
  id: 10,
  name: "turan",
  age: 27,
  gender: "male",
  address: {
    street: "test",
    city: "test",
  },
  is_active: true,
  season_no: 6,
  branch: "weekday",
};

const students_1: StudentInfoType_1[] = [];

// liste type'ı
type StudentInfoListType_1 = StudentInfoType_1[];

/* Mevcut type'ları yeni bir isimle kullanmak mümkündür. Örneğin
`string` ve `number` type'ları zaten mevcut, bunları yeni bir type
tanımlayıp bu yeni type'ı değişkenler üzerinde kullanabiliriz. */
type MyCustomString = string;
type ahmet = number;
const age: ahmet = 10;

const student_2: StudentInfoListType_1 = [];

student_2.push({
  id: 1,
  name: "test",
  gender: "male",
  age: 30,
  branch: "weekday",
  address: {
    city: "izmir",
    street: "alsancak",
  },
  is_active: true,
  season_no: 6,
});

student_2.push({
  id: 2,
  name: "test 2",
  gender: "male",
  age: 40,
  branch: "weekday",
  address: {
    city: "izmir",
    street: "alsancak",
  },
  is_active: true,
  season_no: 6,
});

student_2.push({
  id: 3,
  name: "test 3",
  gender: "male",
  age: 50,
  branch: "weekday",
  address: {
    city: "izmir",
    street: "alsancak",
  },
  is_active: true,
  season_no: 6,
});

console.log(">>>  student_2:", student_2);
