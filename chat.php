<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Fitness Chat</title>
<link rel="stylesheet" href="chat.css">
</head>
<body>
  <button class="back-button" onclick="goBack()">Go Back</button>

<div class="chat-container">
  <div id="chat-box" class="chat-box"></div>
  <div class="input-container">
    <input type="text" id="user-input" placeholder="Type your message...">
    <button id="send-button">Send</button>
  </div>
  <div class="control-container">
    <button id="clear-button">Clear Chat</button>
    <button id="theme-toggle-button">Toggle Theme</button>
  </div>
</div>

<script src="chat.js"></script>
</body>
</html>

