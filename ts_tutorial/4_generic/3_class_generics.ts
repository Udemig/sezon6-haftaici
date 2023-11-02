/*
Class'larda Generic Kullanımı:

Aynı fonksiyonlarda olduğu gibi class isminden sonra büyük-küçük işaretleri arasına
generic type isimleri yazılır. Sonra class gövdesi içerisinde bu genericler kullanılır.

*/

class ExampleClass_1<Generic1, Generic2> {
  prop1: Generic1;
  prop2: Generic2;
  prop3: string;

  constructor(param1: Generic1, param2: Generic2, param3: string) {
    this.prop1 = param1;
    this.prop2 = param2;
    this.prop3 = param3;
  }

  setProp1(param1: Generic1): ExampleClass_1<Generic1, Generic2> {
    this.prop1 = param1;
    return this;
  }

  getProp1(): Generic1 {
    return this.prop1;
  }
}

const obj1 = new ExampleClass_1<number, string>(10, "test", "example");
console.log(">>>  obj1:", obj1);

const obj2 = new ExampleClass_1<string | number | null, boolean>(
  null,
  true,
  "test"
);
console.log(">>>  obj2:", obj2);

obj2.setProp1("foo");
console.log(">>>  obj2:", obj2);

/* Generic type'ların base (parent) class'larını belirlemek: */

class FooClass_1 {
  prop1: string = "FooClass1";
}

class BarClass_1 extends FooClass_1 {
  prop2: string = "BarClass1";
}

class BazClass_1 extends FooClass_1 {
  prop3: string = "BazClass_1";
}

class QuxClass_1 extends BarClass_1 {
  prop4: string = "QuxClass_1";
}

class ExampleClass_5<Generic1 extends FooClass_1> {
  prop1: Generic1;

  constructor(param1: Generic1) {
    this.prop1 = param1;
  }
}

const foo_obj_1 = new FooClass_1();
const bar_obj_1 = new BarClass_1();
const baz_obj_1 = new BazClass_1();
const qux_obj_1 = new QuxClass_1();

const obj10 = new ExampleClass_5(foo_obj_1);
const obj11 = new ExampleClass_5(bar_obj_1);
const obj12 = new ExampleClass_5<QuxClass_1>(qux_obj_1);

// Burası hatalı çünkü baz_obj_1, QuxClass_1'i extend etmiyor.
//const obj13 = new ExampleClass_5<QuxClass_1>(baz_obj_1);

const obj14 = new ExampleClass_5(baz_obj_1);

class Stack_1<Generic1> {
  // Generic type'ın dizi içerisinde tanımlayabiliriz.
  private values: Generic1[] = [];

  // Generic type'ı parametrede kullandık.
  push(param1: Generic1) {
    this.values.push(param1);
    //this.values = [...this.values, param1];
    return this;
  }

  // Generic type'ı dönüş türünde kullandık.
  pop(): Generic1 {
    if (this.values.length > 0) {
      // `as` ifadesi genericlerle de kullanılabilir.
      return this.values.pop() as Generic1;
    } else {
      throw new Error("Yığında eleman kalmadı.");
    }
  }
}

const domates_poseti = new Stack_1<string>();

domates_poseti.push("domates 1").push("domates 2").push("domates 3");
console.log(">>>  domates_poseti:", domates_poseti);

let son_domates = domates_poseti.pop();
console.log(">>>  son_domates:", son_domates);

son_domates = domates_poseti.pop();
console.log(">>>  son_domates:", son_domates);

son_domates = domates_poseti.pop();
console.log(">>>  son_domates:", son_domates);

son_domates = domates_poseti.pop();
console.log(">>>  son_domates:", son_domates);

/* Genel isimlendirme yöntemleri:
TODO Burayı doldur.
*/
