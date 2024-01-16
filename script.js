function Book(title, author, completion) {
  this.title = title
  this.author = author
  this.completion = completion
  this.info = function() {
    console.log(this.title + " is a nice book by " + author + " and I completed it")
  }
}

const TNotW = new Book("The Name of the Wind", "Dun Remember", "Completed")
TNotW.info()