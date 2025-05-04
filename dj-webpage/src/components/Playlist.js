class Playlist {
    constructor() {
        this.tracks = [];
    }

    addTrack(track) {
        this.tracks.push(track);
    }

    removeTrack(track) {
        this.tracks = this.tracks.filter(t => t !== track);
    }

    getTracks() {
        return this.tracks;
    }

    selectTrack(index) {
        if (index >= 0 && index < this.tracks.length) {
            return this.tracks[index];
        }
        return null;
    }
}

export default Playlist;