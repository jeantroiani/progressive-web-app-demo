import { loadMoreRequest, loadCarPage } from './carService';

window.pageEvents = {
    loadCarPage: carId => {
        loadCarPage(carId);
    } 
}

loadMoreRequest();