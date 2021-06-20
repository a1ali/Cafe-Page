import latte from "/images/latte-small-removebg-preview.png";
import capp from "/images/cappuc-removebg-preview.png";
import essp from "/images/esspresso-removebg-preview.png";
import americano from "/images/americano-removebg-preview.png";


function menu() {

    let container = document.createElement('div');
    container.className = "container";
    let contentContainer = document.createElement('div');
    contentContainer.className = "content-container";

    let cardMenu = document.createElement('div');
    cardMenu.className = "card-menu";

    //latte card
    let latteCard = document.createElement('div');
    latteCard.className = "card";

    let latteImg = new Image();
    latteImg.src = latte;
    latteImg.className = "latte-image";
    latteCard.appendChild(latteImg);

    let latteTitle =  document.createElement('div');
    latteTitle.className = "item-title";
    latteTitle.innerText = "Latte";
    latteCard.appendChild(latteTitle);

    let latteContent = document.createElement('div');
    latteContent.className = "item-text";
    latteContent.innerText = "Made with espresso and hot steamed milk";
    latteCard.appendChild(latteContent);

    cardMenu.appendChild(latteCard);

    //cappuccino card


    let cappuccinoCard = document.createElement('div');
    cappuccinoCard.className = "card";

    let cappuccinoImg = new Image();
    cappuccinoImg.src = capp;
    cappuccinoImg.className = "capp-image";
    cappuccinoCard.appendChild(cappuccinoImg);

    let cappuccinoTitle =  document.createElement('div');
    cappuccinoTitle.className = "item-title";
    cappuccinoTitle.innerText = "Cappuccino";
    cappuccinoCard.appendChild(cappuccinoTitle);

    let cappuccinoContent = document.createElement('div');
    cappuccinoContent.className = "item-text";
    cappuccinoContent.innerText = "Made with equal parts double espresso, steamed milk, and steamed milk foam on top";
    cappuccinoCard.appendChild(cappuccinoContent);

    cardMenu.appendChild(cappuccinoCard);

    //esspresso
    let esspressoCard = document.createElement('div');
    esspressoCard.className = "card";

    let esspressoImg = new Image();
    esspressoImg.src = essp;
    esspressoImg.className = "essp-image";
    esspressoCard.appendChild(esspressoImg);

    let esspressoTitle =  document.createElement('div');
    esspressoTitle.className = "item-title";
    esspressoTitle.innerText = "Esspresso";
    esspressoCard.appendChild(esspressoTitle);

    let esspressoContent = document.createElement('div');
    esspressoContent.className = "item-text";
    esspressoContent.innerText = "Concentrated form of coffee served in small, strong shots";
    esspressoCard.appendChild(esspressoContent);

    cardMenu.appendChild(esspressoCard);

    //americano
    let americanoCard = document.createElement('div');
    americanoCard.className = "card";

    let americanoImg = new Image();
    americanoImg.src = americano;
    americanoImg.className = "ameri-image";
    americanoCard.appendChild(americanoImg);

    let americanoTitle =  document.createElement('div');
    americanoTitle.className = "item-title";
    americanoTitle.innerText = "Americano";
    americanoCard.appendChild(americanoTitle);

    let americanoContent = document.createElement('div');
    americanoContent.className = "item-text";
    americanoContent.innerText = "Coffee drink prepared by diluting an espresso with hot water";
    americanoCard.appendChild(americanoContent);

    cardMenu.appendChild(americanoCard);

    contentContainer.appendChild(cardMenu);
    container.appendChild(contentContainer)


    return container;

}

export {menu};