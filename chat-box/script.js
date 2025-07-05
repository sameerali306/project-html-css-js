function sendMessage() {
      var inputField = document.getElementById("chat-input");
      var message = inputField.value.trim(); // ✅ FIXED: used value, not ariaValueMax

      if (message === "") {
        return;
      }

      displayMessage(message, "user-message");
      inputField.value = "";

      setTimeout(() => {
        var botResponse = getBotResponse(message);
        displayMessage(botResponse, "bot-message");
      }, 1000);
    }

    function displayMessage(message, messageClass) {
      var chatBox = document.getElementById("chat-box");
      var messageElement = document.createElement("div");
      messageElement.classList.add("message", messageClass);
      messageElement.textContent = message;
      chatBox.appendChild(messageElement);
      chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getBotResponse(userMessage) {
      const responses = {
        "hi": "Hi",
        "hello": "Hi! How can I help you today?",
        "how are you": "I am doing great, thanks for asking.",
        "what is your name": "I'm Sameer Ali.",
        "what is your age": "I'm 20 right now.",
        "bye": "Goodbye, have a great day!"
      };
      return responses[userMessage.toLowerCase()] || "Sorry, I do not understand that.";
    }