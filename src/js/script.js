// IMPORT CSS
import '../css/style.css';

import '../index.html';

// IMPORT APP
import { App } from './app';

const containerMenu = document.querySelector('.navbar__nav');
const hamburgerMenu = document.querySelector('.navbar__extra__icon--hamburger-menu');

const app = new App({ containerMenu, hamburgerMenu });

window.addEventListener('DOMContentLoaded', () => {
    app.render();
});
