function speakReply(replyKey) {
  const audio = new Audio("audio/" + replyKey + ".mp3");
  audio.play();
}

function generateReply() {
  let msg = document.getElementById("msg").value.toLowerCase();
  let reply = "";

  if(msg.includes("offline")) {
    reply = "kahan hain aap?? 😏";
    speakReply("offline");
  } else if(msg.includes("naraz")) {
    reply = "sssssoooorrrrryyyy nawww please 😭";
    speakReply("naraz");
  } else if(msg.includes("tabiyat")) {
    reply = "kya hua mery bachy ko?? 💖";
    speakReply("tabiyat");
  } else if(msg.includes("jaa rahi")) {
    reply = "bubyeeee loveeeee youhhhh sooooo muchhhhh mmmmwwwwhhh 💖";
    speakReply("jaa_rahi");
  } else if(msg.includes("kya kar")) {
    reply = "kar kar rahi thin aap?? 💖";
    speakReply("kya_kar");
  } else {
    reply = "Achw... bas tumhari yaad aa rahi thi 😏💖";
    speakReply("default");
  }

  document.getElementById("reply").innerText = reply;
}
