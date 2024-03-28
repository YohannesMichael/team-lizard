const genreInput = document.getElementById('genre').value;


const genreUrl = `https://openlibrary.org/search/${genreInput}.json`;

let authorArr = [];
async function fetchAuthor() {
    try {
        const response = await fetch('https://openlibrary.org/subjects/love.json');

        if (!response.ok) {
            throw new Error("Hmmm, I don't know this genre.");
        }

        const data = await response.json();
        const bookTitles = data.works;

        bookTitles.forEach(title => {
            authorArr.push(title.authors[0].name.toLowerCase());
        });

        console.log(authorArr);
    }

    catch (error) {
        console.error(error);
    }
}

fetchAuthor();


async function fetchQuote() {
    try {
        const response = await fetch('https://api.quotable.io/quotes?author=william-shakespeare');

        if (!response.ok) {
            throw new Error("Hmmm, I don't know this author.");
        }

        const data = await response.json();
        console.log(data.results);
        const quotes = data.results;
        quotes.forEach(quote => {
            console.log(quote.content);
        });

    }
    catch (error) {
        console.error(error);
    }
}

fetchQuote()




// var str = "Sonic Free Games";
// str = str.replace(/\s+/g, '-').toLowerCase();
// console.log(str); // "sonic-free-games"
// const authorArr1 = authorArr[1];
// authorArr1.replace(/\s+/g, '-').toLowerCase;
// console.log(authorArr1);
// async function fetchQuote() {
//     try {
//         const response = await fetch(`https://api.quotable.io/quotes?author=${author[0]}`);

//         if (!response.ok) {
//             throw new Error("Hmmm, I don't know this author.");
//         }

//         const data = await response.json();
//         console.log(data.results);
//         const quotes = data.results;
//         quotes.forEach(quote => {
//             console.log(quote.content);
//         });

//     }
//     catch (error) {
//         console.error(error);
//     }
// }

// fetchQuote()
