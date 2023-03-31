import "./styles/main.css";
import "./styles/reset.css";
import {records} from './data/records';

const start = document.querySelector('#start') as HTMLElement;
const album = document.querySelector('#album') as HTMLElement;
const artist = document.querySelector('#artist') as HTMLElement;

let isChoosing = false;
let intervalId: NodeJS.Timer = null;
start.onclick = () => {
    isChoosing = !isChoosing;
    if (isChoosing) {
        start.innerHTML = 'STOP';
        const numOfAlbums = records.length;
        intervalId = setInterval(() => {
            const index = Math.floor(Math.random() * numOfAlbums);
            album.innerHTML = records[index].album;
            artist.innerHTML = records[index].artist;
        }, 100);
    } else {
        clearInterval(intervalId);
        start.innerHTML = 'START';
    }
};