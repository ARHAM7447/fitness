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
    "hello": "Hello buddy",
    "1": " Push-ups: are a great exercise for your chest, arms, and shoulders. You do them by lying on your stomach and raising your body up and down using your arms. They also help strengthen your core muscles and improve your posture.",
    "2": " Squats: are a fantastic exercise for your legs, hips, and glutes. You do them by bending your knees and lowering your body down, then standing back up. They help make your legs stronger and more flexible, and can even improve your balance and athletic performance.",
    "3": "Planks: are a simple exercise that targets your core muscles, including your abs and obliques. You do them by holding your body straight, supported by your forearms and toes, for a set amount of time. They help improve your posture, reduce back pain, and make your core stronger and more stable.",
    "4": "Lunges: This exercise works your legs and glutes. Stand straight, take a step forward with one foot, and lower your body until your front knee is at a 90-degree angle. Push back up and repeat with the other leg.",
    "5": "Glute Bridges: This exercise targets your glutes and hamstrings. Lie on your back with your knees bent and feet flat on the ground. Lift your hips off the ground until your body forms a straight line from your shoulders to your knees. Lower back down and repeat.",
    "6": "Jumping Jacks: This is a full-body exercise that gets your heart rate up. Stand with your feet together and arms at your sides. Jump up, spreading your legs and raising your arms above your head. Jump back to the starting position and repeat.",
    "7": "Bicycle Crunches: This exercise works your abs. Lie on your back with your hands behind your head and knees bent. Lift your head and shoulders off the ground and bring your right elbow to your left knee while straightening your right leg. Repeat on the other side.",
    "8": "Burpress: This exercise works your chest, arms, and legs. Stand with your feet shoulder-width apart and lower your body until your thighs are parallel to the ground. Place your hands on the ground and jump your feet back into a plank position. Lower your body until your chest touches the ground, then push back up and jump your feet back to the starting position.",
    "9": "Mountain Climbers: This exercise works your abs and legs. Start in a plank position. Bring one knee up to your chest, then switch and bring the other knee up while extending the first leg back out. It should feel like you're climbing a mountain.",
    "10": "Leg Raises: This exercise works your lower abs. Lie on your back with your arms at your sides. Lift your legs off the ground and raise them until they're at a 90-degree angle. Lower them back down, but don't let them touch the ground.",
    "11": "Jump Rope: This is a cardio exercise that gets your heart rate up. Simply jump over the rope as it passes under your feet.",
    "12": "Wall Sits: This exercise works your legs and glutes. Stand with your back against a wall and lower your body until your thighs are parallel to the ground. Hold the position.",
    "13": "",
    "14": "",
    "15": "",
    "16": "",
    "17": "",
    "18": "",
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
