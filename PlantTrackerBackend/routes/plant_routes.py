from flask import Blueprint, request, jsonify, session
from models import db, Plant, PlantImage
from auth import check_login
from werkzeug.utils import secure_filename
import os

plant_bp = Blueprint('plant_bp', __name__)

UPLOAD_FOLDER = os.path.join(os.getcwd(), 'uploads')
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# ============================
# PLANT ROUTES
# ============================

@plant_bp.route('/plants', methods=['GET'])
def get_plants():
    plants = Plant.query.all()
    return jsonify([{
        "id": p.id,
        "name": p.name,
        "care_instructions": p.care_instructions,
        "sunlight": p.sunlight,
        "water_schedule": p.water_schedule,
        "soil_type": p.soil_type,
        "harvest_info": p.harvest_info,
        "notes": p.notes,
        "category": p.category,
        "created_at": p.created_at.isoformat()
    } for p in plants])


@plant_bp.route('/plants/<int:plant_id>', methods=['GET'])
def get_plant_by_id(plant_id):
    plant = Plant.query.get_or_404(plant_id)
    return jsonify({
        "id": plant.id,
        "name": plant.name,
        "care_instructions": plant.care_instructions,
        "sunlight": plant.sunlight,
        "water_schedule": plant.water_schedule,
        "soil_type": plant.soil_type,
        "harvest_info": plant.harvest_info,
        "notes": plant.notes,
        "category": plant.category,
        "created_at": plant.created_at.isoformat()
    })


@plant_bp.route('/plant', methods=['POST'])
def add_plant():
    if not session.get("admin_logged_in"):
        return jsonify({"error": "Unauthorized"}), 401

    data = request.get_json()
    new_plant = Plant(**data)
    db.session.add(new_plant)
    db.session.commit()
    return jsonify({"message": "Plant added", "id": new_plant.id}), 201


@plant_bp.route('/plant/<int:id>', methods=['PUT'])
def update_plant(id):
    if not session.get("admin_logged_in"):
        return jsonify({"error": "Unauthorized"}), 401

    plant = Plant.query.get(id)
    if not plant:
        return jsonify({"error": "Plant not found"}), 404

    data = request.get_json()
    for key, value in data.items():
        setattr(plant, key, value)

    db.session.commit()
    return jsonify({"message": "Plant updated"})


@plant_bp.route('/plant/<int:id>', methods=['DELETE'])
def delete_plant(id):
    if not session.get("admin_logged_in"):
        return jsonify({"error": "Unauthorized"}), 401

    plant = Plant.query.get(id)
    if not plant:
        return jsonify({"error": "Not found"}), 404

    db.session.delete(plant)
    db.session.commit()
    return jsonify({"message": "Plant deleted"})

# ============================
# IMAGE ROUTES
# ============================

@plant_bp.route('/upload-image', methods=['POST'])
def upload_image():
    if not session.get("admin_logged_in"):
        return jsonify({"error": "Unauthorized"}), 401

    file = request.files['image']
    plant_id = request.form['plant_id']

    if file and plant_id:
        filename = secure_filename(file.filename)
        filepath = os.path.join(UPLOAD_FOLDER, filename)
        file.save(filepath)

        new_image = PlantImage(plant_id=plant_id, image_url=f'/uploads/{filename}')
        db.session.add(new_image)
        db.session.commit()

        return jsonify({"message": "Image uploaded"}), 201

    return jsonify({"error": "Invalid upload"}), 400


@plant_bp.route('/plant-images/<int:plant_id>', methods=['GET'])
def get_plant_images(plant_id):
    images = PlantImage.query.filter_by(plant_id=plant_id).all()
    return jsonify([{
        "id": img.id,
        "image_url": img.image_url
    } for img in images])


@plant_bp.route('/delete-image/<int:image_id>', methods=['DELETE'])
def delete_image(image_id):
    if not session.get("admin_logged_in"):
        return jsonify({"error": "Unauthorized"}), 401

    img = PlantImage.query.get_or_404(image_id)
    db.session.delete(img)
    db.session.commit()
    return jsonify({"message": "Image deleted"})
