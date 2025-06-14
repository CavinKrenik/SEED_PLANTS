
import os
from flask import Blueprint, request, jsonify
from werkzeug.utils import secure_filename
from models import db, PlantImage

image_bp = Blueprint('image_bp', __name__)
UPLOAD_FOLDER = os.path.join(os.getcwd(), 'uploads')
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@image_bp.route('/plant/<int:plant_id>/upload-image', methods=['POST'])
def upload_image(plant_id):
    if 'image' not in request.files:
        return jsonify({"error": "No image provided"}), 400
    image = request.files['image']
    filename = secure_filename(image.filename)
    image_path = os.path.join(UPLOAD_FOLDER, filename)
    image.save(image_path)

    image_url = f"/uploads/{filename}"
    new_image = PlantImage(plant_id=plant_id, image_url=image_url)
    db.session.add(new_image)
    db.session.commit()
    return jsonify({"message": "Image uploaded", "url": image_url})
