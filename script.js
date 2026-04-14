
console.log('My script is running')
let variable = '420';
console.log('The value of variable is: ', variable);

const textElement = document.getElementById('type-text');
const phrases = ['COMMISSION HAND DRAWN SKETCHES',
    'DIVERSE PRINT SIZES AVAILABLE']
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 80 : 80; // Speed adjustment

    if (!isDeleting && charIndex == currentPhrase.length) {
        typeSpeed = 2000; //pause at the end
        isDeleting = true;
    }
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 1000; //pause before starting new word
    }

    setTimeout(type, typeSpeed);
}

type();

 let searchItems = [];

 //Fetching from JSON file:
 fetch('./items.json')
    .then(res => res.json())
    .then(data => {
        searchItems = data;
    })
    .catch(err => console.error("Could not load search items: ", err));

const searchInput = document.getElementById("search");
const searchButton = document.getElementById("submit");

//Creating a dropdown element:
const dropdown = document.createElement("ul");
dropdown.id = "search-dropdown";
dropdown.style.cssText = `
position: absolute;
list-style: none;
margin: 0;
padding: 0;
background-color: #000;
border: 2px solid var(--clr-font);
border-radius: 5px;
width: ${searchInput.offsetWidth + 80}px;
z-index: 999;
display: none;
`;

//README 
/*Splitting(); //process all elements with data-spiltting attribute

const chars =document.querySelectorAll(".split .char");

gsap.from(chars, {
    /*dutration: 1.0,
    autoAlpha: 0,
    stagger: 0.

const sentences = [
    'COMMISSION AUTHENTIC HANDRAWN SKETCHES',
    'DIVERSE PRINT SIZES AVAILBLE FROM 8 X 10 TO 24 X 36 INCHES',
    'AFFORDABLE OPTIONS INCLUDE 5 x 7 AND 8 X 8 (SQUARE) INCHES'
];

let current = 0;
function typeSentence(sentence) {
    const el = document.querySelector(".split");
    el.innerHTML = '';
    

    setTimeout(() => {
        el.textContent = sentence;
    })
    
        setTimeout(() => {
                Splitting({ target: el });

                const chars = el.querySelectorAll(".char");

                console.log('chars found:', chars.length); //should be > 0
                console.log('chars:', chars); // inspect them

                // Type in 
                let tl = gsap.timeline();
                tl.from(chars, {
                    autoAlpha: 0,
                    duration: 0.01,
                    stagger: 0.08
                })
                //Hold it for a moment
                .to({}, {duration: 1.5})
                //Erase it (reverse stagger)
                .to(chars, {
                    autoAlpha: 0,
                    duration: 0.01,
                    stagger: 0.04 //erase faster than type
                })
                //when done move to the next sentence
                .call(() => {
                    current = (current + 1) % sentences.length;
                    typeSentence(sentences[current]);
                });

            }, 50);
        }



        typeSentence(sentences[current]);*/