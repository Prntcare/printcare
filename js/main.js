document.getElementById('send-btn').addEventListener('click',()=>{
  const name = userNameInput.value || 'Guest';
  const msg = userMsgInput.value;
  if(msg.trim() === '') return;

  // Show user message
  const userDiv = document.createElement('div');
  userDiv.classList.add('message','user');
  userDiv.textContent = name + ': ' + msg;
  chatMessages.appendChild(userDiv);

  // Clear input
  userMsgInput.value = '';
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Bot response
  const botDiv = document.createElement('div');
  botDiv.classList.add('message','bot');
  botDiv.textContent = 'Thank you! Click below to send your message to our WhatsApp:';
  
  // Create WhatsApp link
  const waLink = document.createElement('a');
  waLink.href = `https://wa.me/9779811809093?text=${encodeURIComponent(name + ': ' + msg)}`;
  waLink.target = "_blank";
  waLink.textContent = 'Send to WhatsApp';
  waLink.style.display = 'block';
  waLink.style.marginTop = '5px';
  waLink.style.color = '#25D366';
  waLink.style.fontWeight = 'bold';

  botDiv.appendChild(waLink);
  chatMessages.appendChild(botDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
});