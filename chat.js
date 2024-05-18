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
        "hello": "Hello! How can I assist you today?",
        "goodbye": "Goodbye! Have a great day!",
        "thank you": "You're welcome!",
        // Add more responses as needed
        "workout plan": "A good workout plan includes a mix of cardio and strength training exercises. Here's a sample plan: 1) Warm up with 5-10 minutes of cardio, 2) Do 3 sets of 8-12 reps of compound exercises like squats, deadlifts, and bench press, 3) Finish with 10-15 minutes of cardio.",
        "weight loss": "To lose weight, focus on exercises that burn a lot of calories such as running, swimming, and cycling. Strength training exercises like squats and deadlifts can also help by building muscle, which increases your metabolism.",
        "flexibility": "To improve your flexibility, try doing dynamic stretches before your workout and static stretches after your workout. Yoga and Pilates are also great for improving flexibility.",
        // Add more workout-related responses
    };

    // Check if the message matches any predefined responses
    var botResponse = responses[message.toLowerCase()];
    if (botResponse) {
        return "Bot: " + botResponse;
    } else {
        return "Bot: I'm sorry, I didn't understand that. How can I assist you?";
    }
}

  