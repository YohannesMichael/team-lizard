const QUOTABLE_URL = "https://api.quotable.io";

const QUOTABLE_TAGS_URL = "https://api.quotable.io/tags";

const QUOTES_ENDPOINT = "/quotes";

const OPEN_LIBRARY_BIO_URL = "https://openlibrary.org/authors"
const OPEN_LIBRARY_AUTHOR_URL = "https://openlibrary.org/subjects"


const quoteList =[]    
;

const LIMIT = 150;


// as a developer, when I call a fetch function for fetchTags it returns a list of 
// tags that are available at the QUOTES_URL.


const genres = fetchTags(); //fetches all tages from quoteable site
$searchBar = $('#search-bs-class');
$tagList = $('#tag-list'); //links a jquery opbject to the div holding buttons the user can select instead of searching


//event handler that sets a function to handle the button clicks bubling up to the div taglist.
$tagList.on('click',function(e) {
    const genre = $(e.target).data('genre');
    console.log("genre button clicked:",genre);
    //this should trigger an event handler for listing the authourcards below
    //the console log above is extracting the genre being clicked on.
    console.log(`genre button clicked:,${genre} to be deleted`);
    $searchBar.val(genre);
    $(e.target).remove();
    populateTagList($tagList,return5RandomGenres(genres));
}); 


console.log(return5RandomGenres(genres));
populateTagList($tagList,return5RandomGenres(genres));

//this function gets a 5 long random list from the whole genres list and appends a button for each of the 5 into the 
//$tagList jquery div.

function populateTagList(tagList,genres) {
    
    tagList.empty();
    for (buttonName of genres) {
        tagList.append(`<button data-genre="${buttonName}"class="flex-1 py-3 px-3 rounded-3xl w-full leading-7 bg-sky-100 hover:bg-sky-600 font-bold text-center focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-transparent shadow-sm">${buttonName}</button>`)
    }
   
}

function return5RandomGenres(genres) {
    let arr = []

    for (let x = 0; x < 5; x++) {
        arr.push(genres[Math.floor(Math.random() * genres.length) + 1]);
    }
    return arr;
}



function authorListsByGenre (genres) {
let authorList = [];
    for (let x = 0 ; x < genres.length ; x++ ) {
        authorList.push({
            genre: genres[x],
            authors: [],
        })
    }
    //console.log(authorList);
    for (x = 0; x < genres.length; x++) {
        authorList[x].authors.push(fetchAuthors(genres[0]));
    }
    return authorList;
}


//console.log("genres: ",genres);

//console.log("get authors list by genres ", authorListsByGenre(genres));



// https://openlibrary.org/authors/OL24529A.json
//console.log('fetch bio', fetchBiography("OL24529A"));


//run first to setup auto complete for search bar. can use const tags = fetchTags()
//fetchTags now fetches once and stores in local storage so that it doesent have 
//to keep making calls.
function fetchTags(){
    
    if (!localStorage.getItem('tagList')) {

    params = "?limit=150"; //option to add parameters
    fetchUrl = `${QUOTABLE_TAGS_URL}${params}`;
    let tagList = [];
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://localhost:3000');


    fetch(fetchUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //console.log("fetchtags: " ,data);
    

    for (dataPoint of data) {
        tagList.push(dataPoint.slug);
    }
    return tagList;
  })
  .then( function (data){
    localStorage.setItem('tagList',JSON.stringify(data));
    });
} else {
    tagList = JSON.parse(localStorage.getItem('tagList'));
    console.log("tagList found in localstorage:");
}
  
  return tagList;
    //taglist is a result of the type array, containing an array of objects which 
    //can act like a genre search in relation to books from https://api.quotable.io"
    
}


//https://openlibrary.org/subjects/love.json
//authors funciton, it returns an array of authors in a particular genre
//authorlist is a result of the type array, containing an array of objects which 
//represent a book per opbject in the .results object of the data returned. https://api.quotable.io"
///search/authors?query=Einstein


function fetchAuthors (tag) {
    let authorList = [];

    if (localStorage.getItem(`tag-${tag}`)) {
        //console.log(`local Storgage had info in ${tag}: `, JSON.parse(localStorage.getItem(`tag-${tag}`)))
        return (JSON.parse(localStorage.getItem(`tag-${tag}`)));
    } else {

async function fetchAuthor() {
    try {
        const response = await fetch(`https://openlibrary.org/subjects/${tag}.json`);

        if (!response.ok) {
            throw new Error("Hmmm, I don't know this genre.");
        }

        const data = await response.json();
        const bookTitles = data.works;
        console.log(data.works);

        bookTitles.forEach(title => {
            console.log("title.authors[0] ", title.authors[0])
            console.log([title.authors[0].name.toLowerCase(),title.authors[0].bio])
            authorList.push([title.authors[0].name.toLowerCase(),title.authors[0].bio]);
        });

        localStorage.setItem(`tag-${tag}`,JSON.stringify(authorList));

        console.log(authorList);
        return authorList;
    }

    catch (error) {
        console.error(error);
    }
}
}
}

let tag = 'science';
fetchAuthors(tag);


function AfetchAuthors(tag) {
    //tag ags like a genre here, so that below in the params string we create a {tag}
    //to filter the results to a genres
    if (localStorage.getItem(`tag-${tag}`)) {
        //console.log(`local Storgage had info in ${tag}: `, JSON.parse(localStorage.getItem(`tag-${tag}`)))
        return (JSON.parse(localStorage.getItem(`tag-${tag}`)));
    }

    const limit = 150;
    params = `${tag}.json?limit=${limit}&page=1`; //option to add parameters
    fetchUrl = `https://openlibrary.org/subjects/${params}`
    //console.log("fetch authours url: ",fetchUrl);
    let authorList = [];
    
    fetch(fetchUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            //console.log(`Had to run a fetch in Authours by tag ${tag} produces data: `,data);
            
        
            
            for (dataPoint of data.works) {
                
                const bio = fetchBiography(dataPoint.authors.name);
                authorList.push({
                    name: dataPoint.authors[0].name,
                    key: dataPoint.authors[0].key,
                    bio : bio
                });
            }
            
        })
        .then(function (data){
            localStorage.setItem(`tag-${tag}`,JSON.stringify(authorList));
            //console.log("authorList in fetchAuthors: ",authorList);
            return authorList;

    })
        
    };

//console.log("fetchAuthors run on  science",fetchAuthors("science"));
//console.log("fetchAuthors run on love",fetchAuthors("love"));
//console.log("fetchAuthors run on peace",fetchAuthors("peace"));
//console.log("fetchAuthors run on phoilosophy",fetchAuthors("philosophy"));
    
function fetchBiography(key) {
    params = ""; //option to add parameters
    fetchUrl = `https://openlibrary.org/${key}.json?${params}`;
    bioReturn = "";
    
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://localhost:3000');


    fetch(fetchUrl)
      .then(function (response) {    
        return response.json();
    })
    .then(function (data) {
        //console.log("fetchbiography: data ", data);
        //console.log("name is", data.name);
        //console.log("type of bio", typeof(data.bio));
        if (typeof(data.bio) == String) {
        //console.log("bio.value not there");
        bioReturn = data.bio;
     }  else {
        //console.log("bio.value there",data.bio.value);
        bioReturn = data.bio.value;
     }
     //console.log("bio return", bioReturn);
     
  });
  return bioReturn;
}

//console.log("console fetch bio: ",fetchBiography('OL25342A'));


//this function needs to have an author slug which is part of the autor JSON object.

function fetchQuotes(author) {
    fetchUrl = `https://api.quotable.io/quotes?author=${author}`;
    let fetchQuotesList =[];

    fetch(fetchUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        //console.log("fetchQuotesData results: ",data.results);
        for (dataPoint of data.results) {
            //console.log(dataPoint.content);
            fetchQuotesList.push(dataPoint.content);
        }
        return fetchQuotesList
    }).then(function (data){
        //console.log(data);
        localStorage.setItem(`quotesList-${author}`,JSON.stringify(data))
        return data;
    }).catch((response) => {
        //console.log(response.status,response.statusText)
    }); 
    return fetchQuotesList;
}

/* console.log('fetch quotes', fetchQuotes('ben-elton'));
console.log('fetch quotes', fetchQuotes('alexandre-dumas'));
console.log('fetch quotes', fetchQuotes('william-shakespeare'));
 */

//fetch all tags from QUOTES_URL
//console.log(fetchTags()); 



$authors = $("#author-container").addClass('container');

function renderAuthorList(authorList) {
    //console.log("renderAuthourList called",authorList);
    for (author of authorList) {
        $authors.append(createAuthorCard(author));
    }
}

//console.log("calling getAuthorsFromWorks(fetchAuthors('science')): ", getAuthorsFromWorks(fetchAuthors('science')));
//console.log("calling renderAuthorList(getAuthorsFromWorks(fetchAuthors('science'))) ", renderAuthorList(getAuthorsFromWorks(fetchAuthors('science'))));

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
    $authorBiographyText = $(`<p class="mb-4 text-coolGray-500 font-medium">${author.bio}</p>`)
        $authorInnerContainer.append($authorImage);
        $authorInnerContainer.append($authorName);
        $authorInnerContainer.append($authorBiographyTitle);
        $authorInnerContainer.append($authorBiographyText);

    $authorCard.append($authorInnerContainer);
    
    return $authorCard;

}


//
function getAuthorsFromWorks (works) {
    //recieves works from an object generated by fetchAuthors(tag) it 
    //recieves a list of authors related to that tag as an array of {name,key} 
    //Works is an array of books from a list of authors with a tag.
    //This function is helpful to turn works into data to be displayed on a card
    //because it reveals a full list of authors available via the Open Librarby Endpoint

    let authorsArray = [];
    
        //console.log("works in getAuthorfrom Works: ",works);
        
        for (work of works) {
            const bio = fetchBiography(work.key); 
            //console.log("work authour in getAuthorfrom: ",work.name);
            //console.log("work authorID in getAuthorfrom: ",work.key);
            authorsArray.push({
                name: work.name,
                key : work.key,
                bio : bio
            })
    
        }
    console.log("getAuthorsFromWorks Array end: ",authorsArray);
    return authorsArray;
}






  


//console.log(getAuthorsFromWorks(fetchAuthors('science'))); 
//console.log(getAuthorsFromWorks(fetchAuthors('comedy'))); 
