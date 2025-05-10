import { useState } from 'react';

function ChatInput({ onSend }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} style={{
      padding: '1rem',
      borderTop: '1px solid #565869',
      backgroundColor: '#40414f'
    }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Message ChatGPT…"
        style={{
          width: '100%',
          padding: '0.75rem 1rem',
          borderRadius: '8px',
          border: '1px solid #565869',
          backgroundColor: '#343541',
          color: 'white'
        }}
      />
    </form>
  );
}

export default ChatInput;
