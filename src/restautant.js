

const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content')

    const image = document.createElement('img');
    image.src = "../assets/restaurant_front.jpg";
    image.height = "300";
    pageContent.appendChild(image);

    const headline = document.createElement('h1');
    headline.textContent = "Welcome All";
    pageContent.appendChild(headline);

    const oneLiner = document.createElement('p');
    oneLiner.textContent = "Food For All";
    pageContent.appendChild(oneLiner);

    content.appendChild(pageContent);
}

export default createRestaurantHomePage;