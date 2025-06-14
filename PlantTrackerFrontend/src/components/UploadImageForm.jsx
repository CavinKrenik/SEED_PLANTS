// src/components/UploadImageForm.jsx
import { useState } from 'react';
import axios from 'axios';

function UploadImageForm({ plantId, onUploaded }) {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);
    try {
      await axios.post(`http://localhost:5000/upload/${plantId}`, formData);
      setMessage('✅ Image uploaded');
      onUploaded?.();
    } catch (err) {
      console.error(err);
      setMessage('❌ Upload failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 bg-white p-4 rounded shadow">
      <h3 className="font-semibold mb-2">Upload Progress Image</h3>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} className="mb-2" />
      <button type="submit" className="bg-seed-accent text-white px-3 py-1 rounded hover:bg-seed-dark">
        Upload
      </button>
      {message && <p className="mt-2 text-sm">{message}</p>}
    </form>
  );
}

export default UploadImageForm;
