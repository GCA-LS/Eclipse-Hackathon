const chatForm = document.getElementById('chat-form');
const submitButton = document.getElementById('submit-button');
const messageInput = document.getElementById('message-input');
const chatMessages = document.getElementById('chat-messages');
const messageContainer = document.getElementById('message-container');

chatForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const message = messageInput.value;
    if (!message) return;

    addMessageToChat('User', message);

    messageInput.value = '';

    try {
        submitButton.disabled = !submitButton.disabled
        const response = await fetchStreamWithRetry('/api/v1/chat?message=' + encodeURIComponent(message));
        const reader = response.body.getReader();
        let botMessageElement = addMessageToChat('Bot', '');
        let contentElement = botMessageElement.querySelector('.message-content');
        await processStream(reader, contentElement);
    } catch (error) {
        console.error('Error fetching chatbot response:', error);
        addMessageToChat('System', 'An error occurred while fetching the response. Please try again.');
    } finally {
        submitButton.disabled = !submitButton.disabled
    }
});

async function fetchStreamWithRetry(url, retries = 4) {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response;
        } catch (e) {
            console.error(`Attempt ${i + 1} failed: ${e.message}`);
            if (i === retries - 1) throw e;
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}

async function processStream(reader, contentElement) {
    const decoder = new TextDecoder("utf-8");
    try {
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            contentElement.innerHTML += decoder.decode(value, { stream: true });
            messageContainer.scrollTop = messageContainer.scrollHeight;
        }
    } catch (error) {
        console.error('Error processing stream:', error);
    }
}

function addMessageToChat(sender, content) {
    const messageElement = document.createElement('div');
    messageElement.className = `${sender.toLowerCase()}-message ${sender === 'User' ? 'bg-[#2C3E50ff]' : 'bg-gray-100'} p-3 rounded-lg`;
    messageElement.innerHTML = `
                    <div class="font-bold ${sender === 'User' ? 'text-white' : 'text-[#2C3E50]'}">${sender}:</div>
                    <div class="message-content ${sender === 'User' ? 'text-white' : 'text-[#2C3E50]'}">${content}</div>
                `;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return messageElement;
}