import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
player.setCurrentTime(localStorage.getItem('time-after-pause'));

player.on('timeupdate',  throttle(function(data) {
    localStorage.setItem('time-after-pause', data.seconds)
}),1000);
