import createRestaurantHomePage from "./restautant";
import createRestaurantMenuPage from "./menu";
import createRestaurantContactPage from "./contact-page";


const createTabs = () => {
    const content = document.querySelector("#content");

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content')


    const menu1 = document.createElement('div');
    const menu2 = document.createElement('div');
    const menu3 = document.createElement('div');

    menu1.id = "home-btn";
    menu2.id = "menu-btn";
    menu3.setAttribute('id',"contact-btn");

    menu1.classList.add = "tab";
    menu2.classList.add = "tab";
    menu3.classList.add = "tab";

    menu1.textContent = "aaaHome";
    menu2.textContent = "mmmMenu";
    menu3.textContent = "cccContact";


    content.appendChild(menu1);
    content.appendChild(menu2);
    content.appendChild(menu3);


    menu1.addEventListener("click", () => {
        // clearContent();
        createRestaurantHomePage();
    })
    menu2.addEventListener("click", () => {
        // clearContent();
        createRestaurantMenuPage();
    })
    menu3.addEventListener("click", () => {
        // clearContent();
        createRestaurantContactPage();
    })
}

function clearContent() {
    const content = document.getElementById('content');
    const pageContent = document.querySelector('.page-content');
    if (pageContent) {
        content.removeChild(pageContent);
    }
}


export default createTabs;