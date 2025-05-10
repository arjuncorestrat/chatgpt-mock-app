function ChatMessage({ sender, text }) {
  const isUser = sender === 'user';
  return (
    <div
      style={{
        textAlign: isUser ? 'right' : 'left',
        margin: '0.5rem 0',
        background: isUser ? '#d1e7dd' : '#f8d7da',
        padding: '0.5rem 1rem',
        borderRadius: '10px',
        display: 'inline-block',
        maxWidth: '80%'
      }}
    >
      <strong>{isUser ? 'You' : 'Bot'}:</strong> {text}
    </div>
  );
}

export default ChatMessage;
