document.getElementById('post-button').addEventListener('click', addPost);

function addPost() {
    let postContent = document.getElementById('post-input').value;
    
    if (postContent.trim() !== '') {
        let postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.textContent = postContent;
        document.getElementById('posts').appendChild(postDiv);

        // Clear the input field
        document.getElementById('post-input').value = '';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const chatMessages = document.getElementById("chatMessages");
    const chatInput = document.getElementById("chatInput");
    const sendButton = document.getElementById("sendButton");

    // Function to add a message to the chat window
    function addMessageToChat(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("chat-message", sender);
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);

        // Scroll to the bottom to show the latest message
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Function to send a message to the backend
    function sendMessage() {
        const userMessage = chatInput.value.trim();
        if (!userMessage) return;  // Do nothing if input is empty

        // Add user's message to chat
        addMessageToChat("user", userMessage);

        // Clear input field
        chatInput.value = "";

        // Send message to backend (Flask) via AJAX
        fetch(`/get?msg=${encodeURIComponent(userMessage)}`)
            .then(response => response.text())
            .then(botResponse => {
                // Display bot response
                addMessageToChat("bot", botResponse);
            })
            .catch(error => {
                console.error("Error:", error);
                // Handle errors
                addMessageToChat("error", "Sorry, something went wrong.");
            });
    }

    // Event listener for sending a message when button is clicked
    sendButton.addEventListener("click", sendMessage);

    // Allow pressing Enter to send message
    chatInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
