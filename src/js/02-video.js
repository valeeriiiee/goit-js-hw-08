import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Vimeo('vimeo-player');

// Save playback time to local storage
const savePlaybackTime = (time) => {
  localStorage.setItem('videoplayer-current-time', time);
};

player.on('timeupdate', (data) => {
  const currentTime = data.seconds;
  savePlaybackTime(currentTime);
});

// When reloading the page, use the setCurrentTime() method to resume playback from the saved position
document.addEventListener('DOMContentLoaded', () => {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime !== null) {
    player.setCurrentTime(savedTime).then(() => {
      // Video has been seeked
    }).catch((error) => {
      console.error('Error setting current time:', error);
    });
  }
});

player.on('timeupdate', throttle((data) => {
  const currentTime = data.seconds;
  savePlaybackTime(currentTime);
}, 1000)); // Throttle to once per second