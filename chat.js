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
    "1": "Push-ups are a popular bodyweight exercise that primarily targets the chest, arms, and shoulders. They are performed in a prone position, raising and lowering the body using the arms. The exercise works the pectoralis major and minor muscles, as well as the anterior deltoids and triceps brachii. The rectus abdominis and transversus abdominis muscles of the abdomen also engage to keep the body aligned and off the floor. Additionally, stabilizer muscles such as the erector spinae, gluteus medius and minimus, and biceps brachii help maintain proper form during the exercise. Push-ups can be modified in various ways, such as changing hand positions or elevating the feet, to emphasize different muscle groups or increase difficulty. Weighted push-ups can also be performed for further resistance and strength gains.",
    "2": "SQUATS Squats are a compound exercise that targets multiple muscle groups in the lower body, including the quadriceps, hamstrings, glutes, and calves. Performed by lowering the body down into a seated position and then standing up, squats work to strengthen the muscles of the legs, hips, and core. The exercise also engages the stabilizer muscles of the back, shoulders, and abdominals to maintain proper form and balance. Squats can be modified to suit different fitness levels, such as bodyweight squats, goblet squats, or weighted squats, and can be performed with varying depths and ranges of motion to focus on specific muscle groups. Regular squatting can improve overall lower body strength, flexibility, and mobility, as well as enhance athletic performance and everyday functional movement.",
    "3": "PLANKS The plank is a static core exercise that targets the abdominal muscles, including the rectus abdominis, obliques, and transversus abdominis. The exercise is performed by holding the body in a straight line, supported by the forearms and toes, for a set period of time. The plank works to strengthen the core muscles, as well as the shoulders, arms, and glutes, by engaging them to maintain proper form and alignment. The exercise can be modified by performing it on the knees, or by raising one leg or arm at a time to increase difficulty. Regular planking can improve core strength, stability, and posture, as well as reduce the risk of lower back pain and injury. Additionally, the plank can be used as a foundational exercise for more advanced core movements, such as the side plank and plank with leg lifts.",
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
