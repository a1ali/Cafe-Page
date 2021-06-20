import coffeeSVG from "/images/coffee.svg"


function home() {
    let container = document.createElement('div');
    container.className = "container";

    let containerContent = document.createElement('div');
    containerContent.className = "content-container";

    let homeLayout = document.createElement('div');
    homeLayout.className = "home-layout";

    let coffeeImg = new Image();
    coffeeImg.src = coffeeSVG;
    coffeeImg.className = "coffee-svg";
    homeLayout.appendChild(coffeeImg);

    let contentInfo =  document.createElement('div');
    contentInfo.className = "content-info";
    contentInfo.innerText = "Good ideas start with great coffee"
    homeLayout.appendChild(contentInfo);

    let emoji = document.createElement('div');
    emoji.className = "heart";
    emoji.innerText = "☕😍";
    homeLayout.appendChild(emoji);

    containerContent.appendChild(homeLayout);

    container.appendChild(containerContent);

    return container;

}

export {home}