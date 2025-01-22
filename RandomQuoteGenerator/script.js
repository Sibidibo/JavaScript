function generateQuote() {
    let quotes = {
      "— Henry Ford":
        '"Whether you think you can or you think you can’t, you’re right."',
      " — Alice Walker":
        '"The most common way people give up their power is by thinking they don’t have any."',
      "— Herb Brooks": '"Risk something or forever sit with your dreams."',
      "— Theodore Roosevelt": '"Believe you can and you’re halfway there."',
      " — Albert Einstein":
        '"Strive not to be a success, but rather to be of value."',
      " — Farrah Gray":
        '"Build your own dreams, or someone else will hire you to build theirs."',
      " - Mark Twain": 
        '"Few things are harder to put up with than the annoyance of a good example."',
      " - Mark Twain":
        '"You cant depend on your eyes when your imagination is out of focus."',
    };

    //  another way? ->
    let randomAuthors = Object.keys(quotes);


    let quoteAuthor=
      randomAuthors[Math.floor(Math.random() * randomAuthors.length)];
    let quote = quotes[quoteAuthor];
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = quoteAuthor;
  }

  document.getElementById("newQuote").addEventListener('click', generateQuote);

  function copyText(htmlElement)
  {
    if (!htmlElement) {
        return;
    }

    let elementText = htmlElement.innerText;
    let imputElemnt = document.createElement('input');
    document.body.appendChild(imputElemnt);

    inputElemnt.select();
    document.execCommand('copy');
    inputElement.parentNode.removeChild(inputElement);
  }
  document.querySelectore('#copyTextBtn').onclick =function()
  {
    copyText(documnet.querySelector('#quotes'));
  }