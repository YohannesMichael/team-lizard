const QUOTABLE_URL = "https://api.quotable.io";

const QUOTABLE_TAGS_URL = "https://api.quotable.io/tags";

const QUOTES_ENDPOINT = "/quotes";

const OPEN_LIBRARY_BIO_URL = "https://openlibrary.org/authors"
const OPEN_LIBRARY_AUTHOR_URL = "https://openlibrary.org/subjects"




const LIMIT = 150;


// as a developer, when I call a fetch function for fetchTags it returns a list of 
// tags that are available at the QUOTES_URL.

<<<<<<< HEAD
=======

function fetchBiography(authorId) {
    params = authorId; //option to add parameters
    fetchUrl = `${OPEN_LIBRARY_BIO_URL}/${params}.json`;

    console.log("fetch URL in bio ",fetchUrl);
    
    fetch(fetchUrl)
      .then(function (response) {    
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log("data in fetch author ",data.name);
        console.log("data, bio in fetch author ",data.bio.value);
        
        const tagList = [];

    for (dataPoint of data) {
        console.log("data.bio.data", data.bio.value);
        return data.bio.value;
    }
  });

}

console.log("fetch bio: ",fetchBiography('OL52266W'));

// https://openlibrary.org/authors/OL24529A.json
//console.log('fetch bio', fetchBiography("OL24529A"));


//run first to setup auto complete for search bar. can use const tags = fetchTags()
function fetchTags(){
    params = ""; //option to add parameters
    fetchUrl = `${QUOTABLE_TAGS_URL}${params}`;
    let tagList = [];
>>>>>>> f025ba4d7d4d5639d648b49fa835f1e2024bd068
fetch(fetchUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
<<<<<<< HEAD
    console.log(data);
  });

  tagList = [
    {
        "_id": "PIyOMHYqPd",
        "name": "Age",
        "slug": "age",
        "quoteCount": 1,
        "dateAdded": "2023-04-14",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "qTFouZDPBZz",
        "name": "Athletics",
        "slug": "athletics",
        "quoteCount": 0,
        "dateAdded": "2022-07-06",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "M83oc3scg",
        "name": "Business",
        "slug": "business",
        "quoteCount": 31,
        "dateAdded": "2019-08-03",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "QmvdN2qkQCC",
        "name": "Change",
        "slug": "change",
        "quoteCount": 34,
        "dateAdded": "2022-03-12",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "vWfmIQt6k8c",
        "name": "Character",
        "slug": "character",
        "quoteCount": 17,
        "dateAdded": "2022-03-12",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "JaQwywHSk59",
        "name": "Competition",
        "slug": "competition",
        "quoteCount": 38,
        "dateAdded": "2022-07-06",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "AjxQFSPEylb",
        "name": "Conservative",
        "slug": "conservative",
        "quoteCount": 1,
        "dateAdded": "2022-03-12",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "Ipw2-EcInZg",
        "name": "Courage",
        "slug": "courage",
        "quoteCount": 2,
        "dateAdded": "2022-03-12",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "aLWQOIYpeMz",
        "name": "Creativity",
        "slug": "creativity",
        "quoteCount": 1,
        "dateAdded": "2023-04-14",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "kqzFRe-4V4",
        "name": "Education",
        "slug": "education",
        "quoteCount": 7,
        "dateAdded": "2019-03-17",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "jl_H9UVXhGb",
        "name": "Ethics",
        "slug": "ethics",
        "quoteCount": 1,
        "dateAdded": "2023-04-06",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "gElqvJIRz0h",
        "name": "Failure",
        "slug": "failure",
        "quoteCount": 1,
        "dateAdded": "2023-04-14",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "-7GEUrC5r",
        "name": "Faith",
        "slug": "faith",
        "quoteCount": 4,
        "dateAdded": "2019-09-13",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "r437PEqVZx5",
        "name": "Family",
        "slug": "family",
        "quoteCount": 2,
        "dateAdded": "2022-03-12",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "fvpORe-t",
        "name": "Famous Quotes",
        "slug": "famous-quotes",
        "quoteCount": 1090,
        "dateAdded": "2019-07-23",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "HJ05xaA6gN",
        "name": "Film",
        "slug": "film",
        "quoteCount": 13,
        "dateAdded": "2022-07-04",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "QuBdKRcjNsO",
        "name": "Freedom",
        "slug": "freedom",
        "quoteCount": 9,
        "dateAdded": "2022-03-12",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "krXU-q4FE",
        "name": "Friendship",
        "slug": "friendship",
        "quoteCount": 189,
        "dateAdded": "2019-03-15",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "OMnUd1CUg",
        "name": "Future",
        "slug": "future",
        "quoteCount": 21,
        "dateAdded": "2019-02-17",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "i_OFrgCiQ4",
        "name": "Generosity",
        "slug": "generosity",
        "quoteCount": 1,
        "dateAdded": "2023-04-14",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "L09SJrfjY8s",
        "name": "Genius",
        "slug": "genius",
        "quoteCount": 1,
        "dateAdded": "2023-04-14",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "S9OYJZlyu5",
        "name": "Gratitude",
        "slug": "gratitude",
        "quoteCount": 1,
        "dateAdded": "2023-04-14",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "k97A51Uf5",
        "name": "Happiness",
        "slug": "happiness",
        "quoteCount": 18,
        "dateAdded": "2019-06-27",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "kv9zk8WIqaq",
        "name": "Health",
        "slug": "health",
        "quoteCount": 1,
        "dateAdded": "2023-04-14",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "KBWnDu4rH",
        "name": "History",
        "slug": "history",
        "quoteCount": 18,
        "dateAdded": "2021-01-30",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "uCLiEwnwh",
        "name": "Honor",
        "slug": "honor",
        "quoteCount": 6,
        "dateAdded": "2022-07-04",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "uki-krBKTB_",
        "name": "Humor",
        "slug": "humor",
        "quoteCount": 0,
        "dateAdded": "2022-03-12",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "HJp_e1usX",
        "name": "Humorous",
        "slug": "humorous",
        "quoteCount": 17,
        "dateAdded": "2022-07-08",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "eghR-r-OzL9",
        "name": "Imagination",
        "slug": "imagination",
        "quoteCount": 2,
        "dateAdded": "2023-04-06",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "JCMoLDds9",
        "name": "Inspirational",
        "slug": "inspirational",
        "quoteCount": 89,
        "dateAdded": "2020-01-27",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "v9QUFHDZPT3",
        "name": "Knowledge",
        "slug": "knowledge",
        "quoteCount": 3,
        "dateAdded": "2023-04-06",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "V60a195td",
        "name": "Leadership",
        "slug": "leadership",
        "quoteCount": 1,
        "dateAdded": "2022-07-04",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "poT-7QEBm",
        "name": "Life",
        "slug": "life",
        "quoteCount": 42,
        "dateAdded": "2020-09-09",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "3n-gucf_OB",
        "name": "Literature",
        "slug": "literature",
        "quoteCount": 1,
        "dateAdded": "2020-03-01",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "rnrd8q9X1",
        "name": "Love",
        "slug": "love",
        "quoteCount": 20,
        "dateAdded": "2020-02-27",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "s19tg5r8EM-",
        "name": "Mathematics",
        "slug": "mathematics",
        "quoteCount": 1,
        "dateAdded": "2023-04-06",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "CaE-vzeOZb",
        "name": "Motivational",
        "slug": "motivational",
        "quoteCount": 32,
        "dateAdded": "2022-07-04",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "vmVZQ72P_",
        "name": "Nature",
        "slug": "nature",
        "quoteCount": 2,
        "dateAdded": "2020-12-10",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "pnLPcXTs_S",
        "name": "Opportunity",
        "slug": "opportunity",
        "quoteCount": 1,
        "dateAdded": "2023-04-14",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "q8kOLaefsZM",
        "name": "Pain",
        "slug": "pain",
        "quoteCount": 1,
        "dateAdded": "2022-03-12",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "GaQEsvfbYYd",
        "name": "Perseverance",
        "slug": "perseverance",
        "quoteCount": 2,
        "dateAdded": "2023-04-14",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "mh6HEhK_T_a",
        "name": "Philosophy",
        "slug": "philosophy",
        "quoteCount": 16,
        "dateAdded": "2022-03-12",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "96NNdxeI_",
        "name": "Politics",
        "slug": "politics",
        "quoteCount": 15,
        "dateAdded": "2020-04-02",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "MbsuUl67N3",
        "name": "Power Quotes",
        "slug": "power-quotes",
        "quoteCount": 2,
        "dateAdded": "2022-07-04",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "p5xRCWCdU",
        "name": "Proverb",
        "slug": "proverb",
        "quoteCount": 0,
        "dateAdded": "2021-02-12",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "tWLCsyf_K",
        "name": "Religion",
        "slug": "religion",
        "quoteCount": 6,
        "dateAdded": "2020-01-12",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "dm15bka7Qc",
        "name": "Sadness",
        "slug": "sadness",
        "quoteCount": 1,
        "dateAdded": "2023-04-14",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "qO4zwIUdFW",
        "name": "Science",
        "slug": "science",
        "quoteCount": 14,
        "dateAdded": "2020-01-26",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "5wvH2mbETdq",
        "name": "Self",
        "slug": "self",
        "quoteCount": 6,
        "dateAdded": "2022-03-12",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "IJsMcEupo4",
        "name": "Self Help",
        "slug": "self-help",
        "quoteCount": 6,
        "dateAdded": "2022-07-04",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "-WCNo8uFORU",
        "name": "Social Justice",
        "slug": "social-justice",
        "quoteCount": 3,
        "dateAdded": "2022-03-12",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "eD6qAIcDR8s",
        "name": "Society",
        "slug": "society",
        "quoteCount": 1,
        "dateAdded": "2023-04-06",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "DNZ4IdtHiFG",
        "name": "Spirituality",
        "slug": "spirituality",
        "quoteCount": 4,
        "dateAdded": "2022-03-12",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "EKV8W1TN-wb",
        "name": "Sports",
        "slug": "sports",
        "quoteCount": 43,
        "dateAdded": "2022-07-06",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "kZei477Cojv",
        "name": "Stupidity",
        "slug": "stupidity",
        "quoteCount": 1,
        "dateAdded": "2023-04-06",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "wm1HFcO8vf",
        "name": "Success",
        "slug": "success",
        "quoteCount": 82,
        "dateAdded": "2020-10-14",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "Gq75KBrfb",
        "name": "Technology",
        "slug": "technology",
        "quoteCount": 50,
        "dateAdded": "2020-01-27",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "LzQ9iXOoZw_",
        "name": "Time",
        "slug": "time",
        "quoteCount": 1,
        "dateAdded": "2022-03-12",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "o7BP9_4e2lL",
        "name": "Tolerance",
        "slug": "tolerance",
        "quoteCount": 1,
        "dateAdded": "2023-04-06",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "B1O_IThWjSP",
        "name": "Truth",
        "slug": "truth",
        "quoteCount": 7,
        "dateAdded": "2022-03-12",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "bsT8Bb9sxB",
        "name": "Virtue",
        "slug": "virtue",
        "quoteCount": 10,
        "dateAdded": "2022-07-04",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "olEL606Ju49",
        "name": "War",
        "slug": "war",
        "quoteCount": 3,
        "dateAdded": "2022-03-12",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "AN2qILFNzW",
        "name": "Weakness",
        "slug": "weakness",
        "quoteCount": 1,
        "dateAdded": "2023-04-14",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "5j5s-YkHAr_",
        "name": "Wellness",
        "slug": "wellness",
        "quoteCount": 1,
        "dateAdded": "2023-04-14",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "6J1qxxuj3",
        "name": "Wisdom",
        "slug": "wisdom",
        "quoteCount": 550,
        "dateAdded": "2019-10-18",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "Y3mg6WH7Qv1",
        "name": "Work",
        "slug": "work",
        "quoteCount": 3,
        "dateAdded": "2023-04-14",
        "dateModified": "2023-04-14"
    },
    {
        "_id": "NLC25zc7-m5",
        "name": "Work",
        "slug": "work",
        "quoteCount": 3,
        "dateAdded": "2023-04-14",
        "dateModified": "2023-04-14"
=======
    console.log("fetchtags: " ,data);
    

    for (dataPoint of data) {
        tagList.push(dataPoint.slug);
>>>>>>> f025ba4d7d4d5639d648b49fa835f1e2024bd068
    }

  });


  return tagList;
    //taglist is a result of the type array, containing an array of objects which 
    //can act like a genre search in relation to books from https://api.quotable.io"
    
}
//console.log(fetchTags());


//https://openlibrary.org/subjects/love.json
//authors funciton, it returns an array of authors in a particular genre
//authorlist is a result of the type array, containing an array of objects which 
//represent a book per opbject in the .results object of the data returned. https://api.quotable.io"
///search/authors?query=Einstein

function fetchAuthors(tag) {
<<<<<<< HEAD

    params = AUTHORS_ENDPOINT; //option to add parameters
    fetchUrl = `${QUOTES_URL}${params}?limit=${LIMIT}`;

=======
    //tag ags like a genre here, so that below in the params string we create a {tag}
    //to filter the results to a genres
    
    const limit = 150;
    params = `${tag}.json?limit=${limit}&page=1`; //option to add parameters
    
    fetchUrl = `${OPEN_LIBRARY_AUTHOR_URL}/${params}`
    
    console.log("fetch authours url: ",fetchUrl);
    let authorList = [];
 
    console.log("url: ",fetchUrl);
>>>>>>> f025ba4d7d4d5639d648b49fa835f1e2024bd068
    fetch(fetchUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
<<<<<<< HEAD
        console.log(data.results);
    });
=======
        console.log("key",data.works[2].key)
        console.log("title", data.works[2].title)
     
        //console.log(data.works);
>>>>>>> f025ba4d7d4d5639d648b49fa835f1e2024bd068

        for (dataPoint of data.works) {
            authorList.push([dataPoint.authors[0].name,dataPoint.authors[0].key]);
        }
        
    })
    .then(function (data){
        
        return authorList;

    })
        
    };


//console.log(fetchAuthors("science"));
    


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
<<<<<<< HEAD
        console.log(data.results);
    });

    const quotesList = [
        {
            "_id": "qF9iB6wrCQ",
            "author": "Charles Dickens",
            "content": "Subdue your appetites, my dears, and you've conquered human nature.",
            "tags": [],
            "authorSlug": "charles-dickens",
            "length": 67,
            "dateAdded": "2023-04-14",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "as0ElEk5g7",
            "author": "Charles Dickens",
            "content": "No one is useless in this world who lightens the burdens of another.",
            "tags": [
                "Generosity"
            ],
            "authorSlug": "charles-dickens",
            "length": 68,
            "dateAdded": "2023-04-14",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "niVz2fQWSH",
            "author": "Thomas Edison",
            "content": "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
            "tags": [
                "Opportunity",
                "Work"
            ],
            "authorSlug": "thomas-edison",
            "length": 91,
            "dateAdded": "2023-04-14",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "An5NAXPrbN",
            "author": "Thomas Edison",
            "content": "Hell, there are no rules here-- we're trying to accomplish something.",
            "tags": [],
            "authorSlug": "thomas-edison",
            "length": 69,
            "dateAdded": "2023-04-14",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "XtZMaD2s28",
            "author": "Thomas Edison",
            "content": "If we all did the things we are capable of doing, we would literally astound ourselves.",
            "tags": [
                "Inspirational",
                "Motivational"
            ],
            "authorSlug": "thomas-edison",
            "length": 87,
            "dateAdded": "2023-04-14",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "iK-202u02W",
            "author": "Thomas Edison",
            "content": "Genius is one per cent inspiration, ninety-nine per cent perspiration.",
            "tags": [
                "Work",
                "Genius",
                "Inspirational",
                "Motivational"
            ],
            "authorSlug": "thomas-edison",
            "length": 70,
            "dateAdded": "2023-04-14",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "j7W6pP1XiG",
            "author": "Charles Dickens",
            "content": "Train up a fig tree in the way it should go, and when you are old sit under the shade of it.",
            "tags": [
                "Age",
                "Wisdom"
            ],
            "authorSlug": "charles-dickens",
            "length": 92,
            "dateAdded": "2023-04-14",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "RTYhCs5Ka",
            "author": "Charles Dickens",
            "content": "I do not know the American gentleman, god forgive me for putting two such words together.",
            "tags": [
                "Humorous"
            ],
            "authorSlug": "charles-dickens",
            "length": 89,
            "dateAdded": "2023-04-14",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "KMTJ0Ya3e9",
            "author": "Thomas Edison",
            "content": "To invent, you need a good imagination and a pile of junk.",
            "tags": [
                "Imagination",
                "Creativity",
                "Science",
                "Technology"
            ],
            "authorSlug": "thomas-edison",
            "length": 58,
            "dateAdded": "2023-04-14",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "EXXaEturCF",
            "author": "Thomas Edison",
            "content": "If I find 10,000 ways something won't work, I haven't failed. I am not discouraged, because every wrong attempt discarded is another step forward.",
            "tags": [
                "Perseverance",
                "Success",
                "Inspirational",
                "Motivational"
            ],
            "authorSlug": "thomas-edison",
            "length": 146,
            "dateAdded": "2023-04-14",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "_92j6kAvwd",
            "author": "Thomas Edison",
            "content": "I never did a day's work in my life.  It was all fun.",
            "tags": [
                "Humorous"
            ],
            "authorSlug": "thomas-edison",
            "length": 53,
            "dateAdded": "2023-04-14",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "jQHjwwHpLN",
            "author": "Thomas Edison",
            "content": "Results! Why, man, I have gotten a lot of results. I know several thousand things that won't work.",
            "tags": [
                "Success",
                "Failure",
                "Perseverance"
            ],
            "authorSlug": "thomas-edison",
            "length": 98,
            "dateAdded": "2023-04-14",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "_EC8bhSDQa",
            "author": "Charles Dickens",
            "content": "Minds, like bodies, will often fall into a pimpled, ill-conditioned state from mere excess of comfort.",
            "tags": [
                "Weakness"
            ],
            "authorSlug": "charles-dickens",
            "length": 102,
            "dateAdded": "2023-04-14",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "ijc0sPlYFd",
            "author": "Thomas Edison",
            "content": "The doctor of the future will give no medicine, but will interest her or his patients in the care of the human frame, in a proper diet, and in the cause and prevention of disease.",
            "tags": [
                "Health",
                "Wellness"
            ],
            "authorSlug": "thomas-edison",
            "length": 179,
            "dateAdded": "2023-04-14",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "BzfxvRlA2Y",
            "author": "Thomas Edison",
            "content": "We don't know a millionth of one percent about anything.",
            "tags": [
                "Knowledge"
            ],
            "authorSlug": "thomas-edison",
            "length": 56,
            "dateAdded": "2023-04-14",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "ghVnmSpeAo",
            "author": "Thomas Edison",
            "content": "Everything comes to him who hustles while he waits.",
            "tags": [
                "Success",
                "Motivational"
            ],
            "authorSlug": "thomas-edison",
            "length": 51,
            "dateAdded": "2023-04-14",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "R1DmP1kYtW",
            "author": "Charles Dickens",
            "content": "Reflect on your present blessings, of which every man has many; not on your past misfortunes, of which all men have some.",
            "tags": [
                "Gratitude"
            ],
            "authorSlug": "charles-dickens",
            "length": 121,
            "dateAdded": "2023-04-14",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "bZIw7gy0sR",
            "author": "Thomas Edison",
            "content": "I never did anything worth doing by accident, nor did any of my inventions come by accident",
            "tags": [
                "Success",
                "Science"
            ],
            "authorSlug": "thomas-edison",
            "length": 91,
            "dateAdded": "2023-04-14",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "RKl9iZrjfP",
            "author": "Charles Dickens",
            "content": "We need never be ashamed of our tears.",
            "tags": [
                "Sadness"
            ],
            "authorSlug": "charles-dickens",
            "length": 38,
            "dateAdded": "2023-04-14",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "bfNpGC2NI",
            "author": "Thomas Edison",
            "content": "As a cure for worrying, work is better than whisky.",
            "tags": [
                "Humorous"
            ],
            "authorSlug": "thomas-edison",
            "length": 51,
            "dateAdded": "2023-04-14",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "QfeIDluRi_",
            "author": "Thomas Edison",
            "content": "There is no expedient to which a man will not go to avoid the labor of thinking.",
            "tags": [
                "Work"
            ],
            "authorSlug": "thomas-edison",
            "length": 80,
            "dateAdded": "2023-04-14",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "btV2j1uf2t",
            "author": "Thomas Edison",
            "content": "Faith, as well intentioned as it may be, must be built on facts, not fiction--faith in fiction is a damnable false hope.",
            "tags": [
                "Religion"
            ],
            "authorSlug": "thomas-edison",
            "length": 120,
            "dateAdded": "2023-04-14",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "fC5Jr2NsYm",
            "author": "Albert Einstein",
            "content": "Gravitation cannot be held responsible for people falling in love. How on earth can you explain in terms of chemistry and physics so important a biological phenomenon as first love? Put your hand on a stove for a minute and it seems like an hour. Sit with that special girl for an hour and it seems like a minute. That's relativity.",
            "tags": [
                "Love",
                "Science"
            ],
            "authorSlug": "albert-einstein",
            "length": 332,
            "dateAdded": "2023-04-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "2qpi1ZKL9Ko",
            "author": "Albert Einstein",
            "content": "Perfection of means and confusion of ends seems to characterize our age.",
            "tags": [
                "Humorous"
            ],
            "authorSlug": "albert-einstein",
            "length": 72,
            "dateAdded": "2023-04-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "mqbH2SBrIS",
            "author": "Albert Einstein",
            "content": "I know not with what weapons World War III will be fought, but World War IV will be fought with sticks and stones.",
            "tags": [
                "History",
                "War"
            ],
            "authorSlug": "albert-einstein",
            "length": 114,
            "dateAdded": "2023-04-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "mg8F-nsmPEj",
            "author": "Albert Einstein",
            "content": "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.",
            "tags": [
                "Stupidity"
            ],
            "authorSlug": "albert-einstein",
            "length": 98,
            "dateAdded": "2023-04-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "8WhYatXQzF",
            "author": "Albert Einstein",
            "content": "If I had only known, I would have been a locksmith.",
            "tags": [
                "Humorous"
            ],
            "authorSlug": "albert-einstein",
            "length": 51,
            "dateAdded": "2023-04-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "4FLFmHaK7-",
            "author": "Albert Einstein",
            "content": "It is the supreme art of the teacher to awaken joy in creative expression and knowledge.",
            "tags": [
                "Knowledge",
                "Education"
            ],
            "authorSlug": "albert-einstein",
            "length": 88,
            "dateAdded": "2023-04-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "xWusiklxiy",
            "author": "Albert Einstein",
            "content": "Do not worry about your difficulties in Mathematics. I can assure you mine are still greater.",
            "tags": [
                "Mathematics",
                "Education",
                "Science"
            ],
            "authorSlug": "albert-einstein",
            "length": 93,
            "dateAdded": "2023-04-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "vbvqg3V6j8",
            "author": "Albert Einstein",
            "content": "It is a miracle that curiosity survives formal education.",
            "tags": [
                "Education"
            ],
            "authorSlug": "albert-einstein",
            "length": 57,
            "dateAdded": "2023-04-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "iCcQwfTUU3",
            "author": "Albert Einstein",
            "content": "Laws alone can not secure freedom of expression; in order that every man present his views without penalty there must be spirit of tolerance in the entire population.",
            "tags": [
                "Freedom",
                "Tolerance"
            ],
            "authorSlug": "albert-einstein",
            "length": 166,
            "dateAdded": "2023-04-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "EG9yQpz6Ku",
            "author": "Albert Einstein",
            "content": "Few people are capable of expressing with equanimity opinions which differ from the prejudices of their social environment. Most people are even incapable of forming such opinions.",
            "tags": [
                "Society"
            ],
            "authorSlug": "albert-einstein",
            "length": 180,
            "dateAdded": "2023-04-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "cOuSBYiscf",
            "author": "Albert Einstein",
            "content": "I never think of the future - it comes soon enough.",
            "tags": [
                "Future"
            ],
            "authorSlug": "albert-einstein",
            "length": 51,
            "dateAdded": "2023-04-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "dCBRnkMsW",
            "author": "Albert Einstein",
            "content": "Before God we are all equally wise - and equally foolish.",
            "tags": [
                "Religion"
            ],
            "authorSlug": "albert-einstein",
            "length": 57,
            "dateAdded": "2023-04-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "8Oj6iwQ1xp",
            "author": "Albert Einstein",
            "content": "Ethical axioms are found and tested not very differently from the axioms of science. Truth is what stands the test of experience.",
            "tags": [
                "Education",
                "Science",
                "Ethics"
            ],
            "authorSlug": "albert-einstein",
            "length": 129,
            "dateAdded": "2023-04-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "inED6huctY",
            "author": "Albert Einstein",
            "content": "If you are out to describe the truth, leave elegance to the tailor.",
            "tags": [
                "Truth"
            ],
            "authorSlug": "albert-einstein",
            "length": 67,
            "dateAdded": "2023-04-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "ostJK0TXUf",
            "author": "Albert Einstein",
            "content": "Imagination is more important than knowledge...",
            "tags": [
                "Imagination",
                "Knowledge"
            ],
            "authorSlug": "albert-einstein",
            "length": 47,
            "dateAdded": "2023-04-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "aQSSYBocy9",
            "author": "Albert Einstein",
            "content": "Every day I remind myself that my inner and outer life are based on the labors of other men, living and dead, and that I must exert myself in order to give in the same measure as I have received and am still receiving.",
            "tags": [
                "History",
                "Science"
            ],
            "authorSlug": "albert-einstein",
            "length": 218,
            "dateAdded": "2023-04-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "Y1Zo7z8BPJ",
            "author": "Albert Einstein",
            "content": "My religion consists of a humble admiration of the illimitable superior spirit who reveals himself in the slight details we are able to perceive with our frail and feeble mind.",
            "tags": [
                "Religion"
            ],
            "authorSlug": "albert-einstein",
            "length": 176,
            "dateAdded": "2023-04-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "wFrlCzqagir",
            "author": "Albert Einstein",
            "content": "The ideals which have lighted my way, and time after time have given me new courage to face life cheerfully, have been Kindness, Beauty, and Truth. The trite subjects of human efforts, possessions, outward success, luxury have always seemed to me contemptible.",
            "tags": [
                "Success"
            ],
            "authorSlug": "albert-einstein",
            "length": 260,
            "dateAdded": "2023-04-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "2ts3DrACVY",
            "author": "Albert Einstein",
            "content": "I never teach my pupils. I only attempt to provide the conditions in which they can learn.",
            "tags": [
                "Education",
                "Science"
            ],
            "authorSlug": "albert-einstein",
            "length": 90,
            "dateAdded": "2023-04-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "b437W9Z_RN_",
            "author": "Albert Einstein",
            "content": "Reading, after a certain age, diverts the mind too much from its creative pursuits. Any man who reads too much and uses his own brain too little falls into lazy habits of thinking.",
            "tags": [
                "Education"
            ],
            "authorSlug": "albert-einstein",
            "length": 180,
            "dateAdded": "2023-04-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "rtTuQXyDh",
            "author": "Warren Buffett",
            "content": "I don't look to jump over 7-foot bars; I look around for 1-foot bars that I can step over.",
            "tags": [],
            "authorSlug": "warren-buffett",
            "length": 90,
            "dateAdded": "2023-04-03",
            "dateModified": "2023-04-03"
        },
        {
            "_id": "de2uy5VnrA",
            "author": "Warren Buffett",
            "content": "If you have a harem of 40 women, you never get to know any of them very well.",
            "tags": [],
            "authorSlug": "warren-buffett",
            "length": 77,
            "dateAdded": "2023-04-03",
            "dateModified": "2023-04-03"
        },
        {
            "_id": "PlqVkGcCIp",
            "author": "Aesop",
            "content": "Beware lest you lose the substance by grasping at the shadow.",
            "tags": [
                "Wisdom",
                "Philosophy"
            ],
            "authorSlug": "aesop",
            "length": 61,
            "dateAdded": "2023-04-03",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "kZt2i_QU_-",
            "author": "Aesop",
            "content": "The smaller the mind the greater the conceit.",
            "tags": [],
            "authorSlug": "aesop",
            "length": 45,
            "dateAdded": "2023-04-03",
            "dateModified": "2023-04-03"
        },
        {
            "_id": "6S4ONaVMZU",
            "author": "Aesop",
            "content": "Be content with your lot; one cannot be first in everything.",
            "tags": [
                "Wisdom"
            ],
            "authorSlug": "aesop",
            "length": 60,
            "dateAdded": "2023-04-03",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "w4WpYMr4Kw",
            "author": "Warren Buffett",
            "content": "Price is what you pay. Value is what you get.",
            "tags": [],
            "authorSlug": "warren-buffett",
            "length": 45,
            "dateAdded": "2023-04-03",
            "dateModified": "2023-04-03"
        },
        {
            "_id": "t5-eBEIfiB",
            "author": "Aesop",
            "content": "Persuasion is often more effectual than force.",
            "tags": [
                "Wisdom"
            ],
            "authorSlug": "aesop",
            "length": 46,
            "dateAdded": "2023-04-03",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "sR7TlnhbaS",
            "author": "Aesop",
            "content": "Injuries may be forgiven, but not forgotten.",
            "tags": [
                "Wisdom"
            ],
            "authorSlug": "aesop",
            "length": 44,
            "dateAdded": "2023-04-03",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "483LDToxFU",
            "author": "Warren Buffett",
            "content": "The only time to buy these is on a day with no 'y' in it.",
            "tags": [],
            "authorSlug": "warren-buffett",
            "length": 57,
            "dateAdded": "2023-04-03",
            "dateModified": "2023-04-03"
        },
        {
            "_id": "v1UpJ92Plf",
            "author": "Warren Buffett",
            "content": "Most people get interested in stocks when everyone else is. The time to get interested is when no one else is. You can't buy what is popular and do well.",
            "tags": [],
            "authorSlug": "warren-buffett",
            "length": 153,
            "dateAdded": "2023-04-03",
            "dateModified": "2023-04-03"
        },
        {
            "_id": "Y93446BoHU",
            "author": "Warren Buffett",
            "content": "I won't close down a business of subnormal profitability merely to add a fraction of a point to our corporate returns. I also feel it inappropriate for even an exceptionally profitable company to fund an operation once it appears to have unending losses in prospect. Adam Smith would disagree with my first proposition and Karl Marx would disagree with my second; the middle ground is the only position that leaves me comfortable.",
            "tags": [],
            "authorSlug": "warren-buffett",
            "length": 430,
            "dateAdded": "2023-04-03",
            "dateModified": "2023-04-03"
        },
        {
            "_id": "Sk4PFT-76M",
            "author": "Warren Buffett",
            "content": "In the business world, the rearview mirror is always clearer than the windshield.",
            "tags": [],
            "authorSlug": "warren-buffett",
            "length": 81,
            "dateAdded": "2023-04-03",
            "dateModified": "2023-04-03"
        },
        {
            "_id": "Ykg69dlT1z",
            "author": "Warren Buffett",
            "content": "It's only when the tide goes out that you discover who's been swimming naked.",
            "tags": [],
            "authorSlug": "warren-buffett",
            "length": 77,
            "dateAdded": "2023-04-03",
            "dateModified": "2023-04-03"
        },
        {
            "_id": "RGw_9OPsR_",
            "author": "Aesop",
            "content": "It is easy to be brave from a safe distance.",
            "tags": [
                "Wisdom"
            ],
            "authorSlug": "aesop",
            "length": 44,
            "dateAdded": "2023-04-03",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "5S-INJNFCI",
            "author": "Aesop",
            "content": "It is with our passions, as it is with fire and water, they are good servants but bad masters.",
            "tags": [
                "Wisdom",
                "Love"
            ],
            "authorSlug": "aesop",
            "length": 94,
            "dateAdded": "2023-04-03",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "uV8RyeIRf",
            "author": "Aesop",
            "content": "Better be wise by the misfortunes of others than by your own.",
            "tags": [
                "Wisdom",
                "Philosophy"
            ],
            "authorSlug": "aesop",
            "length": 61,
            "dateAdded": "2023-04-03",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "V4L_CRgfaZ",
            "author": "Warren Buffett",
            "content": "I violated the Noah rule: Predicting rain doesn't count; building arks does.",
            "tags": [],
            "authorSlug": "warren-buffett",
            "length": 76,
            "dateAdded": "2023-04-03",
            "dateModified": "2023-04-03"
        },
        {
            "_id": "6LX3h3UamO5",
            "author": "The Buddha",
            "content": "Should a person do good, let him do it again and again. Let him find pleasure therein, for blissful is the accumulation of good.",
            "tags": [
                "Wisdom",
                "Character"
            ],
            "authorSlug": "the-buddha",
            "length": 128,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "vvI7HzgTSh_",
            "author": "The Buddha",
            "content": "'As I am, so are these. As are these, so am I.' Drawing the parallel to yourself, neither kill nor get others to kill.",
            "tags": [
                "Wisdom",
                "Virtue",
                "Honor"
            ],
            "authorSlug": "the-buddha",
            "length": 118,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "82ovA4JWpM",
            "author": "The Buddha",
            "content": "Purity and impurity depend on oneself; no one can purify another.",
            "tags": [
                "Wisdom",
                "Self",
                "Self Help"
            ],
            "authorSlug": "the-buddha",
            "length": 65,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "sT905eIjh2n",
            "author": "The Buddha",
            "content": "Ceasing to do evil, Cultivating the good, Purifying the heart: This is the teaching of the Buddhas.",
            "tags": [
                "Wisdom",
                "Virtue"
            ],
            "authorSlug": "the-buddha",
            "length": 99,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "Gl_8IjYm3ny",
            "author": "The Buddha",
            "content": "It's a good thing to be satisfied with what one has.",
            "tags": [
                "Wisdom",
                "Self Help"
            ],
            "authorSlug": "the-buddha",
            "length": 52,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "3_QolF6N53C",
            "author": "The Buddha",
            "content": "If a man going down into a river, swollen and swiftly flowing, is carried away by the current — how can he help others across? – The Buddha",
            "tags": [
                "Wisdom"
            ],
            "authorSlug": "the-buddha",
            "length": 139,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "0Lp0Xv7xP2D",
            "author": "The Buddha",
            "content": "You yourself must strive. The Buddhas only point the way.",
            "tags": [
                "Wisdom",
                "Motivational"
            ],
            "authorSlug": "the-buddha",
            "length": 57,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "XrFIHIebkEW",
            "author": "The Buddha",
            "content": "As a water bead on a lotus leaf, as water on a red lily, does not adhere, so the sage does not adhere to the seen, the heard, or the sensed.",
            "tags": [
                "Wisdom",
                "Philosophy"
            ],
            "authorSlug": "the-buddha",
            "length": 140,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "-3IqRLv81t-",
            "author": "The Buddha",
            "content": "One is not called noble who harms living beings. By not harming living beings one is called noble.",
            "tags": [
                "Wisdom",
                "Virtue"
            ],
            "authorSlug": "the-buddha",
            "length": 98,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "n7QR1DkeA4V",
            "author": "The Buddha",
            "content": "All tremble at violence; all fear death. Putting oneself in the place of another, one should not kill nor cause another to kill.",
            "tags": [
                "Wisdom",
                "Virtue",
                "Honor"
            ],
            "authorSlug": "the-buddha",
            "length": 128,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "6_rYXTe8c4S",
            "author": "The Buddha",
            "content": "May all beings have happy minds.",
            "tags": [
                "Wisdom",
                "Happiness"
            ],
            "authorSlug": "the-buddha",
            "length": 32,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "K67NZgh4Zr0",
            "author": "The Buddha",
            "content": "Speak only endearing speech, speech that is welcomed. Speech, when it brings no evil to others, is a pleasant thing.",
            "tags": [
                "Wisdom",
                "Virtue",
                "Honor"
            ],
            "authorSlug": "the-buddha",
            "length": 116,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "HhQM5yo-IxF",
            "author": "The Buddha",
            "content": "Just as a solid rock is not shaken by the storm, even so the wise are not affected by praise or blame.",
            "tags": [
                "Wisdom",
                "Character"
            ],
            "authorSlug": "the-buddha",
            "length": 102,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "sD1d2QmwBJA",
            "author": "The Buddha",
            "content": "There is no fear for one whose mind is not filled with desires.",
            "tags": [
                "Wisdom",
                "Philosophy"
            ],
            "authorSlug": "the-buddha",
            "length": 63,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "qLn3nRwjVsb",
            "author": "The Buddha",
            "content": "Know from the rivers in clefts and in crevices: those in small channels flow noisily, the great flow silent. Whatever's not full makes noise. Whatever is full is quiet.",
            "tags": [
                "Wisdom",
                "Character"
            ],
            "authorSlug": "the-buddha",
            "length": 168,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "eOGgo5Kj2tu",
            "author": "The Buddha",
            "content": "When watching after yourself, you watch after others. When watching after others, you watch after yourself.",
            "tags": [
                "Wisdom"
            ],
            "authorSlug": "the-buddha",
            "length": 107,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "YLwAq4ekdr",
            "author": "The Buddha",
            "content": "If with a pure mind a person speaks or acts, happiness follows them like a never-departing shadow.",
            "tags": [
                "Wisdom",
                "Happiness"
            ],
            "authorSlug": "the-buddha",
            "length": 98,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "aS2JIspazSE",
            "author": "The Buddha",
            "content": "They blame those who remain silent, they blame those who speak much, they blame those who speak in moderation. There is none in the world who is not blamed.",
            "tags": [
                "Wisdom"
            ],
            "authorSlug": "the-buddha",
            "length": 156,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "E7Pt4hWgrH",
            "author": "The Buddha",
            "content": "All experiences are preceded by mind, having mind as their master, created by mind.",
            "tags": [
                "Wisdom",
                "Self"
            ],
            "authorSlug": "the-buddha",
            "length": 83,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "bejpH5vesL0",
            "author": "The Buddha",
            "content": "Better than a thousand useless words is one useful word, upon hearing which one attains peace.",
            "tags": [
                "Wisdom",
                "Character"
            ],
            "authorSlug": "the-buddha",
            "length": 94,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "Gljrsvf8-hQ",
            "author": "The Buddha",
            "content": "Those who cling to perceptions and views wander the world offending people.",
            "tags": [
                "Wisdom"
            ],
            "authorSlug": "the-buddha",
            "length": 75,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "LXc7FXl9o2g",
            "author": "The Buddha",
            "content": "Whoever doesn't flare up at someone who's angry wins a battle hard to win.",
            "tags": [
                "Wisdom",
                "Character"
            ],
            "authorSlug": "the-buddha",
            "length": 74,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "WnJz7QKVKzI",
            "author": "The Buddha",
            "content": "The root of suffering is attachment.",
            "tags": [
                "Wisdom",
                "Happiness"
            ],
            "authorSlug": "the-buddha",
            "length": 36,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "BTLWEHRB2C-",
            "author": "The Buddha",
            "content": "Should someone do good, let them do it again and again. They should develop this habit, for the accumulation of goodness brings joy.",
            "tags": [
                "Wisdom",
                "Motivational"
            ],
            "authorSlug": "the-buddha",
            "length": 132,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "ExEfYwFimnJ",
            "author": "The Buddha",
            "content": "Better it is to live one day seeing the rise and fall of things than to live a hundred years without ever seeing the rise and fall of things.",
            "tags": [
                "Wisdom",
                "Philosophy"
            ],
            "authorSlug": "the-buddha",
            "length": 141,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "9sgo4-hjyyq",
            "author": "The Buddha",
            "content": "Radiate boundless love towards the entire world — above, below, and across — unhindered, without ill will, without enmity.",
            "tags": [
                "Wisdom",
                "Love"
            ],
            "authorSlug": "the-buddha",
            "length": 122,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "QLFvxnERU8M",
            "author": "The Buddha",
            "content": "Radiate boundless love towards the entire world…",
            "tags": [
                "Wisdom",
                "Love"
            ],
            "authorSlug": "the-buddha",
            "length": 48,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "4g-MIkyfFg9",
            "author": "The Buddha",
            "content": "Should a seeker not find a companion who is better or equal, let them resolutely pursue a solitary course.",
            "tags": [
                "Wisdom",
                "Philosophy"
            ],
            "authorSlug": "the-buddha",
            "length": 106,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "8rxNd1of_8I",
            "author": "The Buddha",
            "content": "Whatever has the nature of arising has the nature of ceasing.",
            "tags": [
                "Wisdom",
                "Philosophy"
            ],
            "authorSlug": "the-buddha",
            "length": 61,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "YeJpbyaNMs",
            "author": "The Buddha",
            "content": "Meditate … do not delay, lest you later regret it.",
            "tags": [
                "Wisdom",
                "Motivational"
            ],
            "authorSlug": "the-buddha",
            "length": 50,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "d4jauwhMpVA",
            "author": "The Buddha",
            "content": "Should you find a wise critic to point out your faults, follow him as you would a guide to hidden treasure.",
            "tags": [
                "Wisdom",
                "Wisdom"
            ],
            "authorSlug": "the-buddha",
            "length": 107,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "eC9gLWRKO-",
            "author": "The Buddha",
            "content": "I do not dispute with the world; rather it is the world that disputes with me.",
            "tags": [
                "Wisdom",
                "Philosophy"
            ],
            "authorSlug": "the-buddha",
            "length": 78,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "e0H2BdwC-Of",
            "author": "The Buddha",
            "content": "Whatever is not yours: let go of it. Your letting go of it will be for your long-term happiness & benefit.",
            "tags": [
                "Wisdom",
                "Happiness"
            ],
            "authorSlug": "the-buddha",
            "length": 106,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "UGjIXpUCPv",
            "author": "The Buddha",
            "content": "A noble one produces an abundance of merit by having a compassionate mind towards all living beings.",
            "tags": [
                "Wisdom",
                "Love"
            ],
            "authorSlug": "the-buddha",
            "length": 100,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "kFmm2Cv0V-",
            "author": "The Buddha",
            "content": "It is in the nature of things that joy arises in a person free from remorse.",
            "tags": [
                "Wisdom",
                "Happiness"
            ],
            "authorSlug": "the-buddha",
            "length": 76,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "rfJp893hM2Z",
            "author": "The Buddha",
            "content": "Some do not understand that we must die, But those who do realize this settle their quarrels.",
            "tags": [
                "Wisdom",
                "Life"
            ],
            "authorSlug": "the-buddha",
            "length": 93,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "M_J8mramwqX",
            "author": "The Buddha",
            "content": "Irrigators channel waters; fletchers straighten arrows; carpenters bend wood; the wise master themselves.",
            "tags": [
                "Wisdom",
                "Self Help",
                "Character"
            ],
            "authorSlug": "the-buddha",
            "length": 105,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "sLWD2qRCK4",
            "author": "The Buddha",
            "content": "Just as a mother would protect her only child with her life, even so let one cultivate a boundless love towards all beings.",
            "tags": [
                "Wisdom",
                "Love"
            ],
            "authorSlug": "the-buddha",
            "length": 123,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "7FWID1UNP8o",
            "author": "The Buddha",
            "content": "As an elephant in the battlefield withstands arrows shot from bows all around, even so shall I endure abuse.",
            "tags": [
                "Wisdom",
                "Character",
                "Courage"
            ],
            "authorSlug": "the-buddha",
            "length": 108,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "ESJFchb_5h4",
            "author": "The Buddha",
            "content": "The calmed say that what is well-spoken is best; second, that one should say what is right, not unrighteous; third, what's pleasing, not displeasing; fourth, what is true, not false.",
            "tags": [
                "Wisdom",
                "Truth"
            ],
            "authorSlug": "the-buddha",
            "length": 182,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "DtjcWlyBGv",
            "author": "The Buddha",
            "content": "Delight in heedfulness! Guard well your thoughts!",
            "tags": [
                "Wisdom",
                "Virtue"
            ],
            "authorSlug": "the-buddha",
            "length": 49,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "smbfaOldHD",
            "author": "The Buddha",
            "content": "A disciplined mind brings happiness.",
            "tags": [
                "Wisdom",
                "Happiness"
            ],
            "authorSlug": "the-buddha",
            "length": 36,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "0LLB8uuMXb",
            "author": "The Buddha",
            "content": "Ardently do today what must be done. Who knows? Tomorrow, death comes.",
            "tags": [
                "Wisdom",
                "Motivational"
            ],
            "authorSlug": "the-buddha",
            "length": 70,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "Zu5upLF-ANy",
            "author": "The Buddha",
            "content": "He who can curb his wrath as soon as it arises, as a timely antidote will check snake's venom that so quickly spreads, — such a monk gives up the here and the beyond, just as a serpent sheds its worn-out skin.",
            "tags": [
                "Wisdom",
                "Self Help"
            ],
            "authorSlug": "the-buddha",
            "length": 209,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "MPTVFOHP7ds",
            "author": "The Buddha",
            "content": "The world is afflicted by death and decay. But the wise do not grieve, having realized the nature of the world.",
            "tags": [
                "Wisdom",
                "Philosophy"
            ],
            "authorSlug": "the-buddha",
            "length": 111,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "0umC2Yk5UX",
            "author": "The Buddha",
            "content": "One should train in deeds of merit—generosity, a balanced life, developing a loving mind—that yield long-lasting happiness.",
            "tags": [
                "Wisdom",
                "Happiness"
            ],
            "authorSlug": "the-buddha",
            "length": 123,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "hcCn5sAnUO",
            "author": "The Buddha",
            "content": "Conquer anger with non-anger. Conquer badness with goodness. Conquer meanness with generosity. Conquer dishonesty with truth.",
            "tags": [
                "Wisdom",
                "Virtue",
                "Love"
            ],
            "authorSlug": "the-buddha",
            "length": 125,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "mS7GMRZeNuX",
            "author": "The Buddha",
            "content": "Let none find fault with others; let none see the omissions and commissions of others. But let one see one's own acts, done and undone.",
            "tags": [
                "Wisdom",
                "Honor"
            ],
            "authorSlug": "the-buddha",
            "length": 135,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "ALc5NjeAOu_",
            "author": "The Buddha",
            "content": "'All conditioned things are impermanent' — when one sees this with wisdom, one turns away from suffering.",
            "tags": [
                "Wisdom",
                "Philosophy"
            ],
            "authorSlug": "the-buddha",
            "length": 105,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "qvVLiNnyMsK",
            "author": "The Buddha",
            "content": "A mind unruffled by the vagaries of fortune, from sorrow freed, from defilements cleansed, from fear liberated — this is the greatest blessing.",
            "tags": [
                "Wisdom"
            ],
            "authorSlug": "the-buddha",
            "length": 143,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "alB5Kgdk_S",
            "author": "The Buddha",
            "content": "A wise person should be urgently moved on occasions that make for urgency.",
            "tags": [
                "Wisdom",
                "Motivational"
            ],
            "authorSlug": "the-buddha",
            "length": 74,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "wiVouCxUSmn",
            "author": "The Buddha",
            "content": "The thing that is disliked by me is also disliked by others. Since I dislike this thing, how can I inflict it on someone else?",
            "tags": [
                "Wisdom",
                "Philosophy",
                "Virtue",
                "Honor"
            ],
            "authorSlug": "the-buddha",
            "length": 126,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "fEr2kx4_Nvt",
            "author": "The Buddha",
            "content": "Hatred is never appeased by hatred in this world. By non-hatred alone is hatred appeased. This is a law eternal.",
            "tags": [
                "Wisdom",
                "Love"
            ],
            "authorSlug": "the-buddha",
            "length": 112,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "Q6ecn_qg0",
            "author": "The Buddha",
            "content": "'As I am, so are they; as they are, so am I.' Comparing others with oneself, do not kill nor cause others to kill.",
            "tags": [
                "Wisdom",
                "Virtue"
            ],
            "authorSlug": "the-buddha",
            "length": 114,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "gI4gnBANili",
            "author": "The Buddha",
            "content": "We will develop and cultivate the liberation of mind by lovingkindness, make it our vehicle, make it our basis, stabilize it, exercise ourselves in it, and fully perfect it.",
            "tags": [
                "Wisdom",
                "Love"
            ],
            "authorSlug": "the-buddha",
            "length": 173,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "FJHapZ0U5ii",
            "author": "The Buddha",
            "content": "Resolutely train yourself to attain peace.",
            "tags": [
                "Wisdom",
                "Self Help"
            ],
            "authorSlug": "the-buddha",
            "length": 42,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "e-U_kGn45jq",
            "author": "The Buddha",
            "content": "To support mother and father, to cherish partner and children, and to be engaged in peaceful occupation — this is the greatest blessing.",
            "tags": [
                "Wisdom",
                "Family"
            ],
            "authorSlug": "the-buddha",
            "length": 136,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "evSH-AgPIXv",
            "author": "The Buddha",
            "content": "Both formerly and now, it is only suffering that I describe, and the cessation of suffering.",
            "tags": [
                "Wisdom",
                "Happiness"
            ],
            "authorSlug": "the-buddha",
            "length": 92,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "1YkUWV_0wT",
            "author": "The Buddha",
            "content": "Give, even if you only have a little.",
            "tags": [
                "Wisdom"
            ],
            "authorSlug": "the-buddha",
            "length": 37,
            "dateAdded": "2023-03-30",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "0p8bgUAkaWj",
            "author": "Sandy Koufax",
            "content": "Pitching is the art of instilling fear.",
            "tags": [
                "Sports",
                "Competition"
            ],
            "authorSlug": "sandy-koufax",
            "length": 39,
            "dateAdded": "2022-07-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "lpxXplIA4ie",
            "author": "Yogi Berra",
            "content": "Half the lies they tell about me aren't true.",
            "tags": [
                "Sports",
                "Competition"
            ],
            "authorSlug": "yogi-berra",
            "length": 45,
            "dateAdded": "2022-07-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "-5LundE5jXD",
            "author": "Erma Bombeck",
            "content": "If a man watches three football games in a row, he should be declared legally dead.",
            "tags": [
                "Sports",
                "Humorous"
            ],
            "authorSlug": "erma-bombeck",
            "length": 83,
            "dateAdded": "2022-07-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "fwMKi2Q0Pk",
            "author": "Michael Phelps",
            "content": "You can't put a limit on anything. The more you dream, the farther you get.",
            "tags": [
                "Sports",
                "Competition"
            ],
            "authorSlug": "michael-phelps",
            "length": 75,
            "dateAdded": "2022-07-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "r7qJ-YKIq2e",
            "author": "Earl Monroe",
            "content": "Just be patient. Let the game come to you. Don't rush. Be quick, but don't hurry.",
            "tags": [
                "Sports",
                "Competition"
            ],
            "authorSlug": "earl-monroe",
            "length": 81,
            "dateAdded": "2022-07-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "-fGobZrnsR",
            "author": "Bobby Unser",
            "content": "Success is where preparation and opportunity meet.",
            "tags": [
                "Sports",
                "Competition"
            ],
            "authorSlug": "bobby-unser",
            "length": 50,
            "dateAdded": "2022-07-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "1gJ03696_R",
            "author": "Benjamin Disraeli",
            "content": "Never complain and never explain.",
            "tags": [
                "Motivational"
            ],
            "authorSlug": "benjamin-disraeli",
            "length": 33,
            "dateAdded": "2022-07-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "MsGmNTCtAXd",
            "author": "Mike Singletary (basketball)",
            "content": "Do you know what my favorite part of the game is? The opportunity to play.",
            "tags": [
                "Sports",
                "Competition"
            ],
            "authorSlug": "mike-singletary-basketball",
            "length": 74,
            "dateAdded": "2022-07-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "x-0qEVIZ66n",
            "author": "Eric Liddell",
            "content": "God made me fast. And when I run, I feel His pleasure.",
            "tags": [
                "Sports",
                "Competition"
            ],
            "authorSlug": "eric-liddell",
            "length": 54,
            "dateAdded": "2022-07-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "sBuAicwO4Z",
            "author": "Don Marquis",
            "content": "Ideas pull the trigger, but instinct loads the gun.",
            "tags": [
                "Business"
            ],
            "authorSlug": "don-marquis",
            "length": 51,
            "dateAdded": "2022-07-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "J471lzY_ZWf",
            "author": "Jim Bouton",
            "content": "You spend a good piece of your life gripping a baseball and in the end it turns out that it was the other way around all the time.",
            "tags": [
                "Sports",
                "Competition"
            ],
            "authorSlug": "jim-bouton",
            "length": 130,
            "dateAdded": "2022-07-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "l0LfTgApB3",
            "author": "Babe Ruth",
            "content": "The way a team plays as a whole determines its success. You may have the greatest bunch of individual stars in the world, but if they don't play together, the club won't be worth a dime.",
            "tags": [
                "Sports",
                "Competition"
            ],
            "authorSlug": "babe-ruth",
            "length": 186,
            "dateAdded": "2022-07-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "_rEPkuDXaWo",
            "author": "Casey Stengel",
            "content": "Finding good players is easy. Getting them to play as a team is another story.",
            "tags": [
                "Sports",
                "Competition"
            ],
            "authorSlug": "casey-stengel",
            "length": 78,
            "dateAdded": "2022-07-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "Gtt0T3mfPbx",
            "author": "Billie Jean King",
            "content": "Champions keep playing until they get it right.",
            "tags": [
                "Sports",
                "Competition"
            ],
            "authorSlug": "billie-jean-king",
            "length": 47,
            "dateAdded": "2022-07-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "Z1z6kZ2Qp8",
            "author": "Elon Musk",
            "content": "If you're trying to create a company, it's like baking a cake. You have to have all the ingredients in the right proportion.",
            "tags": [
                "Business"
            ],
            "authorSlug": "elon-musk",
            "length": 124,
            "dateAdded": "2022-07-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "eF07T22v0Te",
            "author": "P. G. Wodehouse",
            "content": "To find a man's true character, play golf with him.",
            "tags": [
                "Sports",
                "Competition"
            ],
            "authorSlug": "p-g-wodehouse",
            "length": 51,
            "dateAdded": "2022-07-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "VdDvOzQUZ3",
            "author": "Ken Venturi",
            "content": "I don't believe you have to be better than everybody else. I believe you have to be better than you ever thought you could be.",
            "tags": [
                "Motivational"
            ],
            "authorSlug": "ken-venturi",
            "length": 126,
            "dateAdded": "2022-07-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "MNoB9t3dfeS",
            "author": "Shaquille O'Neal",
            "content": "I'm tired of hearing about money, money, money, money, money. I just want to play the game, drink Pepsi, and wear Reebok.",
            "tags": [
                "Sports",
                "Humorous"
            ],
            "authorSlug": "shaquille-o-neal",
            "length": 121,
            "dateAdded": "2022-07-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "trKnEw-ZVY",
            "author": "Ralph Marston",
            "content": "What you do today can improve all your tomorrows.",
            "tags": [
                "Motivational"
            ],
            "authorSlug": "ralph-marston",
            "length": 49,
            "dateAdded": "2022-07-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "py0SqUMHGW9",
            "author": "Howard H. Aiken",
            "content": "Don't worry about people stealing your ideas. If your ideas are any good, you'll have to ram them down people's throats.",
            "tags": [
                "Business"
            ],
            "authorSlug": "howard-h-aiken",
            "length": 120,
            "dateAdded": "2022-07-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "gUYV-XJG60p",
            "author": "Woodrow Wilson",
            "content": "Golf is a game in which one endeavors to control a ball with implements ill adapted for the purpose.",
            "tags": [
                "Sports",
                "Competition"
            ],
            "authorSlug": "woodrow-wilson",
            "length": 100,
            "dateAdded": "2022-07-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "v88YjiHVIp",
            "author": "Mia Hamm",
            "content": "I am building a fire, and everyday I train, I add more fuel. At just the right moment, I light the match.",
            "tags": [
                "Sports",
                "Competition"
            ],
            "authorSlug": "mia-hamm",
            "length": 105,
            "dateAdded": "2022-07-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "x1ekufax6w",
            "author": "Jeff Bezos",
            "content": "A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.",
            "tags": [
                "Business"
            ],
            "authorSlug": "jeff-bezos",
            "length": 110,
            "dateAdded": "2022-07-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "gZMl2CrQvRQ",
            "author": "Ted Williams",
            "content": "Baseball is the only field of endeavor where a man can succeed three times out of ten and be considered a good performer.",
            "tags": [
                "Sports",
                "Competition"
            ],
            "authorSlug": "ted-williams",
            "length": 121,
            "dateAdded": "2022-07-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "udbaSw4hIey",
            "author": "Harriet Beecher Stowe",
            "content": "Never give up, for that is just the place and time that the tide will turn.",
            "tags": [
                "Motivational"
            ],
            "authorSlug": "harriet-beecher-stowe",
            "length": 75,
            "dateAdded": "2022-07-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "l4SIHYrQpX",
            "author": "Johann Wolfgang von Goethe",
            "content": "Knowing is not enough; we must apply. Willing is not enough; we must do.",
            "tags": [
                "Motivational"
            ],
            "authorSlug": "johann-wolfgang-von-goethe",
            "length": 72,
            "dateAdded": "2022-07-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "E24zrX6RYt",
            "author": "Jack Welch",
            "content": "An organization's ability to learn, and translate that learning into action rapidly, is the ultimate competitive advantage.",
            "tags": [
                "Business"
            ],
            "authorSlug": "jack-welch",
            "length": 123,
            "dateAdded": "2022-07-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "WPXF6M0Yn_Y",
            "author": "Warren Bennis",
            "content": "Trust is the lubrication that makes it possible for organizations to work.",
            "tags": [
                "Business"
            ],
            "authorSlug": "warren-bennis",
            "length": 74,
            "dateAdded": "2022-07-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "k1TVeBO_5Kh",
            "author": "Laurence J. Peter",
            "content": "An economist is an expert who will know tomorrow why the things he predicted yesterday didn't happen today.",
            "tags": [
                "Business"
            ],
            "authorSlug": "laurence-j-peter",
            "length": 107,
            "dateAdded": "2022-07-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "mdzzSdP_dF",
            "author": "Colin Powell",
            "content": "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
            "tags": [
                "Success"
            ],
            "authorSlug": "colin-powell",
            "length": 103,
            "dateAdded": "2022-07-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "NaR2ruD4l68",
            "author": "Robert Kiyosaki",
            "content": "When times are bad is when the real entrepreneurs emerge.",
            "tags": [
                "Business"
            ],
            "authorSlug": "robert-kiyosaki",
            "length": 57,
            "dateAdded": "2022-07-06",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "_WfHG0pIS0",
            "author": "W. Clement Stone",
            "content": "Aim for the moon. If you miss, you may hit a star.",
            "tags": [
                "Motivational"
            ],
            "authorSlug": "w-clement-stone",
            "length": 50,
            "dateAdded": "2022-07-06",
            "dateModified": "2023-04-14"
=======
        
        for (dataPoint of data) {
            quotesList.push(dataPoint.slug);
>>>>>>> f025ba4d7d4d5639d648b49fa835f1e2024bd068
        }
        console.log(quotesList);
        
    }).catch((response) => {
        console.log(response.status,response.statusText)
    }); 

    
    return quotesList;

}

console.log('fetch quotes', fetchQuotes('albert-einstein'));

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
