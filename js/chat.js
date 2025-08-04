document.getElementById('sendBtn').addEventListener('click', sendMessage);
document.getElementById('messageInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const input = document.getElementById('messageInput');
  const message = input.value.trim();

  if (message !== '') {
    const chatBox = document.getElementById('chatBox');
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', 'me');
    msgDiv.innerHTML = <strong>You:</strong> ${message};
    chatBox.appendChild(msgDiv);

    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}
function addMessage(sender, text) {
  const container = document.querySelector(".chat-container");

  const message = document.createElement("div");
  message.classList.add("chat-message", sender);

  message.innerHTML = `
    <img src="images/${sender}.png" class="avatar" />
    <div class="message-content">
      <span class="name">${sender === "farmer" ? "Mama Chinedu" : "UgoBuy"}</span>
      <p>${text}</p>
      <span class="time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
    </div>
  `;

  container.appendChild(message);
  container.scrollTop = container.scrollHeight;
}
 

   form.addEventListener('submit', function(e) {
      e.preventDefault();
      const message = input.value.trim();
      if (message !== '') {
        const newMsg = document.createElement('div');
        newMsg.classList.add('message');
        newMsg.innerHTML = '<span class="sender">You:</span> <span class="text">' + message + '</span>';
        box.appendChild(newMsg);
        box.scrollTop = box.scrollHeight;
        input.value = '';
      }
    }
   )
{;


