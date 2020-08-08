export default function getTime(date) {
    let minutes = (new Date() - new Date(date)) / 6e4;
    const hours = parseInt(minutes / 60);
    minutes = parseInt(minutes % 60);

    return {
        minutes,
        hours
    }
}