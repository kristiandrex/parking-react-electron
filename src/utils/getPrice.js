import store from '../redux/store';

export default function getPrice(time, category) {
    const config = store.getState().config;

    const price = category === 'CAR'
        ? config.price.cars
        : config.price.motorcycles;

    const currentTime = ((time.hours * 60) + time.minutes);

    const total = currentTime > config.time
        ? currentTime * price
        : config.time * price;

    return total;
}