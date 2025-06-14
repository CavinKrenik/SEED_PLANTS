import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PlantDetail() {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/plants/${id}`)
      .then(res => setPlant(res.data))
      .catch(err => console.error(err));

    axios.get(`http://localhost:5000/plant-images/${id}`)
      .then(res => setImages(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!plant) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6 bg-seed-light min-h-screen text-seed-dark">
      <img src="/seed.gif" alt={plant.name} className="w-32 mx-auto mb-4" />
      <h1 className="text-3xl font-bold text-center mb-6">{plant.name}</h1>

      <div className="max-w-xl mx-auto space-y-3 mb-6">
        <p><strong>Category:</strong> {plant.category || "N/A"}</p>
        <p><strong>Sunlight:</strong> {plant.sunlight}</p>
        <p><strong>Water Schedule:</strong> {plant.water_schedule}</p>
        <p><strong>Soil Type:</strong> {plant.soil_type}</p>
        <p><strong>Care Instructions:</strong> {plant.care_instructions}</p>
        <p><strong>Harvest Info:</strong> {plant.harvest_info}</p>
        <p><strong>Notes:</strong> {plant.notes}</p>
      </div>

      {images.length > 0 && (
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-2">Photos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map(img => (
              <img
                key={img.id}
                src={`http://localhost:5000${img.image_url}`}
                alt="Plant"
                className="w-full h-32 object-cover rounded shadow"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PlantDetail;
