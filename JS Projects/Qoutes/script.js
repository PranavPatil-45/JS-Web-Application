let quotes = [

    "The purpose of our lives is to be happy.  Dalai Lama",
    "Be the change that you wish to see in the world.- Mahatma Gandhi ",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt ",
   "The way to get started is to quit talking and begin doing. - Walt Disney",
    "You will face many defeats in life, but never let yourself be defeated. - Maya Angelou",


];
let index = 0;

function changeQuote() {
    $("#quoteBox").fadeOut(500, function() {
        index = (index + 1) % quotes.length;
        $(this).text(quotes[index]).fadeIn(500);
    });
}

setInterval(changeQuote, 2000);