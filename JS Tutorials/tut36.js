console.log("this is tut 36")

class Library{
    constructor(bookList){
        this.bookList = bookList;
        this.issuedBooks = {};
    }
    getBookList(){
        this.bookList.forEach(element => {
            console.log(element);
            
        });
    }
    issueBooks(bookname,user){
        console.log(this.issuedBooks[bookname]);
        if (this.issuedBooks[bookname] == undefined){
        this.issuedBooks[bookname] = user;
        }
        else{
            console.log("this book is already book")
        }
    }
    returnBook(bookname){
        delete this.issuedBooks[bookname];
    }
}