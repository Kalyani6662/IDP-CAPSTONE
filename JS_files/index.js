import * as AssemblyAI from 'assemblyai'; // Import everything

const client = new AssemblyAI.AssemblyAI({
  apiKey: '6315636915cc462a9719e0f760018db2'
});

const audioUrl = 'https://assembly.ai/sports_injuries.mp3';
const config = {
  audio_url: audioUrl
};

const run = async () => {
  try {
    console.log('Transcription request sent...');
    const transcript = await client.transcripts.transcribe(config);
    console.log('Transcription completed!');
    console.log(transcript.text);
  } catch (error) {
    console.error('Error during transcription:', error);
  }
};

run();
