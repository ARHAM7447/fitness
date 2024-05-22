document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('clear-button').addEventListener('click', clearChat);
document.getElementById('theme-toggle-button').addEventListener('click', toggleTheme);
document.getElementById('user-input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

const chatBox = document.getElementById('chat-box');

function sendMessage() {
  const userInput = document.getElementById('user-input').value;
  if (userInput.trim() !== "") {
    displayMessage(userInput, 'user');
    document.getElementById('user-input').value = "";

    const typingIndicator = document.createElement('div');
    typingIndicator.classList.add('typing-indicator');
    typingIndicator.textContent = 'Bot is typing...';
    chatBox.appendChild(typingIndicator);
    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {
      chatBox.removeChild(typingIndicator);
      const botResponse = generateBotResponse(userInput);
      displayMessage(botResponse, 'bot');
    }, 1000);
  }
}

function displayMessage(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', sender);
  const messageContent = document.createElement('div');
  messageContent.classList.add('message-content');
  messageContent.textContent = message;

  const timestamp = document.createElement('div');
  timestamp.classList.add('timestamp');
  const now = new Date();
  timestamp.textContent = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;

  messageContent.appendChild(timestamp);
  messageElement.appendChild(messageContent);
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;

  saveChat();
}

function generateBotResponse(userInput) {
  const responses = {
    "hello": "Hello buddy how can i assist you if you have any queiry about the meal,netreints,and website releted workout and meditation feel free to ask [IMP Message if you have any query you enter only name of queiry example write nutrition]",
    "nutrition": "Good nutrition involves consuming a variety of foods that provide essential nutrients: proteins, carbohydrates, fats, vitamins, and minerals. Eating a balanced diet helps maintain overall health and energy levels.",
    "workout benefits": "Regular workouts improve cardiovascular health, strengthen muscles, enhance flexibility, and boost mental health by reducing stress and anxiety.",
    "push-ups": "Push-ups strengthen your chest, shoulders, triceps, and core. They help build upper body strength and endurance.",
    "squats": "Squats are great for building lower body strength, particularly in the quads, hamstrings, and glutes. They also improve core strength and stability.",
    "plank": "Planks enhance core strength, stability, and endurance. They also help improve posture and reduce the risk of back pain.",
    "lunges": "Lunges target the glutes, hamstrings, and quads. They improve balance, coordination, and lower body strength.",
    "glute bridges": "Glute bridges strengthen the glutes, hamstrings, and lower back. They are effective for improving hip mobility and stability.",
    "jumping jacks": "Jumping jacks are a full-body exercise that improves cardiovascular fitness, coordination, and muscle tone.",
    "bicycle crunches": "Bicycle crunches work the abs and obliques, helping to build a strong and defined core.",
    "burpees": "Burpees are a full-body exercise that builds strength and endurance. They target the arms, chest, quads, glutes, hamstrings, and core.",
    "mountain climbers": "Mountain climbers are a cardio exercise that also works the core, shoulders, and legs. They improve endurance and agility.",
    "leg raises": "Leg raises strengthen the lower abs, hip flexors, and lower back. They help build a strong core.",
    "jump rope": "Jump rope is an effective cardio exercise that improves cardiovascular health, coordination, and agility.",
    "wall sits": "Wall sits target the quads, glutes, and calves. They build lower body strength and endurance.",
    "mindfulness meditation": "Mindfulness meditation involves focusing on the present moment and being aware of your thoughts and feelings without judgment. It helps reduce stress and improve mental clarity.",
    "focused meditation": "Focused meditation involves concentrating on a single point, like your breath or a mantra, to increase focus and reduce distractions.",
    "movement meditation": "Movement meditation includes practices like yoga and tai chi, combining physical movement with meditative focus to enhance mind-body connection.",
    "mantra meditation": "Mantra meditation uses repetitive sound or phrase (mantra) to help focus the mind and achieve a meditative state.",
    "transcendental meditation": "Transcendental Meditation is a form of silent mantra meditation that aims to transcend ordinary thought and experience a state of restful alertness.",
    "loving-kindness meditation": "Loving-kindness meditation involves focusing on developing feelings of compassion and love for oneself and others, promoting emotional well-being."
  };

  const response = responses[userInput.toLowerCase()] || "I'm sorry, I didn't understand that. How can I assist you?";
  return "Bot: " + response;
}

function clearChat() {
  chatBox.innerHTML = '';
  saveChat();
}

function toggleTheme() {
  document.body.classList.toggle('theme-dark');
}

function saveChat() {
  const messages = [];
  chatBox.querySelectorAll('.message').forEach(message => {
    messages.push({
      text: message.querySelector('.message-content').textContent.replace(/(\d{2}:\d{2})$/, ''),
      sender: message.classList.contains('user') ? 'user' : 'bot',
      timestamp: message.querySelector('.timestamp').textContent
    });
  });
  localStorage.setItem('chatMessages', JSON.stringify(messages));
}

function loadChat() {
  const savedMessages = JSON.parse(localStorage.getItem('chatMessages'));
  if (savedMessages) {
    savedMessages.forEach(msg => {
      displayMessage(msg.text.trim(), msg.sender);
    });
  }
}

window.onload = loadChat;
