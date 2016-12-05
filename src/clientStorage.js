import localforage from 'localforage'; 

const carFetchLimit = 3;
let lastItemId = null;
let carsStored = [];

const carsInstance = localforage.createInstance({
    name: 'cars'
})

export async function addCars(newCars) {
    try {
        newCars.forEach(await function(car) {
            carsInstance.setItem(car.key, car.value);
        });
        return;
    } catch (e) {
        console.error(e);
    }
}

async function getKeys() {
    try{
        let carKeys = await carsInstance.keys();
        return carKeys;
    } catch (e) {
        console.log(e);
    }
}

async function getCar(key) {
    try{
        let storedCar = await carsInstance.getItem(key);
        return storedCar;
    } catch (e) {
        console.log(e);
    }
}

async function storeCars(carsKey) {
    try {
        carsKey.forEach(function(car) {
            const carFetched = getCar(car);
            carsStored.push(carFetched);
        });
        return carsStored;
    } catch (e) {
        console.error(e);
    }
}

export async function getCars() {
    let index;
    let carsStored = [];
    let carsKey = await getKeys();
    index = carsKey.indexOf(lastItemId);
    if (index == -1) {
        index = carsKey.length;
    }
    if (index == 0) {
        return [];
    }
    carsKey = carsKey.splice(index - carFetchLimit, carFetchLimit);
    const storedCar = await storeCars(carsKey);
    return storedCar;
}