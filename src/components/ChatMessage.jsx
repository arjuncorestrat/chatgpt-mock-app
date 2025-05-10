function ChatMessage({ sender, text }) {
  const isUser = sender === 'user';

  return (
    <div style={{
      backgroundColor: isUser ? '#444654' : '#343541',
      padding: '1rem',
      margin: '0.25rem 0',
      borderRadius: '8px',
      whiteSpace: 'pre-wrap'
    }}>
      <strong>{isUser ? 'You' : 'GPT'}:</strong> {text}
    </div>
  );
}

export default ChatMessage;
