alert('Hello');
alert('Starting your Mars Adventure!')
alert('Booting up...')
alert('All systems go!')
alert('Lets start!')

const username = prompt("Hi there. What's your name?")

const No = 'N'
const Yes = 'Y'

let excited = prompt ('Are you excited? Type Y or N')
excited = excited.toUpperCase();    
if (excited === Yes) {alert('I knew youd say that. Its so cool that youre going to Mars!')}
if (excited === No) {alert('Well, its too late to back out now.')}

//Suitcases
alert("It's time to pack for your trip to Mars.");
let numSuitcases = prompt('How many suitcases do you plan to bring?');

numSuitcases = Number(numSuitcases);
if (numSuitcases > 2) {alert('Thats way too many. Youll have to pack more lightly.')}
if (numSuitcases <= 2) {alert('Perfect. Youll certainly fit in the spaceship!')}

//Companion Animal
alert("You're allowed to bring one companion animal with you.");
const companionType = prompt('What kind of companion animal would you like to bring?')
let companionName = prompt("What is your comanion's name?")

let firstLetter = companionName[0];
firstLetter = firstLetter.toUpperCase();
let otherLetters = companionName.slice(1);
companionName = firstLetter + otherLetters;

alert(`Cool, so you're bringing ${companionName} the ${companionType}`)   

//Spaceship Decor
alert('NASA has a interior design team offering to outfit your space ship.');
alert(`You have a couple of options for the interior decor of your ship. Your options are:
A  Sleek, modern minimalism
B  Retro/vintage space age
C  Victorian-era steampunk
`);
let decorChoice = prompt ('Which decor would you like? Choose A, B, or C.');
decorChoice = decorChoice.toUpperCase();
let decor;
if (decorChoice === 'A') {decor ='modern minimalist';} 
if (decorChoice === 'B') {decor ='retro/vintage space age';} 
if (decorChoice === 'C') {decor ='victorian-era steampunk';}

alert(`${username} and ${companionName}, sufring the celetial abyss, in a ${decor} spaceship.`);

let timer = 5;
while (timer > 0){alert(`${timer}...`); timer -= 1;}
alert('*** LIFTOFF ***');


