class Quote {
    constructor(content, author, category) {
        this.content = content;
        this.author = author;
        this.category = category;
    }
}

var categories = []
var quotes = []

var index = -1

const createButton = document.getElementById("create-list");
createButton.addEventListener("click", createNewCategory);
const updateButton = document.getElementById("update-list");
updateButton.addEventListener("click", updateCategory);
const deleteButton = document.getElementById("delete-list");
deleteButton.addEventListener("click", deleteCategory);


const createQuoteButton = document.getElementById("create-quote");
createQuoteButton.addEventListener("click", createQuote);

const categoriesDropDown = document.getElementById("categories")
categoriesDropDown.addEventListener("change", displayQuotes)

const modal = document.getElementById("myModal");
modal.style.display = 'none'



function createQuote(){
    // read quote details from the text inputs
    const quoteTextField = document.getElementById("quote-text")
    const quoteText = quoteTextField.value
    const quoteAuthorField = document.getElementById("quote-author")
    const quoteAuthor = quoteAuthorField.value
    const categoriesDropDown = document.getElementById("categories")
    const cat = categoriesDropDown.value

    const newQuote = new Quote(quoteText, quoteAuthor, cat)
    
    quotes.push(newQuote)
    displayQuotes()
}

function updateCategoriesDropdown(){
    
const dropdown = document.getElementById("categories");
// reset the dropdown each time 
while (dropdown.options.length > 0) {
    dropdown.remove(0);
}
// Dynamically populate the dropdown list with options from the array
categories.forEach(cat => {
  let optionElement = document.createElement("option")
  optionElement.text = cat
  dropdown.add(optionElement)
})
}

function createNewCategory(){
    // read value from the text field list-name
    const textField = document.getElementById("create-list-name")
    const listName = textField.value

    //TODO: check if it exists already
    categories.unshift(listName)
    categories.forEach(cat => {
        console.log(cat)
    });

    updateCategoriesDropdown()
}

function deleteCategory(){
    // read value from the text field list-name
    const textField = document.getElementById("delete-list-name")
    const listName = textField.value
    categories = categories.filter(item => item !== listName)

    // also remove quotes that belong to the removed category
    quotes = quotes.filter(item => item.category !== listName)

    updateCategoriesDropdown()

}

function updateCategory(){
    // read value from the text field list-name
    const currentTextField = document.getElementById("update-list-name-current")
    const newTextField = document.getElementById("update-list-name-new")


    
    const currentListName = currentTextField.value
    const newListName = newTextField.value

    const index = categories.indexOf(currentListName)

    categories[index] = newListName

    categories.forEach(cat => {
        console.log(cat)
    });

    for (let index = 0; index < quotes.length; index++) {
        if (quotes[index].category == currentListName){
            quotes[index].category = newListName
        }
        
    }
    updateCategoriesDropdown()

}


// displays categories in the div
function displayQuotes(){

    const dropdown = document.getElementById("categories");
    const cat = dropdown.value

    divHtmlContent = ""
    quotes.forEach( (myQuote,index) => {
        if(myQuote.category == cat){
            divHtmlContent += "Quote: " + myQuote.content + ", Author: " + myQuote.author  + " <button onclick=deleteQuoteAtIndex(" + index + ")>Delete</button><button onclick=updateQuoteAtIndex(" + index + ")>Update</button><br>"

        }
        
    });

    const myDiv = document.getElementById("active-quote-div")
    myDiv.innerHTML = divHtmlContent
}

function deleteQuoteAtIndex(index){
    quotes.splice(index,1)
    displayQuotes()
}

function updateQuoteAtIndex(newIndex){
    index = newIndex
const modal = document.getElementById("myModal")
modal.style.display = 'block' // display the div and its contents

const newQuote = document.getElementById("new-quote")
const newAuthor = document.getElementById("new-author")

newQuote.value = quotes[index].content
newAuthor.value = quotes[index].author

}

function saveExistingQuote(){

    const newQuote = document.getElementById("new-quote")
    const newAuthor = document.getElementById("new-author")

    quotes[index].content = newQuote.value
    quotes[index].author = newAuthor.value

    displayQuotes()
    modal.style.display = 'none'


}

function saveQuotesToLocalStorage(){
    localStorage.setItem("storedQuotes", JSON.stringify(quotes));
    localStorage.setItem("storedCategories", JSON.stringify(categories));
}

function loadQuotesFromLocalStorage(){
    quotes = JSON.parse(localStorage.getItem("storedQuotes")) || [];
    categories = JSON.parse(localStorage.getItem("storedCategories")) || [];

    updateCategoriesDropdown()
    displayQuotes()
}


// Function to open the modal with dynamic content
function openModal(content) {
  // Update the label content with the passed string
  modalLabel.textContent = content;
  
  // Display the modal
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

