function renderBooks(books_list) {
  books_list.sort(function (record1, record2) {
    return record2.ranking - record1.ranking;
  });
  var tbody = document.querySelector(".books tbody");
  tbody.textContent = "";
  for (var i = 0; i < books_list.length; i++) {
    var row = renderBook(books_list[i]);
    tbody.appendChild(row);
  }
}

function renderBook(book) {
  var tr = document.createElement("tr");
  tr.appendChild(renderBookCell(book.title));
  tr.appendChild(renderBookCell(book.author));
  tr.appendChild(renderBookCell(book.ranking));
  return tr;
}

function renderBookCell(content, nonNumeric) {
  var td = document.createElement("td");
  td.textContent = content;
  if (nonNumeric) {
    td.classList.add("non-numeric");
  }
  return td;
}

var searchInput = document.getElementById("book-filter");

function IsBookFound(book) {
  var userInput = searchInput.value;
  var lowercaseUserInput = userInput.toLowerCase();
  var lowercaseTitle = book.genre.toLowerCase();
  if (lowercaseTitle.indexOf(lowercaseUserInput) >= 0) {
    return true;
  } else {
    return false;
  }
}

searchInput.addEventListener("input", function () {
  var filtered_books = BOOKS.filter(IsBookFound);
  renderBooks(filtered_books);
});
