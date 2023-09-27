const summarizeButton = document.getElementById("summarize-button");
const videoLinkInput = document.getElementById("video-link");
const loading = document.getElementById("loading");
const summaryBox = document.getElementById("summary-box");
const errorDiv = document.getElementById("error-message");
const errorText = document.getElementById("error-text");

summarizeButton.addEventListener("click", async () => {
  errorText.textContent = "";
  errorDiv.style.display = "none";
  const videoLink = videoLinkInput.value.trim();
  if (videoLink === "") {
    errorDiv.style.display = "block";
    errorText.textContent = "Please enter a YouTube link.";
    return;
  }

  const isYouTubeLink = videoLink.includes("youtube.com/watch?v=");
  if (!isYouTubeLink) {
    errorDiv.style.display = "block";
    errorText.textContent = "Please enter a valid YouTube link.";
    return;
  }
  summarizeButton.style.display = "none";
  loading.style.display = "block";

  try {
    const response = await fetch("/openai/get_summary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: videoLink }),
    });

    const data = await response.json();
    const content = data.result;
    const formattedContent = content.replace(/\n/g, "<br>");

    summaryBox.innerHTML = formattedContent;
    summaryBox.style.display = "block";

    loading.style.display = "none";
    summaryBox.style.display = "block";
    // summaryBox.textContent = data.result;
    videoLinkInput.value = "";
    summarizeButton.style.display = "block";
  } catch (error) {
    errorDiv.style.display = "block";
    errorText.textContent = error;
    loading.style.display = "none";
  }
});
