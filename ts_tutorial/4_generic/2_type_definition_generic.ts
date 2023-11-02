/*
Bir type tanımlarken generic kullanmak:

Özellikle union ve obje türü tanımlarken bazı elemanların türünün dinamik (yani generic) olması
gerekebilir. Bu durumda generic'i type isminden sonra yazarız.

Özellikler:

- Kullanım esnasında mutlaka generic type'ın olması gereken type'ı belirtmeliyiz. Fonksiyonlardaki
  gibi otomatik type bulma özelliği burada aktif değildir.

*/

type ApiResponseType<DataType> = {
  status: "success" | "error";
  data: DataType;
};

const apiResult_1: ApiResponseType<object> = {
  status: "success",
  data: { id: 1 },
};

type AuthResponseType_1 = {
  id: number;
  firstname: string;
  lastname: string;
};

const authApiResult_1: ApiResponseType<AuthResponseType_1 | null> = {
  status: "success",
  data: {
    id: 1,
    firstname: "foo",
    lastname: "bar",
  },
};

const authApiResult_2: ApiResponseType<AuthResponseType_1> = {
  status: "success",
  data: {
    id: 2,
    firstname: "test",
    lastname: "foo",
  },
};

const foo: ApiResponseType<string> = {
  status: "success",
  data: "test",
};

// Union içerisinde kullanım örneği:
type ExampleType_4<Generic1> = string | number | Generic1;

let foo4: ExampleType_4<boolean> = true;
foo4 = "test";
foo4 = 10;
foo4 = false;

let foo5: ExampleType_4<null> = null;
foo5 = "test";
foo5 = null;

enum DaysEnum_5 {
  Mon,
  Tue,
  Wed,
}

let foo6: ExampleType_4<object | DaysEnum_5 | null> = DaysEnum_5.Mon;
foo6 = null;
foo6 = {};
foo6 = { id: 1 };
