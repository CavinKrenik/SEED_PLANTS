function PlantCard({ plant }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 max-w-sm mx-auto">
      <img
        src={plant.image_url || '/seed.gif'}
        alt={plant.name}
        className="w-full h-40 object-cover mb-3 rounded"
      />
      <h2 className="text-xl font-bold text-seed-dark">{plant.name}</h2>
      <p className="text-sm mt-2 text-gray-700">{plant.notes || "No notes yet."}</p>
    </div>
  );
}

export default PlantCard;
