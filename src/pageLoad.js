import createRestaurantHomePage from './restautant'
import createTabs from "./tabs";

function initialLoad() {
    createTabs();
    createRestaurantHomePage();
}

export default  initialLoad;