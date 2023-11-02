/*
Generic:

Bir fonksiyonun, type'ın, class'ın veya interface'in içerisindeki bazı türlerin dinamik
olarak değişebilmesini sağlayan yapıdır (veya yöntemdir). Bir generic tür tanımladığımızda
eğer herhangi bir kısıtlama yoksa bu tür herhangi bir tür kılığına bürünebilir.

Genericler yukarıda da belirtildiği üzere farklı yapılar içerisinde kullanılabilir. Bunlar:

1- Fonksiyonlarda
2- Type'larda
3- Class'larda ve Interface'lerde

*/

/* 1- Fonksiyonlarda generic kullanımı:

Mesela `useState()` fonksiyonunu ele alalım. Bu fonksiyonun parametresine string bir değer
yazdığımızda state değişkeninin türü de string oluyor. Aynı şekilde parametreye number verdiğimizde
state değişkeninin türü number oluyor. Normal şartlar bir fonksiyonun parametresinin türüyle
dönüş değerinin türü farklı olur ve birbirine bağlı değildir. Fakat bu bağlantıyı kurmak
gerektiğinde generic type tanımlamamız gerekir.

const [counter, setCounter] = useState(0);
const [username, setUsername] = useState("");

TODO Buraya yorum yaz.

function foo(param1: any): number {
  return 0;
}

Bir fonksiyon içerisinde bir generic type nasıl tanımlanır?

- Bir generic type her türde değer alabilir.

- Generic type'lar tanımlandığı fonksiyon içerisinde heryerde aktiftir ve heryerde kullanılabilir.

- Generic type'lar nihayetinde bir type'tır ve tanımlandığı bölgede geçerlidir. Bu sayede
  o bölge içerisindeyken aynı normal type'larla neler yapabiliyorsak onları yapabiliriz.

- Bir fonksiyonda bir generic type tanımlamak için fonksiyon isminin bittiği yere küçüktür `<`
  işareti konur. Sonra ihtiyaç duyduğumuz miktarda generic type isimlerini yazarız, sonra büyüktür
  `>` işaretiyle generic type tanımlama işlemini tamamlarız. Ardından normal parametre listesi
  ve dönüş türü ve fonksiyonun gövdesi yazılır.

*/

function exampleFn_2(param1: string, param2: number): number {
  return param2;
}

function exampleFn_1<ExampleGenericType_1>(
  param1: string,
  param2: ExampleGenericType_1
): ExampleGenericType_1 {
  //

  return param2;
}

const foo1 = exampleFn_1("test", 0);
const foo2 = exampleFn_1("test 2", "param 2 here");

console.log("foo1: ", typeof foo1);
console.log("foo2: ", typeof foo2);

function exampleFn_3<Generic1, Generic2, Generic3>(
  param1: Generic1,
  param2: Generic2,
  param3: Generic3
): Generic1 {
  console.log("param1: ", param1, typeof param1);
  console.log("param2: ", param2, typeof param2);
  console.log("param3: ", param3, typeof param3);

  return param1;
}

exampleFn_3("test", 0, true);
exampleFn_3({ id: 1 }, null, undefined);
const foo3 = exampleFn_3(
  {
    firstname: "test",
    lastname: "example",
  },
  true,
  0
);

foo3.firstname;

// Örnek: useState() fonksiyonunu generic kullanarak yazınız.

function useState_2<StateType_1>(
  initialState: StateType_1
): [StateType_1, (newValue: StateType_1) => void] {
  console.log(
    "useState_2() fonksiyonu çağırıldı, initialState: ",
    initialState
  );

  // ... Burada gerekli algoritmik işlemler yapılıyor.

  /* Tabiki bu initialState değerini gizli bir yerde sakladıktan sonra return ediyoruz,
  parametreyi kullanmadan return etmek mantıksız. */
  return [
    initialState,
    (newValue: StateType_1) => {
      console.log("set state fonksiyonu çağırıldı, parametre: ", newValue);
    },
  ];
}

console.log("--------------------");

const [counter, setCounter] = useState_2(0);
console.log(">>>  counter:", counter);

setCounter(10);

/* Buraya kadar gördüğümüz kısım genericlerin tanımlanması ve kullanılması idi. Kullanırken
generic'in type'nın otomatik olarak belirlenmesi şeklinde kullandık. Fakat bu genericlerin
kullanım esnasında özel bir type belirtebiliriz. Bunu yapmak için fonksiyonu invoke ettiğimiz
yerde fonksiyon ismiyle parametre listesi arasına genericlerin olmasını istediğimiz type'larını
yazarız. */

// Generic type'ın türünü burada spesifik olarak belirliyoruz.
const [counter_1, setCounter_1] = useState_2<number>(10);

// Burada ise generic type'ın türünü otomatik olarak set edilmesini istemiş oluyoruz.
const [counter_2, setCounter_2] = useState_2("test");

/* Normalde generic type'ın türünü set etme zorunluluğumuz yoktur fakat özellikle union typelarda
(yani birden fazla tür almasını istiyorsak) o zaman bu generic type'ın türünü mutlaka set etmeliyiz. */

const [day, setDay] = useState_2<number | string | null>("monday");
setDay("tuesday");
setDay(2);
setDay(null);
