import { useState } from 'react';
import axios from 'axios';

function ImageUploader({ plantId }) {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const upload = async () => {
    const formData = new FormData();
    formData.append('image', file);
    try {
      await axios.post(`http://localhost:5000/plant/${plantId}/upload-image`, formData);
      setMessage('Image uploaded ✅');
    } catch (err) {
      console.error(err);
      setMessage('Upload failed ❌');
    }
  };

  return (
    <div className="mt-4">
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={upload} className="ml-2 px-3 py-1 bg-seed-accent text-white rounded hover:bg-seed-dark">
        Upload
      </button>
      {message && <p className="text-sm mt-2">{message}</p>}
    </div>
  );
}

export default ImageUploader;
