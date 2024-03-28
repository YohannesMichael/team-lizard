const genreInput = document.getElementById('genre').value;


const genreUrl = `https://openlibrary.org/search/${genreInput}.json`;

async function fetchAuthor() {
    try {
        const response = await fetch('https://openlibrary.org/subjects/love.json');
        if (!response.ok) {
            throw new Error("Hmmm, I don't know this genre.");
        }
        const data = await response.json();
        console.log(data.works);
        const bookTitles = data.works;
        let authorArr = [];
        bookTitles.forEach(element => {
            console.log(element.authors[0].name);
            authorArr.push(element.authors[0].name);
        });
        console.log(authorArr);
    }
    catch (error) {
        console.error(error);
    }
}

fetchAuthor();