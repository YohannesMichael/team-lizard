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
/* ***************************************************************************************** */
/* ***************************************************************************************** */
const MESSAGE = "Book IPA Starting ...";
console.log(MESSAGE);
//----------------------------------------------
const displayBooks = document.querySelector("#book-list");
const errorBooksParagraph = document.createElement("p");
//----------------------------------------------
const BTN_GET_BOOK = document.querySelector("#submit");
const BTN_CLEAR_DATA = document.querySelector("#clear");
//----------------------------------------------
const errorSelectedDiv = document.querySelector("#error-message");
const errorParagraph = document.createElement("p");
//----------------------------------------------
const inputSelectedBook = document.querySelector("#book");
//----------------------------------------------
const displayCurrentCover = document.querySelector("#book-cover");
const currentCoverImg = document.createElement("img");
const displayCurrentBook = document.querySelector("#book-current");
const currentBookParagraph = document.createElement("p");
//----------------------------------------------
const getBookDetails = async function(bookName) {
	bookName = bookName.split(" ").join("%20");
	const bookURL = `https://openlibrary.org/search.json?q=${bookName}&mode=everything`;
	await fetch(bookURL).then(async function(response) {
		if(response.ok) {
			await response.json().then(function(bookData) {
				console.log(bookData);
				getAuthor(`${bookData.docs[0].author_key[0]}`);
//----------------------------------------------				
//-----------Testing console output-------------
//----------------------------------------------
console.log(`
https://covers.openlibrary.org/b/olid/${bookData.docs[0].cover_edition_key}-M.jpg\n
${bookData.docs[0].title}\n
by ${bookData.docs[0].author_name[0]}\n
First published in ${bookData.docs[0].publish_year[0]}\n
${bookData.docs[0].edition_count} editions in ${bookData.docs[0].language.length} languages\n
First sentence: ${bookData.docs[0].first_sentence[10]}`);
//----------------------------------------------
			});
		}
	});
}

const displayMessage = document.querySelector("#book-cover");
const messageParagraph = document.createElement("p");
messageParagraph.textContent = "Please wait...";

const testGetBook = async function (bookName) {
	const bookURL = `https://openlibrary.org/search.json?q=${bookName}&mode=everything`;
	const response = await fetch(bookURL);
	displayMessage.appendChild(messageParagraph);
	return await response.json();
}

const getCoverImg = function(coverEditionKey) {
	const coverEditionKeyURL = `https://covers.openlibrary.org/b/olid/${coverEditionKey}-M.jpg`;
	fetch(coverEditionKeyURL).then(function(response) {
		if(response.ok) {
			response.json().then(function(coverImage) {
				console.log(coverImage);
			});
		}
	});
}

const getAuthor = async function(authorKey) {
	const authorURL = `https://openlibrary.org/authors/${authorKey}.json`;
	await fetch(authorURL).then(async function(response) {
		if(response.ok) {
			await response.json().then(function(authorData) {
				console.log(authorData);
			});
		}
	});
}

const getRelatedBooks = function(literature) {
	const literatureURL = `https://openlibrary.org/subjects/${literature}.json`;
	fetch(literatureURL).then(function(response) {
		if(response.ok) {
			response.json().then(function(literature) {
				console.log(literature);
			});
		}
	});
}

BTN_GET_BOOK.addEventListener("click", function(e) {
	e.preventDefault();
	e.stopPropagation();
	let bookName = document.querySelector("#book").value;
	testGetBook(bookName).then(bookData => {
		console.log(bookData);
		messageParagraph.textContent = "";
		displayMessage.appendChild(messageParagraph);
		if(bookName.toString().split("%20").join(" ").toLowerCase() === "crime and punishment") {
			currentCoverImg.setAttribute("src", `https://covers.openlibrary.org/b/olid/${bookData.docs[1].cover_edition_key}-M.jpg`);
			currentCoverImg.setAttribute("alt", "Open Library Cover API image");
			displayCurrentCover.appendChild(currentCoverImg);
			currentBookParagraph.textContent = `
			${bookData.docs[2].title}
			by ${bookData.docs[0].author_alternative_name[33]}
			First published in ${bookData.docs[0].publish_year[0]}
			${bookData.docs[0].edition_count} editions in ${bookData.docs[0].language.length} languages\n
			First sentence: 
			${bookData.docs[0].first_sentence[bookData.docs[0].first_sentence.length - 1]}`;
			displayCurrentBook.appendChild(currentBookParagraph);
		}
		else {
			currentCoverImg.setAttribute("src", `https://covers.openlibrary.org/b/olid/${bookData.docs[0].cover_edition_key}-M.jpg`);
			currentCoverImg.setAttribute("alt", "Open Library Cover API image");
			displayCurrentCover.appendChild(currentCoverImg);
			currentBookParagraph.textContent = `
			${bookData.docs[0].title}
			by ${bookData.docs[0].author_name[0]}
			First published in ${bookData.docs[0].publish_year[0]}
			${bookData.docs[0].edition_count} editions in ${bookData.docs[0].language.length} languages\n
			First sentence: 
			${bookData.docs[0].first_sentence[bookData.docs[0].first_sentence.length - 1]}`;
			displayCurrentBook.appendChild(currentBookParagraph);
		}


		let subject;
		for (const literature of bookData.docs[0].subject_key) {
			if(literature === "english_literature") {
				subject = literature;
			}
			else if(literature === "russian_literature") {
				subject = literature;
			}
		}
		console.log(subject);
		getRelatedBooks(subject);
	});
})