export function appendCars(cars) {
    document.getElementById('first-load').innerHTML = '';
    let cardHTML = "";
    for (let i = 0; i < cars.length; i++) {
        cardHTML += generateCarCards(cars[i].value);
    }
    document.querySelector('.mdl-grid').insertAdjacentHTML('beforeend', cardHTML);
}

function generateCarCards(car) {
    let template = document.querySelector('#car-cards').innerHTML;
    let title = car.brand + ' ' + car.model + ' ' + car.year;
    template = template.replace('{{title}}', title);
    template = template.replace('{{image}}', car.image);
    template = template.replace('{{price}}', car.price);
    return template;
}