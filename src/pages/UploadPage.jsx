import { useNavigate } from 'react-router-dom';

function UploadPage() {
  const navigate = useNavigate();

  const handleUpload = (e) => {
    e.preventDefault();
    navigate('/loading');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Upload a File</h2>
      <form onSubmit={handleUpload}>
        <input type="file" required />
        <br /><br />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default UploadPage;
