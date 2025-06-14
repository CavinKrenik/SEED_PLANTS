import { useState } from 'react';
import axios from 'axios';

const categories = ['Vegetables', 'Fruits', 'Herbs', 'Flowers'];

function AddPlantForm({ onAdded }) {
  const [form, setForm] = useState({
    name: '',
    category: '',
    sunlight: '',
    water_schedule: '',
    soil_type: '',
    care_instructions: '',
    harvest_info: '',
    notes: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.category) {
      alert("Please fill in required fields (name and category)");
      return;
    }

    try {
      await axios.post('https://seed-plants.onrender.com/plant', form, {
        withCredentials: true
      });
      setForm({
        name: '',
        category: '',
        sunlight: '',
        water_schedule: '',
        soil_type: '',
        care_instructions: '',
        harvest_info: '',
        notes: ''
      });
      onAdded(); // refresh dashboard
    } catch (err) {
      console.error('Add plant failed:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mt-8">
      <h2 className="text-xl font-bold mb-4">Add New Plant</h2>

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
          <label className="block text-sm font-semibold capitalize mb-1">{field.replace('_', ' ')}</label>
          <textarea
            name={field}
            value={form[field]}
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
          value={form.category}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">-- Select Category --</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
        Add Plant
      </button>
    </form>
  );
}

AddPlantForm.defaultProps = {
  onAdded: () => {}
};

export default AddPlantForm;
