// Objects:

// Activity 1:

const book = {
    title: "Harry Potter and the Philosopher of Stone",
    author: "JK Rolling",
    year: 2000,

    bookInfo() {
        let title = 'Don bradman'
        console.log(`Title is: ${title}`);
        console.log(`Title is: ${this.title}`);
        console.log(`Author is: ${this.author}`);
    },

    bookYear(year){
        this.year = year;
        console.log((`Updated year is: ${year} : `+ this.year));
    },
}

console.log(book);

console.log(book.title);
console.log(book.author);

// activity 2:

book.bookInfo()
book.bookYear(2003)

// activity 3:


const knowYourBook = function() {
    return `title: ${this.title} , year: ${this.Year}`
}


const library = {
    name: 'Central Library',
    book : [
    {
        genre: 'Science',
        title: 'Planet Earth',
        author: 'Carl Segan',
        Year: 2000,
        getDetails: knowYourBook,
    },
    {
        genre: 'Fiction',
        title: 'Harry Potter',
        author: 'JK Rolling',
        Year: 2001,
        getDetails: knowYourBook,
    },
    {
        genre: 'Civis',
        title: 'Preamble',
        author: 'Modi ji',
        Year: 2014,
        getDetails: knowYourBook,
    },
    {
        genre: 'Thriller',
        title: 'Mirzapur',
        author: 'Pankaj tripathi',
        Year: 2021,
        getDetails: knowYourBook,
    },
    {
        genre: 'Philosophy',
        title: 'Zero to One',
        author: 'Kiyosaki',
        Year: 1990,
        getDetails: knowYourBook,
    },
],
}



// activity 4:

console.log(library);
console.log(library.book[1]);
console.log(library.book[1].getDetails());


// activity 5:

const Book = {
    name: "Deathly Hollows",
    author: 'JK ROlling',
    published: 2001
}

for (const prop in Book) {
    console.log(`${prop} : ${Book[prop]}`);
}

console.log(Object.keys(Book));
console.log(Object.values(Book));