/*
Inheritence (Kalıtım):

Eskiden bilgisayarlar güçlü değilken yazılımlar sadece fonksiyonlar ile yazılıyordu ve
bu yeterli oluyordu. Fakat zamanla bilgisayarlar geliştikçe ve ihtiyaçlar arttıkça
fonksiyonel programlama yeterli olmamaya başladı. Bu yüzden farklı bir yöntem olarak
object oriented programming bulundu. Bu konunun en önemli alt dallarından birisi de
kalıtım olayıdır. Kalıtım class'lar arasındaki hiyerarşiyi kurabilmek için kullanılan
bir yöntemdir. Bir önceki nesildeki özellik ve methodların bir sonraki nesile aktarılması
şeklinde özetlenebilir.

OOP'de iki class'tan birinin diğerinin özelliklerine sahip olabilmesi için onu genişletmesi
gerekir (yani extend etmesi gerekir). Bunu sağlamak için "extends" keywordü kullanılır.

*/

class Foo {}

class ExampleClass_10 {
  prop1: string = "";
  prop2: number = 0;

  method1() {
    console.log("ExampleClass_10::method1() invoked.");
  }

  method2() {
    console.log("ExampleClass_10::method2() invoked.");
  }
}

class ChildClass_1 extends ExampleClass_10 {
  /* ExampleClass_10 içerisindeki tüm property ve methodlar buraya otomatik olarak kopyalanır.
  Bu kopyalanan method veya propertyleri istersek bazı kurallar çerçevesinde değiştirebiliriz,
  yada tamamen farklı ve yeni propertyler ve methodlar ekleyebiliriz. */

  /* Mevcut bir property'yi veya methodu değiştirmek istersek (bu işleme override denir)
  bunu o elemanın prototipine uygun olacak şekilde değiştirmemiz gerekir. */
  method1() {
    console.log("ChildClass_1::method1() invoked.");
  }
}

const obj_9 = new ExampleClass_10();
obj_9.method1();
obj_9.method2();

const obj_10 = new ChildClass_1();
obj_10.method1();
obj_10.method2();

/*
Özellikler:

- Bir class başka bir class'ı extend ettiğinde extend edilen class parent class konumunda
  olur, extend eden class da child class konumunda olur. Eğer bir class tek başına duruyorsa
  yani kimse tarafından extend edilmemiş ve kimseyi de extend etmemişse o zaman bu class
  için bir parentlık yada childlık söz konusu değildir.

- Child class tarafında parenttan gelen herhangi bir elemanı override edilmediyse parenttan
  gelen eleman geçerlidir.

- Bir class birden fazla class'ı extend edemez, yani sadece bir class'ı extend edebilir.

*/

class Human {
  eye_color: string;
}

class Father extends Human {
  eye_color: "brown";
}

class Mother extends Human {
  eye_color: "blue";
}

class Son extends Father {}

const hasan = new Son();
hasan.eye_color; // Türü "brown" olur. Çünkü Father class'ında override edildi.

const any_people = new Human();
any_people.eye_color; // Bunun türü string'dir.

/*
Interface'ler ile inheritence:

Bir interface başka bir class tarafından extend edilemez çünkü sadece classlar birbirini
extend (genişletmek) edebilir. Fakat bir class başka bir interface'i IMPLEMENT edebilir.
Implement etmek ne demek? Implement etmek ifadesinin anlamı gövdesi olmayan fonksiyonların
gövdesini yazmaktır (yani algoritmik kısmını). Yani gövdesi olmayan fonksiyon derken
örneğin fonksiyon türü veya prototipi. Benzer mantıkla interface'ler de aslında soyut
ifadelerdir ve bir class tarafından implement edilmeleri gerekir.

Daha kolay anlaşılması açısından şu şekilde düşünebiliriz. Interface'ler mimari taslaktır
ama class'lar ise mesela bir binadır veya evdir veya gökdelendir gibi düşünebiliriz.

*/

type ExampleFnType = (param1: string, param2: number) => void;

interface Foo {
  prop1: string;
  method1(param1: string): number;
}

type Foo2 = {
  prop1: string;
  prop2: () => void;
};

const obj_15: Foo = {
  prop1: "test",
  method1(param1: string): number {
    return 10;
  },
};

interface ExampleInterface_1 {
  prop1: string;
  method1(): void;
}

interface ExampleInterface_2 {
  prop2: number;
  method2(param1: string): number;
}

interface ExampleInterface_3 {
  prop3: boolean;
  method3(param1: number, param2: string): void;
}

/*
Özellikler:

- Bir class'ın bir interface'si implement etmesi için "implements" ifadesi kullanılır.

- Implement eden class'ta implement edilen interface'in tüm elemanları mutlaka yazılmalıdır.
  Çünkü bu elemanlar extend'deki gibi otomatik gelmez.

- 

- 

*/

class ExampleClass_11 implements ExampleInterface_1 {
  prop1: string;

  method1(): void {
    //
  }
}

class ExampleClass_12 implements ExampleInterface_1, ExampleInterface_2 {
  prop1: string;
  method1(): void {
    throw new Error("Method not implemented.");
  }
  prop2: number;
  method2(param1: string): number {
    throw new Error("Method not implemented.");
  }
}

/* Bir class aynı anda hem extends yapabilir hem de implements yapabilir. Örneğin aşağıdaki
class hem Human class'ını extend ediyor hem de diğer interface'leri implement ediyor. */
class ExampleClass_15
  extends Human
  implements ExampleInterface_1, ExampleInterface_3
{
  prop1: string;
  method1(): void {
    throw new Error("Method not implemented.");
  }
  prop3: boolean;
  method3(param1: number, param2: string): void {
    throw new Error("Method not implemented.");
  }
}

///////////////////////////

class ExampleClass_20 {
  /* Soru: Typescriptin kendi sintaksını kullanarak firstname isimli
    bir getter ve setter fonksiyonlarını yazınız. */
}

class Name {
  private _firstName: string;

  get firstName() {
    return this._firstName;
  }

  set firstName(firstName: string) {
    if (firstName !== "") {
      this._firstName = firstName.toUpperCase();
    }
  }
}

const name_22 = new Name();
name_22.firstName = "ilker";

function exampleFn(...param1: string[]) {}
exampleFn("test", "test2");

type Days = "mon" | "tue" | "wed" | number;
enum DaysEnum {
  Mon,
  Tue,
  Wed,
}

type ExampleTupleType = [number, string, boolean];

const exampleTuple: ExampleTupleType = [10, "test", true];

exampleTuple.push("test");
