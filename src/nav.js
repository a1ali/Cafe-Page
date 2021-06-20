import coffeeImg from "/images/cofee_cup.png"

function navbar() {
    let navContainer = document.createElement('div');
    navContainer.className = 'nav-container';

    let nav = document.createElement('nav');
    nav.className = "header";

    let title = document.createElement('div');
    title.className = "title";

    let navImage = new Image();
    navImage.src = coffeeImg;
    navImage.className = "coffee";

    let logo = document.createElement('div');
    logo.className = "title-font";
    let titleh1 =  document.createElement('h1');
    titleh1.innerText = 'Cafe Cafe';

    logo.appendChild(titleh1);
    title.appendChild(navImage);
    title.appendChild(logo);

    nav.appendChild(title);

    let ul = document.createElement('ul');
    ul.className = "options";
    let li1 = document.createElement('li');
    let a1 = document.createElement('a');
    a1.className = "links";
    a1.id = 'Home';
    a1.innerText = 'Home';
    li1.appendChild(a1);

    ul.appendChild(li1);

    let li2 = document.createElement('li');
    let a2 = document.createElement('a');
    a2.className = "links";
    a2.id = 'Menu';
    a2.innerText = 'Menu';
    li2.appendChild(a2);

    ul.appendChild(li2);


    let li3 = document.createElement('li');
    let a3 = document.createElement('a');
    a3.className = "links";
    a3.id = 'Contact';
    a3.innerText = 'Contact';
    li3.appendChild(a3);

    ul.appendChild(li3);

    nav.appendChild(ul);

    navContainer.appendChild(nav);

    return navContainer;

}

export {navbar}
