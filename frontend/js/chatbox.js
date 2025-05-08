
document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') sendMessage();
});

async function sendMessage() {
  const input = document.getElementById('user-input');
  const message = input.value.trim();
  if (!message) return;

  const chatBox = document.getElementById('chat-box');
  chatBox.innerHTML += `<div class="msg user">${message}</div>`;
  input.value = "";
  chatBox.scrollTo({ top: chatBox.scrollHeight, behavior: 'smooth' });

  try {
    const response = await fetch('http://localhost:5000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });

    const data = await response.json();
    chatBox.innerHTML += `<div class="msg bot">${data.reply}</div>`;
    chatBox.scrollTo({ top: chatBox.scrollHeight, behavior: 'smooth' });
  } catch (error) {
    chatBox.innerHTML += `<div class="msg bot">Oops! Something went wrong. Please try again later 💔</div>`;
  }
}
