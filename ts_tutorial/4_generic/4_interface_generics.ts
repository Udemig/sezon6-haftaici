/*
Interface içerisinde kullanılmak üzere generic type'lar tanımlanabilir. Bunu yaparken
aynı class'lardaki yöntemi kullanırız. Yani isimden sonra büyük-küçük karakterlerin
arasına genericler yazılır.

*/

interface FooInterface<Generic1, Generic2, T, K, U, V> {
  prop1: Generic1;
  prop2: Generic2;
}

/*

Generic'lerle ilgili bazı temel bilgiler:

- Bütün dünyada herkesin bildiği bazı generic type isimlerinin kısaltmaları vardır. Örneğin
  "type" kelimesinin kısaltılmışı olarak "T", "value" kelimesinin "V", "key" kelimesinin "K" gibi.
  Eğer o an yazdığımız algoritmadaki genericler bunlardan birisi olacaksa bu kısaltmaları kullanabiliriz.
  Daha farklı bir generic ismine ihtiyaç duyuyorsak o zaman kısaltmadan normal şekilde uzun ve
  anlamlı bir isim tercih edersek daha iyi olur. Aşağıya birkaç tane sık kullanılan kısaltmaları yazalım:
  T: Type
  V: Value
  K: Key
  X: Unknown
  U, R, P, Y, Z gibi.

*/

/* Örnek: Generic type'a sahip bir interface'imiz olsun ve bunu farklı class'lar implement etsin. */

interface Pair_1<K, V> {
  key: K;
  value: V;
}

class PairStore<X, Y> {
  /* Burada Pair_1'in sahip olduğu generic type'ların olmasını istediğimiz gerçek türlerini belirliyoruz.
  `pairs` property'sini kullanırken bu type'lara bağlı kalarak kullanmamız gerekiyor. */
  private pairs: Pair_1<X, Y>[];

  constructor() {
    this.pairs = [];
  }

  add(key: X, value: Y) {
    this.pairs.push({ key, value });
    return this;
  }
}

const studentInfo_5 = new PairStore<string, string>();
studentInfo_5.add("firstname", "uğur");
studentInfo_5.add("lastname", "aktaş");
studentInfo_5.add("city", "istanbul");

/* Bir gerçek dünya problemi için bu yapıyı kullanabiliriz. Örneğin bir çağrı merkezi yazılımı
yazdığımızı düşünelim. Burada bir çağrı başlattığımızda bu çağrının ikiden fazla tarafı (peer)
olabilir. Tüm bu dataları şu mantıkla tutabiliriz. Çağrı objesini key olarak, tarafları da
value olarak tutabiliriz. */

class Call_1 {
  start_date: Date = new Date();
  end_date: Date | null = null;
  credit_per_minute: number = 0;
  from_country: string = "";
  uniqid: string = "";
}

class Peer_1 {
  phone_number: string = "";
  operator: string = "";
}

const calls = new PairStore<Call_1, Peer_1[]>();

calls.add(
  {
    start_date: new Date(),
    end_date: null,
    credit_per_minute: 5,
    from_country: "turkey",
    uniqid: "aerlgkajeşrglkajerglaşejkrg",
  },
  [
    { phone_number: "905551112233", operator: "turkcell" },
    { phone_number: "905554443322", operator: "vodafone" },
    { phone_number: "905558877665", operator: "telekom" },
  ]
);

console.log(">>>  calls:", calls);

// List örneği:
interface Collection_1<T> {
  add(param1: T): void;
  remove(param1: T): void;
}

/* Bu örnekte asıl önemli olan nokta burası. Generic type'a sahip bir interface'i implement
ettiğimizde o generic type'ın nasıl set edildiğine dikkat ediniz. */
class List<X> implements Collection_1<X> {
  private values: X[] = [];

  add(value: X) {
    this.values.push(value);
  }

  remove(value: X) {
    const index = this.values.findIndex((item) => item === value);
    this.values.splice(index, 1);
  }
}

const studentNameList = new List<string>();
studentNameList.add("meryem ipekçi");
studentNameList.add("fatih dilek");
console.log(">>>  studentNameList:", studentNameList);

studentNameList.remove("fatih dilek");
console.log(">>>  studentNameList:", studentNameList);
