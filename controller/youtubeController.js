const { json } = require("express");
const { YoutubeTranscript } = require("youtube-transcript");

const getTranscript = async (url) => {
  try {
    const transcript = await YoutubeTranscript.fetchTranscript(url);
    return JSON.stringify(transcript);
  } catch (error) {
    return JSON.stringify(404);
  }
};

module.exports = { getTranscript };
