<html>
<head>
<title>ANXIETY</title>
<script type="text/javascript" src="index.js"></script>
<link rel="stylesheet" href="style.css" />
</head>
<body>
<div id="main">
    <div><input id="input" type="text" placeholder="Hello there!">
 autocomplete="off"/></div>
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#input").addEventListener("keydown", function(e) {
    if (e.code === "Enter") {
        console.log("Are you feeling anxious?")
< img src=” https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHello&psig=AOvVaw1dB0M29X_1QN-GUcMjBGXf&ust=1622051550115000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOC6yomz5fACFQAAAAAdAAAAABAD” >
<img src =” https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F479563060293346023%2F&psig=AOvVaw3YlaTbXqoCtaUM-0rjuQ6Z&ust=1622051641846000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiEtLOz5fACFQAAAAAdAAAAABAD”> 
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input")
    inputField.addEventListener("keydown", function(e) {
        if (e.code === "Yes") {
            let input = inputField.value;
            inputField.value = "";
            output(url(“https://youtu.be/d96akWDnx0”));
console.log("You are going to be all right. Your feelings are not always rational.  You're just going to relax, calm down, and everything will be all right.
")
    }
  });
});
console.log("Calm Down. Be present in the moment. Everything is here, don't woory.")
<url =” https://www.youtube.com/watch?v=4uoXBrPnSEo”>
   if (e.code === "Yes") {
      let input = inputField.value;
      console.log(`I typed '${input}'`)
	  console.log(`Anxiety is not your identity. It has not changed you into someone unrecognizable. ')
<img src=” https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F479563060293346023%2F&psig=AOvVaw3YlaTbXqoCtaUM-0rjuQ6Z&ust=1622051641846000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiEtLOz5fACFQAAAAAdAAAAABAD >

    }
	function () {
console.log("why shouldnt u write with a broken pencil, because its pointless.")
console.log("Why don't some couples gog to the gym? Because some relationships don't work out..")

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
    "ANXIOUS, how are you?"
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

["Still Feeling ANXIOUS?"],

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



console.log("You still ANXIOUS? Watch a video to concentrate on your breathing?")
<url=” https://youtu.be/wmJ4sLp38e”>

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
const robot = ["If you still feel ANXIOUS, try taking to a loved one."];
console.log(“If it didb't work then, It would be ideal if you **contact a therapist (HOTLINE-18002333330)**);
document.addEventListener("DOMContentLoaded", () => {
...
    if (e.code === "Yes") {
        let input = document.getElementById("input").value;
        document.getElementById("user").innerHTML = input;
        output(input);    
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
  u.voice = allVoices.filter(voice => voice)[0];
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
