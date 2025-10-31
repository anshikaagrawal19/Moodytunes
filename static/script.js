document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".mood-buttons button");
  const videoContainer = document.getElementById("video-container");
  const singerSelect = document.getElementById("singer");
  const equalizer = document.getElementById("equalizer");
  const body = document.body;

  // 🎵 YouTube song links for moods
  const moodSongs = {
    happy: [
      "https://www.youtube.com/embed/ZbZSe6N_BXs",
      "https://www.youtube.com/embed/OPf0YbXqDm0",
      "https://www.youtube.com/embed/oxqnFJ3lp5k"
    ],
    sad: [
      "https://www.youtube.com/embed/hLQl3WQQoQ0",
      "https://www.youtube.com/embed/RBumgq5yVrA",
      "https://www.youtube.com/embed/2Vv-BfVoq4g"
    ],
    heartbreak: [
      "https://www.youtube.com/embed/xRbPAVnqtcs",
      "https://www.youtube.com/embed/J_CFBjAyPWE",
      "https://www.youtube.com/embed/lp-EO5I60KA"
    ],
    motivational: [
      "https://www.youtube.com/embed/wnHW6o8WMas",
      "https://www.youtube.com/embed/7wtfhZwyrcc",
      "https://www.youtube.com/embed/zp1BXPX8jcU"
    ],
    romantic: [
      "https://www.youtube.com/embed/2Vv-BfVoq4g",
      "https://www.youtube.com/embed/SsK90GWBVQs",
      "https://www.youtube.com/embed/T3E9Wjbq44E"
    ],
    neutral: [
      "https://www.youtube.com/embed/syFZfO_wfMQ",
      "https://www.youtube.com/embed/IcrbM1l_BoI",
      "https://www.youtube.com/embed/kXYiU_JCYtU"
    ],
    energetic: [
      "https://www.youtube.com/embed/fKopy74weus",
      "https://www.youtube.com/embed/e-ORhEE9VVg",
      "https://www.youtube.com/embed/0KSOMA3QBU0"
    ]
  };

  // 🌈 Background gradients for moods
  const moodBackgrounds = {
    happy: "linear-gradient(135deg, #f6d365, #fda085)",
    sad: "linear-gradient(135deg, #667eea, #764ba2)",
    heartbreak: "linear-gradient(135deg, #ff758c, #ff7eb3)",
    motivational: "linear-gradient(135deg, #00c6ff, #0072ff)",
    romantic: "linear-gradient(135deg, #ff9a9e, #fecfef)",
    neutral: "linear-gradient(135deg, #485563, #29323c)",
    energetic: "linear-gradient(135deg, #f83600, #f9d423)"
  };

  // 🎤 YouTube song links for singers
  const singerSongs = {
    "arijit singh": [
      "https://www.youtube.com/embed/xRbPAVnqtcs",
      "https://www.youtube.com/embed/J_CFBjAyPWE",
      "https://www.youtube.com/embed/2Vv-BfVoq4g"
    ],
    "atif aslam": [
      "https://www.youtube.com/embed/oHWQ2-0d2sE",
      "https://www.youtube.com/embed/5wPNYwW0ht8",
      "https://www.youtube.com/embed/1t3qM1lbt_4"
    ],
    "karan aujla": [
      "https://www.youtube.com/embed/vHuFizZWiDA",
      "https://www.youtube.com/embed/JU-6cI7h0Yk",
      "https://www.youtube.com/embed/1LmvxUO6g5s"
    ],
    "kishore kumar": [
      "https://www.youtube.com/embed/7s1VvYhTg3A",
      "https://www.youtube.com/embed/qvKPTmR6JXM",
      "https://www.youtube.com/embed/F6K7E2kK2A8"
    ],
    "kumar sanu": [
      "https://www.youtube.com/embed/B6QG7UGNMGY",
      "https://www.youtube.com/embed/gMCXHkO7pXM",
      "https://www.youtube.com/embed/DX4tq2BqCjo"
    ],
    "udit narayan": [
      "https://www.youtube.com/embed/Ep9FJgzwKu8",
      "https://www.youtube.com/embed/CmH8d8z2bU4",
      "https://www.youtube.com/embed/JvLwtoWZJdE"
    ],
    "kk": [
      "https://www.youtube.com/embed/1lyu1KKwC74",
      "https://www.youtube.com/embed/R7QH3sa9zqw",
      "https://www.youtube.com/embed/7S_tz1z_5bA"
    ],
    "pritam": [
      "https://www.youtube.com/embed/FvOpPeKSf_4",
      "https://www.youtube.com/embed/yxW5yuzVi8w",
      "https://www.youtube.com/embed/q1U3oJwQwBg"
    ]
  };

  // 🎥 Function to embed YouTube video
  function playVideo(link) {
    videoContainer.innerHTML = `
      <iframe src="${link}?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    `;
    equalizer.style.visibility = "visible"; // show equalizer
  }

  // 🎭 Handle mood button clicks
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const mood = button.dataset.mood;

      if (moodSongs[mood]) {
        const randomSong = moodSongs[mood][Math.floor(Math.random() * moodSongs[mood].length)];
        playVideo(randomSong);
        // 🎨 Change background
        body.style.background = moodBackgrounds[mood] || "#111";
        body.style.transition = "background 1.5s ease";
      }
    });
  });

  // 🎤 Handle favorite singer selection
  singerSelect.addEventListener("change", () => {
    const singer = singerSelect.value;

    if (singer && singerSongs[singer]) {
      const randomSong = singerSongs[singer][Math.floor(Math.random() * singerSongs[singer].length)];
      playVideo(randomSong);
      // Keep glowing background for singers
      body.style.background = "radial-gradient(circle at top left, #0f2027, #203a43, #2c5364)";
      body.style.transition = "background 1.5s ease";
    } else {
      videoContainer.innerHTML = `<p>Select a mood or favorite singer to play songs 🎶</p>`;
      equalizer.style.visibility = "hidden";
    }
  });
});
