import Mixer from './components/Mixer';
import Playlist from './components/Playlist';

const mixer = new Mixer();
const playlist = new Playlist();

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the DJ interface
    mixer.initialize();
    playlist.initialize();
});