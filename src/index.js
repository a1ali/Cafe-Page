import {navbar} from './nav';
import {home} from './home';
import {menu} from './menu';
import {contact} from './contact'


let content = document.getElementById('content');

content.append(navbar())
content.append(home());

let homeBtn = document.getElementById('Home');
let menuBtn = document.getElementById('Menu');
let contactBtn = document.getElementById('Contact');

homeBtn.addEventListener('click', () => {
    let active = document.querySelector('.container');
    active.remove();
    content.append(home());
})

menuBtn.addEventListener('click', () => {
    let active = document.querySelector('.container');
    active.remove();
    content.append(menu());
})

contactBtn.addEventListener('click', () => {
    let active = document.querySelector('.container');
    active.remove();
    content.append(contact());
})




