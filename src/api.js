// Replace with your own API credentials and meeting ID
const API_KEY = 't44WRIKAQOPOjhjIM7V7Q';
const API_SECRET = 'nRSD4FzBZX5qXKY634yVPp4K7ePhz8p7';
const MEETING_ID = '2695735487';

// Define the API endpoint for real-time transcription data
const TRANSCRIPT_API_ENDPOINT = `https://api.zoom.us/v2/metrics/meetings/2695735487/participants?status=active`;

// Fetch real-time transcription data from the Zoom API
export const getRealtimeTranscript = async () => {
  const response = await fetch(TRANSCRIPT_API_ENDPOINT, {
    headers: {
      Authorization: `Basic ${btoa(`${API_KEY}:${API_SECRET}`)}`,
    },
  });

  const data = await response.json();

  const participants = data.participants;
  const transcript = participants
    .filter((p) => p.transcript)
    .map((p) => ({
      timestamp: p.last_audio.timestamp,
      speaker: p.name,
      text: p.transcript.transcript,
    }));

  return transcript;
};
