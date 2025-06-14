import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
  const [plants, setPlants] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const perPage = 8;

  const categories = ['All', 'Vegetables', 'Fruits', 'Herbs', 'Flowers'];

  useEffect(() => {
    axios.get('https://seed-plants.onrender.com/plants')
      .then(res => {
        setPlants(res.data);
        setFiltered(res.data);
      });
  }, []);

  useEffect(() => {
    filterPlants();
  }, [search, category, plants]);

  const filterPlants = () => {
    let result = plants;

    if (search.trim()) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== 'All') {
      result = result.filter(p =>
        p.category?.toLowerCase() === category.toLowerCase()
      );
    }

    setFiltered(result);
    setPage(1);
  };

  const paginated = filtered.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(filtered.length / perPage);

  return (
    <div className="bg-seed-light min-h-screen p-6 text-seed-dark">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">🌱 The Seed: Our Garden Plants!</h1>
          <p>Come check out our garden and track its Growth with us!</p>
        </div>
        <Link to="/admin" className="text-sm bg-seed-accent text-white px-3 py-1 rounded hover:bg-seed-dark">
          Admin Panel
        </Link>
      </div>

      <div className="mb-4">
        <Link
          to="/pet-friendly"
          className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition mb-2"
        >
          🌼 View Pet-Friendly Plants
        </Link>
      </div>

      <input
        type="text"
        placeholder="Search plants..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full max-w-md border p-2 rounded mb-4"
      />

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-3 py-1 rounded border ${cat === category ? 'bg-seed-dark text-white' : 'bg-white text-seed-dark'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {paginated.map(plant => (
          <div
            key={plant.id}
            className="bg-white rounded shadow p-4 cursor-pointer hover:shadow-lg"
            onClick={() => navigate(`/plant/${plant.id}`)}
          >
            <h2 className="text-lg font-bold mb-1">{plant.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{plant.category || 'N/A'}</p>
            {plant.image_url ? (
              <img
                src={`https://seed-plants.onrender.com${plant.image_url}`}
                alt={plant.name}
                className="w-full h-32 object-cover rounded"
              />
            ) : (
              <img
                src="/seed.gif"
                alt="default"
                className="w-full h-32 object-cover rounded"
              />
            )}
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 rounded ${i + 1 === page ? 'bg-seed-dark text-white' : 'bg-white text-seed-dark'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
