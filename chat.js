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
    "hello": "hello buddy how can i help you.today if you have any query please enter the number for get the information."
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
