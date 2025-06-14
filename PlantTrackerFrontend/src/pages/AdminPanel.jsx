import { useEffect, useState } from "react";
import axios from "axios";
import ImageUploadForm from "../components/ImageUploadForm";
import AddPlantForm from "../components/AddPlantForm";
import EditPlantForm from "../components/EditPlantForm";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

function AdminPanel() {
  const [plants, setPlants] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [images, setImages] = useState([]);
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/plants")
      .then(res => setPlants(res.data))
      .catch(() => toast.error("Failed to load plants"));
  }, []);

  useEffect(() => {
    if (selectedId) {
      fetchPlantData(selectedId);
    } else {
      setSelectedPlant(null);
      setImages([]);
    }
  }, [selectedId]);

  const fetchPlantData = async (id) => {
    try {
      const [plantRes, imageRes] = await Promise.all([
        axios.get(`http://localhost:5000/plants/${id}`),
        axios.get(`http://localhost:5000/plant-images/${id}`)
      ]);
      setSelectedPlant(plantRes.data);
      setImages(imageRes.data);
    } catch {
      toast.error("Failed to load plant details");
    }
  };

  const handleDeleteImage = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/delete-image/${id}`);
      toast.success("Image deleted");
      setImages(images.filter(img => img.id !== id));
    } catch {
      toast.error("Failed to delete image");
    }
  };

  const handleSaveEdit = async () => {
    await fetchPlantData(selectedId);
    setEditing(false);
    toast.success("Plant updated");
    axios.get("http://localhost:5000/plants").then(res => setPlants(res.data));
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_auth");
    navigate("/");
  };

  return (
    <div className="p-6 min-h-screen bg-seed-light">
      <div className="flex justify-between mb-4">
        <button onClick={() => navigate("/")} className="bg-green-700 text-white px-4 py-2 rounded">
          ← Back to Dashboard
        </button>
        <button onClick={handleLogout} className="bg-red-600 text-white px-3 py-1 rounded">Logout</button>
      </div>

      <div className="mb-6">
        <label className="font-semibold mr-2">Select a plant to manage:</label>
        <select
          className="border px-3 py-2 rounded"
          onChange={e => setSelectedId(e.target.value)}
          value={selectedId}
        >
          <option value="">-- Choose a plant --</option>
          {plants.map(p => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </select>
      </div>

      {selectedPlant && (
        <div className="bg-white rounded shadow p-4 mb-8">
          {!editing ? (
            <>
              <h2 className="text-lg font-bold mb-2">{selectedPlant.name}</h2>
              <p><strong>Category:</strong> {selectedPlant.category || "N/A"}</p>
              <p><strong>Sunlight:</strong> {selectedPlant.sunlight}</p>
              <p><strong>Watering:</strong> {selectedPlant.water_schedule}</p>
              <p><strong>Soil:</strong> {selectedPlant.soil_type}</p>
              <p><strong>Harvest:</strong> {selectedPlant.harvest_info}</p>
              <p><strong>Notes:</strong> {selectedPlant.notes}</p>

              <div className="mt-4">
                <h3 className="font-bold mb-2">Uploaded Images:</h3>
                <div className="flex flex-wrap gap-3">
                  {images.map(img => (
                    <div key={img.id} className="relative w-40 h-40">
                      <img
                        src={`http://localhost:5000${img.image_url}`}
                        alt="Plant"
                        className="w-full h-full object-cover rounded shadow"
                      />
                      <button
                        onClick={() => handleDeleteImage(img.id)}
                        className="absolute top-1 right-1 bg-red-600 text-white text-xs px-2 py-1 rounded"
                      >✖</button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <ImageUploadForm plantId={selectedId} onUpload={() => fetchPlantData(selectedId)} />
              </div>

              <button
                onClick={() => setEditing(true)}
                className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >Edit Plant</button>
            </>
          ) : (
            <EditPlantForm
              plant={selectedPlant}
              onCancel={() => setEditing(false)}
              onSave={handleSaveEdit}
            />
          )}
        </div>
      )}

      <div className="bg-white rounded shadow p-4">
        <h2 className="text-lg font-bold mb-2">➕ Add New Plant</h2>
        <AddPlantForm onSuccess={() => {
          axios.get("http://localhost:5000/plants").then(res => setPlants(res.data));
          toast.success("New plant added");
        }} />
      </div>
    </div>
  );
}

export default AdminPanel;
