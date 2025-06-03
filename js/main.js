var quotes = [
    "Be yourself; everyone else is already taken.",
    "So many books, so little time.",
    "A room without books is like a body without a soul.",
    "You only live once, but if you do it right, once is enough.",
    "Be the change that you wish to see in the world.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "If you tell the truth, you don't have to remember anything.",
    "Friendship ... is born at the moment when one man says to another, What! You too? I thought that no one but myself . . .",
    "To live is the rarest thing in the world. Most people exist, that is all.",
];

var lastIndex = 0;

function newQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);

    if (randomIndex === lastIndex) {
        randomIndex = (randomIndex + 1) % quotes.length;
    }

    lastIndex = randomIndex;

    document.getElementById("quote").innerHTML = quotes[randomIndex];
}
