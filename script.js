
console.log('My script is running')
let variable = '420';
console.log('The value of variable is: ', variable);

const textElement = document.getElementById('type-text');
const phrases = ['COMMISSION HAND DRAWN SKETCHES',
    'BRAND AND OR MERCH DESIGN', 'LOGO DESIGN AND BRAND IMAGE',
'WEB DESIGN AND DEVELOPMENT' ]
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
if (textElement) {
    type();
}

//for caraousel arrows:
const track = document.querySelector('.fp_one_caraousel_track');
const prevBtn  = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

//move forward:
nextBtn.addEventListener('click', () => {
    const slideWidth = track.clientWidth;
    track.scrollLeft += slideWidth;
});

//move backward:
prevBtn.addEventListener('click', () => {
    const slideWidth = track.clientWidth;
    track.scrollLeft -= slideWidth;
});

const track2 = document.querySelector('.fp_two_caraousel_track');
const prevBtn2  = document.getElementById('prevBtn2');
const nextBtn2 = document.getElementById('nextBtn2');

//move forward:
nextBtn2.addEventListener('click', () => {
    const slideWidth2 = track.clientWidth;
    track2.scrollLeft += slideWidth2;
});

//move backward:
prevBtn2.addEventListener('click', () => {
    const slideWidth2 = track.clientWidth;
    track2.scrollLeft -= slideWidth2;
});

gsap.fromTo(".logo", {
    y: -100,}, 
{y: 5, duration: 1});

/*const caraousels = document.querySelectorAll('.fp_one_caraousel_wrapper');

caraousels.forEach((caraousel) => {
    const track = caraousel.querySelector('.fp_one_caraousel_track');
    const slides = caraousel.querySelectorAll('.caraousel_slide');
    const nextBtn = caraousel.querySelector('.next-btn');
    const prevBtn = caraousel.querySelector('.prev-btn');

    let currentIndex = 0;
    const maxIndex = slides.length - 1;

    //function to move the track based on current index
    const updateSlidePosition = () => {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    //next button click event:
    nextBtn.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            currentIndex = 0; //loop back to the first slide
        }
        updateSlidePosition();
    });

    //previous button click event
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = maxIndex; //loop to the last slide
        }
        updateSlidePosition();
    });
});

    

    


//searchbar: 

/*let searchItems = [];

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

//Insert Dropdown after the form:
searchInput.closest("form").insertAdjacentElement("afterend", dropdown);
searchInput.closest("form").style.position = "relative";

function showResults(query) {
    dropdown.innerHTML = "";

    if (!query) {
        dropdown.style.display = "none";
        return;
    }

    const filtered = searchItems.filter(item => 
        item.label.toLowerCase().includes(query.toLowerCase()));


if (filtered.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No results found";
    li.style.cssText = `
        padding: 10px 16px;
        color: var(--clr-font);
        font-size: var(--fs-400);
        opacity: 0.5;
    `;
    dropdown.appendChild(li);
    dropdown.style.display = "block";
    return;
}

filtered.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.label;
    li.style.cssText = `
        padding: 10px 16px;
        cursor: pointer;
        color: var(--clr-font);
        font-size: var(--fs-400);
    `;
    li.addEventListener("mouseenter", () => li.style.backgroundColor = "#222");
    li.addEventListener("mouseleave", () => li.style.backgroundColor = "transparent");
    li.addEventListener("click", () => {
        window.location.href = item.href;
        dropdown.style.display = "none";
        searchInput.value = "";
    });
    dropdown.appendchild(li);
    });
    dropdown.style.display = "block";
}*/



//Live search as you go:
/*searchInput.addEventListener("input", () => {
    showResults(searchInput.value);
});

//Trigger on button click
searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    showResults(searchInput.value);
});

//Close dropdown on when clicking outside:
document.addEventListener("click", (e) => {
    if (!e.target.closest("form") && e.target !== searchButton) {
        dropdown.style.display = "none"
    }
})*/




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

        /*── SEARCH DATA ──────────────────────────────────────────────
const portfolioData = [
  { title: "Art",      desc: "Visual artwork and illustrations",  url: "./art.html",      tags: ["art", "illustration", "drawing", "visual"] },
  { title: "Design",   desc: "Graphic and visual design work",    url: "./design.html",   tags: ["design", "graphic", "branding"] },
  { title: "README",   desc: "About me — who is Avike",          url: "./readme.html",   tags: ["about", "bio", "readme", "who"] },
  { title: "Projects", desc: "Coding and creative projects",      url: "./projects.html", tags: ["projects", "code", "dev", "build"] },
  { title: "Media",    desc: "Videos, music, and media",         url: "./media.html",    tags: ["media", "video", "music", "audio"] },
  { title: "Contact",  desc: "Get in touch",                     url: "./contact.html",  tags: ["contact", "email", "reach", "message"] },
];

// ── SEARCH LOGIC ─────────────────────────────────────────────
const searchInput = document.getElementById('search');
const submitBtn   = document.getElementById('submit');

// Create dropdown container and inject after the search form
const dropdown = document.createElement('div');
dropdown.id = 'search-dropdown';
searchInput.closest('form').insertAdjacentElement('afterend', dropdown);

function runSearch(query) {
  const q = query.trim().toLowerCase();
  dropdown.innerHTML = '';

  if (!q) { dropdown.style.display = 'none'; return; }

  const results = portfolioData.filter(item =>
    item.title.toLowerCase().includes(q) ||
    item.desc.toLowerCase().includes(q)  ||
    item.tags.some(tag => tag.includes(q))
  );

  if (results.length === 0) {
    dropdown.innerHTML = '<div class="search-no-result">No results found</div>';
  } else {
    results.forEach(item => {
      const el = document.createElement('a');
      el.href = item.url;
      el.className = 'search-result-item';
      el.innerHTML = `<span class="sr-title">${item.title}</span><span class="sr-desc">${item.desc}</span>`;
      dropdown.appendChild(el);
    });
  }

  dropdown.style.display = 'block';
}

searchInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    const first = dropdown.querySelector('.search-result-item');
    if (first) window.location.href = first.href;
    return;
  }
  runSearch(searchInput.value);
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const first = dropdown.querySelector('.search-result-item');
  if (first) window.location.href = first.href;
  else runSearch(searchInput.value);
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('#search-dropdown') && e.target !== searchInput) {
    dropdown.style.display = 'none';
  }
})*/