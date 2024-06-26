

const createRestaurantContactPage = () => {
    const content = document.querySelector("#content");

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content')


    const headline = document.createElement('h1');
    headline.textContent = "Caontact Page";
    pageContent.appendChild(headline);

    content.appendChild(pageContent);
}

export default createRestaurantContactPage;