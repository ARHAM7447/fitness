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
    "1": " Push-ups are a great exercise for your chest, arms, and shoulders. You do them by lying on your stomach and raising your body up and down using your arms. They also help strengthen your core muscles and improve your posture.",
    "2": " Squats are a fantastic exercise for your legs, hips, and glutes. You do them by bending your knees and lowering your body down, then standing back up. They help make your legs stronger and more flexible, and can even improve your balance and athletic performance.",
    "3": "Planks are a simple exercise that targets your core muscles, including your abs and obliques. You do them by holding your body straight, supported by your forearms and toes, for a set amount of time. They help improve your posture, reduce back pain, and make your core stronger and more stable.",
    "4": "",
    "4": "",
    "4": "",
    "4": "",
    "4": "",
    "4": "",
    "4": "",
    "4": "",
    "4": "",
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
