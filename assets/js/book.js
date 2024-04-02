/* JavaScript Document */
/* =============================================================
 	First Name		: Strahinja     					    
 	Last Name		: Popovic					            
 	Developer Name  : codeXdeveloper			        
 	WebMaster Email	: spope.mails@gmail.com               
 ============================================================== */

/* ***************************************************************************************** */
/* JavaScript CODE ************************************************************************* */
/* ***************************************************************************************** */
const MESSAGE = "Book IPA Starting ...";
console.log(MESSAGE);

//----------------------------------------------
const displayBooks = document.querySelector("#book-list");
const errorBooksParagraph = document.createElement("p");
//----------------------------------------------
const BTN_GET_CITY_WEATHER = document.querySelector("#submit");
const BTN_CLEAR_ALL_DATA = document.querySelector("#clear");
//----------------------------------------------
const errorSelectedDiv = document.querySelector("#error-message");
const errorParagraph = document.createElement("p");
//----------------------------------------------
const inputSelectedBook = document.querySelector("#book");
//----------------------------------------------
const fetchBook = function(bookName) {
	bookName = bookName.split(" ").join("%20");
	const bookURL = `https://openlibrary.org/search.json?q=${bookName}&fields=*,availability&limit=1`;
	fetch(bookURL).then(function(response) {
		if(response.ok) {
			response.json().then(function(bookData) {
				console.log(bookData);
				console.log(`
https://covers.openlibrary.org/b/olid/${bookData.docs[0].cover_edition_key}-M.jpg\n
${bookData.docs[0].title}\n
by ${bookData.docs[0].author_name[0]}\n
First published in ${bookData.docs[0].publish_year[0]}\n
${bookData.docs[0].edition_count} editions in ${bookData.docs[0].language.length} languages\n
First sentence: ${bookData.docs[0].first_sentence[10]}`);
				console.log(`subject_key[0] = ${bookData.docs[0].subject_key[0]}`);
				let subject = "";
				for (const literature of bookData.docs[0].subject_key) {
					if(literature === "english_literature") {
						subject = literature;
					}
					else if(literature === "russian_language") {
						subject = literature;
					}
				}

				console.log(subject)
				fetchRelatedBooks(bookData.docs[0].author_key[0]);
			});
		}
	});
}
fetchBook("Lord of The Rings");

//Book name search
//`https://openlibrary.org/search.json?q=${bookName}&fields=*,availability&limit=1`

//Author
//`https://openlibrary.org/authors/${bookData.docs[0].author_key[0]}.json`.

//National Literature
//`https://openlibrary.org/subjects/russian_literature.json`
//`https://openlibrary.org/subjects/english_literature.json`

//Cover API ${cover_edition_key}
//`https://covers.openlibrary.org/b/olid/${cover_edition_key}-S.jpg`
//`https://covers.openlibrary.org/b/olid/OL22856696M-M.jpg`

const fetchRelatedBooks = function(authorKey) {
	const authorBookskURL = `https://openlibrary.org/subjects/english_literature.json`;
	fetch(authorBookskURL).then(function(response) {
		if(response.ok) {
			response.json().then(function(authorBooks) {
				console.log(authorBooks);
				//console.log(``);
			});
		}
	});
}