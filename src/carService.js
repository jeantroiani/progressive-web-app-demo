import 'whatwg-fetch';
import { appendCars } from './template';
import { addCars, getCars, getLastCarId } from './clientStorage';

const apiUrlPath = 'https://bstavroulakis.com/pluralsight/courses/progressive-web-apps/service/';
const apiUrlLatest = apiUrlPath + 'latest-deals.php';
const apiUrlCar = apiUrlPath + 'car.php?cardId=';


function loadMore() {
    getCars()
    .then(cars => {
        Promise.all(cars).then(values => {
            appendCars(values);            
        })
    })
}

export function loadMoreRequest() {
    console.log(getLastCarId());
    fetch(apiUrlLatest + "?carId=" + getLastCarId())
    .then(response => {
        return response.json(); 
    })
    .then(data => {
        addCars(data.cars)
        .then((dataFetched) => {
            loadMore();         
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