import "./styles.css";
import { homePage } from "./scripts/homepage";
import { menuPage } from "./scripts/menu-page";
import { aboutPage } from "./scripts/about-page";
import { reservationPage } from "./scripts/reservation-page";

const contentDiv = document.getElementById('content');

contentDiv.appendChild(homePage());

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');
const reservationBtn = document.querySelector('#reservation');
const logo = document.querySelector('header>h1')

logo.addEventListener('click', ()=>{
    contentDiv.innerHTML = '';
    contentDiv.appendChild(homePage());
})

homeBtn.addEventListener('click', ()=>{
    contentDiv.innerHTML = '';
    contentDiv.appendChild(homePage());
})

menuBtn.addEventListener('click', ()=>{
    contentDiv.innerHTML = '';
    contentDiv.appendChild(menuPage());
})

aboutBtn.addEventListener('click', ()=>{
    contentDiv.innerHTML = '';
    contentDiv.appendChild(aboutPage())
})

reservationBtn.addEventListener('click', ()=>{
    contentDiv.innerHTML = '';
    contentDiv.appendChild(reservationPage());
})