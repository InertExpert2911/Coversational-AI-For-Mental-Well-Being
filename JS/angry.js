<html>
<head>
<title>ANGRY BOT</title>
<script type="text/javascript" src="index.js"></script>
<link rel="stylesheet" href="style.css" />
</head>
<body>
<div id="main">
    <div><input id="input" type="text" placeholder="Hello there!"
 autocomplete="off"/></div>
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#input").addEventListener("keydown", function(e) {
    if (e.code === "Yes") {
        console.log("Breathe In 1..2..3 and Breathe Out 1..2..3 👍")
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input")
    inputField.addEventListener("keydown", function(e) {
        if (e.code === "Yes") {
            let input = inputField.value;
            inputField.value = "";
console.log("You good to go? All-set?")
    }
  });
});
console.log("**Take a breather**
Your breathing becomes shallower and speeds up as you grow angry. 
Reverse that trend (and your anger) by taking slow, deep breaths from your nose and exhaling out of your mouth for several moments.")
<url =” https://www.youtube.com/watch?v=4uoXBrPnSEo”>
   if (e.code === "Maybe? Yes") {
      let input = inputField.value;
      console.log(`I typed '${input}'`)
	  console.log(`Want to continue?')
output(url(“output(url(“https://youtu.be/d96akWDnx0”));”));

    }
	function () {
console.log("Follow the above video and try meditating.")
console.log("Continue")

  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

  text = text
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "");
}
const trigger = [
//0 
["hi", "hey", "hello"],
//1
["how are you", "how are things"],
//2
["what is going on", "what is up"],
//3
["happy", "good", "well", "fantastic", "cool"],
//4
["bad", "bored", "tired", "sad"],
//5
["tell me story", "tell me joke"],
//6
["thanks", "thank you"],
//7
["bye", "good bye", "goodbye"]
];

const reply = [
//0 
["Hello!", "Hi!", "Hey!", "Hi there!"], 
//1
[
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
//2
[
    "Nothing much",
    "Exciting things!"
  ],
//3
["Are you feeling better?"],
//4
[""],
["What about?", "Once upon a time..."],

["Still Feeling Depressed?"],

["Then, It would be ideal if you **contact a therapist (HOTLINE-18002333330)**"],
];

const alternative = [
  "Same",
  "Go on...",
  "Try again",
  "I'm listening...",
  "Bro..."
];
function compare(triggerArray, replyArray, text) {
  let item;
  for (let x = 0; x < triggerArray.length; x++) {
    for (let y = 0; y < replyArray.length; y++) {
      if (triggerArray[x][y] == text) {
        items = replyArray[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
  }
  return item;
}
function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi "");
  text = text
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "");

//compare arrays
//then search keyword
//then random alternative

console.log("Try Listening To Your Favorite Music.")
<a imgsrc=”  ”  href=”Watch” :” no”>
<url=” https://www.youtube.com/watch?v=kdLTOurs2lA”>

  if (compare(trigger, reply, text)) {
    product = compare(trigger, reply, text);
  } else if (text.match(/robot/gi)) {
    product = robot[Math.floor(Math.random() * robot.length)];
  } else {
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }

  //update DOM
  addChat(input, product);
}
const robot = ["If you still feel sad, try taking to a loved one."];
console.log("Relax Your Body and Muscles.");
document.addEventListener("DOMContentLoaded", () => {
...
    if (e.code === "Hear Jokes?") {
        let input = document.getElementById("input").value;
        document.getElementById("user").innerHTML = input;
console.log("Here's a good one for you:
The past, the present, and the future walk into a bar...It was tense. 😂"); 
        output(input); 
console.log("Let me tell you another one and this is really good!
What do you call a rose that wants to go to the moon?...Gulab ja Moon.");  
output(url(“https://youtu.be/d96akWDnx0”)); 
     }
  });
});
function output(input) {
    let product;
    let text = (input.toLowerCase()).replace(/[^\w\s\d]/gi, "");
...
    document.getElementById("chatbot").innerHTML = product;
    speak(product);

    //clear input value
    document.getElementById("input").value = "";
}
function addChat(input, product) {
  const mainDiv = document.getElementById("main");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.innerHTML = `You: <span id="user-response">${input}</span>`;
  mainDiv.appendChild(userDiv);

  let botDiv = document.createElement("div");
  botDiv.id = "bot";
  botDiv.innerHTML = `Chatbot: <span id="bot-response">${product}</span>`;
  mainDiv.appendChild(botDiv);
  speak(product);
}
function speak(string) {
  const u = new SpeechSynthesisUtterance();
  allVoices = speechSynthesis.getVoices();
  u.voice = allVoices.filter(voice => voice.name === "Alex")[0];
  u.text = string;
  u.lang = "en-US";
  u.volume = 1; //0-1 interval
  u.rate = 1;
  u.pitch = 1; //0-2 interval
  speechSynthesis.speak(u);
}
</div>
</body>
</html>
