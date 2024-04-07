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

//Author photos
//`https://covers.openlibrary.org/a/id/6377428-M.jpg`

//Authors work
//https://openlibrary.org/authors/OL22242A/works.json

//National Literature
//`https://openlibrary.org/subjects/russian_literature.json`
//`https://openlibrary.org/subjects/english_literature.json`

//Cover API ${cover_edition_key}
//`https://covers.openlibrary.org/b/olid/${cover_edition_key}-S.jpg`
//`https://covers.openlibrary.org/b/olid/OL22856696M-M.jpg`
/* ***************************************************************************************** */
/* ***************************************************************************************** */
//----------------------------------------------
const displayBooks = document.querySelector("#book-list");
const errorBooksParagraph = document.createElement("p");
//----------------------------------------------
const BTN_GET_BOOK = document.querySelector("#submit");
const BTN_CLEAR_DATA = document.querySelector("#clear");
//----------------------------------------------
const errorSelectedDiv = document.querySelector("#error-message");
const errorParagraph = document.createElement("p");
const errorLoading = document.createElement("p");
const errorSelectedDivStorage = document.querySelector("#error-storage-empty");
const errorParagraphStorage = document.createElement("p");
//----------------------------------------------
const inputSelectedBook = document.querySelector("#book");
//----------------------------------------------
const displayCurrentCover = document.querySelector("#book-cover");
const currentCoverImg = document.createElement("img");
const displayCurrentBook = document.querySelector("#book-current");
const title = document.createElement("p");
const author = document.createElement("p");
const publish = document.createElement("p");
const edition = document.createElement("p");
const sentenceTitle = document.createElement("p");
const sentence = document.createElement("p");
//----------------------------------------------
$(document).ready(function() {
	//If localStorage empty default operational state
	if(JSON.parse(localStorage.getItem("book")) === null) {
		errorParagraphStorage.textContent = `( ${he.decode("&#8709;")} ) - Book history is empty`;
		errorSelectedDivStorage.appendChild(errorParagraphStorage);
	}
	else {
		//Default book rendering displayed from localStorage if exists
		//displayStorageBook();
	}
});
//----------------------------------------------
const testGetBookDetails = async function(bookName) {
	bookName = bookName.toString().split(" ").join("%20");
	const bookURL = `https://openlibrary.org/search.json?q=${bookName}&mode=everything`;
	await fetch(bookURL).then(async function(response) {
		if(response.ok) {
			await response.json().then(function(bookData) {
				console.log(bookData);
				//getAuthor(`${bookData.docs[0].author_key[0]}`);
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
testGetBookDetails("Crime and Punishment");
//----------------------------------------------
const displayMessage = document.querySelector("#loadingMessage");
const messageParagraph = document.createElement("p");
//----------------------------------------------
const inputBook = document.querySelector("#book");
//----------------------------------------------
const getChckBookInput = function(bookName) {
	if(!bookName) {
		errorParagraph.textContent = "( * ) - Insert book name";
		errorSelectedDiv.appendChild(errorParagraph);
	}
	else{
		inputBook.value = "";
		errorParagraph.textContent = "";
		errorSelectedDiv.appendChild(errorParagraph);
		messageParagraph.textContent = "Loading...";
		displayMessage.appendChild(messageParagraph);
		getBookDetails(bookName);
	}
}
//----------------------------------------------
const getBookDetails = async function (bookName) {
	bookName = bookName.toString().split(" ").join("%20");
	const bookURL = `https://openlibrary.org/search.json?q=${bookName}&mode=everything`;
	const response = await fetch(bookURL);

	if(response.ok) {
		return await response.json().then( async (bookData) => {
			if(bookData.numFound !== 0) {

				errorLoading.textContent = "";
				errorSelectedDiv.appendChild(errorLoading);
				errorParagraphStorage.textContent = "";
				errorSelectedDivStorage.appendChild(errorParagraphStorage);
				
				let title = bookData.docs[0].title;
				let author = bookData.docs[0].author_name[0];
				let firstPub = bookData.docs[0].publish_year[0];
				let eCount = bookData.docs[0].edition_count;
				let numLang;
				let firstSent;

				if(bookData.docs[0].language === undefined) {
					numLang = "[ N/A ]";
				}
				else {
					numLang = bookData.docs[0].language.length;
				}

				if(bookData.docs[0].first_sentence === undefined) {
					firstSent = "[ N/A ]";
				}
				else {
					firstSent = bookData.docs[0].first_sentence[bookData.docs[0].first_sentence.length - 1];
				}
				
				console.log(bookData);
				
				let bookArray = [];
				const bookObject = {
					title: title,
					author: author,
					firstPub: firstPub,
					eCount: eCount,
					numLang: numLang,
					firstSent: firstSent,
				};
				bookArray.push(bookObject);
				bookArray = bookArray.concat(JSON.parse(localStorage.getItem("book")) || [] );
				localStorage.setItem("book", JSON.stringify(bookArray));
				
				messageParagraph.textContent = "";
				displayMessage.appendChild(messageParagraph);

				document.querySelector("#sub-sub").style.visibility = "visible";
				document.querySelector("#sub-sub-2").style.visibility = "visible";

				fetchBookCore(bookName, bookData, numLang, firstSent);
			}
			else {
				errorLoading.textContent = "";
				errorSelectedDiv.appendChild(errorLoading);
				messageParagraph.textContent = "";
				displayMessage.appendChild(messageParagraph);
				errorParagraph.textContent = `( ${he.decode("&#9888;")} ) - Book name not found`;
				errorSelectedDiv.appendChild(errorParagraph);
			}
		});
	}
	else {
		errorLoading.textContent = "";
		errorSelectedDiv.appendChild(errorLoading);
		messageParagraph.textContent = "";
		displayMessage.appendChild(messageParagraph);
		errorParagraph.textContent = `Status code: ( ${response.status.toString()} )`;
		errorSelectedDiv.appendChild(errorParagraph);
	}
}
//----------------------------------------------
const displayStorageBook = function() {
	if(JSON.parse(localStorage.getItem("book")) !== null) {
		
	}
}
//----------------------------------------------
const fetchBookCore = function(bookName, bookData, numLang, firstSent) {
	if(bookName.toString().split("%20").join(" ").toLowerCase() === "crime and punishment") {
					
		currentCoverImg.setAttribute("src", `https://covers.openlibrary.org/b/olid/${bookData.docs[1].cover_edition_key}-M.jpg`);
		currentCoverImg.setAttribute("alt", "Open Library Cover API image");
		displayCurrentCover.appendChild(currentCoverImg);

		title.textContent = `${bookData.docs[2].title}`;
		displayCurrentBook.appendChild(title);

		author.textContent = `by ${bookData.docs[0].author_alternative_name[33]}`;
		displayCurrentBook.appendChild(author);

		publish.textContent = `First published in ${bookData.docs[0].publish_year[0]}`;
		displayCurrentBook.appendChild(publish);

		edition.textContent = `${bookData.docs[0].edition_count} editions in ${bookData.docs[0].language.length} languages`;
		displayCurrentBook.appendChild(edition);

		if(bookData.docs[0].first_sentence !== undefined) {
			sentenceTitle.textContent = `${bookData.docs[2].title} starts with first sentence:`;
			displayCurrentBook.appendChild(sentenceTitle);
		
			sentence.textContent = `${bookData.docs[0].first_sentence[bookData.docs[0].first_sentence.length - 1]}`;
			displayCurrentBook.appendChild(sentence);
		}
	}
	else {

		currentCoverImg.setAttribute("src", `https://covers.openlibrary.org/b/olid/${bookData.docs[0].cover_edition_key}-M.jpg`);
		currentCoverImg.setAttribute("alt", "Open Library Cover API image");
		displayCurrentCover.appendChild(currentCoverImg);

		title.textContent = `${bookData.docs[0].title}`;
		displayCurrentBook.appendChild(title);

		author.textContent = `by ${bookData.docs[0].author_name[0]}`;
		displayCurrentBook.appendChild(author);

		publish.textContent = `First published in ${bookData.docs[0].publish_year[0]}`;
		displayCurrentBook.appendChild(publish);

		edition.textContent = `${bookData.docs[0].edition_count} editions in ${numLang} languages`;
		displayCurrentBook.appendChild(edition);
		
		sentenceTitle.textContent = `${bookData.docs[0].title} starts with first sentence:`;
		displayCurrentBook.appendChild(sentenceTitle);
	
		sentence.textContent = `${firstSent}`;
		displayCurrentBook.appendChild(sentence);
	}
	//----------------------------------------------
	let subject;
	if(bookData.docs[0].subject_key !== undefined) {
	
		subject = bookData.docs[0].subject_key[0];
	}
	else {
		subject = "classic_literature";
	}
		console.log(`Classic literature test output = ${subject}`);
		console.log(`Author key: ${bookData.docs[0].author_key[0]}`);
		getRelatedBooks(`${bookData.docs[0].author_key[0]}`);
		getAuthor(`${bookData.docs[0].author_key[0]}`);
}
//----------------------------------------------
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
//----------------------------------------------
const displayPhoto = document.querySelector("#author-img");
const displayDetails = document.querySelector("#author-current");
const displayBio = document.querySelector("#author-bio");
const paragraphTitleMain = document.createElement("p");
const paragraphDates = document.createElement("p");
const paragraphBio = document.createElement("p");
const authorPhoto = document.createElement("img");
//----------------------------------------------
const getAuthor = async function(authorKey) {
	const authorURL = `https://openlibrary.org/authors/${authorKey}.json`;
	const response = await fetch(authorURL);
	if(response.ok) {
		return await response.json().then(function(authorData) {
			console.log(authorData);

			console.log(authorData.bio);

			if(authorData.photos === undefined) {
				authorPhoto.setAttribute("src", `./assets/images/book/default-book-img.png`);
				authorPhoto.setAttribute("alt", "Open Library API Photo image");
			}
			else {
				authorPhoto.setAttribute("src", `https://covers.openlibrary.org/a/id/${authorData.photos[0]}-M.jpg`);
				console.log(`Author photo number is: ${authorData.photos[0]}`);
				authorPhoto.setAttribute("alt", "Open Library API Photo image");
			}
		
			paragraphTitleMain.textContent = `${authorData.personal_name}`;
			displayDetails.appendChild(paragraphTitleMain);
			//----------------------------------------------
			let deathDate = authorData.death_date;
			if(deathDate === undefined) {
				deathDate = "";
			}
			//----------------------------------------------
			paragraphDates.textContent = `${authorData.birth_date} - ${deathDate}`;
			displayDetails.appendChild(paragraphDates);

			displayPhoto.appendChild(authorPhoto);
			//----------------------------------------------

			if(authorData.bio !== undefined) {
				paragraphBio.textContent = `${authorData.bio}`;
				displayBio.appendChild(paragraphBio);
				console.log(authorData.bio);
			}
			else {
				paragraphBio.textContent = "Bio Data: [ N/A ]";
				displayBio.appendChild(paragraphBio);
				console.log(authorData.bio);
			}

			if(authorData.bio.value !== undefined) {
				paragraphBio.textContent = `${authorData.bio.value}`;
				displayBio.appendChild(paragraphBio);
				console.log(authorData.bio.value);
			}
			//----------------------------------------------
		});
	}
}
//----------------------------------------------
const getRelatedBooks = function(authorKey) {
	const literatureURL = `https://openlibrary.org/authors/${authorKey}/works.json`;
	fetch(literatureURL).then(function(response) {
		if(response.ok) {
			response.json().then(function(worksData) {
				console.log(worksData);

				for(let i = 0; i < worksData.entries.length; i++) {
					if(worksData.entries[i].covers[0]) {
						const displayWorks = document.querySelector("#book-list");
						const p = document.createElement("p");
						p.textContent = `${worksData.entries[i].covers[0]}`;
					}
				}
			});
		}
	});
}
//----------------------------------------------
BTN_GET_BOOK.addEventListener("click", function(e) {
	e.preventDefault();
	e.stopPropagation();
	let bookName = document.querySelector("#book").value;
	getChckBookInput(bookName);
});
//----------------------------------------------
document.querySelector("#book").addEventListener("keyup", (event) => {
    event.preventDefault();
	event.stopPropagation();
    if (event.keyCode === 13) {
        document.querySelector("#submit").click();
    }
});
//----------------------------------------------
BTN_CLEAR_DATA.addEventListener("click", function(event) {
	event.preventDefault();
	event.stopPropagation();
	localStorage.clear();
	window.location.reload();
});
//----------------------------------------------