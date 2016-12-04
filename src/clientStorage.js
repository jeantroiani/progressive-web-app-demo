import localforage from 'localforage'; 

export async function addCars(newCars) {
    try {
        const dataSaved = await localforage.setItem('cars', newCars);
        const data = await localforage.getItem('cars');
        return data;
    } catch (e) {
        console.error(e);
    }
}
