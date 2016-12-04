import 'whatwg-fetch';
import { appendCars } from './template';
import { addCars } from './clientStorage';

const apiUrlPath = 'https://bstavroulakis.com/pluralsight/courses/progressive-web-apps/service/';
const apiUrlLatest = apiUrlPath + 'latest-deals.php';
const apiUrlCar = apiUrlPath + 'car.php?cardId=';

export function loadMoreRequest() {
    fetch(apiUrlLatest)
    .then(response => {
        return response.json(); 
    })
    .then(data => {
        addCars(data.cars)
        .then((dataFetched) => {
            appendCars(dataFetched);         
        });
    })
    .catch(err => {
        console.log(`Error retrieving data: ${err}`);
    });
}

export function loadCarPage(carId) {
    fetch(apiUrlCar + carId)
    .then(response => {
        return response.text(); 
    })
    .then(data => {
        document.body.insertAdjacentHTML('beforeend', data);
    })
    .catch(err => {
        console.error(err);
    })
}