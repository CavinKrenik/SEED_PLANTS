import { useState } from 'react';
import axios from 'axios';

function ImageUploadForm({ plantId, onUpload }) {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);
    formData.append('plant_id', plantId);

    try {
      await axios.post('http://localhost:5000/upload-image', formData, {
        withCredentials: true  // ✅ Required for session cookie
      });
      setMessage('✅ Uploaded');
      setFile(null);
      onUpload();
    } catch (err) {
      setMessage('❌ Upload failed');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleUpload} className="mt-4">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} className="mb-2" />
      <button type="submit" className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
        Upload Image
      </button>
      {message && <p className="text-sm mt-1">{message}</p>}
    </form>
  );
}

ImageUploadForm.defaultProps = {
  onUpload: () => {}
};

export default ImageUploadForm;
