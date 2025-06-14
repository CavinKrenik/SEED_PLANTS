import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function PlantDetail() {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get(`https://seed-plants.onrender.com/plants/${id}`)
      .then(res => setPlant(res.data))
      .catch(() => setPlant(null));

    axios.get(`https://seed-plants.onrender.com/plant-images/${id}`)
      .then(res => setImages(res.data))
      .catch(() => setImages([]));
  }, [id]);

  if (!plant) return <div className="p-6 text-center">Loading plant data...</div>;

  return (
    <div className="bg-seed-light min-h-screen p-6 text-seed-dark">
      <div className="mb-4 flex justify-between items-center">
        <Link to="/" className="text-sm bg-seed-dark text-white px-3 py-1 rounded hover:bg-seed-accent">
          ← Back to Dashboard
        </Link>
        <img src="/seed.gif" alt="Seed Logo" className="w-12 h-12" />
      </div>

      <h1 className="text-3xl font-bold mb-2">{plant.name}</h1>
      <p className="mb-1"><strong>Category:</strong> {plant.category}</p>
      <p className="mb-1"><strong>Sunlight:</strong> {plant.sunlight}</p>
      <p className="mb-1"><strong>Watering:</strong> {plant.water_schedule}</p>
      <p className="mb-1"><strong>Soil:</strong> {plant.soil_type}</p>
      <p className="mb-1"><strong>Harvest:</strong> {plant.harvest_info}</p>
      <p className="mb-4"><strong>Notes:</strong> {plant.notes}</p>

      <h2 className="text-xl font-bold mb-2">Photos</h2>
      {images.length ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map(img => (
            <img
              key={img.id}
              src={`https://seed-plants.onrender.com${img.image_url}`}
              alt="Plant"
              className="rounded shadow w-full h-32 object-cover"
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-600 italic">No images uploaded yet.</p>
      )}
    </div>
  );
}

export default PlantDetail;
