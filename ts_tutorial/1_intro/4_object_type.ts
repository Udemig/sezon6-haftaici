/* Object Type:

Normalde zaten "object" isimli bir primitive type'ımız var. Fakat
bu type bütün objeleri tutmak için kullanılır. Genel olarak daha
spesifik objelerle çalışmamız gerekiyor. Bu durumda o an kullanacağımız
objenin property'lerini bir obje type'ı şeklinde yazabiliriz. Böylece
ihtiyacımız doğrultusunda daha spesifik bir obje type'ımız olmuş olur.
Bu type vasıtasıyla otomatik tamamlama özelliği aktifleşir ve bu sayede
hız kazanmış oluruz ve sintaks hatalarından kurtuluruz.

*/

let student_5: object = {};
student_5 = {
  id: 1,
};
student_5 = {
  firstname: "test",
  lastname: "test",
};

let student_6: {
  id: number;
  firstname: string;
  lastname: string;
  gender: "male" | "female" | "none" | "erkek" | "bayan" | null | undefined | 0; // pipe (boru) karakteri
  city: string;
};

student_6 = {
  id: 1,
  firstname: "test",
  lastname: "example",
  gender: "female",
  city: "izmir",
  //birth_year: 1990,
};

/* Buradaki tüm property'ler ve fonksiyonlar otomatik tamamlama
yöntemiyle yazılmıştır. */
student_6.firstname.includes("ahmet");

/* Örnek: Jsonplaceholder sitesindeki user listesinin türünü yazın.
Adres: https://jsonplaceholder.typicode.com/users/1

*/

const user_1: {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string | number;
      lng: string | number;
    };
  };
  phone: string | null | boolean;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  hobbies: string[];
} = {
  id: 1,
  name: "test",
  username: "test",
  email: "test@test.com",
  address: {
    street: "test street",
    suite: "test suite",
    city: "test city",
    zipcode: "test",
    geo: {
      lat: "10.20",
      lng: "0.3",
    },
  },
  phone: "905554443322",
  website: "merhabadunya.com",
  company: {
    catchPhrase: "test",
    bs: "test",
    name: "test",
  },
  hobbies: ["guitar", "swim", "walking"],
};

/* Soru: Her değişken için bu büyük type'ı tekrar tekrar
tanımlamak gerekiyor mu?

Cevap: Gerekmiyor. Bu tarz durumlarda kendi type'larımızı
ayrıca tanımladıktan sonra değişkenler üzerinde kullanılabilir.

*/

type JsonplaceholderUserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string | number;
      lng: string | number;
    };
  };
  phone: string | null | boolean;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  hobbies: string[];
};

const bedirhan: JsonplaceholderUserType = {
  id: 2,
  name: "bedirhan",
  username: "bedirhan",
  email: "bedirhan@gmail.com",
  phone: "9055554444444",
  website: "bedirhan.com",
  hobbies: ["reactjs", "nextjs", "vuejs", "ionic"],
  address: {
    street: "test street",
    suite: "test suite",
    city: "test city",
    zipcode: "test",
    geo: {
      lat: "10.20",
      lng: "0.3",
    },
  },
  company: {
    catchPhrase: "test",
    bs: "test",
    name: "test",
  },
};

const hasan: JsonplaceholderUserType = {
  id: 3,
  name: "hasan",
  username: "hasan",
  email: "hassn@gmail.com",
  phone: "9055554444444",
  website: "bedirhan.com",
  hobbies: ["reactjs", "nextjs", "vuejs", "ionic"],
  address: {
    street: "test street",
    suite: "test suite",
    city: "test city",
    zipcode: "test",
    geo: {
      lat: "10.20",
      lng: "0.3",
    },
  },
  company: {
    catchPhrase: "test",
    bs: "test",
    name: "test",
  },
};

const jsonExampleData: JsonplaceholderUserType = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
  hobbies: [],
};

const users_4: JsonplaceholderUserType[] = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
    hobbies: [],
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
    hobbies: [],
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
    hobbies: [],
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
    hobbies: [],
  },
];
