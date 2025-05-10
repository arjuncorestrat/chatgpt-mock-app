import { useState } from 'react';
import ChatInput from '../components/ChatInput';
import ChatMessage from '../components/ChatMessage';

function ChatPage() {
  const [messages, setMessages] = useState([]);

  const handleSend = (userText) => {
    const newMessages = [
      ...messages,
      { sender: 'user', text: userText },
      { sender: 'bot', text: `Echo: ${userText}` },
    ];
    setMessages(newMessages);
  };

  return (
    <div style={{ padding: '2rem', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <h2>Chat</h2>
      <div style={{ flex: 1, overflowY: 'auto', border: '1px solid #ccc', padding: '1rem' }}>
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} sender={msg.sender} text={msg.text} />
        ))}
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
}

export default ChatPage;
