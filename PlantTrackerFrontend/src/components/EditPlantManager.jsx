// src/components/EditPlantManager.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import ImageUploadForm from './ImageUploadForm';

function EditPlantManager({ plantId }) {
  const [plant, setPlant] = useState(null);
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchPlant();
  }, [plantId]);

  const fetchPlant = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/plants/${plantId}`);
      setPlant(res.data);
      const imgRes = await axios.get(`http://localhost:5000/plant-images/${plantId}`);
      setImages(imgRes.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (e) => {
    setPlant({ ...plant, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/plant/${plantId}`, plant);
      setMessage('✅ Plant updated successfully.');
      fetchPlant();
    } catch (err) {
      console.error(err);
      setMessage('❌ Failed to update plant.');
    }
  };

  const handleDeleteImage = async (imageId) => {
    if (window.confirm('Delete this image?')) {
      try {
        await axios.delete(`http://localhost:5000/delete-image/${imageId}`);
        fetchPlant();
      } catch (err) {
        console.error(err);
      }
    }
  };

  if (!plant) return <p>Loading plant data...</p>;

  return (
    <div className="bg-white p-6 rounded shadow max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Edit: {plant.name}</h2>

      {message && <p className="mb-4 text-green-600">{message}</p>}

      {['name', 'sunlight', 'water_schedule', 'soil_type', 'care_instructions', 'harvest_info', 'notes', 'category'].map((field) => (
        <textarea
          key={field}
          name={field}
          value={plant[field] || ''}
          onChange={handleInputChange}
          placeholder={field.replace('_', ' ').toUpperCase()}
          className="w-full border mb-3 p-2 rounded"
        />
      ))}

      <button
        onClick={handleUpdate}
        className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded"
      >
        Save Changes
      </button>

      <div className="mt-8">
        <h3 className="font-semibold mb-2">Plant Images</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map(img => (
            <div key={img.id} className="relative">
              <img src={img.image_url} alt="" className="w-full rounded" />
              <button
                onClick={() => handleDeleteImage(img.id)}
                className="absolute top-1 right-1 bg-red-600 text-white text-xs px-2 py-1 rounded"
              >
                ✖
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <ImageUploadForm plantId={plantId} onUpload={fetchPlant} />
      </div>
    </div>
  );
}

export default EditPlantManager;
