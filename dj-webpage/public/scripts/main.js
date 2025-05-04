// This file contains the main JavaScript functionality for the DJ webpage. 
// It initializes the application and handles user interactions.

document.addEventListener('DOMContentLoaded', () => {
    const mixer = new Mixer();
    const playlist = new Playlist();

    // Initialize the mixer and playlist
    mixer.init();
    playlist.init();

    // Event listeners for user interactions
    document.getElementById('loadTrackButton').addEventListener('click', () => {
        const trackUrl = document.getElementById('trackInput').value;
        playlist.addTrack(trackUrl);
    });

    document.getElementById('playButton').addEventListener('click', () => {
        mixer.play();
    });

    document.getElementById('pauseButton').addEventListener('click', () => {
        mixer.pause();
    });

    document.getElementById('stopButton').addEventListener('click', () => {
        mixer.stop();
    });

    document.getElementById('volumeSlider').addEventListener('input', (event) => {
        mixer.setVolume(event.target.value);
    });
});