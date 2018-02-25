interface IBook{
   title: string;
  readonly author: string;
   published?: Date;
   pages?: number; 
}
//Creating a function that takes an IBook instance and test it with an object instance.
function booksLibrary(book:IBook){
    const str=`
    *****************************
    Title: ${book.title}
    Author: ${book.author}
    Published:${book.published}
    Pages: ${book.pages}
    *****************************
    `;
    console.log(str);
}//3c)Duck typing is that type-checking focuses on the shape that values have.

//3d)By making published and pages become optional we put a "?"at the end of the
//the value published and pages.

//3e) by making the author readonly you make it unchangeable it will be kinda static.

//3f) CREATING A CLASS BOOK
class Book {
    // Our properties:
    // By default they are public, but can also be private or protected.
    title: string;  
    author: string;   
    published?: Date;
    pages?: number      
  
    // A straightforward constructor. 
    constructor(title:string, author: string) {
      // The this keyword is mandatory.
      this.title = title;    
      this.author = author;
    }
    // here we do getter and setter
    get getTitle(){
     return this.title;
    }
    set setTitle(t:string){
        this.title = t;     
    }
}
 let b: Book = new Book("Black Panthers","Ryan Coogler");
 console.log(b.title,b.getTitle);