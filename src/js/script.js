// IMPORT CSS
import '../css/style.css';

// IMPORT APP
import { App } from './app';

const containerMenu = document.querySelector('.navbar__nav');
const hamburgerMenu = document.querySelector('.navbar__extra__icon--hamburger-menu');

const app = new App({ containerMenu, hamburgerMenu });

console.log(app);

window.addEventListener('DOMContentLoaded', () => {
    app.render();
});
