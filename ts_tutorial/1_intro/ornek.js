/* Javascriptte her değişken her değeri alabilir çünkü hiçbir type
kontrolü yoktur. Bu ilk bakışta esneklik ve kolaylık olarak görülür
ama büyük projelerde problem oluşturur. */

let users = [];
users.push({
  id: 1,
});

let firstname = "bedirhan";

users.push({
  firstname: "test",
  lastname: "example",
});

//.......
//.......
//.......
//.......
//.......
//.......
//.......
//.......
//.......
//.......

users = null;
users = "test";

function foo(param1) {
  // param1'e her türde değer gelebilir bu yüzden otomatik tamamlama
  // özelliği burada geçerli değildir.
}
foo(null);
foo("test");
foo(10);
foo({});
