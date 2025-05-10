import { useState, useEffect, useRef } from 'react';
import ChatInput from '../components/ChatInput';
import ChatMessage from '../components/ChatMessage';

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);

  const handleSend = (userText) => {
    const updated = [
      ...messages,
      { sender: 'user', text: userText },
      { sender: 'bot', text: `Echo: ${userText}` },
    ];
    setMessages(updated);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ flex: 1, overflowY: 'auto', padding: '1rem' }}>
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} sender={msg.sender} text={msg.text} />
        ))}
        <div ref={bottomRef}></div>
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
}

useEffect(() => {
  const saved = localStorage.getItem('chat-messages');
  if (saved) setMessages(JSON.parse(saved));
}, []);

useEffect(() => {
  localStorage.setItem('chat-messages', JSON.stringify(messages));
}, [messages]);


export default ChatPage;
