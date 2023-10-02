/*

Typescript, js'nin bazı önemli eksikliklerini düzeltmek için microsoft tarafından
ücretilmiş bir dildir. Js'de her değişkenin her türlü değeri alabiliyor olması
ve bundan dolayı autocomplete özelliğinin aktifleştirilemiyor olması gibi
problemlere çözüm getiren bir dildir.

Java, derlenen bir dil, scripting dilleri ise yorumlanan dillerdir.

Typescript dosyaları doğrudan çalıştırılamazlar. Çünkü typescript arkaplanda
javascript üzerine inşa edilmiş bir dildir. Dolayısıyla biz typescript ile
kodları yazmış olsak bile gerçekte çalışan kod javascript kodudur. Bunu
yapabilmek için (TS kodunu derleyip derlenen kodu çalıştırmak) de bize bir
derleyici lazımdır. Bu derleyicinin ismi "tsc"dir.

tsc: TypeScript Compiler

tsc'yi kurmak için aşağıdaki komutu terminalden çalıştırın:
  npm install -g typescript

Örnek ts kodlarını aşağıya yazıp derleyelim ve derleme sonucu
oluşan js kodlarını inceleyelim:

*/

let firstname_1: string = "bedirhan";

let student_1: object = {
  id: 1,
  firstname: "test",
  lastname: "test",
  birthdate: "12.06.1989",
  education: [
    {
      school: "test",
    },
    {
      school: "example",
    },
  ],
};

console.log("student_1: ", student_1);

class User {}
