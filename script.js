// 🔹 https://api.openai.com/v1/chat/completions (never share publicly!)
const API_KEY = "https://api.openai.com/v1/chat/completions";

async function generateReply() {
  let msg = document.getElementById("msg").value;

  const stylePrompt = `
  You are a romantic male who chats in Roman Urdu + some English.
  Personality:
  - Very romantic and caring
  - Soft flirty
  - Cute nakhrey sometimes
  - Always respectful ("aap" use karo)
  - Uses emojis 💖😭😏
  - Stretches words like "soooo", "pleassssse", "loveeeee youhhh"
  - Uses nicknames randomly: "sweetheart", "cutie pie", "mery bachy"
  Reply in the same tone, flirty & romantic style.
  `;

  const finalPrompt = stylePrompt + "\nMessage from her: " + msg + "\nYour reply:";

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + API_KEY
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: finalPrompt }],
        max_tokens: 100
      })
    });

    const data = await response.json();
    const reply = data.choices[0].message.content;

    // Screen pe show karo
    document.getElementById("reply").innerText = reply;

    // 🔹 Voice play (default)
    speakReply("default"); // agar tum pre-recorded voice use kar rahe ho
  } catch (error) {
    console.error(error);
    document.getElementById("reply").innerText = "Oops 😅 kuch error ho gaya!";
  }
}

// 🔹 Pre-recorded voice function
function speakReply(replyKey) {
  const audio = new Audio("audio/" + replyKey + ".mp3");
  audio.play();
}
