## An object-oriented book-list!

- [ ] Create a class BookList
- [ ] Create another class called Book

#### Each Book should have several properties:

1. Title
2. Category
3. Author
4. isRead (default to `false`)
5. finishedDate

Book class will have the following methods:

- `markBookAsRead` when called will change the `isRead` property on the book to be `true`. It will also change the `finishedDate` to be the `Date.now()` when this function is called.

#### BookList should have the following properties:

1. An array of all the Books
2. Current read book index

#### BookList Methods

- [] `add([Book])` will accept an array (list of books). Once the method is called the book will added to the list.
- [] `getCurrentBook()` should return the current book using the `index` and the book array
- [] `getNextBook()` should return the next book using the `index` and the book array
- [] `getPrevBook()` should return the previous book using the `index` and the book array
- [] `changeCurrentBook` should accept one parameter and update the current index.

After creating the Book and BookList class create 5 book object and add it to list. Test all the methods in Book and BookList class.

```js


class BookList {
    constructor(...arrayofbooks,bookindex){
        this.arrayofbooks = ...arrayofbooks;
        this.bookindex = bookindex;
    }
    add(array){
     this.arrayofbooks = array; 
     return this.arrayofbooks;
    }
    getCurrentBook(){
        return this.arrayofbooks[this.bookindex]
    }
    getNextBook(){
        return this.arrayofbooks[this.bookindex++]
    }
    getPrevBook(){
        return this.arrayofbooks[this.bookindex--]
    }
     changeCurrentBook(newindex){
        this.bookindex = newindex;
        return this.arrayofbooks[this.bookindex]
    }

}
class Book extends BookList{
    constructor(title,category,author,isread = "false",finisheddate){
        super(...arrayobbooks,bookindex)
        this.title = title;
        this.category = category;
        this.author = author;
        this.isread = isread
        this.finisheddate = finisheddate
    }
    markBookAsRead(){
           this.isRead = true;
        this.finishDate = Date.now();
        return this.isRead;
    }
}

let timeManagement = new Book( 
    "Time ManageMent ",
    "educational","Rahul",
    "5feb", 1
    );
console.log(timeManagement);
console.group(timeManagement.Title);
console.log(`Book category is ${timeManagement.Category}`);
console.log(`Book Author is ${timeManagement.Author}`);
console.log(`Book is Already read ${timeManagement.isRead}`);
timeManagement.markBookAsRead();
timeManagement.add(
    [" alkemist","timemanagement",
    "shareMarket","cryptoMastery",
    "Make Money",
    "be a digital marketer"
]);
timeManagement.getCurrentBook();
timeManagement.getNextBook();
timeManagement.getPreviousBook();
timeManagement.changeCurrentBook(2);
console.groupEnd();

// secondBook 
let bookTwo = new Book( 
    "Alkemist ",
    "educational","Rahul",
    "10feb", 1
    );
console.log(bookTwo);
console.group(bookTwo.Title);
console.log(`Book category is ${bookTwo.Category}`);
console.log(`Book Author is ${bookTwo.Author}`);
console.log(`Book is Already read ${bookTwo.isRead}`);
bookTwo.markBookAsRead();
bookTwo.add(
    [" alkemist","bookTwo",
    "shareMarket","cryptoMastery",
    "Make Money",
    "be a digital marketer"
]);
bookTwo.getCurrentBook();
bookTwo.getNextBook();
bookTwo.getPreviousBook();
bookTwo.changeCurrentBook(2);
console.groupEnd();

//thirdBook

let bookThree = new Book( 
    "Alkemist ",
    "educational","Rahul",
    "10feb", 0
    );
console.log(bookThree);
console.group(bookThree.Title);
console.log(`Book category is ${bookThree.Category}`);
console.log(`Book Author is ${bookThree.Author}`);
console.log(`Book is Already read ${bookThree.isRead}`);
bookThree.markBookAsRead();
bookThree.add(
    [ "Alkemist","Learn Share Market ","bookThree",
    "shareMarket","cryptoMastery",
    "Make Money",
    "be a digital marketer"
]);
bookThree.getCurrentBook();
bookThree.getNextBook();
bookThree.getPreviousBook();
bookThree.changeCurrentBook(2);
console.groupEnd();


// Fourth book 
let bookFourth = new Book( 
    "Learn Share Market ",
    "educational","Rahul",
    "10feb", 1
    );
console.log(bookFourth);
console.group(bookFourth.Title);
console.log(`Book category is ${bookFourth.Category}`);
console.log(`Book Author is ${bookFourth.Author}`);
console.log(`Book is Already read ${bookFourth.isRead}`);
bookFourth.markBookAsRead();
bookFourth.add(
    ["Learn Share Market ","bookFourth",
    "shareMarket","cryptoMastery",
    "Make Money",
    "be a digital marketer"
]);
bookFourth.getCurrentBook();
bookFourth.getNextBook();
bookFourth.getPreviousBook();
bookFourth.changeCurrentBook(2);
console.groupEnd();
// last book 
let lastBook = new Book( 
    "Master Crypto",
    "educational","Rahul",
    "10feb", 3
    );
console.log(lastBook);
console.group(lastBook.Title);
console.log(`Book category is ${lastBook.Category}`);
console.log(`Book Author is ${lastBook.Author}`);
console.log(`Book is Already read ${lastBook.isRead}`);
lastBook.markBookAsRead();
lastBook.add(
    ["Learn Share Market ","lastBook",
    "shareMarket","cryptoMastery",
    "Make Money",
    "be a digital marketer"
]);
lastBook.getCurrentBook();
lastBook.getNextBook();
lastBook.getPreviousBook();
lastBook.changeCurrentBook(2);
console.groupEnd();

```

