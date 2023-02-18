// Import the API module
import { getRealtimeTranscript } from './api.js';

// Get a reference to the transcription text element
const transcriptionText = document.getElementById('transcription-text');

// Update the transcription text with the latest real-time transcript data
const updateTranscription = (data) => {
  transcriptionText.innerHTML = '';

  data.forEach((item) => {
    const timestamp = item.timestamp;
    const speaker = item.speaker;
    const text = item.text;

    const div = document.createElement('div');
    div.innerHTML = `<strong>${speaker} (${timestamp}):</strong> ${text}`;
    transcriptionText.appendChild(div);
  });
};

// Set up a loop to continuously update the transcription data
setInterval(() => {
  getRealtimeTranscript().then((data) => {
    updateTranscription(data);
  });
}, 1000);
