import { useState, useEffect } from 'react';
import axios from 'axios';

const categories = ['Vegetables', 'Fruits', 'Herbs', 'Flowers'];

function EditPlantForm({ plant, onCancel, onSave }) {
  const [form, setForm] = useState({ ...plant });

  useEffect(() => {
    setForm({ ...plant });
  }, [plant]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.category) {
      alert("Please fill in required fields (name and category)");
      return;
    }

    try {
      await axios.put(`https://seed-plants.onrender.com/plant/${plant.id}`, form, {
        withCredentials: true,
      });
      onSave(); // trigger refresh
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mt-6">
      <h2 className="text-xl font-bold mb-4">Edit {plant.name}</h2>

      {[
        'name',
        'sunlight',
        'water_schedule',
        'soil_type',
        'care_instructions',
        'harvest_info',
        'notes'
      ].map((field) => (
        <div key={field} className="mb-3">
          <label className="block text-sm font-semibold mb-1 capitalize">{field.replace('_', ' ')}</label>
          <textarea
            name={field}
            value={form[field] || ''}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows="2"
          />
        </div>
      ))}

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Category</label>
        <select
          name="category"
          value={form.category || ''}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">-- Select Category --</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="flex gap-3 mt-4">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

EditPlantForm.defaultProps = {
  onCancel: () => {},
  onSave: () => {}
};

export default EditPlantForm;
