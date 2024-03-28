const QUOTES_URL = "https://api.quotable.io";

const AUTHOR_URL = "https://openlibrary.org"

const AUTHOR_ENDPOINT = "/subjects/";
const QUOTES_ENDPOINT = "/quotes";
const TAGS_ENDPOINT = "/tags";

const LIMIT = 15;


// as a developer, when I call a fetch function for fetchTags it returns a list of 
// tags that are available at the QUOTES_URL.


function fetchTags(){
    params = TAGS_ENDPOINT; //option to add parameters
    fetchUrl = `${QUOTES_URL}${params}`;

fetch(fetchUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    const tagList = [];

    for (dataPoint of data) {
        tagList.push(dataPoint.slug);
    }
  });


  return tagList;
    //taglist is a result of the type array, containing an array of objects which 
    //can act like a genre search in relation to books from https://api.quotable.io"
    
}


//https://openlibrary.org/subjects/love.json
//authors funciton, it returns an array of authors in a particular genre
//authorlist is a result of the type array, containing an array of objects which 
//represent a book per opbject in the .results object of the data returned. https://api.quotable.io"
///search/authors?query=Einstein

function fetchAuthors(tag) {
    //tag ags like a genre here, so that below in the params string we create a {tag}
    //to filter the results to a genres
    
    const limit = 150;
    params = `${AUTHOR_ENDPOINT}${tag}.json?limit=${limit}&page=1`; //option to add parameters
    
    fetchUrl = `${AUTHOR_URL}${params}`
    
    let authorList = [];
 
    console.log(fetchUrl);
    fetch(fetchUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log("page 1 data: ", data);
        //console.log(data.works);
        for (dataPoint of data.works) {
            authorList.push([dataPoint.authors[0].name,dataPoint.authors[0].key]);
        }
        
    })
    .then(function (data){
        console.log(authorList);
        
        return data;

    })
        
    };




//this function needs to have an author slug which is part of the autor JSON object.

function fetchQuotes(author) {
    
    console.log("author is", author);
    params = `${QUOTES_ENDPOINT}?author=${author}`; 
    console.log(`${QUOTES_URL}${params}`);
    fetchUrl = `${QUOTES_URL}${params}`;
    let quotesList =[];

    fetch(fetchUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        
        for (dataPoint of data) {
            quotesList.push(dataPoint.slug);
        }
        console.log(quotesList);
        
    }).catch((response) => {
        console.log(response.status,response.statusText)
    }); 

    
    return quotesList;

}

//fetch all tags from QUOTES_URL
//console.log(fetchTags()); 

/* let author = "albert-einstein";
console.log(fetchQuotes(author)); //fetch all quotes from QUOTES_ENDPOINT
author = "bill-bryson";
console.log(fetchQuotes(author)); //fetch all quotes from QUOTES_ENDPOINT
author = "terry-pratchett";
console.log(fetchQuotes(author)); //fetch all quotes from QUOTES_ENDPOINT
 */

//fetch all authors from AUTHORS_ENDPOINT


console.log(fetchAuthors("science")); 


