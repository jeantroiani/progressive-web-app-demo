import 'whatwg-fetch';
import { appendCars } from './template';

const apiUrlPath = 'https://bstavroulakis.com/pluralsight/courses/progressive-web-apps/service/';
const apiUrlLatest = apiUrlPath + 'latest-deals.php';

export function loadMoreRequest() {
    fetch(apiUrlLatest)
    .then(response => {
        return response.json(); 
    })
    .then(data => {
        appendCars(data.cars);
    });
}