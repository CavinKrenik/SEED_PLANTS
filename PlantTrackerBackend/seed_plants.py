# seed_plants.py

from models import db, Plant
from app import app

plants = [
    {
        "name": "Corn",
        "category": "Vegetables",
        "sunlight": "Full sun (6-8+ hours)",
        "water_schedule": "Consistent moisture (1 inch/week)",
        "soil_type": "Fertile loam, pH 6.0-7.0",
        "care_instructions": "Plant after last frost in blocks",
        "harvest_info": "Silks brown and dry, kernels milky",
        "notes": "Heavy feeder; plant in blocks for pollination"
    },
    {
        "name": "Tomato",
        "category": "Vegetables",
        "sunlight": "Full sun (6-8+ hours)",
        "water_schedule": "Deep watering, avoid overhead",
        "soil_type": "Rich, well-draining, pH 6.0-6.8",
        "care_instructions": "After frost; bury stem",
        "harvest_info": "Fully colored and firm",
        "notes": "Needs staking or caging; prune suckers"
    },
    {
        "name": "Tomatillo",
        "category": "Vegetables",
        "sunlight": "Full sun (6-8+ hours)",
        "water_schedule": "Moderate, consistent",
        "soil_type": "Fertile, pH 6.0-7.0",
        "care_instructions": "After frost, 2+ plants for pollination",
        "harvest_info": "Husks dry/split, fruit fills husk",
        "notes": "Not self-fertile; similar to tomatoes"
    },
    {
        "name": "Onions",
        "category": "Vegetables",
        "sunlight": "Full sun (6-8+ hours)",
        "water_schedule": "Moisture during bulb formation",
        "soil_type": "Loose, rich, pH 6.0-7.0",
        "care_instructions": "Early spring",
        "harvest_info": "Tops fall; cure in airy space",
        "notes": "Use long-day types in Shelton"
    },
    {
        "name": "Potato",
        "category": "Vegetables",
        "sunlight": "Full sun (6-8+ hours)",
        "water_schedule": "Moisture during flowering",
        "soil_type": "Slightly acidic, rich, pH 5.0-6.0",
        "care_instructions": "Early spring; hill soil",
        "harvest_info": "After die-back; dig carefully",
        "notes": "Don’t plant after tomatoes/potatoes"
    },
    {
        "name": "Roses",
        "category": "Flowers",
        "sunlight": "Full sun (6+ hours)",
        "water_schedule": "Deep base watering",
        "soil_type": "Rich loam, pH 6.0-7.0",
        "care_instructions": "Spring or fall",
        "harvest_info": "Cut half-open buds",
        "notes": "Prune annually; watch for pests"
    },
    {
        "name": "Thyme",
        "category": "Herbs",
        "sunlight": "Full sun (6+ hours)",
        "water_schedule": "Drought tolerant",
        "soil_type": "Sandy, pH 6.0-8.0",
        "care_instructions": "Spring",
        "harvest_info": "Snip sprigs",
        "notes": "Good ground cover"
    },
    {
        "name": "Garlic",
        "category": "Vegetables",
        "sunlight": "Full sun (6-8+ hours)",
        "water_schedule": "Moderate; reduce near harvest",
        "soil_type": "Loose, rich, pH 6.0-7.0",
        "care_instructions": "Fall or spring",
        "harvest_info": "Leaves yellow; cure after harvest",
        "notes": "Hardneck = cold; softneck = warm"
    },
    {
        "name": "Peas",
        "category": "Vegetables",
        "sunlight": "Full/partial (4-6+ hours)",
        "water_schedule": "Moisture during pod growth",
        "soil_type": "Rich, pH 6.0-7.5",
        "care_instructions": "Early spring",
        "harvest_info": "Pods plump/tender",
        "notes": "Needs trellis; fixes nitrogen"
    },
    {
        "name": "Rosemary",
        "category": "Herbs",
        "sunlight": "Full sun (6-8+ hours)",
        "water_schedule": "Water sparingly",
        "soil_type": "Sandy, pH 6.0-7.0",
        "care_instructions": "Spring",
        "harvest_info": "Snip sprigs",
        "notes": "Prune; protect in winter"
    },
    {
        "name": "Winter Squash",
        "category": "Vegetables",
        "sunlight": "Full sun (6-8+ hours)",
        "water_schedule": "Deep watering",
        "soil_type": "Rich, pH 6.0-7.0",
        "care_instructions": "Post-frost when warm",
        "harvest_info": "Hard skin, dry stem",
        "notes": "Needs space or trellis"
    },
    {
        "name": "Watermelon",
        "category": "Fruits",
        "sunlight": "Full sun (8+ hours)",
        "water_schedule": "Deep moisture",
        "soil_type": "Sandy, rich, pH 6.0-7.0",
        "care_instructions": "Warm soil, post-frost",
        "harvest_info": "Dry tendril, yellow spot",
        "notes": "Use smaller types in Shelton"
    },
    {
        "name": "Lavender",
        "category": "Flowers",
        "sunlight": "Full sun (6-8+ hours)",
        "water_schedule": "Avoid overwatering",
        "soil_type": "Lean, alkaline, pH 6.5-7.5",
        "care_instructions": "Spring",
        "harvest_info": "Flower buds or open blooms",
        "notes": "Pollinator-friendly; prune after bloom"
    },
    {
        "name": "Sage",
        "category": "Herbs",
        "sunlight": "Full sun (6+ hours)",
        "water_schedule": "Drought tolerant",
        "soil_type": "Sandy, pH 6.0-7.0",
        "care_instructions": "Spring",
        "harvest_info": "Snip sprigs",
        "notes": "Prune to prevent woodiness"
    },
    {
        "name": "Cilantro",
        "category": "Herbs",
        "sunlight": "Full sun or partial",
        "water_schedule": "Consistent moisture",
        "soil_type": "Fertile, pH 6.0-7.0",
        "care_instructions": "Early spring; resow often",
        "harvest_info": "Snip outer leaves",
        "notes": "Bolts quickly; reseed"
    },
    {
        "name": "Zucchini",
        "category": "Vegetables",
        "sunlight": "Full sun (6-8+ hours)",
        "water_schedule": "Deep watering",
        "soil_type": "Rich, pH 6.0-7.5",
        "care_instructions": "After frost, warm soil",
        "harvest_info": "Young and tender",
        "notes": "Harvest often; watch for mildew"
    }
]

with app.app_context():
    db.create_all()
    for p in plants:
        existing = Plant.query.filter_by(name=p["name"]).first()
        if not existing:
            plant = Plant(**p)
            db.session.add(plant)
    db.session.commit()
    print("✅ Seeded 16 garden plants.")
