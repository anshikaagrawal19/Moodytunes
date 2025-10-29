function detectMood() {
  const mood = document.getElementById("moodInput").value.toLowerCase();
  const result = document.getElementById("result");
  const songsDiv = document.getElementById("songs");

  if (!mood) {
    result.textContent = "Please enter how you feel 🌙";
    songsDiv.innerHTML = "";
    return;
  }

  let emotion = "Calm";
  let bg = "linear-gradient(135deg, #5b86e5, #36d1dc)";
  let songList = [];

  if (mood.includes("happy") || mood.includes("excited")) {
    emotion = "Happy";
    bg = "linear-gradient(135deg, #f6d365, #fda085)";
    songList = ["Happy – Pharrell Williams", "Good Life – OneRepublic", "Uptown Funk – Bruno Mars"];
  } else if (mood.includes("sad") || mood.includes("lonely")) {
    emotion = "Sad";
    bg = "linear-gradient(135deg, #667eea, #764ba2)";
    songList = ["Someone Like You – Adele", "Let Her Go – Passenger", "Channa Mereya – Arijit Singh"];
  } else if (mood.includes("love") || mood.includes("romantic")) {
    emotion = "Romantic";
    bg = "linear-gradient(135deg, #ff9a9e, #fecfef)";
    songList = ["Perfect – Ed Sheeran", "Raabta – Arijit Singh", "Tum Se Hi – Mohit Chauhan"];
  } else if (mood.includes("angry") || mood.includes("frustrated")) {
    emotion = "Energetic";
    bg = "linear-gradient(135deg, #ff416c, #ff4b2b)";
    songList = ["Believer – Imagine Dragons", "Lose Yourself – Eminem", "Zinda – Bhaag Milkha Bhaag"];
  } else if (mood.includes("relaxed") || mood.includes("calm")) {
    emotion = "Calm";
    bg = "linear-gradient(135deg, #89f7fe, #66a6ff)";
    songList = ["Weightless – Marconi Union", "Night Changes – One Direction", "Kaise Hua – Vishal Mishra"];
  }

  document.body.style.background = bg;
  result.textContent = `🎧 Detected Mood: ${emotion}`;
  songsDiv.innerHTML = songList.map(song => `<div class="song-card">${song}</div>`).join("");
}
