# YouTube Video Summarizer

## Introduction

The YouTube Video Summarizer is a web application that allows you to quickly generate summaries for YouTube videos. It uses the OpenAI API to provide concise summaries of video content.

## Features

- Summarize YouTube videos quickly and efficiently.
- Real-time feedback with loading animations.
- Error handling for invalid YouTube links and API errors.
- Copy summary to clipboard for easy sharing.

## Technologies Used

- HTML, CSS, JavaScript
- Node.js
- OpenAI API

## Getting Started

To get started with the YouTube Video Summarizer, follow these steps:

1. **Navigate to the project directory:**

   ```bash
   cd YouTube-Video-Summarizer
   ```

2. **Install the required dependencies:**

   ```bash
   npm install
   ```

3. **Set up your environment variables:**

   Create a `.env` file in the root directory and add your API keys and other configuration details.

   ```env
   OPENAI_API_KEY=your-api-key
   ```

4. **Start the application:**

   ```bash
   npm start
   ```

The application should now be running locally at http://localhost:3000.

## Usage

To use the YouTube Video Summarizer:

1. Visit the application in your web browser.
2. Enter a valid YouTube video link in the input field.
3. Click the "Summarize" button to generate a summary for the video.
4. Wait for the summary to be generated. A loading animation will indicate that the process is ongoing.
5. Once the summary is ready, it will be displayed in the summary box.
6. You can copy the summary text to your clipboard by clicking the "Copy" icon in the summary box.

## Error Handling

The YouTube Video Summarizer includes error handling for invalid YouTube links and API errors. If you encounter any issues, you will receive error messages to guide you.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test them.
4. Commit your changes.
5. Push your branch to your forked repository.
6. Open a pull request with a clear title and description.

## Acknowledgments

We would like to thank the open-source community and the creators of the OpenAI API for their contributions and support.
