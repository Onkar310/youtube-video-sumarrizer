const openai = require("../config/openAiConfig");
const { getTranscript } = require("./youtubeController");

const summary = async (req, res) => {
  const { url } = req.body;
  const plainText = await getTranscript(url);
  if (plainText === 404) {
    res.status(400).json({
      result: "Transcript may be disabled for video try another video.",
    });
  }
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Please provide a concise summary of the key points, insights, and important information from the following video transcript. Focus on capturing the main ideas and highlights of the video's content in 100 words.make it point wise. Also add brief title at top. transcript: ${plainText}.`,
        },
      ],
    });
    res.status(200).json({
      result: response.choices[0].message.content,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      result: "Transcript may be disabled for video try another video.",
    });
  }
};

module.exports = { summary };
