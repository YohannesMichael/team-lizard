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


//this sets up the available genres to use based on the quoteable site.
let genres = [];
function startup () {
    genres = fetchTags(); //fetches all tages from quoteable site
}
startup();

//this sets the jquery item for the search bar and searchbutton
$searchBar = $('#search-bs-class');
$searchButton = $('#search-btn');

//this creates a jquery reference to the tagList below the search bar.
$tagList = $('#tag-list'); 

//this produces 5 random tags from the genre list under the search bar.
populateTagList($tagList,return5RandomGenres(genres));
//console.log("return random: ",return5RandomGenres(genres));


//event handler that sets a function to handle the button clicks bubling up to the div taglist.
$tagList.on('click',function(e) {
    const genre = $(e.target).data('genre');
    //set the search bar value
    $searchBar.val(genre);
    //trigger a search
    handleSearch($searchBar.val());
    //delete the button just pressed
    $(e.target).remove();
    //repolulate the taglist.
    populateTagList($tagList,return5RandomGenres(genres));
}); 

$searchButton.on('click',function(e) {
    handleSearch($searchBar.val());
});

function populateTagList(tagList,genres) {
    
    tagList.empty();
    for (buttonName of genres) {
        tagList.append(`<button data-genre="${buttonName}"class="flex-1 py-3 px-3 rounded-3xl w-full leading-7 bg-sky-100 hover:bg-sky-600 font-bold text-center focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-transparent shadow-sm">${buttonName}</button>`)
    }
   
}
//returns 5 random itesm from an array
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
    //console.log("authour list by genre",authorList);
    return authorList;

}


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
    //console.log("tagList found in localstorage:");
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


async function fetchAuthors(tag) {
    //tag ags like a genre here, so that below in the params string we create a {tag}
    //to filter the results to a genres

    /* if (localStorage.getItem(`tag-${tag}`)) {
        //console.log(`local Storgage had info in ${tag}: `, JSON.parse(localStorage.getItem(`tag-${tag}`)))
        return (JSON.parse(localStorage.getItem(`tag-${tag}`)));
    } */
    //console.log("fetch Authors recieved a tag: ",tag);
    const limit = 150;
    params = `${tag}.json`; //option to add parameters
    fetchUrl = `https://openlibrary.org/subjects/${params}`
    //console.log("fetch authours url: ",fetchUrl);
    
    let authorList = [];
    const response =  await fetch(fetchUrl);
    const data = await response.json();  
    //console.log("data.works: ", data.works);      
    for (dataPoint of data.works) {
        let name = dataPoint.authors[0].name.toLowerCase();
        //console.log(dataPoint.authors[0].name.toLowerCase());
        authorList.push(name);
    }
    //console.log(authorList);
    localStorage.setItem(`tag-${tag}`,JSON.stringify(data));
    return authorList; 
};

//similar to test code funciton below.    
async function handleSearch() {
    const term = $searchBar.val();
    console.log("term:",term)
    const authorList = await fetchAuthors(term);
    const list = await(fetchQuotesToAuthor(authorList));
    renderAuthorList(list);
}

/* async function test() {
    let tag = 'science';
    let nameScience = await fetchAuthors(tag);
    console.log("name science: ",nameScience);
    //console.log("full list called: ", await fullList(nameScience));
    renderAuthorList(await fullList(nameScience));
} */

//test();
    


//Helper
function nameToSlug (name) {
    let newName = name.replace(" ","-");
    newName = newName.replace(",","");
    return newName.replace(".","");
}
//
// full list takes arra of names. outputs a 2 dimentional array of {name:name,quotes:[quotes]}

async function fetchQuotesToAuthor (list) {
        let returnArray = [];
        console.log("full li: ",list);

        for (let x = 0 ; x < list.length ; x++) {
            returnArray.push({
                name: list[x],
                quotes: await fetchQuotes(nameToSlug (list[x]))
            })
            console.log(returnArray[x])
            
        }
        
        return returnArray;
    }





//console.log("fetchAuthors run on  science",fetchAuthors("science"));
//console.log("fetchAuthors run on love",fetchAuthors("love"));
//console.log("fetchAuthors run on peace",fetchAuthors("peace"));
//console.log("fetchAuthors run on phoilosophy",fetchAuthors("philosophy"));
    


//console.log("console fetch bio: ",fetchBiography('OL25342A'));



async function fetchQuotes(author) {
    fetchUrl = `https://api.quotable.io/quotes?author=${nameToSlug(author)}`;
    let fetchQuotesList =[];
    //console.log("fetch quotes url", fetchUrl);
    const response = await fetch(fetchUrl)
    const data = await response.json();

    for (dataPoint of data.results) {
        //console.log(dataPoint.content);
        fetchQuotesList.push(dataPoint.content);
    }
        localStorage.setItem(`quotesList-${author}`,JSON.stringify(data))
        return fetchQuotesList;
        
    }

//console.log('fetch quotes', fetchQuotes('ben elton'));
//console.log('fetch quotes', fetchQuotes('aldous huxley'));
//console.log('fetch quotes', fetchQuotes('william shakespeare'));


//fetch all tags from QUOTES_URL
//console.log(fetchTags()); 



$authors = $("#author-container").addClass('container');

function renderAuthorList(authorList) {
    //console.log("renderAuthourList called",authorList);
    $authors.empty();
    for (author of authorList) {
        $authors.append(createAuthorCard(author,$authors));
    }
}



//console.log("calling getAuthorsFromWorks(fetchAuthors('science')): ", getAuthorsFromWorks(fetchAuthors('science')));
//console.log("calling renderAuthorList(getAuthorsFromWorks(fetchAuthors('science'))) ", renderAuthorList(getAuthorsFromWorks(fetchAuthors('science'))));

function renderQuotesList(quotesArray,author) {
    console.log("quotes Array",quotesArray);
    console.log("quotes Array author",author);
    $returnElement = $(`<div id="quotes-by-${nameToSlug(author)}"></div>`);
    for (let x = 0; x < quotesArray.length ; x++) {
        const $quote = $(`<p id="quote-${author}-${x}" class="quote mb-4 gap-y-3 leading-loose italic bold text-coolGray-500 font-medium">${quotesArray[x]}</p>`);
        $returnElement.append($quote);
        console.log($returnElement);
    }

    

    console.log("return element: ",$returnElement);
    return $returnElement;
}

async function createAuthorCard (author,$appendTo) {
    //this needs developing, by taking the code out from getAuthourWorks function and putting it in 
    //here we get an authorcard we can append to the authorcontainer div
    // The author object should be name, biography, quotes list, place of birth, weather in place of birth, etc.
    
    const blankAuthor = {
        name: "",
        quotes: []
    }
    const list = await renderQuotesList(author.quotes,author.name);
    
    let $authorCard = $(`<div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10"></div>`);
    let $authorInnerContainer = $(`<div class="max-w-xs mx-auto md:ml-0"></div>`);
    let $authorImage = $(`<img class="w-24 h-24 mb-6 rounded-full" src="https://t4.ftcdn.net/jpg/05/95/83/67/360_F_595836741_8hyycaWwQphpA0vaMsuoce7tRr8xPKtP.jpg" alt="">`);
    let $authorName = $(`<h3 class="mb-1 text-lg text-coolGray-800 font-semibold">${author.name}</h3>`);
    let $authorQuotesTitle = $(`<span class="inline-block mb-4 text-lg font-medium text-green-500">Quotes</span>`)
    let $authorQuotesText = $(`<div id="${nameToSlug(author.name)}"></div>`)
    for (let x = 0 ; x < list.length; x++) {
    $authorQuotesText.append(list[x])
    }
    
    $authorInnerContainer.append($authorImage);
    $authorInnerContainer.append($authorName);
    $authorInnerContainer.append($authorQuotesTitle);
    $authorInnerContainer.append($authorQuotesText);
    $authorCard.append($authorInnerContainer);
    
    $appendTo.append($authorCard);
    

}

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
    //console.log("getAuthorsFromWorks Array end: ",authorsArray);
    return authorsArray;
}






  


//console.log(getAuthorsFromWorks(fetchAuthors('science'))); 
//console.log(getAuthorsFromWorks(fetchAuthors('comedy'))); 



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


