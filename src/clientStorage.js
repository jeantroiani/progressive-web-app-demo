import localforage from 'localforage'; 

const carInstance = localforage.createInstance({
    name: 'cars'
});

export async function addCars(newCars) {
    try {
        const instance = await carInstance.setInstance(newCars);
    } catch (e) {
        console.error(e);
    }
}
