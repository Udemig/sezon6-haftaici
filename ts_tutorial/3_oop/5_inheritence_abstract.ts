/*
Abstract Class:

Bir algoritmanın bazı fonksiyonlarını kullanıcıya bırakma ve bazı temel fonksiyonlarını
parent class'ta tutmak gerekebilir. Örneğin veritabanına bağlantı class'ını düşünürsek
veritabanına bağlanma ve bir datayı veritabanına kaydetme işlemleri standarttır.
Ama standart olmayan bazı işlemler de var olabilir örneğin mail adresine göre
datayı getirme fonksiyonu gibi.

Sonuç olarak aynı and ahem implement edilmiş methodlara hem de soyut methodlara
ihtiyaç duyarsak o zaman abstract class'lar kullanmamız gerekir.

Class: soyut method içeremez, tüm methodlar implement edilmiş olmalı (yani somut olmalı).
Interface: somut method içeremez, tüm methodlar soyut olmalı.
Abstract class: Hem soyut method içerebilir hem de somut method içerebilir.


*/

abstract class DbOperations {
  protected data: any;

  public connectToDb() {
    // Bu methodun gövdesi var. Yani implement edilmiş.
    console.log("Db'ye bağlanıyor.");
  }

  abstract save(): boolean;
}

class MysqlSaver extends DbOperations {
  save(): boolean {
    console.log("Şu data mysql'e kaydediliyor: ", this.data);
    return true;
  }
}

class MongodbSaver extends DbOperations {
  save(): boolean {
    console.log("Şu data mongodb'ye kaydediliyor: ", this.data);
    return true;
  }
}

/*
Design Pattern:
Bu zamana kadar gördüğümüz OOP mantıkları üzerine kurulmuş olan ve birçok mühendisin
karşılaştığı benzer problemlerin çözümüne getirilmiş algoritmalardır.

*/
