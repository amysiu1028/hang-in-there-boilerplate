// QUERY SELECTOR VARIABLES 
var accessImage = document.querySelector('.poster-img'); 
var accessTitle = document.querySelector('.poster-title');
var accessQuote = document.querySelector('.poster-quote'); 
var ShowRandomPosterButton = document.querySelector('.show-random');
var makeOwnPosterButton = document.querySelector('.show-form');
var showSavedPostersButton = document.querySelector('.show-saved'); 
var saveAPosterButton = document.querySelector('.save-poster')
var nevermindTakeMeBackButton = document.querySelector('.show-main'); 
var backToMainButton = document.querySelector('.back-to-main');
var mainPoster = document.querySelector('.main-poster'); 
var createOwnPosterForm = document.querySelector('.poster-form');
var savedPostersButton = document.querySelector('.saved-posters'); 
var showMyPoster = document.querySelector('.make-poster');
var posterGrid = document.querySelector('.saved-posters-grid')
var savedPosterTitle = document.querySelector('h2')

// DATA PROVIDED 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster = document.querySelector('.poster') 
var newPoster = {} 

//EVENT LISTENERS HERE! 👇 TELLING COMPUTER TO LISTEN TO CLICK:
window.addEventListener('load',randomPoster);
ShowRandomPosterButton.addEventListener('click', randomPoster);
makeOwnPosterButton.addEventListener('click',generateForm); //next step to generate form, and the main poster should be hidden
showSavedPostersButton.addEventListener('click', showSavedPoster); //=> should see the saved posters area, and the main poster should be hidden
nevermindTakeMeBackButton.addEventListener('click',backToMainPoster);
backToMainButton.addEventListener('click',backToMainPoster);
saveAPosterButton.addEventListener('click', savePoster);
saveAPosterButton.addEventListener('dblclick', deletePoster)
showMyPoster.addEventListener('click',showUserInputPoster);

// FUNCTIONS AND EVENT HANDLERS
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
} 

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL,
    title: title, 
    quote: quote}
} 

function randomPoster() {
  var newImageURL = images[getRandomIndex(images)] 
  var newTitle = titles[getRandomIndex(titles)] 
  var newQuote = quotes[getRandomIndex(quotes)] 
  newPoster = createPoster(newImageURL, newTitle, newQuote); 
  accessImage.src = newPoster.imageURL; 
  accessTitle.innerText = newPoster.title;
  accessQuote.innerText = newPoster.quote;
}

function generateForm() {
  mainPoster.classList.add("hidden"); 
  createOwnPosterForm.classList.remove("hidden")
} 

function savePoster() { 
  var isDuplicate = false
  for (i=0; i < savedPosters.length; i++) {
    if (savedPosters[i].isEqualNode(currentPoster)) { 
      isDuplicate = true; 
      break; 
    }
  }
    if (!isDuplicate) {
      savedPosters.push(currentPoster.cloneNode(true))
    }
}  

function showSavedPoster() {
  posterGrid.innerHTML = ""
  for (var i=0; i < savedPosters.length; i++) {
    var posterGridContainer = document.createElement('div');
    posterGridContainer.appendChild(savedPosters[i]);
    posterGrid.appendChild(savedPosters[i])
  }
  mainPoster.classList.add("hidden"); 
  savedPosterTitle.classList.add("hidden");
  savedPostersButton.classList.remove("hidden")
  posterGrid.classList.remove("hidden")
  backToMainButton.classList.remove("hidden")
} 


function backToMainPoster() {
  mainPoster.classList.remove("hidden");
  nevermindTakeMeBackButton.classList.add("hidden");
  createOwnPosterForm.classList.add("hidden"); 
  posterGrid.classList.add("hidden");
  backToMainButton.classList.add("hidden")
  savedPostersButton.classList.add("hidden")
}

var inputForImageURL = document.querySelector('#poster-image-url')
var inputForTitle =  document.querySelector('#poster-title')
var inputForQuote = document.querySelector('#poster-quote')

function showUserInputPoster(event) { 
  event.preventDefault()
  var newImage = inputForImageURL.value
  var newTitle = inputForTitle.value
  var newQuote = inputForQuote.value
  var poster = createPoster(newImage,newTitle,newQuote) 
  renderPoster(poster);
  backToMainPoster(); 
}

function renderPoster(poster) {
  console.log(poster.imageURL)
  accessImage.src = poster.imageURL
  accessTitle.innerText = poster.title
  accessQuote.innerText = poster.quote
}


function deletePoster() {
  for (i=0; i < savedPosters.length; i++) {
    if (savedPosters[i].isEqualNode(currentPoster)) {
      savedPosters.splice(i,1)
      break; //exit loop
    }
  }
}


