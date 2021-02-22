var xml = new XMLHttpRequest();
var xmlDocument;

//request to open file
xml.open("POST", "xml/books.xml");
//return the response as a DOM tree
xml.responseType = "document";
//send the request
xml.send();

//Placing onload instructions after document request
xml.onload = function () {
  xmlDocument = xml.responseXML;
  console.log(xmlDocument);
  document.getElementById("tBody").innerHTML = xmlDocument.documentElement.nodeName;
  //createBook();
  generateTable();

  document.forms.bookForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("test");
  });
}

xml.onerror = function () {
  console.log("Error while loading XML...");
}

function generateTable() {
  var book = xmlDocument.getElementsByTagName("book");
  var tRow = '';

  for (let i = 0; i < book.length; i++) {
    let id = book[i].getElementsByTagName("id")[0].textContent;
    let title = book[i].getElementsByTagName("title")[0].textContent;
    let author = book[i].getElementsByTagName('author')[0];
    let authorTitle = author.getAttribute("title");
    let firstName = author.getElementsByTagName('firstname')[0].textContent;

    let middleName = '';

    if(author.getElementsByTagName('middlename').length != 0) {
      middleName = author.getElementsByTagName('middlename')[0].textContent;
    }


    let lastName = author.getElementsByTagName('lastname')[0].textContent;

    tRow += `<tr><td>${id}</td><td>${title}</td><td>${lastName}, ${authorTitle} ${firstName} ${middleName}</td></tr>`;
  }
  document.getElementById("tBody").innerHTML = tRow;
}

function createBook() {
  //Create a new XML element named 'book'.
  var newBook = xmlDocument.createElement("book");

  //Create a child element named 'title'
  var bookTitle = xmlDocument.createElement("title");
  //Capture user inputted book title
  var user_bookTitle = user_bookForm.bookTitle.value;
  //Create a text node and populate it with the value of 'user_bookTitle'
  var bookTitleText = xmlDocument.createTextNode(user_bookTitle);
  //Attach the text node to the
  bookTitle.appendChild(bookTitleText);


  let user_bookForm = document.forms.bookForm;

  let user_authorTitle = user_bookForm.authorTitle.value;
  if (authorTitle) {
    newBook
  //Create a child element named 'author'

}