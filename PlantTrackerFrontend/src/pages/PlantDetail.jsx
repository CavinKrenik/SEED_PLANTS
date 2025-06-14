import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function PlantDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plant, setPlant] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get(`https://seed-plants.onrender.com/plants/${id}`)
      .then(res => setPlant(res.data))
      .catch(err => console.error(err));

    axios.get(`https://seed-plants.onrender.com/plant-images/${id}`)
      .then(res => setImages(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!plant) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6 bg-seed-light min-h-screen text-seed-dark">
      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate('/')}
        className="mb-6 px-4 py-2 bg-seed-accent text-white rounded hover:bg-seed-dark"
      >
        ← Back to Dashboard
      </button>

      <img src="/seed.gif" alt={plant.name} className="w-32 mx-auto mb-4" />
      <h1 className="text-3xl font-bold text-center mb-6">{plant.name}</h1>

      <div className="max-w-xl mx-auto space-y-3">
        <p><strong>Category:</strong> {plant.category || 'N/A'}</p>
        <p><strong>Sunlight:</strong> {plant.sunlight}</p>
        <p><strong>Water Schedule:</strong> {plant.water_schedule}</p>
        <p><strong>Soil Type:</strong> {plant.soil_type}</p>
        <p><strong>Care Instructions:</strong> {plant.care_instructions}</p>
        <p><strong>Harvest Info:</strong> {plant.harvest_info}</p>
        <p><strong>Notes:</strong> {plant.notes}</p>
      </div>

      {images.length > 0 && (
        <div className="mt-8 max-w-xl mx-auto">
          <h2 className="text-xl font-semibold mb-2">Progress Images</h2>
          <div className="grid grid-cols-2 gap-4">
            {images.map(img => (
              <img
                key={img.id}
                src={`https://seed-plants.onrender.com${img.image_url}`}
                alt="plant"
                className="w-full rounded shadow"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PlantDetail;
