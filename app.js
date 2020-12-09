'use strict';
// DOM  Varriables
const faqQuestions = document.querySelectorAll('.question')
const faqContainer = document.querySelector('.faq-box');
const faqAnswers = document.querySelectorAll('.answer');
const navElements = document.querySelector('.nav-links');
const navBar = document.querySelector('nav');
const chromeButton = document.querySelector('.chrome');
const firefoxButton = document.querySelector('.firefox');
// Lets Implement smooth scroll for the navigation Elements
navElements.addEventListener('click',(e)=>{
    e.preventDefault();

    if(e.target.classList.contains('nav-link')){

        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior:'smooth'});
    }
});

// Menu for mobile 
const burgermenu = document.querySelector('.menu');
burgermenu.addEventListener('click',()=>{
   
    burgermenu.classList.toggle('toggle');
    navElements.classList.toggle('nav-active');
    navElements.style.display ='flex';
});

// Chrome Button
const extensionSection = document.querySelector('#section-3');
chromeButton.addEventListener('click',e=>{
    e.preventDefault();
    extensionSection.scrollIntoView({behavior:'smooth'});
});
// Firefox Button
firefoxButton.addEventListener('click',e=>{
    e.preventDefault();
    extensionSection.scrollIntoView({behavior:'smooth'});
});
// Switching into diffrent tabs in the feature section
// Dom Varriables
const featureTabLinks = document.querySelector('.features-links');
const featureTabs = document.querySelectorAll('.tab');
const featureLinks = document.querySelectorAll('.feature-link');

// Operations
featureTabLinks.addEventListener('click',e=>{
    
    e.preventDefault();
    const clickedLink = e.target.closest('.feature-link');
    // Guard Clause
    if(!clickedLink){
       return; 
    } 
    featureTabs.forEach(t=>t.style.display="none");
    featureLinks.forEach(link=>link.classList.remove('active'));
    // Add the active class for target
    clickedLink.classList.add('active');
    if(clickedLink){
        const content = document.querySelector(`.tab-${clickedLink.dataset.link}`);
        content.style.display='flex';
    }
})
// FAQ question
const faqAction = function(e){
    const clicked = e.target.closest('.question');
    faqAnswers.forEach(ans=>ans.style.display="none");
    if(clicked){
        const answers= document.querySelector(`.answer-${clicked.dataset.tab}`);
        answers.style.display ='flex';
    }else{
        return;
    }
}
faqContainer.addEventListener('click',faqAction);
// Lets do some section revealing part
// Bring the action of Intersection Observer
const allSections = document.querySelectorAll('.section');

//Revealing section function
const sectionReveal = function(entries,observer){
    const [entry] = entries; //Destructuring

    if(!entry.isIntersecting) return;
    entry.target.classList.remove('section-hidden');
    observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(sectionReveal,{
    root:null,
    threshold:0.15,
});
allSections.forEach(section=>{
    sectionObserver.observe(section);
    section.classList.add('section-hidden');
});