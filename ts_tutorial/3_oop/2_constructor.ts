/*
Constructor (yapıcı, inşa etmek) methodu:

Bir objenin property'lerini initialize etmek için kullanılır. Constructor methodu
`new` operatörü tarafından sadece bir kez çağırılır ve sonra asla çağırılamaz.

Özellikler:
- Class'larda constrcutor olması opsiyoneldir. Eğer constructor varsa `new` operatörü
  tarafından otomatik olarak invoke edilir, yoksa hiçbirşey yapılmaz.
- constructor'ın amacı class property'lerini dinamik veya hardcoded şeklinde initialize
  etmektir.
- Eğer constructor'da parametre varsa `new` operatörünü kullanırken bu parametreler
  yazılmalıdır.
- 

*/

class ExampleClass_2 {
  prop1: string;
  prop2: number;

  constructor() {
    // hardcode şeklinde initialize ediyoruz.
    this.prop1 = "";
    this.prop2 = 0;
  }
}

class ExampleClass_3 {
  prop1: string;
  prop2: number;

  constructor(param1: string, param2: number) {
    // dinamik şekilde initialize ediyoruz.
    this.prop1 = param1;
    this.prop2 = param2;
  }
}

const obj_5 = new ExampleClass_3("test", 20);
console.log(">>>  obj_5:", obj_5);

/* Soru: Bir monitör class'ı yazınız. */

class Monitor {
  resolution: [number, number];
  model: string;
  brand: string;
  power_consumption: number;
  screen_size: number;
  price: number;
  currency:
    | "dolar"
    | "afyon dinarı"
    | "çin yuanı"
    | "hint rupisi"
    | "kuveyt dinarı"
    | "sterlin"
    | "euro";
  is_curved: boolean;
  refresh_rate: 60 | 75 | 144 | 165 | 240 | 540 | "other";
}

/* Ödev: Yukarıdaki class'a methodlar ekleyin. */
