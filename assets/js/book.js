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
	
	if(JSON.parse(localStorage.getItem("book")) !== null) {
		errorParagraphStorage.textContent = "";
		errorSelectedDivStorage.appendChild(errorParagraphStorage);
		displayStorageBook();
	}
	else if(JSON.parse(localStorage.getItem("book")) === null) {
		errorParagraphStorage.textContent = `( ${he.decode("&#8709;")} ) - Book history is empty`;
		errorSelectedDivStorage.appendChild(errorParagraphStorage);
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
testGetBookDetails("crime and punishment");
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
				let coverImg;
				if(bookData.docs[0].cover_edition_key === undefined) {
					coverImg = "./assets/images/book/default-book-img.png";
				}
				else {
					coverImg = `https://covers.openlibrary.org/b/olid/${bookData.docs[0].cover_edition_key}-M.jpg`;
				}
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
					published: firstPub,
					countEdit: eCount,
					langNum: numLang,
					firstSent: firstSent,
					cover: coverImg,
				};
				bookArray.push(bookObject);
				bookArray = bookArray.concat(JSON.parse(localStorage.getItem("book")) || [] );
				localStorage.setItem("book", JSON.stringify(bookArray));
				
				messageParagraph.textContent = "";
				displayMessage.appendChild(messageParagraph);

				document.querySelector("#sub-sub").style.visibility = "visible";
				document.querySelector("#sub-sub-2").style.visibility = "visible";

				fetchBookCore(bookName, bookData, coverImg, numLang, firstSent);
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

	messageParagraph.textContent = "Loading...";
	displayMessage.appendChild(messageParagraph);

	document.querySelector("#sub-sub").style.visibility = "visible";
	document.querySelector("#sub-sub-2").style.visibility = "visible";

	currentCoverImg.setAttribute("src", JSON.parse(localStorage.getItem("book"))[0].cover);
	currentCoverImg.setAttribute("alt", "Open Library Cover API image");
	displayCurrentCover.appendChild(currentCoverImg);

	title.textContent = JSON.parse(localStorage.getItem("book"))[0].title;
	displayCurrentBook.appendChild(title);

	author.textContent = `by ${JSON.parse(localStorage.getItem("book"))[0].author}`;
	displayCurrentBook.appendChild(author);

	publish.textContent = `First published in ${JSON.parse(localStorage.getItem("book"))[0].published}`;
	displayCurrentBook.appendChild(publish);

	edition.textContent = `${JSON.parse(localStorage.getItem("book"))[0].countEdit} editions in ${JSON.parse(localStorage.getItem("book"))[0].langNum} languages`;
	displayCurrentBook.appendChild(edition);
	
	sentenceTitle.textContent = `${JSON.parse(localStorage.getItem("book"))[0].title} starts with first sentence:`;
	displayCurrentBook.appendChild(sentenceTitle);

	sentence.textContent = `${JSON.parse(localStorage.getItem("book"))[0].firstSent}`;
	displayCurrentBook.appendChild(sentence);

	bName = JSON.parse(localStorage.getItem("book"))[0].title.toString().split(" ").join("%20");
	const bookURL = `https://openlibrary.org/search.json?q=${bName}&mode=everything`;
	fetch(bookURL).then( (response) => {
		if(response.ok) {
			response.json().then( (data) => {
				getRelatedBooks(data);
				getAuthor(`${data.docs[0].author_key[0]}`);

				messageParagraph.textContent = "";
				displayMessage.appendChild(messageParagraph);
			});
		}
	});
}
//----------------------------------------------
const fetchBookCore = function(bookName, bookData, coverImg, numLang, firstSent) {
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
		currentCoverImg.setAttribute("src", coverImg);
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
	getRelatedBooks(bookData);
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
			console.log(`Author bio: ${authorData.bio}`);
			//----------------------------------------------
			if(authorData.photos === undefined || !authorData.photos) {
				authorPhoto.setAttribute("src", `./assets/images/book/default-book-img.png`);
				authorPhoto.setAttribute("alt", "Open Library API Photo image");
			}
			else {
				authorPhoto.setAttribute("src", `https://covers.openlibrary.org/a/id/${authorData.photos[0]}-M.jpg`);
				console.log(`Author photo number is: ${authorData.photos[0]}`);
				authorPhoto.setAttribute("alt", "Open Library API Photo image");
			}
			displayPhoto.appendChild(authorPhoto);
			//----------------------------------------------
			paragraphTitleMain.textContent = `${authorData.personal_name}`;
			displayDetails.appendChild(paragraphTitleMain);
			//----------------------------------------------
			let deathDate = authorData.death_date;
			if(deathDate === undefined) {
				deathDate = "";
			}
			paragraphDates.textContent = `${authorData.birth_date} - ${deathDate}`;
			displayDetails.appendChild(paragraphDates);
			//----------------------------------------------
			if(authorData.bio === undefined && authorData.bio.value === undefined) {
				paragraphBio.textContent = "Bio Data: [ N/A ]";
			}
			if(authorData.bio.value === undefined && authorData.bio !== undefined) {
				paragraphBio.textContent = `${authorData.bio}`;
			}
			if(authorData.bio.value !== undefined && authorData.bio === undefined) {
				paragraphBio.textContent = `${authorData.bio.value}`;
			}
			displayBio.appendChild(paragraphBio);
			//----------------------------------------------
		});
	}
}
//----------------------------------------------
const displayBookCover_1 = document.querySelector("#book-1-cover");
const displayBookTitle_1 = document.querySelector("#book-1-desc");
const paragrapBookTitle_1 = document.createElement("p");
const paragrapBookAuthor_1 = document.createElement("p");
const paragrapBookPublished_1 = document.createElement("p");
const paragrapBookEditionLang_1 = document.createElement("p");
const coverBookImg_1 = document.createElement("img");

const displayBookCover_2 = document.querySelector("#book-2-cover");
const displayBookTitle_2 = document.querySelector("#book-2-desc");
const paragrapBookTitle_2 = document.createElement("p");
const paragrapBookAuthor_2 = document.createElement("p");
const paragrapBookPublished_2 = document.createElement("p");
const paragrapBookEditionLang_2 = document.createElement("p");
const coverBookImg_2 = document.createElement("img");

const displayBookCover_3 = document.querySelector("#book-3-cover");
const displayBookTitle_3 = document.querySelector("#book-3-desc");
const paragrapBookTitle_3 = document.createElement("p");
const paragrapBookAuthor_3 = document.createElement("p");
const paragrapBookPublished_3 = document.createElement("p");
const paragrapBookEditionLang_3 = document.createElement("p");
const coverBookImg_3 = document.createElement("img");

const displayBookCover_4 = document.querySelector("#book-4-cover");
const displayBookTitle_4 = document.querySelector("#book-4-desc");
const paragrapBookTitle_4 = document.createElement("p");
const paragrapBookAuthor_4 = document.createElement("p");
const paragrapBookPublished_4 = document.createElement("p");
const paragrapBookEditionLang_4 = document.createElement("p");
const coverBookImg_4 = document.createElement("img");

const displayBookCover_5 = document.querySelector("#book-5-cover");
const displayBookTitle_5 = document.querySelector("#book-5-desc");
const paragrapBookTitle_5 = document.createElement("p");
const paragrapBookAuthor_5 = document.createElement("p");
const paragrapBookPublished_5 = document.createElement("p");
const paragrapBookEditionLang_5 = document.createElement("p");
const coverBookImg_5 = document.createElement("img");

const displayBookCover_6 = document.querySelector("#book-6-cover");
const displayBookTitle_6 = document.querySelector("#book-6-desc");
const paragrapBookTitle_6 = document.createElement("p");
const paragrapBookAuthor_6 = document.createElement("p");
const paragrapBookPublished_6 = document.createElement("p");
const paragrapBookEditionLang_6 = document.createElement("p");
const coverBookImg_6 = document.createElement("img");

const displayBookCover_7 = document.querySelector("#book-7-cover");
const displayBookTitle_7 = document.querySelector("#book-7-desc");
const paragrapBookTitle_7 = document.createElement("p");
const paragrapBookAuthor_7 = document.createElement("p");
const paragrapBookPublished_7 = document.createElement("p");
const paragrapBookEditionLang_7 = document.createElement("p");
const coverBookImg_7 = document.createElement("img");

const displayBookCover_8 = document.querySelector("#book-8-cover");
const displayBookTitle_8 = document.querySelector("#book-8-desc");
const paragrapBookTitle_8 = document.createElement("p");
const paragrapBookAuthor_8 = document.createElement("p");
const paragrapBookPublished_8 = document.createElement("p");
const paragrapBookEditionLang_8 = document.createElement("p");
const coverBookImg_8 = document.createElement("img");

const displayBookCover_9 = document.querySelector("#book-9-cover");
const displayBookTitle_9 = document.querySelector("#book-9-desc");
const paragrapBookTitle_9 = document.createElement("p");
const paragrapBookAuthor_9 = document.createElement("p");
const paragrapBookPublished_9 = document.createElement("p");
const paragrapBookEditionLang_9 = document.createElement("p");
const coverBookImg_9 = document.createElement("img");

const displayBookCover_10 = document.querySelector("#book-10-cover");
const displayBookTitle_10 = document.querySelector("#book-10-desc");
const paragrapBookTitle_10 = document.createElement("p");
const paragrapBookAuthor_10 = document.createElement("p");
const paragrapBookPublished_10 = document.createElement("p");
const paragrapBookEditionLang_10 = document.createElement("p");
const coverBookImg_10 = document.createElement("img");

const displayBookCover_11 = document.querySelector("#book-11-cover");
const displayBookTitle_11 = document.querySelector("#book-11-desc");
const paragrapBookTitle_11 = document.createElement("p");
const paragrapBookAuthor_11 = document.createElement("p");
const paragrapBookPublished_11 = document.createElement("p");
const paragrapBookEditionLang_11 = document.createElement("p");
const coverBookImg_11 = document.createElement("img");

const displayBookCover_12 = document.querySelector("#book-12-cover");
const displayBookTitle_12 = document.querySelector("#book-12-desc");
const paragrapBookTitle_12 = document.createElement("p");
const paragrapBookAuthor_12 = document.createElement("p");
const paragrapBookPublished_12 = document.createElement("p");
const paragrapBookEditionLang_12 = document.createElement("p");
const coverBookImg_12 = document.createElement("img");
//----------------------------------------------
const getRelatedBooks = function(bookData) {
	document.querySelector("#middle").style.display = "flex";
	//----------------------------------------------
	let coverURL_1, coverURL_2, coverURL_3, coverURL_4, coverURL_5, coverURL_6, coverURL_7, coverURL_8, coverURL_9, coverURL_10, coverURL_11, coverURL_12;
	//----------------------------------------------
	if(bookData.docs[1].cover_edition_key === undefined) {

		coverURL_1 = `./assets/images/book/default-book-img.png`;
	}
	else {
		coverURL_1 = `https://covers.openlibrary.org/b/olid/${bookData.docs[1].cover_edition_key}-M.jpg`;
	}
	let publishYear_1;
	if(bookData.docs[1].publish_year === undefined) {
		publishYear_1 = " [ N/A ]";
	}
	else {
		publishYear_1 = bookData.docs[1].publish_year[0];
	}
	let titleRelated_1;
	if(bookData.docs[1].title === undefined) {
		titleRelated_1 = " [ N/A ]";
	}
	else {
		titleRelated_1 = bookData.docs[1].title;
	}
	if(bookData.docs[1].language === undefined) {
		numLang_1 = "[ N/A ]";
	}
	else {
		numLang_1 = bookData.docs[1].language.length;
	}
	let authorNameDisplay_1;
	if(bookData.docs[1].author_name === undefined)
	{
		authorNameDisplay_1 = "[ N/A ]";
	}
	else {
		authorNameDisplay_1 = bookData.docs[1].author_name[0];
	}
	coverBookImg_1.setAttribute("src", coverURL_1);
	coverBookImg_1.setAttribute("alt", "Open Library API Image");
	displayBookCover_1.appendChild(coverBookImg_1);
	paragrapBookTitle_1.textContent = `${titleRelated_1}`;
	displayBookTitle_1.appendChild(paragrapBookTitle_1);
	paragrapBookAuthor_1.textContent = `by ${authorNameDisplay_1}`;
	displayBookTitle_1.appendChild(paragrapBookAuthor_1);
	paragrapBookPublished_1.textContent = `First published in ${publishYear_1}`;
	displayBookTitle_1.appendChild(paragrapBookPublished_1);
	paragrapBookEditionLang_1.textContent = `${bookData.docs[1].edition_count} editions in ${numLang_1} languages`;
	displayBookTitle_1.appendChild(paragrapBookEditionLang_1);

	displayBookCover_1.addEventListener("click", (event) => {
		event.preventDefault();
		event.stopPropagation();
		if(bookData.docs[1].title === undefined) {
			messageParagraph.textContent = "Link [ N/A ]";
			displayMessage.appendChild(messageParagraph);
		}
		else {
			getBookDetails(bookData.docs[1].title);
		}
	});
	//----------------------------------------------
	if(bookData.docs[2].cover_edition_key === undefined) {

		coverURL_2 = `./assets/images/book/default-book-img.png`;
	}
	else {
		coverURL_2 = `https://covers.openlibrary.org/b/olid/${bookData.docs[2].cover_edition_key}-M.jpg`;
	}
	let publishYear_2;
	if(bookData.docs[2].publish_year === undefined) {
		publishYear_2 = " [ N/A ]";
	}
	else {
		publishYear_2 = bookData.docs[2].publish_year[0];
	}
	let titleRelated_2;
	if(bookData.docs[2].title === undefined) {
		titleRelated_2 = " [ N/A ]";
	}
	else {
		titleRelated_2 = bookData.docs[2].title;
	}
	if(bookData.docs[2].language === undefined) {
		numLang_2 = "[ N/A ]";
	}
	else {
		numLang_2 = bookData.docs[2].language.length;
	}
	let authorNameDisplay_2;
	if(bookData.docs[2].author_name === undefined)
	{
		authorNameDisplay_2 = "[ N/A ]";
	}
	else {
		authorNameDisplay_2 = bookData.docs[2].author_name[0];
	}
	coverBookImg_2.setAttribute("src", coverURL_2);
	coverBookImg_2.setAttribute("alt", "Open Library API Image");
	displayBookCover_2.appendChild(coverBookImg_2);
	paragrapBookTitle_2.textContent = `${titleRelated_2}`;
	displayBookTitle_2.appendChild(paragrapBookTitle_2);
	paragrapBookAuthor_2.textContent = `by ${authorNameDisplay_2}`;
	displayBookTitle_2.appendChild(paragrapBookAuthor_2);
	paragrapBookPublished_2.textContent = `First published in ${publishYear_2}`;
	displayBookTitle_2.appendChild(paragrapBookPublished_2);
	paragrapBookEditionLang_2.textContent = `${bookData.docs[2].edition_count} editions in ${numLang_2} languages`;
	displayBookTitle_2.appendChild(paragrapBookEditionLang_2);

	displayBookCover_2.addEventListener("click", (event) => {
		event.preventDefault();
		event.stopPropagation();
		if(bookData.docs[2].title === undefined) {
			messageParagraph.textContent = "Link [ N/A ]";
			displayMessage.appendChild(messageParagraph);
		}
		else {
			getBookDetails(bookData.docs[2].title);
		}
	});
	//----------------------------------------------
	if(bookData.docs[3].cover_edition_key === undefined) {

		coverURL_3 = `./assets/images/book/default-book-img.png`;
	}
	else {
		coverURL_3 = `https://covers.openlibrary.org/b/olid/${bookData.docs[3].cover_edition_key}-M.jpg`;
	}
	let publishYear_3;
	if(bookData.docs[3].publish_year === undefined) {
		publishYear_3 = " [ N/A ]";
	}
	else {
		publishYear_3 = bookData.docs[3].publish_year[0];
	}
	let titleRelated_3;
	if(bookData.docs[3].title === undefined) {
		titleRelated_3 = " [ N/A ]";
	}
	else {
		titleRelated_3 = bookData.docs[3].title;
	}
	if(bookData.docs[3].language === undefined) {
		numLang_3 = "[ N/A ]";
	}
	else {
		numLang_3 = bookData.docs[3].language.length;
	}
	let authorNameDisplay_3;
	if(bookData.docs[3].author_name === undefined)
	{
		authorNameDisplay_3 = "[ N/A ]";
	}
	else {
		authorNameDisplay_3 = bookData.docs[3].author_name[0];
	}
	coverBookImg_3.setAttribute("src", coverURL_3);
	coverBookImg_3.setAttribute("alt", "Open Library API Image");
	displayBookCover_3.appendChild(coverBookImg_3);
	paragrapBookTitle_3.textContent = `${titleRelated_3}`;
	displayBookTitle_3.appendChild(paragrapBookTitle_3);
	paragrapBookAuthor_3.textContent = `by ${authorNameDisplay_3}`;
	displayBookTitle_3.appendChild(paragrapBookAuthor_3);
	paragrapBookPublished_3.textContent = `First published in ${publishYear_3}`;
	displayBookTitle_3.appendChild(paragrapBookPublished_3);
	paragrapBookEditionLang_3.textContent = `${bookData.docs[3].edition_count} editions in ${numLang_3} languages`;
	displayBookTitle_3.appendChild(paragrapBookEditionLang_3);

	displayBookCover_3.addEventListener("click", (event) => {
		event.preventDefault();
		event.stopPropagation();
		if(bookData.docs[3].title === undefined) {
			messageParagraph.textContent = "Link [ N/A ]";
			displayMessage.appendChild(messageParagraph);
		}
		else {
			getBookDetails(bookData.docs[3].title);
		}
	});
	//----------------------------------------------
	if(bookData.docs[4].cover_edition_key === undefined) {

		coverURL_4 = `./assets/images/book/default-book-img.png`;
	}
	else {
		coverURL_4 = `https://covers.openlibrary.org/b/olid/${bookData.docs[4].cover_edition_key}-M.jpg`;
	}
	let publishYear_4;
	if(bookData.docs[4].publish_year === undefined) {
		publishYear_4 = " [ N/A ]";
	}
	else {
		publishYear_4 = bookData.docs[4].publish_year[0];
	}
	let titleRelated_4;
	if(bookData.docs[4].title === undefined) {
		titleRelated_4 = " [ N/A ]";
	}
	else {
		titleRelated_4 = bookData.docs[4].title;
	}
	if(bookData.docs[4].language === undefined) {
		numLang_4 = "[ N/A ]";
	}
	else {
		numLang_4 = bookData.docs[4].language.length;
	}
	let authorNameDisplay_4;
	if(bookData.docs[4].author_name === undefined)
	{
		authorNameDisplay_4 = "[ N/A ]";
	}
	else {
		authorNameDisplay_4 = bookData.docs[4].author_name[0];
	}
	coverBookImg_4.setAttribute("src", coverURL_4);
	coverBookImg_4.setAttribute("alt", "Open Library API Image");
	displayBookCover_4.appendChild(coverBookImg_4);
	paragrapBookTitle_4.textContent = `${titleRelated_4}`;
	displayBookTitle_4.appendChild(paragrapBookTitle_4);
	paragrapBookAuthor_4.textContent = `by ${authorNameDisplay_4}`;
	displayBookTitle_4.appendChild(paragrapBookAuthor_4);
	paragrapBookPublished_4.textContent = `First published in ${publishYear_4}`;
	displayBookTitle_4.appendChild(paragrapBookPublished_4);
	paragrapBookEditionLang_4.textContent = `${bookData.docs[4].edition_count} editions in ${numLang_2} languages`;
	displayBookTitle_4.appendChild(paragrapBookEditionLang_4);

	displayBookCover_4.addEventListener("click", (event) => {
		event.preventDefault();
		event.stopPropagation();
		if(bookData.docs[4].title === undefined) {
			messageParagraph.textContent = "Link [ N/A ]";
			displayMessage.appendChild(messageParagraph);
		}
		else {
			getBookDetails(bookData.docs[4].title);
		}
	});
	//----------------------------------------------
	if(bookData.docs[5].cover_edition_key === undefined) {

		coverURL_5 = `./assets/images/book/default-book-img.png`;
	}
	else {
		coverURL_5 = `https://covers.openlibrary.org/b/olid/${bookData.docs[5].cover_edition_key}-M.jpg`;
	}
	let publishYear_5;
	if(bookData.docs[5].publish_year === undefined) {
		publishYear_5 = " [ N/A ]";
	}
	else {
		publishYear_5 = bookData.docs[5].publish_year[0];
	}
	let titleRelated_5;
	if(bookData.docs[5].title === undefined) {
		titleRelated_5 = " [ N/A ]";
	}
	else {
		titleRelated_5 = bookData.docs[5].title;
	}
	if(bookData.docs[5].language === undefined) {
		numLang_5 = "[ N/A ]";
	}
	else {
		numLang_5 = bookData.docs[5].language.length;
	}
	let authorNameDisplay_5;
	if(bookData.docs[5].author_name === undefined)
	{
		authorNameDisplay_5 = "[ N/A ]";
	}
	else {
		authorNameDisplay_5 = bookData.docs[5].author_name[0];
	}
	coverBookImg_5.setAttribute("src", coverURL_5);
	coverBookImg_5.setAttribute("alt", "Open Library API Image");
	displayBookCover_5.appendChild(coverBookImg_5);
	paragrapBookTitle_5.textContent = `${titleRelated_5}`;
	displayBookTitle_5.appendChild(paragrapBookTitle_5);
	paragrapBookAuthor_5.textContent = `by ${authorNameDisplay_5}`;
	displayBookTitle_5.appendChild(paragrapBookAuthor_5);
	paragrapBookPublished_5.textContent = `First published in ${publishYear_5}`;
	displayBookTitle_5.appendChild(paragrapBookPublished_5);
	paragrapBookEditionLang_5.textContent = `${bookData.docs[5].edition_count} editions in ${numLang_5} languages`;
	displayBookTitle_5.appendChild(paragrapBookEditionLang_5);

	displayBookCover_5.addEventListener("click", (event) => {
		event.preventDefault();
		event.stopPropagation();
		if(bookData.docs[5].title === undefined) {
			messageParagraph.textContent = "Link [ N/A ]";
			displayMessage.appendChild(messageParagraph);
		}
		else {
			getBookDetails(bookData.docs[5].title);
		}
	});
	//----------------------------------------------
	if(bookData.docs[6].cover_edition_key === undefined) {

		coverURL_6 = `./assets/images/book/default-book-img.png`;
	}
	else {
		coverURL_6 = `https://covers.openlibrary.org/b/olid/${bookData.docs[6].cover_edition_key}-M.jpg`;
	}
	let publishYear_6;
	if(bookData.docs[6].publish_year === undefined) {
		publishYear_6 = " [ N/A ]";
	}
	else {
		publishYear_6 = bookData.docs[6].publish_year[0];
	}
	let titleRelated_6;
	if(bookData.docs[6].title === undefined) {
		titleRelated_6 = " [ N/A ]";
	}
	else {
		titleRelated_6 = bookData.docs[6].title;
	}
	if(bookData.docs[6].language === undefined) {
		numLang_6 = "[ N/A ]";
	}
	else {
		numLang_6 = bookData.docs[6].language.length;
	}
	let authorNameDisplay_6;
	if(bookData.docs[6].author_name === undefined)
	{
		authorNameDisplay_6 = "[ N/A ]";
	}
	else {
		authorNameDisplay_6 = bookData.docs[6].author_name[0];
	}
	coverBookImg_6.setAttribute("src", coverURL_6);
	coverBookImg_6.setAttribute("alt", "Open Library API Image");
	displayBookCover_6.appendChild(coverBookImg_6);
	paragrapBookTitle_6.textContent = `${titleRelated_6}`;
	displayBookTitle_6.appendChild(paragrapBookTitle_6);
	paragrapBookAuthor_6.textContent = `by ${authorNameDisplay_6}`;
	displayBookTitle_6.appendChild(paragrapBookAuthor_6);
	paragrapBookPublished_6.textContent = `First published in ${publishYear_6}`;
	displayBookTitle_6.appendChild(paragrapBookPublished_6);
	paragrapBookEditionLang_6.textContent = `${bookData.docs[6].edition_count} editions in ${numLang_6} languages`;
	displayBookTitle_6.appendChild(paragrapBookEditionLang_6);

	displayBookCover_6.addEventListener("click", (event) => {
		event.preventDefault();
		event.stopPropagation();
		if(bookData.docs[6].title === undefined) {
			messageParagraph.textContent = "Link [ N/A ]";
			displayMessage.appendChild(messageParagraph);
		}
		else {
			getBookDetails(bookData.docs[6].title);
		}
	});
	//----------------------------------------------
	if(bookData.docs[7].cover_edition_key === undefined) {

		coverURL_7 = `./assets/images/book/default-book-img.png`;
	}
	else {
		coverURL_7 = `https://covers.openlibrary.org/b/olid/${bookData.docs[7].cover_edition_key}-M.jpg`;
	}
	let publishYear_7;
	if(bookData.docs[7].publish_year === undefined) {
		publishYear_7 = " [ N/A ]";
	}
	else {
		publishYear_7 = bookData.docs[7].publish_year[0];
	}
	let titleRelated_7;
	if(bookData.docs[7].title === undefined) {
		titleRelated_7 = " [ N/A ]";
	}
	else {
		titleRelated_7 = bookData.docs[7].title;
	}
	if(bookData.docs[7].language === undefined) {
		numLang_7 = "[ N/A ]";
	}
	else {
		numLang_7 = bookData.docs[7].language.length;
	}
	let authorNameDisplay_7;
	if(bookData.docs[7].author_name === undefined)
	{
		authorNameDisplay_7 = "[ N/A ]";
	}
	else {
		authorNameDisplay_7 = bookData.docs[7].author_name[0];
	}
	coverBookImg_7.setAttribute("src", coverURL_7);
	coverBookImg_7.setAttribute("alt", "Open Library API Image");
	displayBookCover_7.appendChild(coverBookImg_7);
	paragrapBookTitle_7.textContent = `${titleRelated_7}`;
	displayBookTitle_7.appendChild(paragrapBookTitle_7);
	paragrapBookAuthor_7.textContent = `by ${authorNameDisplay_7}`;
	displayBookTitle_7.appendChild(paragrapBookAuthor_7);
	paragrapBookPublished_7.textContent = `First published in ${publishYear_7}`;
	displayBookTitle_7.appendChild(paragrapBookPublished_7);
	paragrapBookEditionLang_7.textContent = `${bookData.docs[7].edition_count} editions in ${numLang_7} languages`;
	displayBookTitle_7.appendChild(paragrapBookEditionLang_7);

	displayBookCover_7.addEventListener("click", (event) => {
		event.preventDefault();
		event.stopPropagation();
		if(bookData.docs[7].title === undefined) {
			messageParagraph.textContent = "Link [ N/A ]";
			displayMessage.appendChild(messageParagraph);
		}
		else {
			getBookDetails(bookData.docs[7].title);
		}
	});
	//----------------------------------------------
	if(bookData.docs[8].cover_edition_key === undefined) {

		coverURL_8 = `./assets/images/book/default-book-img.png`;
	}
	else {
		coverURL_8 = `https://covers.openlibrary.org/b/olid/${bookData.docs[8].cover_edition_key}-M.jpg`;
	}
	let publishYear_8;
	if(bookData.docs[8].publish_year === undefined) {
		publishYear_8 = " [ N/A ]";
	}
	else {
		publishYear_8 = bookData.docs[8].publish_year[0];
	}
	let titleRelated_8;
	if(bookData.docs[8].title === undefined) {
		titleRelated_8 = " [ N/A ]";
	}
	else {
		titleRelated_8 = bookData.docs[8].title;
	}
	if(bookData.docs[8].language === undefined) {
		numLang_8 = "[ N/A ]";
	}
	else {
		numLang_8 = bookData.docs[8].language.length;
	}
	let authorNameDisplay_8;
	if(bookData.docs[8].author_name === undefined)
	{
		authorNameDisplay_8 = "[ N/A ]";
	}
	else {
		authorNameDisplay_8 = bookData.docs[8].author_name[0];
	}
	coverBookImg_8.setAttribute("src", coverURL_8);
	coverBookImg_8.setAttribute("alt", "Open Library API Image");
	displayBookCover_8.appendChild(coverBookImg_8);
	paragrapBookTitle_8.textContent = `${titleRelated_8}`;
	displayBookTitle_8.appendChild(paragrapBookTitle_8);
	paragrapBookAuthor_8.textContent = `by ${authorNameDisplay_8}`;
	displayBookTitle_8.appendChild(paragrapBookAuthor_8);
	paragrapBookPublished_8.textContent = `First published in ${publishYear_8}`;
	displayBookTitle_8.appendChild(paragrapBookPublished_8);
	paragrapBookEditionLang_8.textContent = `${bookData.docs[8].edition_count} editions in ${numLang_8} languages`;
	displayBookTitle_8.appendChild(paragrapBookEditionLang_8);

	displayBookCover_8.addEventListener("click", (event) => {
		event.preventDefault();
		event.stopPropagation();
		if(bookData.docs[8].title === undefined) {
			messageParagraph.textContent = "Link [ N/A ]";
			displayMessage.appendChild(messageParagraph);
		}
		else {
			getBookDetails(bookData.docs[8].title);
		}
	});
	//----------------------------------------------
	if(bookData.docs[9].cover_edition_key === undefined) {

		coverURL_9 = `./assets/images/book/default-book-img.png`;
	}
	else {
		coverURL_9 = `https://covers.openlibrary.org/b/olid/${bookData.docs[9].cover_edition_key}-M.jpg`;
	}
	let publishYear_9;
	if(bookData.docs[9].publish_year === undefined) {
		publishYear_9 = " [ N/A ]";
	}
	else {
		publishYear_9 = bookData.docs[9].publish_year[0];
	}
	let titleRelated_9;
	if(bookData.docs[9].title === undefined) {
		titleRelated_9 = " [ N/A ]";
	}
	else {
		titleRelated_9 = bookData.docs[9].title;
	}
	if(bookData.docs[9].language === undefined) {
		numLang_9 = "[ N/A ]";
	}
	else {
		numLang_9 = bookData.docs[9].language.length;
	}
	let authorNameDisplay_9;
	if(bookData.docs[9].author_name === undefined)
	{
		authorNameDisplay_9 = "[ N/A ]";
	}
	else {
		authorNameDisplay_9 = bookData.docs[9].author_name[0];
	}
	coverBookImg_9.setAttribute("src", coverURL_2);
	coverBookImg_9.setAttribute("alt", "Open Library API Image");
	displayBookCover_9.appendChild(coverBookImg_9);
	paragrapBookTitle_9.textContent = `${titleRelated_9}`;
	displayBookTitle_9.appendChild(paragrapBookTitle_9);
	paragrapBookAuthor_9.textContent = `by ${authorNameDisplay_9}`;
	displayBookTitle_9.appendChild(paragrapBookAuthor_9);
	paragrapBookPublished_9.textContent = `First published in ${publishYear_9}`;
	displayBookTitle_9.appendChild(paragrapBookPublished_9);
	paragrapBookEditionLang_9.textContent = `${bookData.docs[9].edition_count} editions in ${numLang_9} languages`;
	displayBookTitle_9.appendChild(paragrapBookEditionLang_9);

	displayBookCover_9.addEventListener("click", (event) => {
		event.preventDefault();
		event.stopPropagation();
		if(bookData.docs[9].title === undefined) {
			messageParagraph.textContent = "Link [ N/A ]";
			displayMessage.appendChild(messageParagraph);
		}
		else {
			getBookDetails(bookData.docs[9].title);
		}
	});
	//----------------------------------------------
	if(bookData.docs[10].cover_edition_key === undefined) {

		coverURL_10 = `./assets/images/book/default-book-img.png`;
	}
	else {
		coverURL_10 = `https://covers.openlibrary.org/b/olid/${bookData.docs[10].cover_edition_key}-M.jpg`;
	}
	let publishYear_10;
	if(bookData.docs[10].publish_year === undefined) {
		publishYear_10 = " [ N/A ]";
	}
	else {
		publishYear_10 = bookData.docs[10].publish_year[0];
	}
	let titleRelated_10;
	if(bookData.docs[10].title === undefined) {
		titleRelated_10 = " [ N/A ]";
	}
	else {
		titleRelated_10 = bookData.docs[10].title;
	}
	if(bookData.docs[10].language === undefined) {
		numLang_10 = "[ N/A ]";
	}
	else {
		numLang_10 = bookData.docs[10].language.length;
	}
	let authorNameDisplay_10;
	if(bookData.docs[10].author_name === undefined)
	{
		authorNameDisplay_10 = "[ N/A ]";
	}
	else {
		authorNameDisplay_10 = bookData.docs[10].author_name[0];
	}
	coverBookImg_10.setAttribute("src", coverURL_10);
	coverBookImg_10.setAttribute("alt", "Open Library API Image");
	displayBookCover_10.appendChild(coverBookImg_10);
	paragrapBookTitle_10.textContent = `${titleRelated_10}`;
	displayBookTitle_10.appendChild(paragrapBookTitle_10);
	paragrapBookAuthor_10.textContent = `by ${authorNameDisplay_10}`;
	displayBookTitle_10.appendChild(paragrapBookAuthor_10);
	paragrapBookPublished_10.textContent = `First published in ${publishYear_10}`;
	displayBookTitle_10.appendChild(paragrapBookPublished_10);
	paragrapBookEditionLang_10.textContent = `${bookData.docs[10].edition_count} editions in ${numLang_10} languages`;
	displayBookTitle_10.appendChild(paragrapBookEditionLang_10);

	displayBookCover_10.addEventListener("click", (event) => {
		event.preventDefault();
		event.stopPropagation();
		if(bookData.docs[10].title === undefined) {
			messageParagraph.textContent = "Link [ N/A ]";
			displayMessage.appendChild(messageParagraph);
		}
		else {
			getBookDetails(bookData.docs[10].title);
		}
	});
	//----------------------------------------------
	if(bookData.docs[11].cover_edition_key === undefined) {

		coverURL_11 = `./assets/images/book/default-book-img.png`;
	}
	else {
		coverURL_11 = `https://covers.openlibrary.org/b/olid/${bookData.docs[11].cover_edition_key}-M.jpg`;
	}
	let publishYear_11;
	if(bookData.docs[11].publish_year === undefined) {
		publishYear_11 = " [ N/A ]";
	}
	else {
		publishYear_11 = bookData.docs[11].publish_year[0];
	}
	let titleRelated_11;
	if(bookData.docs[11].title === undefined) {
		titleRelated_11 = " [ N/A ]";
	}
	else {
		titleRelated_11 = bookData.docs[11].title;
	}
	if(bookData.docs[11].language === undefined) {
		numLang_11 = "[ N/A ]";
	}
	else {
		numLang_11 = bookData.docs[11].language.length;
	}
	let authorNameDisplay_11;
	if(bookData.docs[11].author_name === undefined)
	{
		authorNameDisplay_11 = "[ N/A ]";
	}
	else {
		authorNameDisplay_11 = bookData.docs[11].author_name[0];
	}
	coverBookImg_11.setAttribute("src", coverURL_2);
	coverBookImg_11.setAttribute("alt", "Open Library API Image");
	displayBookCover_11.appendChild(coverBookImg_11);
	paragrapBookTitle_11.textContent = `${titleRelated_11}`;
	displayBookTitle_11.appendChild(paragrapBookTitle_11);
	paragrapBookAuthor_11.textContent = `by ${authorNameDisplay_11}`;
	displayBookTitle_11.appendChild(paragrapBookAuthor_11);
	paragrapBookPublished_11.textContent = `First published in ${publishYear_11}`;
	displayBookTitle_11.appendChild(paragrapBookPublished_11);
	paragrapBookEditionLang_11.textContent = `${bookData.docs[11].edition_count} editions in ${numLang_11} languages`;
	displayBookTitle_11.appendChild(paragrapBookEditionLang_11);

	displayBookCover_11.addEventListener("click", (event) => {
		event.preventDefault();
		event.stopPropagation();
		if(bookData.docs[11].title === undefined) {
			messageParagraph.textContent = "Link [ N/A ]";
			displayMessage.appendChild(messageParagraph);
		}
		else {
			getBookDetails(bookData.docs[11].title);
		}
	});
	//----------------------------------------------
	let publishYear_12;
	if(bookData.docs[12].publish_year === undefined) {
		publishYear_12 = " [ N/A ]";
	}
	else {
		publishYear_12 = bookData.docs[12].publish_year[0];
	}
	let titleRelated_12;
	if(bookData.docs[12].title === undefined) {
		titleRelated_12 = " [ N/A ]";
	}
	else {
		titleRelated_11 = bookData.docs[12].title;
	}
	if(bookData.docs[12].cover_edition_key === undefined) {

		coverURL_12 = `./assets/images/book/default-book-img.png`;
	}
	else {
		coverURL_12 = `https://covers.openlibrary.org/b/olid/${bookData.docs[12].cover_edition_key}-M.jpg`;
	}
	if(bookData.docs[12].language === undefined) {
		numLang_12 = "[ N/A ]";
	}
	else {
		numLang_12 = bookData.docs[12].language.length;
	}
	let authorNameDisplay_12;
	if(bookData.docs[12].author_name === undefined)
	{
		authorNameDisplay_12 = "[ N/A ]";
	}
	else {
		authorNameDisplay_12 = bookData.docs[12].author_name[0];
	}
	coverBookImg_12.setAttribute("src", coverURL_12);
	coverBookImg_12.setAttribute("alt", "Open Library API Image");
	displayBookCover_12.appendChild(coverBookImg_12);
	paragrapBookTitle_12.textContent = `${titleRelated_12}`;
	displayBookTitle_12.appendChild(paragrapBookTitle_12);
	paragrapBookAuthor_12.textContent = `by ${authorNameDisplay_12}`;
	displayBookTitle_2.appendChild(paragrapBookAuthor_2);
	paragrapBookPublished_12.textContent = `First published in ${publishYear_12}`;
	displayBookTitle_12.appendChild(paragrapBookPublished_12);
	paragrapBookEditionLang_12.textContent = `${bookData.docs[12].edition_count} editions in ${numLang_12} languages`;
	displayBookTitle_12.appendChild(paragrapBookEditionLang_12);

	displayBookCover_12.addEventListener("click", (event) => {
		event.preventDefault();
		event.stopPropagation();
		if(bookData.docs[12].title === undefined) {
			messageParagraph.textContent = "Link [ N/A ]";
			displayMessage.appendChild(messageParagraph);
		}
		else {
			getBookDetails(bookData.docs[12].title);
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