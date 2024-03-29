const QUOTABLE_URL = "https://api.quotable.io";

const QUOTABLE_TAGS_URL = "https://api.quotable.io/tags";

const QUOTES_ENDPOINT = "/quotes";

const OPEN_LIBRARY_BIO_URL = "https://openlibrary.org/authors"
const OPEN_LIBRARY_AUTHOR_URL = "https://openlibrary.org/subjects"




const LIMIT = 150;


// as a developer, when I call a fetch function for fetchTags it returns a list of 
// tags that are available at the QUOTES_URL.



//run first to setup auto complete for search bar. can use const tags = fetchTags()
function fetchTags(){
    params = ""; //option to add parameters
    fetchUrl = `${QUOTABLE_TAGS_URL}${params}`;
    let tagList = [];
fetch(fetchUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("fetchtags: " ,data);
    

    for (dataPoint of data) {
        tagList.push(dataPoint.slug);
    }

  });

  console.log(tagList);
  return tagList;
    //taglist is a result of the type array, containing an array of objects which 
    //can act like a genre search in relation to books from https://api.quotable.io"
    
}

//USE this call to get a list of tags available for the user to search. use this array as the autocomplete for the search bar.
const searchableTags = fetchTags();


//https://openlibrary.org/subjects/love.json

//represent a book per opbject in the .results object of the data returned. https://api.quotable.io"
///search/authors?query=Einstein


/* fetchAuthors function, it returns an array of author OBJECTS in a particular genre RESULT 
AuthorList = [{
                name : dataPoint.authors[0].name,
                key: dataPoint.authors[0].key,
                hometown : "",
                profileUrl : ""
            }] */

function fetchAuthors(tag) {
    //tag ags like a genre here, so that below in the params string we create a {tag}
    //to filter the results to a genres
    
    const limit = 150;
    params = `limit=${limit}&page=1`; //option to add parameters
    
    fetchUrl = `https://openlibrary.org/subjects/${tag}.json?${params}`
    
    console.log("fetch authours url: ",fetchUrl);
    let authorList = [];
 
    console.log("url: ",fetchUrl);
    fetch(fetchUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log("key",data.works[2].key)
        console.log("title", data.works[2].title)
     
        //console.log(data.works);

        for (dataPoint of data.works) {
            console.log("data point.authors[0].name: ",dataPoint.authors[0].name);
            console.log("data point.authors[0].key: ",dataPoint.authors[0].key);
            authorList.push({
                name : dataPoint.authors[0].name,
                key: dataPoint.authors[0].key,
                hometown : "",
                profileUrl : ""
            });


        }
        return authorList;
    })
    .then(function (data){
        console.log(data);
        return data;

    })
        
    };

    console.log(fetchAuthors("science"));
  

//This function fetches a biograhphy for a particular Author.
function fetchBiography(authorId) {
    const FETCHURL = `https://openlibrary.org${authorId}.json`

    params = authorId; //option to add parameters

    console.log("------fetch URL in bio ",FETCHURL);
    
    fetch(FETCHURL)
      .then(function (response) {    
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log("data in fetch author bio value ",data.bio);
        console.log("data in fetch author bio value ",data.bio.value);
        if (!data.bio.value) {
            return data.bio.value;
        } else return data.bio;

  });

}

console.log("fetch bio: ",fetchBiography('/authors/OL9388A'));
//console.log("fetch bio: ",fetchBiography('/authors/OL9388A'));


//this function needs to have an author slug which is part of the autor JSON object.

function fetchQuotes(author) {
    
    
    params = `${QUOTES_ENDPOINT}?author=${author}`; 
   
    fetchUrl = `${QUOTABLE_URL}${params}`;
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

//console.log('fetch quotes', fetchQuotes('albert-einstein'));

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


//console.log(fetchAuthors("science")); 


$authors = $("#author-container").addClass('container');


function createAuthorCard (author) {
    //this needs developing, by taking the code out from getAuthourWorks function and putting it in 
    //here we get an authorcard we can append to the authorcontainer div
    // The author object should be name, biography, quotes list, place of birth, weather in place of birth, etc.

    const blankAuthor = {
        name: "",
        biography: "",
        quotes: [
            "this is the day",
            "anothher quote"
        ],
        birthPlace: "",
        weatherInHomeTown: ""
    }


    $authorCard = $(`<div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10"></div>`);
    
    $authorInnerContainer = $(`<div class="max-w-xs mx-auto md:ml-0"></div>`);
    
    $authorImage = $(`<img class="w-24 h-24 mb-6 rounded-full" src="https://t4.ftcdn.net/jpg/05/95/83/67/360_F_595836741_8hyycaWwQphpA0vaMsuoce7tRr8xPKtP.jpg" alt="">`);
    $authorName = $(`<h3 class="mb-1 text-lg text-coolGray-800 font-semibold">${author.name}</h3>`);
    $authorBiographyTitle = $(`<span class="inline-block mb-4 text-lg font-medium text-green-500">Biography</span>`)
    $authorBiographyText = $(`<p class="mb-4 text-coolGray-500 font-medium"> </p>`)
        $authorInnerContainer.append($authorImage);
        $authorInnerContainer.append($authorName);
        $authorInnerContainer.append($authorBiographyTitle);
        $authorInnerContainer.append($authorBiographyText);

    $authorCard.append($authorInnerContainer);
    
    return $authorCard;

}

function getAuthorsFromWorks (works) {
    //recieves works from an object generated by fetchAuthors(tag). 
    //Works is an array of books from a list of authors with a tag.
    //This function is helpful to turn works into data to be displayed on a card
    //because it reveals a full list of authors available via the Open Librarby Endpoint
    
    let authorsArray = [];
    const $authors = $('');
        for (work of works) {
            
            authorsArray.push(work.authors);
            $authors.append(createAuthorCard(work.authors[0]));
        }
    
    return authorsArray;
}





  
//console.log(getAuthorsFromWorks(subjectsLove.works));     
