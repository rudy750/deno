interface IBook {
    isbn: string;
    author: string;
    title: string;
}

let books: Array<IBook> = [{
    isbn: "1",
    author: "Robin Wieruch",
    title: "The Road to React",
},{
    isbn: "2",
    author: "Kyle Simpson",
    title: "You Don't Know JS: Scope & Closures",
},{
    isbn: "3",
    author: "Andreas A. Antonopoulos",
    title: "Mastering Bitcoin"
}]

const getBooks = ({ response }: { response: any}) => {
    response.body = books
}

const  deleteBook = ({ response }: { response: any}) => {
    response.body = 'nothing'
}

const getBook = ({ params, response }: { params: { isbn: string }, response: any}) => {
    const book: IBook | undefined = searchBookByIsbn(params.isbn)
    if(book){
        response.status = 200
        response.body = books[0]
    }else{
        response.status = 404
        response.body = { message: `Book not found.`}
    }
}

const addBook = ({ response }: { response: any}) => {
    response.body = 'nothing'
}
const updateBook = ({ response }: { response: any}) => {
    response.body = 'nothing'
}

const searchBookByIsbn = (isbn: string): (IBook | undefined ) => books.filter(book => book.isbn === isbn )[0]

export { getBooks, getBook, addBook, updateBook, deleteBook }