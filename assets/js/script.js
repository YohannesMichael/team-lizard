const QUOTES_URL = "https://api.quotable.io";

const AUTHOR_URL = "https://openlibrary.org"

const AUTHOR_ENDPOINT = "/subjects/";
const QUOTES_ENDPOINT = "/quotes";
const TAGS_ENDPOINT = "/tags";

const LIMIT = 150;


// as a developer, when I call a fetch 
//authors funciton, it returns an array of authors in a particular genre
//CURRENTLY FETCH queries are disabled and the funcitons below are sending back dummy data.
function fetchTags(){
    params = TAGS_ENDPOINT; //option to add parameters
    fetchUrl = `${QUOTES_URL}${params}`;

fetch(fetchUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    
    tagList = [];

    for (dataPoint of data) {
        console.log(dataPoint.slug);
        tagList.push(dataPoint);
    }
  });

/*   tagList = [
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
    }
] */
  return tagList;
    //taglist is a result of the type array, containing an array of objects which 
    //can act like a genre search in relation to books from https://api.quotable.io"
    
}


//https://openlibrary.org/subjects/love.json

function fetchAuthors(tag) {

    params = `${AUTHOR_ENDPOINT}${tag}.json`; //option to add parameters
    
    fetchUrl = `${AUTHOR_URL}${params}`;

    console.log(fetchUrl);

    fetch(fetchUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    }); 

    const authorList = [
        {
            "_id": "76ISAUD3P5",
            "name": "14th Dalai Lama",
            "bio": "The 14th Dalai Lama (né Lhamo Thondup), known as Gyalwa Rinpoche to the Tibetan people, is the current Dalai Lama, the highest spiritual leader and former head of state of Tibet. Born on 6 July 1935, or in the Tibetan calendar, in the Wood-Pig Year, 5th month, 5th day. He is considered a living Bodhisattva; specifically, an emanation of Avalokiteśvara in Sanskrit and Chenrezig in Tibetan.",
            "description": "Current foremost spiritual leader of Tibet",
            "link": "https://en.wikipedia.org/wiki/14th_Dalai_Lama",
            "quoteCount": 0,
            "slug": "14th-dalai-lama",
            "dateAdded": "2022-07-06",
            "dateModified": "2022-07-06"
        },
        {
            "_id": "-yBDYq_Vtnuw",
            "name": "A. A. Milne",
            "link": "https://en.wikipedia.org/wiki/A._A._Milne",
            "bio": "Alan Alexander Milne (18 January 1882 – 31 January 1956) was an English author, best known for his books about the teddy bear Winnie-the-Pooh and for various poems. Milne was a noted writer, primarily as a playwright, before the huge success of Pooh overshadowed all his previous work.",
            "description": "British author",
            "quoteCount": 2,
            "slug": "a-a-milne",
            "dateAdded": "2019-08-08",
            "dateModified": "2019-08-08"
        },
        {
            "_id": "Bblz8Knp6-ZB",
            "name": "A. P. J. Abdul Kalam",
            "link": "https://en.wikipedia.org/wiki/A._P._J._Abdul_Kalam",
            "bio": "Avul Pakir Jainulabdeen Abdul Kalam (15 October 1931 – 27 July 2015) was an aerospace scientist who served as the 11th President of India from 2002 to 2007.",
            "description": "Scientist and 11th President of India",
            "quoteCount": 2,
            "slug": "a-p-j-abdul-kalam",
            "dateAdded": "2019-12-13",
            "dateModified": "2019-12-13"
        },
        {
            "_id": "N-S5OevQOHpy",
            "name": "A. Powell Davies",
            "link": "https://en.wikipedia.org/wiki/A._Powell_Davies",
            "bio": "Arthur Powell Davies (June 5, 1902 – September 26, 1957) was the minister of All Souls Church, Unitarian in Washington, D.C. from 1944 until his death in 1957. A prolific author of theological books and sermon collections, he came to national prominence in the U.S. through his liberal activism advocating civil rights for African-Americans and women.",
            "description": "Civil rights activist",
            "quoteCount": 2,
            "slug": "a-powell-davies",
            "dateAdded": "2020-01-12",
            "dateModified": "2020-01-12"
        },
        {
            "_id": "82zk1b45Zn",
            "name": "Abigail Adams",
            "link": "https://en.wikipedia.org/wiki/Abigail_Adams",
            "bio": "Abigail Adams (November 22, [O.S. November 11] 1744 – October 28, 1818) was the wife and closest advisor of John Adams, as well as the mother of John Quincy Adams. She is sometimes considered to have been a Founder of the United States, and is now designated as the first Second Lady and second First Lady of the United States, although these titles were not used at the time.",
            "description": "2nd First Lady of the United States",
            "quoteCount": 1,
            "slug": "abigail-adams",
            "dateAdded": "2020-04-15",
            "dateModified": "2020-04-15"
        },
        {
            "_id": "8k75S1ntV9GW",
            "name": "Abraham Lincoln",
            "link": "https://en.wikipedia.org/wiki/Abraham_Lincoln",
            "bio": "Abraham Lincoln (February 12, 1809 – April 15, 1865) was an American statesman and lawyer who served as the 16th president of the United States (1861–1865). Lincoln led the nation through its greatest moral, constitutional, and political crisis in the American Civil War.",
            "description": "16th president of the United States",
            "quoteCount": 34,
            "slug": "abraham-lincoln",
            "dateAdded": "2020-01-31",
            "dateModified": "2022-03-12"
        },
        {
            "_id": "LIMi8MqkzapA",
            "name": "Abraham Maslow",
            "link": "https://en.wikipedia.org/wiki/Abraham_Maslow",
            "bio": "Abraham Harold Maslow (April 1, 1908 – June 8, 1970) was an American psychologist who was best known for creating Maslow's hierarchy of needs, a theory of psychological health predicated on fulfilling innate human needs in priority, culminating in self-actualization.",
            "description": "American psychologist",
            "quoteCount": 2,
            "slug": "abraham-maslow",
            "dateAdded": "2020-03-11",
            "dateModified": "2020-03-11"
        },
        {
            "_id": "I6QJTtjd2k",
            "name": "Adam Smith",
            "bio": "Adam Smith (baptized 16 June 1723 – 17 July 1790) was a Scottish economist and philosopher who was a pioneer of political economy and key figure during the Scottish Enlightenment. Also known as \"The Father of Economics\" or \"The Father of Capitalism\", he wrote two classic works, The Theory of Moral Sentiments (1759) and An Inquiry into the Nature and Causes of the Wealth of Nations (1776). The latter, often abbreviated as The Wealth of Nations, is considered his magnum opus and the first modern work of economics.",
            "description": "Scottish economist and philosopher",
            "link": "https://en.wikipedia.org/wiki/Adam_Smith",
            "quoteCount": 0,
            "slug": "adam-smith",
            "dateAdded": "2022-07-06",
            "dateModified": "2022-07-08"
        },
        {
            "_id": "ossJxB6-1",
            "name": "Aeschylus",
            "link": "https://en.wikipedia.org/wiki/Aeschylus",
            "bio": "Aeschylus was an ancient Greek author of Greek tragedy, and is often described as the father of tragedy. Academics' knowledge of the genre begins with his work, and understanding of earlier Greek tragedy is largely based on inferences made from reading his surviving plays.",
            "description": "Ancient Athenian playwright",
            "quoteCount": 3,
            "slug": "aeschylus",
            "dateAdded": "2020-04-15",
            "dateModified": "2020-04-15"
        },
        {
            "_id": "XYxYtSeixS-o",
            "name": "Aesop",
            "link": "https://en.wikipedia.org/wiki/Aesop",
            "bio": "Aesop (c. 620 – 564 BCE) was a Greek fabulist and storyteller credited with a number of fables now collectively known as Aesop's Fables.",
            "description": "Ancient Greek storyteller",
            "quoteCount": 10,
            "slug": "aesop",
            "dateAdded": "2020-01-15",
            "dateModified": "2023-04-03"
        },
        {
            "_id": "gfyb7CJa5",
            "name": "Afrika Bambaataa",
            "link": "https://en.wikipedia.org/wiki/Afrika_Bambaataa",
            "bio": "Afrika Bambaataa (born Lance Taylor; April 17, 1957) is an American disc jockey, rapper, songwriter and producer from the South Bronx, New York. He is notable for releasing a series of genre-defining electro tracks in the 1980s that influenced the development of hip hop culture.",
            "description": "Record producer and activist",
            "quoteCount": 1,
            "slug": "afrika-bambaataa",
            "dateAdded": "2019-03-24",
            "dateModified": "2019-03-24"
        },
        {
            "_id": "qsGKdgIDw5wR",
            "name": "Agatha Christie",
            "link": "https://en.wikipedia.org/wiki/Agatha_Christie",
            "bio": "Dame Agatha Mary Clarissa Christie, Lady Mallowan,  (15 September 1890 – 12 January 1976) was an English writer known for her 66 detective novels and 14 short story collections, particularly those revolving around fictional detectives Hercule Poirot and Miss Marple. She also wrote the world's longest-running play The Mousetrap and six romances under the pen name Mary Westmacott.",
            "description": "English mystery writer",
            "quoteCount": 1,
            "slug": "agatha-christie",
            "dateAdded": "2021-01-11",
            "dateModified": "2021-01-11"
        },
        {
            "_id": "8HD7jXVhDv",
            "name": "Akhenaten",
            "link": "https://en.wikipedia.org/wiki/Akhenaten",
            "bio": "Akhenaten, known before the fifth year of his reign as Amenhotep IV, was an ancient Egyptian pharaoh of the 18th Dynasty, who ruled for 17 years and died perhaps in 1336 BC or 1334 BC. ",
            "description": "18th Dynasty pharaoh",
            "quoteCount": 1,
            "slug": "akhenaten",
            "dateAdded": "2021-01-30",
            "dateModified": "2021-01-30"
        },
        {
            "_id": "EqFOxH8f03zq",
            "name": "Alan Cohen",
            "link": "https://en.wikipedia.org/wiki/Alan_Cohen",
            "bio": "Alan Phillip Cohen (born October 5, 1954) is an American businessman, best known for his ownership of the Florida Panthers hockey team and his founding of several pharmaceutical companies. Cohen holds several degrees from the University of Florida.",
            "description": "American hockey executive",
            "quoteCount": 1,
            "slug": "alan-cohen",
            "dateAdded": "2020-01-31",
            "dateModified": "2020-01-31"
        },
        {
            "_id": "ceimd_kx6Nbh",
            "name": "Alan Watts",
            "link": "https://en.wikipedia.org/wiki/Alan_Watts",
            "bio": "Alan Wilson Watts (6 January 1915 – 16 November 1973) was a British writer and lecturer who interpreted and popularised Eastern philosophy and religion for a Western audience. Born in Chislehurst, England, he moved to the United States in 1938 and began Zen training in New York.",
            "description": "British author",
            "quoteCount": 22,
            "slug": "alan-watts",
            "dateAdded": "2021-02-27",
            "dateModified": "2022-07-08"
        },
        {
            "_id": "RmuonXrXY44Z",
            "name": "Albert Camus",
            "link": "https://en.wikipedia.org/wiki/Albert_Camus",
            "bio": "Albert Camus (7 November 1913 – 4 January 1960) was a French philosopher, author, and journalist. He won the Nobel Prize in Literature at the age of 44 in 1957, the second-youngest recipient in history.",
            "description": "French author",
            "quoteCount": 6,
            "slug": "albert-camus",
            "dateAdded": "2021-05-07",
            "dateModified": "2021-05-07"
        },
        {
            "_id": "L76FRuEeGIUJ",
            "name": "Albert Einstein",
            "link": "https://en.wikipedia.org/wiki/Albert_Einstein",
            "bio": "Albert Einstein (14 March 1879 – 18 April 1955) was a German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics (alongside quantum mechanics). His work is also known for its influence on the philosophy of science.",
            "description": "Theoretical physicist",
            "quoteCount": 50,
            "slug": "albert-einstein",
            "dateAdded": "2019-07-03",
            "dateModified": "2023-04-06"
        },
        {
            "_id": "ANT0MUtjmG6O",
            "name": "Albert Schweitzer",
            "link": "https://en.wikipedia.org/wiki/Albert_Schweitzer",
            "bio": "Albert Schweitzer  (14 January 1875 – 4 September 1965) was an Alsatian polymath. He was a theologian, organist, writer, humanitarian, philosopher, and physician.",
            "description": "Theologian",
            "quoteCount": 8,
            "slug": "albert-schweitzer",
            "dateAdded": "2020-07-10",
            "dateModified": "2020-07-10"
        },
        {
            "_id": "9B-Gz0CukKAX",
            "name": "Aldous Huxley",
            "link": "https://en.wikipedia.org/wiki/Aldous_Huxley",
            "bio": "Aldous Leonard Huxley (26 July 1894 – 22 November 1963) was an English writer and philosopher. He wrote nearly fifty books—both novels and non-fiction works—as well as wide-ranging essays, narratives, and poems.",
            "description": "English author",
            "quoteCount": 4,
            "slug": "aldous-huxley",
            "dateAdded": "2020-04-15",
            "dateModified": "2020-04-15"
        },
        {
            "_id": "N5lVXx7ZOkGV",
            "name": "Alexander Chalmers",
            "link": "https://en.wikipedia.org/wiki/Alexander_Chalmers",
            "bio": "For the mayor of Warsaw of the same name, see Alexander Chalmers (mayor of Warsaw).  Alexander Chalmers (29 March 1759 – 29 December 1834) was a Scottish writer.",
            "description": "Scottish writer",
            "quoteCount": 1,
            "slug": "alexander-chalmers",
            "dateAdded": "2019-11-16",
            "dateModified": "2019-11-16"
        },
        {
            "_id": "_gz-cfmqA1mr",
            "name": "Alexander Pope",
            "link": "https://en.wikipedia.org/wiki/Alexander_Pope",
            "bio": "Alexander Pope (21 May 1688 – 30 May 1744) is regarded as one of the greatest English poets, and the foremost poet of the early eighteenth century. He is best known for his satirical and discursive poetry, including The Rape of the Lock, The Dunciad, and An Essay on Criticism, as well as for his translation of Homer.",
            "description": "English poet",
            "quoteCount": 3,
            "slug": "alexander-pope",
            "dateAdded": "2020-12-19",
            "dateModified": "2020-12-19"
        },
        {
            "_id": "GxAzeheUbynB",
            "name": "Alexander the Great",
            "link": "https://en.wikipedia.org/wiki/Alexander_the_Great",
            "bio": "Alexander III of Macedon (July 356 BC – 11 June 323 BC), commonly known as Alexander the Great, was a king of the ancient Greek kingdom of Macedon and a member of the Argead dynasty. He was born in Pella in 356 BC and succeeded his father Philip II to the throne at the age of 20.",
            "description": "King of Macedonia",
            "quoteCount": 1,
            "slug": "alexander-the-great",
            "dateAdded": "2020-05-21",
            "dateModified": "2020-05-21"
        },
        {
            "_id": "9r41Szdxzw",
            "name": "Alexandre Dumas",
            "link": "https://en.wikipedia.org/wiki/Alexandre_Dumas",
            "bio": "Alexandre Dumas (24 July 1802 – 5 December 1870), also known as Alexandre Dumas père (French for 'father'), was a French writer. His works have been translated into many languages, and he is one of the most widely read French authors.",
            "description": "French writer",
            "quoteCount": 1,
            "slug": "alexandre-dumas",
            "dateAdded": "2020-11-10",
            "dateModified": "2020-11-10"
        },
        {
            "_id": "foTvtgKgXL67",
            "name": "Alexis Carrel",
            "link": "https://en.wikipedia.org/wiki/Alexis_Carrel",
            "bio": "Alexis Carrel (28 June 1873 – 5 November 1944) was a French surgeon and biologist who was awarded the Nobel Prize in Physiology or Medicine in 1912 for pioneering vascular suturing techniques. ",
            "description": "French surgeon",
            "quoteCount": 1,
            "slug": "alexis-carrel",
            "dateAdded": "2019-02-17",
            "dateModified": "2019-02-17"
        },
        {
            "_id": "tNaHUH10_lky",
            "name": "Alfred Adler",
            "link": "https://en.wikipedia.org/wiki/Alfred_Adler",
            "bio": "Alfred Adler (7 February 1870 – 28 May 1937) was an Austrian medical doctor, psychotherapist, and founder of the school of individual psychology.",
            "description": "Austrian medical doctor",
            "quoteCount": 1,
            "slug": "alfred-adler",
            "dateAdded": "2020-01-12",
            "dateModified": "2020-01-12"
        },
        {
            "_id": "2AYbKkOe5CXo",
            "name": "Alfred Korzybski",
            "link": "https://en.wikipedia.org/wiki/Alfred_Korzybski",
            "bio": "Alfred Habdank Skarbek Korzybski (July 3, 1879 – March 1, 1950) was a Polish-American independent scholar who developed a field called general semantics, which he viewed as both distinct from, and more encompassing than, the field of semantics.",
            "description": "American-Polish developer",
            "quoteCount": 1,
            "slug": "alfred-korzybski",
            "dateAdded": "2019-04-05",
            "dateModified": "2019-04-05"
        },
        {
            "_id": "AtSIvMTXUROU",
            "name": "Alfred North Whitehead",
            "link": "https://en.wikipedia.org/wiki/Alfred_North_Whitehead",
            "bio": "Alfred North Whitehead (15 February 1861 – 30 December 1947) was an English mathematician and philosopher. ",
            "description": "English mathematician and philosopher",
            "quoteCount": 1,
            "slug": "alfred-north-whitehead",
            "dateAdded": "2021-04-08",
            "dateModified": "2021-04-08"
        },
        {
            "_id": "fOpkWYTcSYhw",
            "name": "Alfred Tennyson",
            "link": "https://en.wikipedia.org/wiki/Alfred,_Lord_Tennyson",
            "bio": "Alfred Tennyson, 1st Baron Tennyson FRS (6 August 1809 – 6 October 1892) was a British poet.",
            "description": "British poet",
            "quoteCount": 1,
            "slug": "alfred-tennyson",
            "dateAdded": "2020-01-27",
            "dateModified": "2020-01-27"
        },
        {
            "_id": "7E6EppQX9_ha",
            "name": "Alice Walker",
            "link": "https://en.wikipedia.org/wiki/Alice_Walker",
            "bio": "Alice Walker (born February 9, 1944) is an American novelist, short story writer, poet, and social activist. In 1982, she wrote the novel The Color Purple, for which she won the National Book Award for hardcover fiction, and the Pulitzer Prize for Fiction.",
            "description": "American author and activist",
            "quoteCount": 1,
            "slug": "alice-walker",
            "dateAdded": "2019-01-08",
            "dateModified": "2019-01-08"
        },
        {
            "_id": "uUqkX84C21",
            "name": "Amber Valletta",
            "link": "https://en.wikipedia.org/wiki/Amber_Valletta",
            "bio": "Amber Evangeline Valletta (born February 9, 1974) is an American fashion model and actress. She began her career as a fashion model, landing her first of sixteen American Vogue covers at the age of eighteen.",
            "description": "American actress",
            "quoteCount": 1,
            "slug": "amber-valletta",
            "dateAdded": "2020-10-14",
            "dateModified": "2020-10-14"
        },
        {
            "_id": "smtmbs5A9B5U",
            "name": "Ambrose Bierce",
            "link": "https://en.wikipedia.org/wiki/Ambrose_Bierce",
            "bio": "Ambrose Gwinnett Bierce (June 24, 1842 – circa 1914) was an American short story writer, journalist, poet, and Civil War veteran. His book The Devil's Dictionary was named as one of \"The 100 Greatest Masterpieces of American Literature\" by the American Revolution Bicentennial Administration.",
            "description": "American journalist",
            "quoteCount": 2,
            "slug": "ambrose-bierce",
            "dateAdded": "2019-09-13",
            "dateModified": "2022-07-08"
        },
        {
            "_id": "by3TkPSn9iVA",
            "name": "Amelia Earhart",
            "link": "https://en.wikipedia.org/wiki/Amelia_Earhart",
            "bio": "Amelia Mary Earhart (disappeared July 2, 1937) was an American aviation pioneer and author. Earhart was the first female aviator to fly solo across the Atlantic Ocean.",
            "description": "American aviation pioneer",
            "quoteCount": 4,
            "slug": "amelia-earhart",
            "dateAdded": "2019-08-16",
            "dateModified": "2022-07-06"
        },
        {
            "_id": "Zpq9evTXGAK7",
            "name": "Amy Bloom",
            "link": "https://en.wikipedia.org/wiki/Amy_Bloom",
            "bio": "Amy Bloom (born 1953) is an American writer and psychotherapist. She has been nominated for the National Book Award and the National Book Critics Circle Award.",
            "description": "American writer",
            "quoteCount": 1,
            "slug": "amy-bloom",
            "dateAdded": "2019-09-19",
            "dateModified": "2019-09-19"
        },
        {
            "_id": "MQmngYY-7",
            "name": "Amy Poehler",
            "bio": "Amy Poehler (born September 16, 1971) is an American actress, comedian, writer, producer, and director. After studying improv at Chicago's Second City and ImprovOlympic in the early 1990s, she co-founded the improvisational-comedy troupe Upright Citizens Brigade. The group moved to New York City in 1996 where their act became a half-hour sketch-comedy series on Comedy Central in 1998.",
            "description": "American comedian",
            "link": "https://en.wikipedia.org/wiki/Amy_Poehler",
            "quoteCount": 1,
            "slug": "amy-poehler",
            "dateAdded": "2021-06-18",
            "dateModified": "2021-06-18"
        },
        {
            "_id": "PP1Z6EiXO-8z",
            "name": "Amy Tan",
            "link": "https://en.wikipedia.org/wiki/Amy_Tan",
            "bio": "Amy Tan (born February 19, 1952) is an American writer whose works explore mother-daughter relationships and the Chinese-American experience. Her novel The Joy Luck Club was adapted into a film in 1993 by director Wayne Wang.",
            "description": "American novelist",
            "quoteCount": 1,
            "slug": "amy-tan",
            "dateAdded": "2020-01-27",
            "dateModified": "2020-01-27"
        },
        {
            "_id": "MMvH-cw49Y9t",
            "name": "Anaïs Nin",
            "link": "https://en.wikipedia.org/wiki/Ana%C3%AFs_Nin",
            "bio": "Angela Anaïs Juana Antolina Rosa Edelmira Nin y Culmell (February 21, 1903 – January 14, 1977), known professionally as Anaïs Nin was a French-Cuban American diarist, essayist, novelist, and writer of short stories and erotica.",
            "description": "American-Cuban-French diarist",
            "quoteCount": 8,
            "slug": "anais-nin",
            "dateAdded": "2019-11-16",
            "dateModified": "2019-11-16"
        },
        {
            "_id": "anpE1ceNi3xv",
            "name": "Anatole France",
            "link": "https://en.wikipedia.org/wiki/Anatole_France",
            "bio": "Anatole France (16 April 1844 – 12 October 1924) was a French poet, journalist, and novelist with several best-sellers. Ironic and skeptical, he was considered in his day the ideal French man of letters.",
            "description": "French author",
            "quoteCount": 6,
            "slug": "anatole-france",
            "dateAdded": "2020-03-15",
            "dateModified": "2020-03-15"
        },
        {
            "_id": "oTUVtA9vS7I",
            "name": "André Malraux",
            "bio": "Georges André Malraux (3 November 1901 – 23 November 1976) was a French novelist, art theorist, and minister of cultural affairs. Malraux's novel La Condition Humaine (Man's Fate) (1933) won the Prix Goncourt. He was appointed by President Charles de Gaulle as information minister (1945–46) and subsequently as France's first cultural affairs minister during de Gaulle's presidency (1959–1969).",
            "description": "French novelist, art theorist and statesman",
            "link": "https://en.wikipedia.org/wiki/Andr%C3%A9_Malraux",
            "quoteCount": 1,
            "slug": "andre-malraux",
            "dateAdded": "2022-07-06",
            "dateModified": "2022-07-06"
        },
        {
            "_id": "vphMwFKVff7o",
            "name": "Andy Rooney",
            "link": "https://en.wikipedia.org/wiki/Andy_Rooney",
            "bio": "Andrew Aitken Rooney (January 14, 1919 – November 4, 2011) was an American radio and television writer who was best known for his weekly broadcast \"A Few Minutes with Andy Rooney\", a part of the CBS News program 60 Minutes from 1978 to 2011.",
            "description": "American television writer",
            "quoteCount": 1,
            "slug": "andy-rooney",
            "dateAdded": "2021-01-30",
            "dateModified": "2021-01-30"
        },
        {
            "_id": "wroG7UZRrER2",
            "name": "Andy Warhol",
            "link": "https://en.wikipedia.org/wiki/Andy_Warhol",
            "bio": "Andy Warhol (August 6, 1928 – February 22, 1987) was an American artist, film director, and producer who was a leading figure in the visual art movement known as pop art.",
            "description": "American artist",
            "quoteCount": 1,
            "slug": "andy-warhol",
            "dateAdded": "2019-12-14",
            "dateModified": "2022-07-08"
        },
        {
            "_id": "lOlcafko8nZU",
            "name": "Anna Pavlova",
            "link": "https://en.wikipedia.org/wiki/Anna_Pavlova",
            "bio": "Anna Pavlovna Pavlova (February 12 1881 – January 23, 1931), was a Russian prima ballerina of the late 19th and the early 20th centuries. She was a principal artist of the Imperial Russian Ballet and the Ballets Russes of Sergei Diaghilev.",
            "description": "Russian prima ballerina",
            "quoteCount": 1,
            "slug": "anna-pavlova",
            "dateAdded": "2021-01-19",
            "dateModified": "2021-01-19"
        },
        {
            "_id": "hFlcETvnSTsM",
            "name": "Anne Bradstreet",
            "link": "https://en.wikipedia.org/wiki/Anne_Bradstreet",
            "bio": "Anne Bradstreet (March 20, 1612 – September 16, 1672), née Dudley, was the most prominent of early English poets of North America and first writer in England's North American colonies to be published.",
            "description": "Anglo-American poet",
            "quoteCount": 1,
            "slug": "anne-bradstreet",
            "dateAdded": "2020-03-15",
            "dateModified": "2020-03-15"
        },
        {
            "_id": "zUh8LmxcnMrK",
            "name": "Anne Brontë",
            "link": "https://en.wikipedia.org/wiki/Anne_Bront%C3%AB",
            "bio": "Anne Brontë (17 January 1820 – 28 May 1849) was an English novelist and poet, the youngest member of the Brontë literary family. ",
            "description": "English novelist",
            "quoteCount": 1,
            "slug": "anne-bronte",
            "dateAdded": "2020-04-14",
            "dateModified": "2020-04-14"
        },
        {
            "_id": "FIjzb0sFtC_P",
            "name": "Anne Frank",
            "link": "https://en.wikipedia.org/wiki/Anne_Frank",
            "bio": "Annelies Marie \"Anne\" Frank (12 June 1929 – February or March 1945) was a German-born Dutch-Jewish diarist. One of the most discussed Jewish victims of the Holocaust, she gained fame posthumously with the publication of The Diary of a Young Girl, in which she documents her life in hiding from 1942 to 1944, during the German occupation of the Netherlands in World War II.",
            "description": "German-born diarist",
            "quoteCount": 4,
            "slug": "anne-frank",
            "dateAdded": "2020-03-15",
            "dateModified": "2020-03-15"
        },
        {
            "_id": "U9sym_5RKQun",
            "name": "Anne Lamott",
            "link": "https://en.wikipedia.org/wiki/Anne_Lamott",
            "bio": "Anne Lamott (born April 10, 1954) is an American novelist and non-fiction writer. She is also a progressive political activist, public speaker, and writing teacher.",
            "description": "American novelist",
            "quoteCount": 1,
            "slug": "anne-lamott",
            "dateAdded": "2019-08-08",
            "dateModified": "2019-08-08"
        },
        {
            "_id": "RggJjk3YDzaP",
            "name": "Anne Lindbergh",
            "link": "https://en.wikipedia.org/wiki/Anne_Lindbergh",
            "bio": "Anne Spencer Lindbergh (1940 – December 10, 1993) was an American writer, primarily of children's novels. She was the daughter of aviators/authors Charles Lindbergh and Anne Morrow Lindbergh.",
            "description": "American author",
            "quoteCount": 1,
            "slug": "anne-lindbergh",
            "dateAdded": "2020-01-26",
            "dateModified": "2020-01-26"
        },
        {
            "_id": "h1CvWN62qHB2",
            "name": "Annie Dillard",
            "link": "https://en.wikipedia.org/wiki/Annie_Dillard",
            "bio": "Annie Dillard (born 30 April 1945) is an American author, best known for her narrative prose in both fiction and non-fiction.",
            "description": "American author",
            "quoteCount": 1,
            "slug": "annie-dillard",
            "dateAdded": "2020-03-11",
            "dateModified": "2020-03-11"
        },
        {
            "_id": "4ejQsV_Lu2",
            "name": "Ansel Adams",
            "link": "https://en.wikipedia.org/wiki/Ansel_Adams",
            "bio": "Ansel Easton Adams (February 20, 1902 – April 22, 1984) was a landscape photographer and environmentalist known for his black-and-white images of the American West. He helped found Group f/64, an association of photographers advocating \"pure\" photography which favored sharp focus and the use of the full tonal range of a photograph.",
            "description": "American photographer",
            "quoteCount": 1,
            "slug": "ansel-adams",
            "dateAdded": "2019-10-03",
            "dateModified": "2019-10-03"
        },
        {
            "_id": "0zvhMZy34FI3",
            "name": "Antoine de Saint-Exupéry",
            "link": "https://en.wikipedia.org/wiki/Antoine_de_Saint-Exup%C3%A9ry",
            "bio": "Antoine Marie Jean-Baptiste Roger, simply known as de Saint-Exupéry (29 June 1900 – 31 July 1944), was a French writer, poet, aristocrat, journalist, and pioneering aviator.",
            "description": "French writer",
            "quoteCount": 3,
            "slug": "antoine-de-saint-exupery",
            "dateAdded": "2020-11-10",
            "dateModified": "2020-11-10"
        },
        {
            "_id": "naUoTgPqZ",
            "name": "Anton Chekhov",
            "link": "https://en.wikipedia.org/wiki/Anton_Chekhov",
            "bio": "Anton Pavlovich Chekhov (29 January 1860 – 15 July 1904) was a Russian playwright and short-story writer who is considered to be among the greatest writers of short fiction in history.",
            "description": "Russian playwright",
            "quoteCount": 3,
            "slug": "anton-chekhov",
            "dateAdded": "2020-02-07",
            "dateModified": "2020-02-07"
        },
        {
            "_id": "vKwA_aAsd",
            "name": "Archimedes",
            "link": "https://en.wikipedia.org/wiki/Archimedes",
            "bio": "Archimedes of Syracuse (c. 287 – c. 212 BC) was a Greek mathematician, physicist, engineer, inventor, and astronomer.  Although few details of his life are known, he is regarded as one of the leading scientists in classical antiquity.",
            "description": "Greek mathematician",
            "quoteCount": 1,
            "slug": "archimedes",
            "dateAdded": "2020-03-27",
            "dateModified": "2020-03-27"
        },
        {
            "_id": "Z8j-PYl90GLF",
            "name": "Aristotle",
            "link": "https://en.wikipedia.org/wiki/Aristotle",
            "bio": "Aristotle (384–322 BC) was a Greek philosopher and polymath during the Classical period in Ancient Greece. He was the founder of the Lyceum and the Peripatetic school of philosophy and Aristotelian tradition.",
            "description": "Greek philosopher",
            "quoteCount": 19,
            "slug": "aristotle",
            "dateAdded": "2019-09-19",
            "dateModified": "2019-09-19"
        },
        {
            "_id": "RO1pnCuxP7",
            "name": "Aristotle Onassis",
            "bio": "Aristotle Socrates Onassis (20 January 1906 – 15 March 1975), was a Greek shipping magnate who amassed the world's largest privately-owned shipping fleet and was one of the world's richest and most famous men. He was married to Athina Mary Livanos (daughter of shipping tycoon Stavros G. Livanos), had a long-standing affair with opera singer Maria Callas and was married to Jacqueline Kennedy, the widow of US President John F. Kennedy.Onassis was born in Smyrna (modern-day İzmir in Turkey) and fled the city with his family to Greece in 1922 in the wake of the catastrophe of Smyrna. He moved to Argentina in 1923 and established himself as a tobacco trader and later a shipping owner during the Second World War.",
            "description": "Greek shipping tycoon",
            "link": "https://en.wikipedia.org/wiki/Aristotle_Onassis",
            "quoteCount": 1,
            "slug": "aristotle-onassis",
            "dateAdded": "2022-07-06",
            "dateModified": "2022-07-06"
        },
        {
            "_id": "HpPpeEC3D_2",
            "name": "Arnold Palmer",
            "bio": "Arnold Daniel Palmer (September 10, 1929 – September 25, 2016) was an American professional golfer who is widely regarded as one of the greatest and most charismatic players in the sport's history. Dating back to 1955, he won numerous events on both the PGA Tour and the circuit now known as PGA Tour Champions. Nicknamed The King, Palmer was one of golf's most popular stars and seen as a trailblazer, the first superstar of the sport's television age, which began in the 1950s.",
            "description": "American golfer",
            "link": "https://en.wikipedia.org/wiki/Arnold_Palmer",
            "quoteCount": 1,
            "slug": "arnold-palmer",
            "dateAdded": "2022-07-06",
            "dateModified": "2022-07-06"
        },
        {
            "_id": "VbDtUiHQw",
            "name": "Arthur Ashe",
            "link": "https://en.wikipedia.org/wiki/Arthur_Ashe",
            "bio": "Arthur Robert Ashe Jr. (July 10, 1943 – February 6, 1993) was an American professional tennis player who won three Grand Slam singles titles.",
            "description": "American tennis player",
            "quoteCount": 2,
            "slug": "arthur-ashe",
            "dateAdded": "2019-12-23",
            "dateModified": "2019-12-23"
        },
        {
            "_id": "1QYR63wh3",
            "name": "Arthur C. Clarke",
            "link": "https://en.wikipedia.org/wiki/Arthur_C._Clarke",
            "bio": "Sir Arthur Charles Clarke  (16 December 1917 – 19 March 2008) was a British science fiction writer, science writer and futurist, inventor, undersea explorer, and television series host. He co-wrote the screenplay for the 1968 film 2001: A Space Odyssey, one of the most influential films of all time.",
            "description": "British science-fiction writer",
            "quoteCount": 1,
            "slug": "arthur-c-clarke",
            "dateAdded": "2020-01-31",
            "dateModified": "2020-01-31"
        },
        {
            "_id": "Xe6MdAjz9_t9",
            "name": "Arthur Conan Doyle",
            "link": "https://en.wikipedia.org/wiki/Arthur_Conan_Doyle",
            "bio": "Sir Arthur Ignatius Conan Doyle  (22 May 1859 – 7 July 1930) was a British writer. He created the character Sherlock Holmes in 1887 when he published A Study in Scarlet, the first of four novels and more than fifty short stories about Holmes and Dr.",
            "description": "British author",
            "quoteCount": 3,
            "slug": "arthur-conan-doyle",
            "dateAdded": "2021-02-12",
            "dateModified": "2021-02-12"
        },
        {
            "_id": "BU-bejcYto",
            "name": "Arthur M. Schlesinger Jr.",
            "link": "https://en.wikipedia.org/wiki/Arthur_M._Schlesinger_Jr.",
            "bio": "Arthur Meier Schlesinger Jr. was an American historian, social critic, and public intellectual. The son of the influential historian Arthur M. Schlesinger Sr. and a specialist in American history, much of Schlesinger's work explored the history of 20th-century American liberalism",
            "description": "American historian",
            "quoteCount": 1,
            "slug": "arthur-m-schlesinger-jr",
            "dateAdded": "2020-03-01",
            "dateModified": "2020-03-01"
        },
        {
            "_id": "KKoxEah_YUax",
            "name": "Arthur Rubinstein",
            "link": "https://en.wikipedia.org/wiki/Arthur_Rubinstein",
            "bio": "Arthur Rubinstein (28 January 1887 – 20 December 1982) was a Polish American classical pianist.  He received international acclaim for his performances of the music written by a variety of composers and many regard him as the greatest Chopin interpreter of his time.",
            "description": "Polish-American pianist",
            "quoteCount": 1,
            "slug": "arthur-rubinstein",
            "dateAdded": "2019-12-13",
            "dateModified": "2019-12-13"
        },
        {
            "_id": "SZV21yHaj-Po",
            "name": "Arthur Schopenhauer",
            "link": "https://en.wikipedia.org/wiki/Arthur_Schopenhauer",
            "bio": "Arthur Schopenhauer (22 February 1788 – 21 September 1860) was a German philosopher. He is best known for his 1818 work The World as Will and Representation (expanded in 1844), wherein he characterizes the phenomenal world as the product of a blind and malignant metaphysical will.",
            "description": "German philosopher",
            "quoteCount": 2,
            "slug": "arthur-schopenhauer",
            "dateAdded": "2020-12-17",
            "dateModified": "2020-12-17"
        },
        {
            "_id": "ykLNBe560sqb",
            "name": "Audre Lorde",
            "link": "https://en.wikipedia.org/wiki/Audre_Lorde",
            "bio": "Audre Lorde (February 18, 1934 – November 17, 1992) was an American writer, feminist, librarian, and civil rights activist. As a poet, she is best known for technical mastery and emotional expression, as well as her poems that express anger and outrage at civil and social injustices she observed throughout her life.",
            "description": "Writer and activist",
            "quoteCount": 1,
            "slug": "audre-lorde",
            "dateAdded": "2021-01-10",
            "dateModified": "2021-01-10"
        },
        {
            "_id": "qfBqaUqn",
            "name": "Audrey Hepburn",
            "link": "https://en.wikipedia.org/wiki/Audrey_Hepburn",
            "bio": "Audrey Hepburn (born 4 May 1929 – 20 January 1993) was a British actress and humanitarian. Recognised as a film and fashion icon, she was ranked by the American Film Institute as the third-greatest female screen legend in Golden Age Hollywood, and was inducted into the International Best Dressed List Hall of Fame.",
            "description": "British actress",
            "quoteCount": 1,
            "slug": "audrey-hepburn",
            "dateAdded": "2019-06-27",
            "dateModified": "2019-06-27"
        },
        {
            "_id": "Cgbqm3Tw1_GC",
            "name": "Augustine of Hippo",
            "link": "https://en.wikipedia.org/wiki/Augustine_of_Hippo",
            "bio": "Saint Augustine of Hippo (13 November 354 – 28 August 430 AD) was a Roman African, Manichaean, early Christian theologian, doctor of the Church, and Neoplatonic philosopher from Numidia whose writings influenced the development of the Western Church and Western philosophy, and indirectly all of Western Christianity. ",
            "description": "Saint",
            "quoteCount": 5,
            "slug": "augustine-of-hippo",
            "dateAdded": "2021-01-30",
            "dateModified": "2021-01-30"
        },
        {
            "_id": "oTy9bo88X7",
            "name": "Avery Brooks",
            "link": "https://en.wikipedia.org/wiki/Avery_Brooks",
            "bio": "Avery Franklin Brooks (born October 2, 1948) is an American actor, director, singer, and educator. He is best known for his television roles as Benjamin Sisko on Star Trek: Deep Space Nine, as Hawk on Spenser: For Hire and its spinoff A Man Called Hawk, and as Dr.",
            "description": "American actor",
            "quoteCount": 1,
            "slug": "avery-brooks",
            "dateAdded": "2019-07-23",
            "dateModified": "2019-07-23"
        },
        {
            "_id": "kbGqMsLZAO",
            "name": "Ayn Rand",
            "link": "https://en.wikipedia.org/wiki/Ayn_Rand",
            "bio": "Ayn Rand (February 2 1905 – March 6, 1982) was a Russian-American writer and philosopher. She is known for her two best-selling novels, The Fountainhead and Atlas Shrugged, and for developing a philosophical system she named Objectivism.",
            "description": "Russian-American writer",
            "quoteCount": 2,
            "slug": "ayn-rand",
            "dateAdded": "2019-08-08",
            "dateModified": "2022-07-06"
        },
        {
            "_id": "Q-sLGqgArJ",
            "name": "B. F. Skinner",
            "link": "https://en.wikipedia.org/wiki/B._F._Skinner",
            "bio": "Burrhus Frederic Skinner (March 20, 1904 – August 18, 1990) was an American psychologist, behaviorist, author, inventor, and social philosopher. He was the Edgar Pierce Professor of Psychology at Harvard University from 1958 until his retirement in 1974.Skinner considered free will an illusion and human action dependent on consequences of previous actions.",
            "description": "American psychologist",
            "quoteCount": 1,
            "slug": "b-f-skinner",
            "dateAdded": "2021-02-12",
            "dateModified": "2021-02-12"
        },
        {
            "_id": "QWKD7UyWGYWy",
            "name": "Babatunde Olatunji",
            "link": "https://en.wikipedia.org/wiki/Babatunde_Olatunji",
            "bio": "Michael Babatunde Olatunji (born April 7, 1927 – April 6, 2003) was a Nigerian drummer, educator, social activist, and recording artist.",
            "description": "Nigerian percussionist",
            "quoteCount": 1,
            "slug": "babatunde-olatunji",
            "dateAdded": "2020-12-08",
            "dateModified": "2020-12-08"
        },
        {
            "_id": "mYsdhXSSb8Ib",
            "name": "Babe Ruth",
            "link": "https://en.wikipedia.org/wiki/Babe_Ruth",
            "bio": "George Herman \"Babe\" Ruth Jr. (February 6, 1895 – August 16, 1948) was an American professional baseball player whose career in Major League Baseball (MLB) spanned 22 seasons, from 1914 through 1935.",
            "description": "American baseball player",
            "quoteCount": 3,
            "slug": "babe-ruth",
            "dateAdded": "2020-08-27",
            "dateModified": "2022-07-06"
        },
        {
            "_id": "NOw0qSU2RzF5",
            "name": "Baltasar Gracián",
            "link": "https://en.wikipedia.org/wiki/Baltasar_Graci%C3%A1n",
            "bio": "Baltasar Gracián y Morales, SJ (8 January 1601 – 6 December 1658), better known as Baltasar Gracián, was a Spanish Jesuit and baroque prose writer and philosopher. He was born in Belmonte, near Calatayud (Aragon).",
            "description": "Spanish prose writer",
            "quoteCount": 3,
            "slug": "baltasar-gracian",
            "dateAdded": "2020-03-11",
            "dateModified": "2020-03-11"
        },
        {
            "_id": "Xt2CsBHup4NB",
            "name": "Barack Obama",
            "link": "https://en.wikipedia.org/wiki/Barack_Obama",
            "bio": "Barack Hussein Obama II (born August 4, 1961) is an American attorney and politician who served as the 44th president of the United States from 2009 to 2017. A member of the Democratic Party, he was the first African-American president of the United States.",
            "description": "44th president of the United States",
            "quoteCount": 4,
            "slug": "barack-obama",
            "dateAdded": "2021-05-07",
            "dateModified": "2021-05-07"
        },
        {
            "_id": "Qw_ksGjkS8",
            "name": "Barbara Bush",
            "link": "https://en.wikipedia.org/wiki/Barbara_Bush",
            "bio": "Barbara Bush (June 8, 1925 – April 17, 2018) was the first lady of the United States from 1989 to 1993 as the wife of George H. W. Bush, who served as the 41st president of the United States, and founder of the Barbara Bush Foundation for Family Literacy. She previously was the second lady of the United States from 1981 to 1989.",
            "description": "American politician",
            "quoteCount": 1,
            "slug": "barbara-bush",
            "dateAdded": "2019-03-24",
            "dateModified": "2019-03-24"
        },
        {
            "_id": "o77X2PrW6mcZ",
            "name": "Barbara De Angelis",
            "link": "https://en.wikipedia.org/wiki/Barbara_De_Angelis",
            "bio": "Barbara De Angelis (born March 4, 1951) is an American relationship consultant, lecturer and author, TV personality, relationship,  personal growth adviser and spiritual teacher.",
            "description": "American psychologist",
            "quoteCount": 1,
            "slug": "barbara-de-angelis",
            "dateAdded": "2019-07-03",
            "dateModified": "2019-07-03"
        },
        {
            "_id": "kmDM03hQ7i",
            "name": "Barry Switzer",
            "bio": "Barry Layne Switzer (born October 5, 1937) is a former American football coach and player. He served for 16 years as head football coach at the University of Oklahoma and 4 years as head coach of the Dallas Cowboys of the National Football League (NFL). He won three national championships at Oklahoma, and led the Cowboys to win Super Bowl XXX against the Pittsburgh Steelers.",
            "description": "American football player and coach",
            "link": "https://en.wikipedia.org/wiki/Barry_Switzer",
            "quoteCount": 1,
            "slug": "barry-switzer",
            "dateAdded": "2022-07-06",
            "dateModified": "2022-07-06"
        },
        {
            "_id": "6bnXdruCW",
            "name": "Basil of Caesarea",
            "link": "https://en.wikipedia.org/wiki/Basil_of_Caesarea",
            "bio": "Basil of Caesarea, also called Saint Basil the Great, was the bishop of Caesarea Mazaca in Cappadocia, Asia Minor. He was an influential theologian who supported the Nicene Creed and opposed the heresies of the early Christian church, fighting against both Arianism and the followers of Apollinaris of Laodicea.",
            "description": "Saint",
            "quoteCount": 1,
            "slug": "basil-of-caesarea",
            "dateAdded": "2019-01-14",
            "dateModified": "2019-01-14"
        },
        {
            "_id": "cW_yfVPe4g",
            "name": "Ben Fountain",
            "link": "https://en.wikipedia.org/wiki/Ben_Fountain",
            "bio": "Ben Fountain (born 1958) is an American fiction writer currently living in Dallas, Texas. He has won many awards including a PEN/Hemingway award for Brief Encounters with Che Guevara: Stories (2007) and the National Book Critics Circle Award for fiction for his debut novel Billy Lynn's Long Halftime Walk (2012).",
            "description": "American fiction writer",
            "quoteCount": 1,
            "slug": "ben-fountain",
            "dateAdded": "2019-04-05",
            "dateModified": "2019-04-05"
        },
        {
            "_id": "UqKGLSzc9s",
            "name": "Ben Hogan",
            "link": "https://en.wikipedia.org/wiki/Ben_Hogan",
            "bio": "William Ben Hogan (August 13, 1912 – July 25, 1997) was an American professional golfer who is generally considered to be one of the greatest players in the history of the game.  Hogan is notable for his profound influence on golf swing theory and his legendary ball-striking ability.",
            "description": "American professional golfer",
            "quoteCount": 1,
            "slug": "ben-hogan",
            "dateAdded": "2020-09-05",
            "dateModified": "2022-07-08"
        },
        {
            "_id": "HQsZhk3dA7bf",
            "name": "Ben Stein",
            "link": "https://en.wikipedia.org/wiki/Ben_Stein",
            "bio": "Benjamin Jeremy Stein (born November 25, 1944) is an American writer, lawyer, actor, comedian, and commentator on political and economic issues. He began his career as a speechwriter for U.S. presidents Richard Nixon and Gerald Ford before entering the entertainment field as an actor, comedian, and game show host.",
            "description": "American writer",
            "quoteCount": 1,
            "slug": "ben-stein",
            "dateAdded": "2020-03-01",
            "dateModified": "2020-03-01"
        },
        {
            "_id": "xAJjt7yV9kyd",
            "name": "Benjamin Disraeli",
            "link": "https://en.wikipedia.org/wiki/Benjamin_Disraeli",
            "bio": "Benjamin Disraeli, 1st Earl of Beaconsfield,  (21 December 1804 – 19 April 1881) was a British politician of the Conservative Party who twice served as Prime Minister of the United Kingdom. He played a central role in the creation of the modern Conservative Party, defining its policies and its broad outreach.",
            "description": "Former Prime Minister of the United Kingdom",
            "quoteCount": 10,
            "slug": "benjamin-disraeli",
            "dateAdded": "2019-03-24",
            "dateModified": "2022-07-06"
        },
        {
            "_id": "xkvcrqREjoOB",
            "name": "Benjamin Franklin",
            "link": "https://en.wikipedia.org/wiki/Benjamin_Franklin",
            "bio": "Benjamin Franklin  (January 17, 1706 –  April 17, 1790) was an American polymath and one of the Founding Fathers of the United States. Franklin was a leading writer, printer, political philosopher, politician, Freemason, postmaster, scientist, inventor, humorist, civic activist, statesman, and diplomat.",
            "description": "Founding Father of the United States",
            "quoteCount": 15,
            "slug": "benjamin-franklin",
            "dateAdded": "2019-02-13",
            "dateModified": "2019-02-13"
        },
        {
            "_id": "G99XFYhIFssE",
            "name": "Benjamin Haydon",
            "link": "https://en.wikipedia.org/wiki/Benjamin_Haydon",
            "bio": "Benjamin Robert Haydon (26 January 1786 – 22 June 1846) was a British painter who specialized in grand historical pictures, although he also painted a few contemporary subjects and portraits. ",
            "description": "British painter",
            "quoteCount": 1,
            "slug": "benjamin-haydon",
            "dateAdded": "2020-07-10",
            "dateModified": "2020-07-10"
        },
        {
            "_id": "jolipv2qzign",
            "name": "Benjamin Spock",
            "link": "https://en.wikipedia.org/wiki/Benjamin_Spock",
            "bio": "Benjamin McLane Spock (May 2, 1903 – March 15, 1998) was an American pediatrician whose book Baby and Child Care (1946) is one of the best-selling volumes in history.  The book's premise to mothers is that \"you know more than you think you do.\"Spock was the first pediatrician to study psychoanalysis to try to understand children's needs and family dynamics.",
            "description": "American pediatrician",
            "quoteCount": 1,
            "slug": "benjamin-spock",
            "dateAdded": "2019-08-16",
            "dateModified": "2019-08-16"
        },
        {
            "_id": "OnD02xz5tXz2",
            "name": "Bernadette Devlin",
            "link": "https://en.wikipedia.org/wiki/Bernadette_Devlin_McAliskey",
            "bio": "Josephine Bernadette McAliskey (born 23 April 1947) is an Irish civil rights leader, and former politician. She served as Member of Parliament for Mid Ulster from 1969 to 1974.",
            "description": "Politician",
            "quoteCount": 1,
            "slug": "bernadette-devlin",
            "dateAdded": "2019-02-21",
            "dateModified": "2019-02-21"
        },
        {
            "_id": "gk8iLycW0DFC",
            "name": "Bernard Shaw",
            "link": "https://en.wikipedia.org/wiki/George_Bernard_Shaw",
            "bio": "George Bernard Shaw (26 July 1856 – 2 November 1950), known at his insistence simply as Bernard Shaw, was an Irish playwright, critic, polemicist and political activist. ",
            "description": "Irish playwright",
            "quoteCount": 5,
            "slug": "bernard-shaw",
            "dateAdded": "2020-08-27",
            "dateModified": "2020-08-27"
        },
        {
            "_id": "Ae8IiFlqjCNO",
            "name": "Bernice Reagon",
            "link": "https://en.wikipedia.org/wiki/Bernice_Johnson_Reagon",
            "bio": "Bernice Johnson Reagon (born Bernice Johnson on October 4, 1942) is a song leader, composer, scholar, and social activist, who in the early 1960s was a founding member of the Student Non-violent Coordinating Committee's (SNCC) Freedom Singers in the Albany Movement in Georgia.",
            "description": "Composer",
            "quoteCount": 2,
            "slug": "bernice-reagon",
            "dateAdded": "2021-04-23",
            "dateModified": "2021-04-23"
        },
        {
            "_id": "ZfqJmz0vs6mH",
            "name": "Bertrand Russell",
            "link": "https://en.wikipedia.org/wiki/Bertrand_Russell",
            "bio": "Bertrand Arthur William Russell, 3rd Earl Russell,  (18 May 1872 – 2 February 1970) was a British philosopher, logician, mathematician, historian, writer, essayist, social critic, political activist, and Nobel laureate.",
            "description": "British philosopher",
            "quoteCount": 2,
            "slug": "bertrand-russell",
            "dateAdded": "2019-03-15",
            "dateModified": "2019-03-15"
        },
        {
            "_id": "Y1kvwVA5K3od",
            "name": "Betty Friedan",
            "link": "https://en.wikipedia.org/wiki/Betty_Friedan",
            "bio": "Betty Friedan (February 4, 1921 – February 4, 2006) was an American feminist writer and activist. A leading figure in the women's movement in the United States, her 1963 book The Feminine Mystique is often credited with sparking the second wave of American feminism in the 20th century.",
            "description": "American activist",
            "quoteCount": 1,
            "slug": "betty-friedan",
            "dateAdded": "2020-04-14",
            "dateModified": "2020-04-14"
        },
        {
            "_id": "F2QfUZKjXp",
            "name": "Bill Bradley",
            "link": "https://en.wikipedia.org/wiki/Bill_Bradley",
            "bio": "William Warren Bradley (born July 28, 1943) is an American politician and former professional basketball player. He served three terms as a Democratic U.S. Senator from New Jersey.",
            "description": "American basketball player",
            "quoteCount": 1,
            "slug": "bill-bradley",
            "dateAdded": "2020-02-22",
            "dateModified": "2020-02-22"
        },
        {
            "_id": "Yw-rv366ygs",
            "name": "Bill Veeck",
            "bio": "William Louis Veeck Jr. (February 9, 1914 – January 2, 1986), also known as \"Sport Shirt Bill\", was an American Major League Baseball franchise owner and promoter. Veeck was at various times the owner of the Cleveland Indians, St.",
            "description": "American baseball executive",
            "link": "https://en.wikipedia.org/wiki/Bill_Veeck",
            "quoteCount": 0,
            "slug": "bill-veeck",
            "dateAdded": "2022-07-06",
            "dateModified": "2022-07-08"
        },
        {
            "_id": "08gFFJ1-y",
            "name": "Bill Watterson",
            "link": "https://en.wikipedia.org/wiki/Bill_Watterson",
            "bio": "William Boyd Watterson II (born July 5, 1958) is an American former cartoonist and the author of the comic strip Calvin and Hobbes, which was syndicated from 1985 to 1995. Watterson stopped drawing Calvin and Hobbes at the end of 1995 with a short statement to newspaper editors and his readers that he felt he had achieved all he could in the medium.",
            "description": "American cartoonist",
            "quoteCount": 1,
            "slug": "bill-watterson",
            "dateAdded": "2020-03-07",
            "dateModified": "2020-03-07"
        },
        {
            "_id": "NKW7Gm9iM5VE",
            "name": "Billie Armstrong",
            "link": "https://en.wikipedia.org/wiki/Billie_Joe_Armstrong",
            "bio": "Billie Joe Armstrong (born February 17, 1972)  is an American singer, songwriter, musician, record producer, and actor.",
            "description": "American musician",
            "quoteCount": 1,
            "slug": "billie-armstrong",
            "dateAdded": "2020-12-10",
            "dateModified": "2020-12-10"
        },
        {
            "_id": "pBUE1r7m_n",
            "name": "Billie Jean King",
            "bio": "Billie Jean King (born November 22, 1943) is an American former world No. 1 tennis player. King won 39 major titles: 12 in singles (including a Career Grand Slam), 16 in women's doubles, and 11 in mixed doubles (including a Career Grand Slam).",
            "description": "American tennis player",
            "link": "https://en.wikipedia.org/wiki/Billie_Jean_King",
            "quoteCount": 2,
            "slug": "billie-jean-king",
            "dateAdded": "2022-07-06",
            "dateModified": "2022-07-06"
        },
        {
            "_id": "0J5yGPYjyp7",
            "name": "Billy Graham",
            "bio": "William Franklin Graham Jr. (November 7, 1918 – February 21, 2018) was an American evangelist and an ordained Southern Baptist minister who became well known internationally in the late 1940s. He was a prominent evangelical Christian figure, and according to a biographer, was \"among the most influential Christian leaders\" of the 20th century.Graham held large indoor and outdoor rallies with sermons that were broadcast on radio and television, with some still being re-broadcast into the 21st century.",
            "description": "American Christian evangelist",
            "link": "https://en.wikipedia.org/wiki/Billy_Graham",
            "quoteCount": 0,
            "slug": "billy-graham",
            "dateAdded": "2022-07-06",
            "dateModified": "2022-07-08"
        },
        {
            "_id": "XCKFkibv0Enp",
            "name": "Billy Wilder",
            "link": "https://en.wikipedia.org/wiki/Billy_Wilder",
            "bio": "Billy Wilder (June 22, 1906 – March 27, 2002) was an Austrian-born American film director and screenwriter whose career spanned more than five decades. He is regarded as one of the most brilliant and versatile filmmakers of the Hollywood Golden Age of cinema.",
            "description": "Austrian-American film director",
            "quoteCount": 1,
            "slug": "billy-wilder",
            "dateAdded": "2019-09-08",
            "dateModified": "2019-09-08"
        },
        {
            "_id": "RzEwhF8861WC",
            "name": "Blaise Pascal",
            "link": "https://en.wikipedia.org/wiki/Blaise_Pascal",
            "bio": "Blaise Pascal (19 June 1623 – 19 August 1662) was a French mathematician, physicist, inventor, writer and Catholic theologian. He was a child prodigy who was educated by his father, a tax collector in Rouen.",
            "description": "French mathematician",
            "quoteCount": 8,
            "slug": "blaise-pascal",
            "dateAdded": "2021-01-11",
            "dateModified": "2022-07-08"
        },
        {
            "_id": "NXEXnsgGDBD-",
            "name": "Bo Jackson",
            "link": "https://en.wikipedia.org/wiki/Bo_Jackson",
            "bio": "Vincent Edward \"Bo\" Jackson (born November 30, 1962) is an American former professional baseball and football player. He is the only professional athlete in history to be named an All-Star in both baseball and football.",
            "description": "American football player",
            "quoteCount": 1,
            "slug": "bo-jackson",
            "dateAdded": "2021-01-20",
            "dateModified": "2021-01-20"
        },
        {
            "_id": "3RYPDvqNMk",
            "name": "Bob Feller",
            "bio": "Robert William Andrew Feller (November 3, 1918 – December 15, 2010), nicknamed \"the Heater from Van Meter\", \"Bullet Bob\", and \"Rapid Robert\", was an American baseball pitcher who played 18 seasons in Major League Baseball (MLB) for the Cleveland Indians between 1936 and 1956. In a career spanning 570 games, Feller pitched 3,827 innings and posted a win–loss record of 266–162, with 279 complete games, 44 shutouts, and a 3.25 earned run average (ERA). His career 2,581 strikeouts were third all-time upon his retirement.",
            "description": "American baseball player",
            "link": "https://en.wikipedia.org/wiki/Bob_Feller",
            "quoteCount": 1,
            "slug": "bob-feller",
            "dateAdded": "2022-07-06",
            "dateModified": "2022-07-06"
        },
        {
            "_id": "GV7GdhUuo5M",
            "name": "Bob Hope",
            "bio": "Leslie Townes \"Bob\" Hope (May 29, 1903 – July 27, 2003) was a British-American comedian, vaudevillian, actor, singer and dancer. With a career that spanned nearly 80 years, Hope appeared in more than 70 short and feature films, with 54 feature films with Hope as star, including a series of seven \"Road to ...\" musical comedy movies with Bing Crosby as Hope's top-billed partner. In addition to hosting the Academy Awards show 19 times, more than any other host, Hope appeared in many stage productions and television roles and wrote 14 books.",
            "description": "American comedian, actor, singer and dancer",
            "link": "https://en.wikipedia.org/wiki/Bob_Hope",
            "quoteCount": 0,
            "slug": "bob-hope",
            "dateAdded": "2022-07-06",
            "dateModified": "2022-07-08"
        },
        {
            "_id": "EpiVZ7zT5hI",
            "name": "Bob Knight",
            "bio": "Robert Montgomery Knight (born October 25, 1940) is an American former basketball coach. Nicknamed \"the General\", Knight won 902 NCAA Division I men's college basketball games, a record at the time of his retirement, and currently fifth all-time, behind his former player and assistant coach Mike Krzyzewski of Duke, Roy Williams, Bob Huggins of WVU and Jim Boeheim of Syracuse, of which Huggins and Boeheim are still active. Knight is best known as the head coach of the Indiana Hoosiers from 1971 to 2000.",
            "description": "College Basketball coach",
            "link": "https://en.wikipedia.org/wiki/Bob_Knight",
            "quoteCount": 1,
            "slug": "bob-knight",
            "dateAdded": "2022-07-06",
            "dateModified": "2022-07-06"
        },
        {
            "_id": "_0_zYdYAx1N",
            "name": "Bob Lemon",
            "bio": "Robert Granville Lemon (September 22, 1920 – January 11, 2000) was an American right-handed pitcher and manager in Major League Baseball (MLB). Lemon was elected to the National Baseball Hall of Fame in 1976. Lemon was raised in California where he played high school baseball and was the state player of the year in 1938.",
            "description": "American baseball player and manager",
            "link": "https://en.wikipedia.org/wiki/Bob_Lemon",
            "quoteCount": 0,
            "slug": "bob-lemon",
            "dateAdded": "2022-07-06",
            "dateModified": "2022-07-08"
        },
        {
            "_id": "rOMLLDFKiexu",
            "name": "Bob Newhart",
            "link": "https://en.wikipedia.org/wiki/Bob_Newhart",
            "bio": "George Robert Newhart (born September 5, 1929) is an American stand-up comedian and actor noted for his deadpan and slightly stuttering delivery. ",
            "description": "American comedian and actor",
            "quoteCount": 1,
            "slug": "bob-newhart",
            "dateAdded": "2019-02-13",
            "dateModified": "2019-02-13"
        },
        {
            "_id": "j_6g1TuzBV",
            "name": "Bobby Unser",
            "bio": "Robert William Unser (February 20, 1934 – May 2, 2021) was an American automobile racer. At his induction into the Motorsports Hall of Fame of America in 1994, he had the fourth most IndyCar Series wins at 35 (behind his brother Al, A. J. Foyt, and Mario Andretti). Unser won the 1968 and 1974 United States Automobile Club (USAC) national championships.",
            "description": "American racecar driver",
            "link": "https://en.wikipedia.org/wiki/Bobby_Unser",
            "quoteCount": 1,
            "slug": "bobby-unser",
            "dateAdded": "2022-07-06",
            "dateModified": "2022-07-06"
        },
        {
            "_id": "fWl5MapaecEv",
            "name": "Bodhidharma",
            "link": "https://en.wikipedia.org/wiki/Bodhidharma",
            "bio": "Bodhidharma   was a Buddhist monk who lived during the 5th or 6th century. He is traditionally credited as the transmitter of Chan Buddhism to China, and regarded as its first Chinese patriarch.",
            "description": "Indian-Chinese philosopher",
            "quoteCount": 2,
            "slug": "bodhidharma",
            "dateAdded": "2019-12-23",
            "dateModified": "2019-12-23"
        },
        {
            "_id": "r_-4pFw8M_xI",
            "name": "Booker T. Washington",
            "link": "https://en.wikipedia.org/wiki/Booker_T._Washington",
            "bio": "Booker Taliaferro Washington (April 5 1856 – November 14 1915) was an American educator, author, orator, and adviser to multiple presidents of the United States.",
            "description": "African-American educator",
            "quoteCount": 2,
            "slug": "booker-t-washington",
            "dateAdded": "2019-10-18",
            "dateModified": "2019-10-18"
        },
        {
            "_id": "G_7wyJ3-4L",
            "name": "Bradley Whitford",
            "bio": "Bradley Whitford (born October 10, 1959) is an American actor and producer. He is best known for his portrayal of White House Deputy Chief of Staff Josh Lyman in the NBC television political drama The West Wing (1999–2006), for which he was nominated for three consecutive Primetime Emmy Awards from 2001 to 2003, winning in 2001. This role also earned him three consecutive Golden Globe Award nominations.",
            "description": "American actor",
            "link": "https://en.wikipedia.org/wiki/Bradley_Whitford",
            "quoteCount": 0,
            "slug": "bradley-whitford",
            "dateAdded": "2022-07-06",
            "dateModified": "2022-07-08"
        },
        {
            "_id": "vm1uplgbjsuK",
            "name": "Brendan Behan",
            "link": "https://en.wikipedia.org/wiki/Brendan_Behan",
            "bio": "Brendan Francis Aidan Behan was an Irish poet, short story writer, novelist and playwright who wrote in both English and Irish. He is widely regarded as one of the greatest Irish writers of all time.",
            "description": "Irish poet",
            "quoteCount": 1,
            "slug": "brendan-behan",
            "dateAdded": "2021-02-12",
            "dateModified": "2021-02-12"
        },
        {
            "_id": "oi_JocE-2",
            "name": "Brian O'Driscoll",
            "link": "https://en.wikipedia.org/wiki/Brian_O%27Driscoll",
            "bio": "Brian Gerard O'Driscoll (born 21 January 1979) is a former Irish professional rugby union player. He played at outside centre for the Irish provincial team Leinster and for Ireland.",
            "description": "Rugby player",
            "quoteCount": 1,
            "slug": "brian-o-driscoll",
            "dateAdded": "2019-12-23",
            "dateModified": "2019-12-23"
        },
        {
            "_id": "VC1mZHGb7rAH",
            "name": "Brian Tracy",
            "link": "https://en.wikipedia.org/wiki/Brian_Tracy",
            "bio": "Brian Tracy (born January 5, 1944) is a Canadian-American motivational public speaker and self-development author. He is the author of over seventy books that have been translated into dozens of languages.",
            "description": "American-Canadian motivational speaker",
            "quoteCount": 4,
            "slug": "brian-tracy",
            "dateAdded": "2019-08-08",
            "dateModified": "2019-08-08"
        },
        {
            "_id": "--45SWenpb",
            "name": "Brooks Adams",
            "link": "https://en.wikipedia.org/wiki/Brooks_Adams",
            "bio": "Peter Chardon Brooks Adams (June 24, 1848 – February 13, 1927) was an American historian, political scientist and a critic of capitalism.",
            "description": "American historian",
            "quoteCount": 1,
            "slug": "brooks-adams",
            "dateAdded": "2021-05-07",
            "dateModified": "2021-05-07"
        },
        {
            "_id": "raaFe2cXACnG",
            "name": "Bruce Lee",
            "link": "https://en.wikipedia.org/wiki/Bruce_Lee",
            "bio": "Lee Jun-fan (November 27, 1940 – July 20, 1973), known professionally as Bruce Lee, was a Hong Kong-American actor, director, martial artist, martial arts instructor, and philosopher.",
            "description": "Chinese-American actor",
            "quoteCount": 15,
            "slug": "bruce-lee",
            "dateAdded": "2019-09-13",
            "dateModified": "2019-09-13"
        },
        {
            "_id": "avG6nQOjQGxL",
            "name": "Buckminster Fuller",
            "link": "https://en.wikipedia.org/wiki/Buckminster_Fuller",
            "bio": "Richard Buckminster Fuller (July 12, 1895 – July 1, 1983) was an American architect, systems theorist, author, designer, inventor, and futurist.",
            "description": "American architect",
            "quoteCount": 2,
            "slug": "buckminster-fuller",
            "dateAdded": "2019-08-16",
            "dateModified": "2019-08-16"
        },
        {
            "_id": "bUWx0bMUCf8X",
            "name": "Calvin Coolidge",
            "link": "https://en.wikipedia.org/wiki/Calvin_Coolidge",
            "bio": "Calvin Coolidge (July 4, 1872 – January 5, 1933) was an American politician and lawyer who served as the 30th president of the United States from 1923 to 1929.",
            "description": "30th president of the United States",
            "quoteCount": 3,
            "slug": "calvin-coolidge",
            "dateAdded": "2021-04-23",
            "dateModified": "2021-04-23"
        },
        {
            "_id": "U13IdZpNTOJ4",
            "name": "Camillo Benso, Count of Cavour",
            "link": "https://en.wikipedia.org/wiki/Camillo_Benso,_Count_of_Cavour",
            "bio": "Camillo Paolo Filippo Giulio Benso, Count of Cavour, Isolabella and Leri, generally known as Cavour, was an Italian statesman and a leading figure in the movement toward Italian unification. ",
            "description": "First Prime Minister of Italy",
            "quoteCount": 1,
            "slug": "camillo-benso-count-of-cavour",
            "dateAdded": "2019-09-13",
            "dateModified": "2019-09-13"
        },
        {
            "_id": "-LYBJJujV7RL",
            "name": "Carl Jung",
            "link": "https://en.wikipedia.org/wiki/Carl_Jung",
            "bio": "Carl Gustav Jung was a Swiss psychiatrist and psychoanalyst who founded analytical psychology. Jung's work was influential in the fields of psychiatry, anthropology, archaeology, literature, philosophy, and religious studies. Jung worked as a research scientist at the famous Burghölzli hospital, under Eugen Bleuler.",
            "description": "Swiss psychiatrist",
            "quoteCount": 13,
            "slug": "carl-jung",
            "dateAdded": "2020-12-17",
            "dateModified": "2020-12-17"
        },
        {
            "_id": "6_H0cQA6A54",
            "name": "Carl Lewis",
            "bio": "Frederick Carlton Lewis (born July 1, 1961) is an American former track and field athlete who won nine Olympic gold medals, one Olympic silver medal, and 10 World Championships medals, including eight gold. His career spanned from 1979 to 1996, when he last won an Olympic event. He is one of only six Olympic athletes who won a gold medal in the same individual event in four consecutive Olympic Games.",
            "description": "American track and field athlete",
            "link": "https://en.wikipedia.org/wiki/Carl_Lewis",
            "quoteCount": 1,
            "slug": "carl-lewis",
            "dateAdded": "2022-07-06",
            "dateModified": "2022-07-06"
        },
        {
            "_id": "W2oRVCp-mXLC",
            "name": "Carl Sagan",
            "link": "https://en.wikipedia.org/wiki/Carl_Sagan",
            "bio": "Carl Edward Sagan was an American astronomer, cosmologist, astrophysicist, astrobiologist, author, science popularizer, and science communicator in astronomy and other natural sciences. He is best known as a science popularizer and communicator.",
            "description": "American astrophysicist",
            "quoteCount": 1,
            "slug": "carl-sagan",
            "dateAdded": "2019-12-23",
            "dateModified": "2019-12-23"
        },
        {
            "_id": "4Daz2A6st-cr",
            "name": "Carl Sandburg",
            "link": "https://en.wikipedia.org/wiki/Carl_Sandburg",
            "bio": "Carl August Sandburg was an American poet, biographer, journalist, and editor. He won three Pulitzer Prizes: two for his poetry and one for his biography of Abraham Lincoln.",
            "description": "American writer",
            "quoteCount": 1,
            "slug": "carl-sandburg",
            "dateAdded": "2019-06-27",
            "dateModified": "2019-06-27"
        },
        {
            "_id": "Cp_ouLv13Wdl",
            "name": "Carlos Castaneda",
            "link": "https://en.wikipedia.org/wiki/Carlos_Castaneda",
            "bio": "Carlos Castaneda (December 25, 1925 – April 27, 1998) was an American author. Starting with The Teachings of Don Juan in 1968, Castaneda wrote a series of books that describe his training in shamanism, particularly with a group whose lineage descended from the Toltecs.",
            "description": "Peruvian-American author",
            "quoteCount": 1,
            "slug": "carlos-castaneda",
            "dateAdded": "2019-08-03",
            "dateModified": "2019-08-03"
        },
        {
            "_id": "EqIMEwBTW",
            "name": "Carol Burnett",
            "link": "https://en.wikipedia.org/wiki/Carol_Burnett",
            "bio": "Carol Creighton Burnett (born April 26, 1933) is an American actress, comedian, singer, and writer, whose career spans seven decades of television. She is best known for her groundbreaking comedy variety show, The Carol Burnett Show, originally aired on CBS. It was the first of its kind to be hosted by a woman.",
            "description": "American actress",
            "quoteCount": 1,
            "slug": "carol-burnett",
            "dateAdded": "2020-01-15",
            "dateModified": "2020-01-15"
        },
        {
            "_id": "QCOjV9cHev9p",
            "name": "Caroline Myss",
            "link": "https://en.wikipedia.org/wiki/Caroline_Myss",
            "bio": "Caroline Myss (born 1952) is an American author of numerous books and audio tapes, including five New York Times Best Sellers: Anatomy of the Spirit (1996), Why People Don't Heal and How They Can (1998), Sacred Contracts (2002), Invisible Acts of Power (2004), Entering The Castle (2007), and Defy Gravity (2009). Her most recent book, Archetypes: Who Are You?",
            "description": "American author",
            "quoteCount": 1,
            "slug": "caroline-myss",
            "dateAdded": "2020-07-10",
            "dateModified": "2020-07-10"
        },
        {
            "_id": "Us_hPj3jx_",
            "name": "Carrie Snow",
            "link": "https://en.wikipedia.org/wiki/Carrie_Snow",
            "bio": "Carrie Snow is an American stand-up comedian, comic writer known for writing for the television series Roseanne, and actor. Snow was also featured in the documentary The Aristocrats.",
            "description": "American comedian",
            "quoteCount": 1,
            "slug": "carrie-snow",
            "dateAdded": "2019-11-16",
            "dateModified": "2019-11-16"
        },
        {
            "_id": "ROp1ujfE-XQ",
            "name": "Casey Stengel",
            "bio": "Charles Dillon \"Casey\" Stengel (July 30, 1890 – September 29, 1975) was an American Major League Baseball right fielder and manager, best known as the manager of the championship New York Yankees of the 1950s and later, the expansion New York Mets. He was elected to the Baseball Hall of Fame in 1966. Stengel was born in Kansas City, Missouri, in 1890.",
            "description": "American baseball player and manager",
            "link": "https://en.wikipedia.org/wiki/Casey_Stengel",
            "quoteCount": 1,
            "slug": "casey-stengel",
            "dateAdded": "2022-07-06",
            "dateModified": "2022-07-06"
        },
        {
            "_id": "xrdeE5_J6f",
            "name": "Caterina Fake",
            "link": "https://en.wikipedia.org/wiki/Caterina_Fake",
            "bio": "Caterina Fake is an American entrepreneur and businesswoman. She co-founded the websites Flickr in 2004 and Hunch in 2011.",
            "description": "American entrepreneur",
            "quoteCount": 1,
            "slug": "caterina-fake",
            "dateAdded": "2020-04-02",
            "dateModified": "2020-04-02"
        },
        {
            "_id": "Bd3pLEtLR0Se",
            "name": "Cecil B. DeMille",
            "link": "https://en.wikipedia.org/wiki/Cecil_B._DeMille",
            "bio": "Cecil Blount DeMille (August 12, 1881 – January 21, 1959) was an American filmmaker. Between 1914 and 1958, he made a total of 70 features, both silent and sound films.",
            "description": "American filmmaker",
            "quoteCount": 1,
            "slug": "cecil-b-de-mille",
            "dateAdded": "2019-06-27",
            "dateModified": "2019-06-27"
        },
        {
            "_id": "qCcu5PupXp",
            "name": "Cecil Rhodes",
            "bio": "Cecil John Rhodes (5 July 1853 – 26 March 1902) was a British mining magnate and politician in southern Africa who served as Prime Minister of the Cape Colony from 1890 to 1896. An ardent believer in British imperialism, Rhodes and his British South Africa Company founded the southern African territory of Rhodesia (now Zimbabwe and Zambia), which the company named after him in 1895. South Africa's Rhodes University is also named after him.",
            "description": "British mining magnate and politician",
            "link": "https://en.wikipedia.org/wiki/Cecil_Rhodes",
            "quoteCount": 0,
            "slug": "cecil-rhodes",
            "dateAdded": "2022-07-06",
            "dateModified": "2022-07-08"
        },
        {
            "_id": "szWyArKJErGq",
            "name": "Chanakya",
            "link": "https://en.wikipedia.org/wiki/Chanakya",
            "bio": "Chanakya was an ancient Indian teacher, philosopher, economist, jurist and royal advisor. He is traditionally identified as Kauṭilya or Vishnugupta, who authored the ancient Indian political treatise, the Arthashastra, a text dated to roughly between the 2nd century BCE and the 3rd century CE.",
            "description": "Ancient Indian philosopher",
            "quoteCount": 3,
            "slug": "chanakya",
            "dateAdded": "2019-09-19",
            "dateModified": "2019-09-19"
        },
        {
            "_id": "QQ9Wq60vXY",
            "name": "Charles Caleb Colton",
            "link": "https://en.wikipedia.org/wiki/Charles_Caleb_Colton",
            "bio": "Charles Caleb Colton (11 December 1777 - 28 April 1832) was an English cleric, writer and collector, well known for his eccentricities.Colton was educated at Eton and King's College, graduating with a B.A. in 1801 and an M.A. in 1804.",
            "description": "English cleric",
            "quoteCount": 1,
            "slug": "charles-caleb-colton",
            "dateAdded": "2019-02-20",
            "dateModified": "2019-02-20"
        },
        {
            "_id": "GNBQ9c3Q5Q82",
            "name": "Charles Darwin",
            "link": "https://en.wikipedia.org/wiki/Charles_Darwin",
            "bio": "Charles Robert Darwin,  (12 February 1809 – 19 April 1882) was an English naturalist, geologist and biologist, best known for his contributions to the science of evolution. His proposition that all species of life have descended over time from common ancestors is now widely accepted, and considered a foundational concept in science.",
            "description": "English naturalist and biologist",
            "quoteCount": 1,
            "slug": "charles-darwin",
            "dateAdded": "2020-01-26",
            "dateModified": "2020-01-26"
        },
        {
            "_id": "w9OqfzaX5ol2",
            "name": "Charles de Lint",
            "link": "https://en.wikipedia.org/wiki/Charles_de_Lint",
            "bio": "Charles de Lint (born December 22, 1951) is a Canadian writer of Dutch origins. He is married to—and plays music with—MaryAnn Harris.",
            "description": "Canadian fantasy author",
            "quoteCount": 0,
            "slug": "charles-de-lint",
            "dateAdded": "2020-09-09",
            "dateModified": "2020-09-09"
        },
        {
            "_id": "lNa4RDfiR9-b",
            "name": "Charles Dickens",
            "link": "https://en.wikipedia.org/wiki/Charles_Dickens",
            "bio": "Charles John Huffam Dickens  (7 February 1812 – 9 June 1870) was an English writer and social critic. He created some of the world's best-known fictional characters and is regarded by many as the greatest novelist of the Victorian era.",
            "description": "English author",
            "quoteCount": 9,
            "slug": "charles-dickens",
            "dateAdded": "2021-04-15",
            "dateModified": "2023-04-14"
        },
        {
            "_id": "8G_HSflQ1PQK",
            "name": "Charles Du Bos",
            "link": "https://en.wikipedia.org/wiki/Charles_Du_Bos",
            "bio": "Charles Du Bos (27 October 1882 – 5 August 1939) was a French essayist and critic, known for works including Approximations (1922–37), a seven-volume collection of essays and letters, and for his Journal, an autobiographical work published posthumously from 1946 to 1961",
            "description": "French essayist",
            "quoteCount": 1,
            "slug": "charles-du-bos",
            "dateAdded": "2020-07-10",
            "dateModified": "2020-07-10"
        },
        {
            "_id": "WgmCymUQ6U",
            "name": "Charles Eastman",
            "link": "https://en.wikipedia.org/wiki/Charles_Eastman",
            "bio": "Charles Alexander Eastman (February 19, 1858 – January 8, 1939) was a Santee Dakota physician educated at Boston University, writer, national lecturer, and reformer. In the early 20th century, he was \"one of the most prolific authors and speakers on Sioux ethnohistory  and American Indian affairs.\"Eastman was of Santee Dakota, English and French ancestry.",
            "description": "Native American physician",
            "quoteCount": 1,
            "slug": "charles-eastman",
            "dateAdded": "2020-09-05",
            "dateModified": "2020-09-05"
        },
        {
            "_id": "_YgKGdbW154B",
            "name": "Charles F. Kettering",
            "link": "https://en.wikipedia.org/wiki/Charles_F._Kettering",
            "bio": "Charles Franklin Kettering sometimes known as Charles \"Boss\" Kettering was an American inventor, engineer, businessman, and the holder of 186 patents. He was a founder of Delco, and was head of research at General Motors from 1920 to 1947. ",
            "description": "American inventor",
            "quoteCount": 2,
            "slug": "charles-f-kettering",
            "dateAdded": "2020-01-15",
            "dateModified": "2022-07-06"
        },
        {
            "_id": "0ls0m5UbTEBg",
            "name": "Charles Henry Parkhurst",
            "link": "https://en.wikipedia.org/wiki/Charles_Henry_Parkhurst",
            "bio": "Charles Henry Parkhurst (April 17, 1842 – September 8, 1933) was an American clergyman and social reformer, born in Framingham, Massachusetts. Although scholarly and reserved, he preached two sermons in 1892 in which he attacked the political corruption of New York City government.",
            "description": "United States clergyman",
            "quoteCount": 1,
            "slug": "charles-henry-parkhurst",
            "dateAdded": "2019-09-19",
            "dateModified": "2019-09-19"
        },
        {
            "_id": "eDH_-mE56",
            "name": "Charles Kingsley",
            "link": "https://en.wikipedia.org/wiki/Charles_Kingsley",
            "bio": "Charles Kingsley (12 June 1819 – 23 January 1875) was a broad church priest of the Church of England, a university professor, social reformer, historian and novelist. He is particularly associated with Christian socialism, the working men's college, and forming labour cooperatives that failed but led to the working reforms of the progressive era.",
            "description": "English clergyman",
            "quoteCount": 1,
            "slug": "charles-kingsley",
            "dateAdded": "2021-05-05",
            "dateModified": "2021-05-05"
        },
        {
            "_id": "IIIEMwxwGqWX",
            "name": "Charles Lamb",
            "link": "https://en.wikipedia.org/wiki/Charles_Lamb",
            "bio": "Charles Lamb (10 February 1775 – 27 December 1834) was an English essayist, poet, and antiquarian, best known for his Essays of Elia and for the children's book Tales from Shakespeare, co-authored with his sister, Mary Lamb (1764–1847).",
            "description": "English essayist",
            "quoteCount": 1,
            "slug": "charles-lamb",
            "dateAdded": "2021-04-23",
            "dateModified": "2021-04-23"
        },
        {
            "_id": "iiI-IIHcZBK6",
            "name": "Charles Lindbergh",
            "link": "https://en.wikipedia.org/wiki/Charles_Lindbergh",
            "bio": "Charles Augustus Lindbergh was an American aviator, military officer, author, inventor, and activist. At age 25 in 1927, he went from obscurity as a U.S. Air Mail pilot to instantaneous world fame by winning the Orteig Prize for making a nonstop flight from New York to Paris. ",
            "description": "American aviator",
            "quoteCount": 1,
            "slug": "charles-lindbergh",
            "dateAdded": "2020-12-06",
            "dateModified": "2020-12-06"
        },
        {
            "_id": "N_cD5lb0E-",
            "name": "Charles Péguy",
            "link": "https://en.wikipedia.org/wiki/Charles_P%C3%A9guy",
            "bio": "Charles Pierre Péguy (7 January 1873 – 5 September 1914) was a noted French poet, essayist, and editor. His two main philosophies were socialism and nationalism, but by 1908 at the latest, after years of uneasy agnosticism, he had become a believing but non-practicing Roman Catholic.",
            "description": "French poet",
            "quoteCount": 1,
            "slug": "charles-peguy",
            "dateAdded": "2020-03-27",
            "dateModified": "2020-03-27"
        },
        {
            "_id": "NMEA9EINM",
            "name": "Charles Spurgeon",
            "link": "https://en.wikipedia.org/wiki/Charles_Spurgeon",
            "bio": "Charles Haddon Spurgeon (19 June 1834 – 31 January 1892) was an English Particular Baptist preacher. Spurgeon remains highly influential among Christians of various denominations, among whom he is known as the \"Prince of Preachers\".",
            "description": "British preacher",
            "quoteCount": 1,
            "slug": "charles-spurgeon",
            "dateAdded": "2021-01-19",
            "dateModified": "2021-01-19"
        },
        {
            "_id": "ATQjES-_ebWe",
            "name": "Charles W. Chesnutt",
            "link": "https://en.wikipedia.org/wiki/Charles_W._Chesnutt",
            "bio": "Charles Waddell Chesnutt was an African-American author, essayist, political activist and lawyer, best known for his novels and short stories exploring complex issues of racial and social identity in the post-Civil War South.",
            "description": "American author",
            "quoteCount": 1,
            "slug": "charles-w-chesnutt",
            "dateAdded": "2020-01-15",
            "dateModified": "2020-01-15"
        },
        {
            "_id": "eGCag3Sdkr1H",
            "name": "Charlotte Brontë",
            "link": "https://en.wikipedia.org/wiki/Charlotte_Bront%C3%AB",
            "bio": "Charlotte Brontë (21 April 1816 – 31 March 1855) was an English novelist and poet, the eldest of the three Brontë sisters who survived into adulthood and whose novels became classics of English literature.",
            "description": "Novelist",
            "quoteCount": 2,
            "slug": "charlotte-bronte",
            "dateAdded": "2019-08-08",
            "dateModified": "2019-08-08"
        },
        {
            "_id": "sdaj7mszRWz9",
            "name": "Charlotte Perkins Gilman",
            "link": "https://en.wikipedia.org/wiki/Charlotte_Perkins_Gilman",
            "bio": "Charlotte Perkins Gilman (July 3, 1860 – August 17, 1935), also known as Charlotte Perkins Stetson, her first married name, was a prominent American humanist, novelist, writer of short stories, poetry and nonfiction, and a lecturer for social reform.",
            "description": "American feminist",
            "quoteCount": 2,
            "slug": "charlotte-perkins-gilman",
            "dateAdded": "2020-01-27",
            "dateModified": "2020-01-27"
        },
        {
            "_id": "wB50BJqPfuOT",
            "name": "Cheng Yen",
            "link": "https://en.wikipedia.org/wiki/Cheng_Yen",
            "bio": "Cheng Yen (born 14 May 1937) is a Taiwanese Buddhist nun, teacher, and philanthropist. She is the founder of the Buddhist Compassion Relief Tzu Chi Foundation, ordinarily referred to as Tzu Chi, a Buddhist humanitarian organization based in Taiwan.",
            "description": "Taiwanese nun",
            "quoteCount": 1,
            "slug": "cheng-yen",
            "dateAdded": "2019-09-13",
            "dateModified": "2019-09-13"
        },
        {
            "_id": "TkSUUWhff_",
            "name": "Christian Dior",
            "link": "https://en.wikipedia.org/wiki/Christian_Dior",
            "bio": "Christian Dior (21 January 1905 – 23 October 1957) was a French fashion designer, best known as the founder of one of the world's top fashion houses, also called Christian Dior, which is now owned by Groupe Arnault. His fashion houses are now all around the world.",
            "description": "French fashion designer",
            "quoteCount": 1,
            "slug": "christian-dior",
            "dateAdded": "2020-12-08",
            "dateModified": "2020-12-08"
        },
        {
            "_id": "RA6PaAv4N",
            "name": "Christie Brinkley",
            "link": "https://en.wikipedia.org/wiki/Christie_Brinkley",
            "bio": "Christie Brinkley (born February 2, 1954) is an American model, actress, and entrepreneur. Brinkley gained worldwide fame with her appearances in the late 1970s Sports Illustrated Swimsuit Issues, ultimately appearing on an unprecedented three consecutive covers starting in 1979.",
            "description": "American model",
            "quoteCount": 1,
            "slug": "christie-brinkley",
            "dateAdded": "2020-03-27",
            "dateModified": "2020-03-27"
        },
        {
            "_id": "SWPwu5PcQUso",
            "name": "Christopher Morley",
            "link": "https://en.wikipedia.org/wiki/Christopher_Morley",
            "bio": "Christopher Morley (5 May 1890 – 28 March 1957) was an American journalist, novelist, essayist and poet. He also produced stage productions for a few years and gave college lectures.",
            "description": "American journalist",
            "quoteCount": 2,
            "slug": "christopher-morley",
            "dateAdded": "2020-04-15",
            "dateModified": "2020-04-15"
        },
        {
            "_id": "PqFMyspwcMwo",
            "name": "Christopher Reeve",
            "link": "https://en.wikipedia.org/wiki/Christopher_Reeve",
            "bio": "Christopher D'Olier Reeve (September 25, 1952 – October 10, 2004) was an American actor, writer and director. He was best known for playing DC comic book superhero Superman, beginning with the acclaimed Superman (1978), for which he won a BAFTA Award.",
            "description": "American actor",
            "quoteCount": 3,
            "slug": "christopher-reeve",
            "dateAdded": "2019-03-17",
            "dateModified": "2019-03-17"
        },
        {
            "_id": "Z4m5QFeB-9tD",
            "name": "Chuck Norris",
            "link": "https://en.wikipedia.org/wiki/Chuck_Norris",
            "bio": "Carlos Ray \"Chuck\" Norris (born March 10, 1940) is an American martial artist, actor, film producer and screenwriter.  After serving in the United States Air Force, Norris won many martial arts championships and later founded his own discipline Chun Kuk Do.",
            "description": "American martial artist",
            "quoteCount": 2,
            "slug": "chuck-norris",
            "dateAdded": "2020-09-05",
            "dateModified": "2020-09-05"
        },
        {
            "_id": "-ZWPZRVnResf",
            "name": "Chuck Swindoll",
            "link": "https://en.wikipedia.org/wiki/Chuck_Swindoll",
            "bio": "Charles Rozell \"Chuck\" Swindoll (born October 18, 1934) is an evangelical Christian pastor, author, educator, and radio preacher. He founded Insight for Living, headquartered in Frisco, Texas, which airs a radio program of the same name on more than 2,000 stations around the world in 15 languages.",
            "description": "Pastor",
            "quoteCount": 3,
            "slug": "chuck-swindoll",
            "dateAdded": "2020-12-06",
            "dateModified": "2020-12-06"
        },
        {
            "_id": "Q0ST4Mo5byuo",
            "name": "Cicero",
            "link": "https://en.wikipedia.org/wiki/Cicero",
            "bio": "Marcus Tullius Cicero (3 January 106 BC – 7 December 43 BC) was a Roman statesman, lawyer and philosopher who wrote extensively on rhetoric, orations, philosophy and politics, and is considered one of Rome's greatest orators and prose stylists.",
            "description": "Roman statesman and philosopher",
            "quoteCount": 9,
            "slug": "cicero",
            "dateAdded": "2019-08-08",
            "dateModified": "2019-08-08"
        },
        {
            "_id": "Y3mgXKqW-",
            "name": "Clay Shirky",
            "link": "https://en.wikipedia.org/wiki/Clay_Shirky",
            "bio": "Clay Shirky (born 1964) is an American writer, consultant and teacher on the social and economic effects of Internet technologies and journalism. He has a joint appointment at New York University (NYU) as a Distinguished Writer in Residence at the Arthur L. Carter Journalism Institute and Assistant Arts Professor in the New Media focused graduate Interactive Telecommunications Program (ITP).",
            "description": "American writer",
            "quoteCount": 1,
            "slug": "clay-shirky",
            "dateAdded": "2021-03-28",
            "dateModified": "2021-03-28"
        }
    ]

    return authorList;
      //authorlist is a result of the type array, containing an array of objects which 
      //represent a book per opbject in the .results object of the data returned. https://api.quotable.io"
      ///search/authors?query=Einstein
}

//this function needs to have an author slug which is part of the autor JSON object.

function fetchQuotes(author) {
    
    console.log("author is", author);
    params = `${QUOTES_ENDPOINT}?author=${author}`; 
    console.log(`${QUOTES_URL}${params}`);
    fetchUrl = `${QUOTES_URL}${params}`;

    fetch(fetchUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.results);
<<<<<<< HEAD
    }); */

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
        }
    ]
    return quotesList;
=======
    }); 
    
>>>>>>> 0c88b6ffb37075404a73ac7836fc3d944436ddb6

}

console.log(fetchTags()); //fetch all tags from QUOTES_URL
console.log(fetchQuotes("a-a-milne")); //fetch all quotes from QUOTES_ENDPOINT
console.log(fetchAuthors("love")); //fetch all authors from AUTHORS_ENDPOINT


