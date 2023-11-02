class Car_5 {
  private battery_power: number = 10;
  private starter_motor_running: boolean = false;
  private engine_started: boolean = false;
  private key_status: 0 | 1 | 2 = 0;

  /* Mevcut bir property'nin değerini return eden methoda getter method denir. */
  getEngineStatus() {
    return this.engine_started;
  }

  startEngine() {
    if (this.battery_power <= 0) {
      throw new Error("Akü arızalı veya boş.");
    }

    if (this.starter_motor_running === false) {
      throw new Error("Marş motoru arızalı.");
    }

    if (this.key_status != 2) {
      throw new Error("Önce anahtarı ikinci konuma getiriniz.");
    }

    this.engine_started = true;
  }

  // Bu methodun rolü de setter'dır çünkü key_status'u set ediyor.
  insertKey() {
    this.key_status = 0;
    return this;
  }

  /* Bir property'yi set eden fonksiyona setter fonksiyon denir. */
  turnKey(level: 0 | 1 | 2) {
    if (level === 2) {
      this.starter_motor_running = true;
    } else {
      this.starter_motor_running = false;
    }

    this.key_status = level;
  }
}

const meryemin_arabasi = new Car_5();
meryemin_arabasi.insertKey();
console.log(">>>  meryemin_arabasi:", meryemin_arabasi);

meryemin_arabasi.turnKey(2);
console.log(">>>  meryemin_arabasi:", meryemin_arabasi);

meryemin_arabasi.startEngine();
console.log(">>>  meryemin_arabasi:", meryemin_arabasi);

meryemin_arabasi.turnKey(1);
console.log(">>>  meryemin_arabasi:", meryemin_arabasi);

console.log("Motor durumu: ", meryemin_arabasi.getEngineStatus());

/*
Not: Yukarıdaki yöntem global olarak hem typescriptte hem diğer dillerde kullanılan
bir yöntemdir. Bu yöntemde fonksiyonların property'lerle olan ilişkisine göre
kavramsal olarak getter veya setter şeklinde isimlendirilmesi söz konusudur.
*/

//////////////////////7

console.log("------------");

/* Typescript'te getter ve setter oluşturmak için özel bir sintaks vardır. */

class ExampleClass_5 {
  /* Neden alt tire ile başlıyoruz? Çünkü aşağıdaki getter ve setter fonksiyonlar
  ile aynı isimde olmaması için ufak bir önek eklemiş oluyoruz. */
  private _username: string = "";

  /* TS'ye ait olan bu yöntemi kullanarak bir getter yazdığımızda bu fonksiyondan
    mutlaka herhangi bir değer döndermek mecburiyetindeyiz. */
  get username() {
    console.log("username getter fonksiyon invoke edildi");
    return this._username;
  }

  /* Bir setter fonksiyon tanımladığımızda bu fonksiyonun mutlaka sadece bir adet
  parametresi olmalı ve bir değer döndermemeli. Aksi halde hata verir. */
  set username(param1: string) {
    console.log("username setter fonksiyon invoke edildi, param1:", param1);
    this._username = param1;
  }
}

const obj_20 = new ExampleClass_5();
// Burada username property'sini set ediyoruz. Arkaplanda typescript username ismindeki
// setter fonksiyonunu invoke eder.
obj_20.username = "test";

// username propertysi eşittirin sağında olduğu için burada getter fonksiyon invoke edilir.
const result = obj_20.username;
console.log(">>>  result:", result);

// burada da yine get işlemi yapmış oluyoruz.
console.log("username: ", obj_20.username);
