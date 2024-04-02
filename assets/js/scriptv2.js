// Get the required DOM elements
const authorsContainer = document.getElementById('author-container');
const searchBtn = document.getElementById('search-button');

// Define a function to create the author list based on user input
async function createAuthorList() {
    // Return an asynchronous function that fetches data and displays authors
    // return async function () {
    // Initialize an array to store author names
    let authorArr = [];
    // Clear the authors container before displaying new authors
    authorsContainer.textContent = '';
    // Get the limit and genre values from input fields
    const limit = document.getElementById('limit').value;
    const genre = document.getElementById('genre').value.toLowerCase();
    // Construct the URL for fetching data based on the genre and limit
    const genreUrl = `https://openlibrary.org/subjects/${genre}.json?limit=${limit}`;
    console.log(genre, genreUrl);

    // Define an asynchronous function to fetch author data
    try {
        // Fetch data from the API using the constructed URL
        const response = await fetch(genreUrl);
        // Check if the fetch request is unsuccessful and throw an error
        if (!response.ok) {
            throw new Error("Hmm, I don't know this genre!");
        }
        // Parse the response data as JSON
        const data = await response.json();
        console.log(data);
        // Extract the works array from the response data
        const works = data.works;
        console.log(works);
        // Iterate through each work and extract the author name
        works.forEach(work => {
            const author = work.authors[0].name;
            // Add the author name to the authorArr array
            authorArr.push(author);

            // Create a new h2 element to display the author name
            const authorHeader = document.createElement('h2');
            authorHeader.textContent = author;
            authorHeader.classList.add('text-2xl');
            // Append the h2 element to the authors container
            authorsContainer.appendChild(authorHeader);
        });
        console.log(authorArr);
    } catch (error) {
        // Log any errors that occur during fetching or processing data
        console.error(error);
    }

};


// Add an event listener to the search button that triggers the createAuthorList function
searchBtn.addEventListener('click', createAuthorList);
