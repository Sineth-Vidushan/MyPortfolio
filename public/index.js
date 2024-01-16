// Url: http://localhost:3000/New%20Port/index.js

// curso


const dotCursor = document.querySelector('.dot-cursor');

document.addEventListener('mousemove', e => {
  console.log('Mouse X:', e.pageX, 'Mouse Y:', e.pageY);

  

  dotCursor.style.top = e.pageY - 5 + 'px';
  dotCursor.style.left = e.pageX - 5 + 'px';
});



const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})




// cursor end

//Name

// const name2 = document.getElementById('name2');

// // Remove the divider "|" after the animation
// name2.addEventListener('animationend', () => {
//     name2.style.display = 'none';
// });

// Typing Animation

//toggle

const nav = document.querySelector('#nav');
const menuBtn = document.querySelector('#menu-button');
const rootElement = document.documentElement
const rootElement2 = document.documentElement

menuBtn.addEventListener('click', () => {
    rootElement.toggleAttribute('menu-open')
})


   
//toggle end


// Scroll Reveal
const description = document.querySelector("description-content");

window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;
    const windowHeight = window.innerHeight;
    const descriptionOffset = description.offsetTop;

    // Calculate the position to trigger the animation
    const triggerPosition = descriptionOffset - windowHeight / 2;

    if (scrollPos >= triggerPosition) {
        description.style.opacity = 1;
        description.style.transform = "translateY(0)";
    } else {
        description.style.opacity = 0;
        description.style.transform = "translateY(50px)";
    }
});

// work page

//navlist


//loader

const loaderContainer = document.querySelector('.loader-container');
const pageContent = document.querySelector('#page-content');

window.addEventListener('load', () => {
    loaderContainer.classList.add('hidden');
    pageContent.classList.remove('visible');
});

