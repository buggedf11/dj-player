export function loadAudioFile(file) {
    return new Promise((resolve, reject) => {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const reader = new FileReader();

        reader.onload = (event) => {
            audioContext.decodeAudioData(event.target.result, (buffer) => {
                resolve(buffer);
            }, (error) => {
                reject(error);
            });
        };

        reader.onerror = (error) => {
            reject(error);
        };

        reader.readAsArrayBuffer(file);
    });
}

export function playAudio(buffer, volume = 1) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioContext.createBufferSource();
    const gainNode = audioContext.createGain();

    gainNode.gain.value = volume;
    source.buffer = buffer;
    source.connect(gainNode);
    gainNode.connect(audioContext.destination);
    source.start(0);
}

export function pauseAudio(source) {
    source.stop();
}

export function stopAudio(source) {
    source.stop();
}