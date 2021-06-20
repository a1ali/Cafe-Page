function contact() {
    let container = document.createElement('div');
    container.className = "container";
    let contentContainer = document.createElement('div');
    contentContainer.className = "content-container";

    let contentdiv = document.createElement('div');
    contentdiv.className = "contact";

    let email = document.createElement('div');
    email.className = "email";
    email.innerText = "Coffee@cafecafe.com";
    contentdiv.appendChild(email);

    let address = document.createElement('div');
    address.className = "address";
    address.innerText = "123 Maple St. Brooklyn NY, 11201";
    contentdiv.appendChild(address);

    let phone = document.createElement('div');
    phone.className = "phone";
    phone.innerText = "718-123-4567";
    contentdiv.appendChild(phone);

    contentContainer.appendChild(contentdiv)
    container.appendChild(contentContainer);

    return container;
}


export {contact};