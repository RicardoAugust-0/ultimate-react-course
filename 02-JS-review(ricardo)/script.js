const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Desestruturando elementos

/*
const book = getBook(3);
book;

// const title = book.title;
// const author = book.author;

// Criando elemento para declarar todas as váriaveis
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, title, genres);

// const primarygenre = genres[0];
// const secondarygenre = genres[1];

// Operador 'Rest' --- Cria uma outra variável contendo o restante dos elementos dentro da matrix(array)
const [primarygenre, secondarygenre, ...othergenres] = genres;
console.log(primarygenre, secondarygenre, othergenres);

// Operador 'Spread' --- Pega o array existente e reescreve ele dentro da nova variável
const newGenres = ["epic fantasy", ...genres];
newGenres;

// Adicionando propriedades novas dentro de um objeto utilizando o Operador 'Spread'
const updatedBook = {
  ...book,
  // Adicionando a nova propriedade (esta propriedade não existe no objeto ainda)
  moviePublicationDate: "2001-12-19",

  // Substituindo uma propriedade a qual já existe
  pages: 1210,
};
updatedBook;

const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not "}been adapted as a movie`;
summary;

// Operador Ternário --- Praticamente um 'if' e 'else'
const pagesRange = pages > 1000 ? "over a thousand" : "less than a thousand";
pagesRange;
console.log(`The book has ${pagesRange} pages`);

// Funções padrões --- Abaixo está uma 'Arrow Function' (aqui é uma "Declaração de Função")
// function getYear(str) {
//   return str.split("-")[0];
// }

// Arrow Function --- Realiza o mesmo que a função padrão, porém de forma + moderna e simples (arrow function retorna automaticamente o que estiver do lado direito da seta)
// const getYear = (str) => str.split("-")[0];
// console.log(getYear(publicationDate));

// Operador 'End' --- Curto-circuito (funciona como um "se" --- "se" o primeiro valor for verdadeiro, mostre o segundo, "se" o primeiro valor for falso, mostre o primeiro)
console.log(true && "Some string");
console.log(false && "Some string");
console.log(hasMovieAdaptation && "This book has a movie");

// falsy: 0, '', null, undefined
console.log("jonas" && "Some string");
console.log(0 && "Some String");

console.log(true || "Some string");
console.log(false || "Some string");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "Not Translated";
spanishTranslation;

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "No Data";
// countWrong;

// // Operador Coalescência nullish --- Funciona muito parecido com o Operador "ou"( || ) mas também causa curto-circuito para valores falsos --- Apenas retorna o segundo valor se o primeiro valor for nulo ou undefined
// const count = book.reviews.librarything.reviewsCount ?? "No data";
// count;

// Encadeamento opcional --- Apenas solicita as próximas propriedades caso o que vier antes realmente existir
function getTotalReviewCount(book) {
  // Se a propriedade não existir, torna toda variável undefined
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));
*/

/*
function getTotalReviewCount(book) {
  // Se a propriedade não existir, torna toda variável undefined
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}

const books = getBooks();
// 'Map' --- Cria um novo array com base no que foi passado nos parâmetros
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
essentialData;

// 'Filter' --- Chama um callback para cada elemento do array e filtra com base na regra implementada (no caso "se" book for maior que 500, então o book irá entrar para o novo array)
const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksWithMovie;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

// 'Reduce' --- Tem como objetivo reduzir todo o array para apenas 1 valor (necessita de um valor temporário que no caso é o "acc", este valor irá receber as iterações de todas as páginas, no caso ele recebe todas as somas e depois retorna o valor final)
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAllBooks;

const arr = [3, 6, 16, 8, 4];
const sorted = arr.slice().sort((a, b) => a - b);
sorted;
arr;

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
sortedByPages;

// 1) Adicionar um objeto de livro em um array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2) Deletar um objeto de livro de dentro de um array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// 3) Atualizar um objeto de livro de dentro de um array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 12100 } : book
);
booksAfterUpdate;
*/

// Criação de uma função assíncrona, utilizando 'Promises' (Javascript é síncrono por padrão)
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log("jonas");

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

  return data;
}

const todos = getTodos();
console.log(todos);

console.log("ricardo");
