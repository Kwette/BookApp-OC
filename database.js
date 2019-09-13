

import { Book } from './Book.js';

let bookList = []

const firstBook = bookList.push(new Book("1984", "Georges Orwell", 376, "1984 (Nineteen Eighty-Four) est le plus célèbre roman de George Orwell, publié en 1949. (...). La liberté d'expression n’existe plus. Toutes les pensées sont minutieusement surveillées, et d’immenses affiches sont placardées dans les rues, indiquant à tous que « Big Brother vous regarde » (Big Brother is watching you)."));
const secondBook = bookList.push(new Book("Vernon Subutex, 1", "Virginie Despentes", 397, "Vernon Subutex, 1 est un roman de Virginie Despentes paru le 7 janvier 2015 aux éditions Grasset. Il est le premier tome d'une série de trois tomes ; le deuxième tome est publié en juin 2015, le troisième tome en mai 2017."));
const thirdBook = bookList.push(new Book("Les Thanatonautes", "Bernard Werber", 400, "Les Thanatonautes est un roman de Bernard Werber, mêlant science et fantastique, publié en 1994. Le mot Thanatonaute est une combinaison des racines grecques Thanato signifiant « la mort1 » et naute signifiant « navigateur2 » soit, littéralement, « navigateur de la mort » ou « explorateur de la mort. »"));
const fourthBook = bookList.push(new Book("Contes de la folie ordinaire", "Charcles Buckovsky", 264, "Le recueil est sorti en 1972, il a été porté à l'écran en 1981 par Marco Ferreri sous le titre Conte de la folie ordinaire.Toutes les histoires de Bukowski sont aussi vraies qu’infectes et, en cela, font honneur à la littérature : il raconte ce que les autres enjolivent et dissimulent. Le sexisme, la misère du quotidien, la violence et les sentiments de ceux qui se curent le nez."));

export { bookList };
