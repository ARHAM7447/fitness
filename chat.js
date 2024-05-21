function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        var chatBox = document.getElementById("chat-box");
        var messageDiv = document.createElement("div");
        messageDiv.className = "message";
        messageDiv.textContent = "You: " + userInput;
        chatBox.appendChild(messageDiv);
        document.getElementById("user-input").value = "";
        
        // Simulate receiving a response from the bot
        setTimeout(function() {
            var botResponse = generateBotResponse(userInput);
            var responseDiv = document.createElement("div");
            responseDiv.className = "message";
            responseDiv.textContent = botResponse;
            chatBox.appendChild(responseDiv);
        }, 1000);
    }
}

function generateBotResponse(message) {
    // Define bot responses based on user input
    var responses = {
        
    };

    // Check if the message matches any predefined responses
    var botResponse = responses[message.toLowerCase()];
    if (botResponse) {
        return "Bot: " + botResponse;
    } else {
        return "Bot: I'm sorry, I didn't understand that. How can I assist you?";
    }
}

  