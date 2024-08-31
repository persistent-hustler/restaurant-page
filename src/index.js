import "./styles.css";
import { homePage } from "./scripts/home-page";
import { menuPage } from "./scripts/menu-page";
import { aboutPage } from "./scripts/about-page";
import { reservationPage } from "./scripts/reservation-page";

const contentDiv = document.getElementById('content');

contentDiv.appendChild(homePage());

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');
const reservationBtn = document.querySelector('#reservation');
const logo = document.querySelector('header h1')

logo.addEventListener('click', ()=>{
    contentDiv.innerHTML = '';
    contentDiv.appendChild(homePage());
    window. scrollTo(0,0);
})

homeBtn.addEventListener('click', ()=>{
    contentDiv.innerHTML = '';
    contentDiv.appendChild(homePage());
    window. scrollTo(0,0);
})

menuBtn.addEventListener('click', ()=>{
    contentDiv.innerHTML = '';
    contentDiv.appendChild(menuPage());
    window. scrollTo(0,0);
})

aboutBtn.addEventListener('click', ()=>{
    contentDiv.innerHTML = '';
    contentDiv.appendChild(aboutPage());
    window. scrollTo(0,0);
})

reservationBtn.addEventListener('click', ()=>{
    contentDiv.innerHTML = '';
    contentDiv.appendChild(reservationPage());
    window. scrollTo(0,0);
})