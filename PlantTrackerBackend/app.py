from flask import Flask, send_from_directory, session, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from models import db
from routes.plant_routes import plant_bp
from routes.image_routes import image_bp
from auth import login_handler, logout_handler

import os

app = Flask(__name__)
app.secret_key = "change-this-secret-key"
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///seed.db'
app.config['UPLOAD_FOLDER'] = os.path.join(os.getcwd(), 'uploads')

# ✅ Enable CORS with credentials support
CORS(app, supports_credentials=True)


db.init_app(app)

# Register blueprints
app.register_blueprint(plant_bp)
app.register_blueprint(image_bp)

@app.route('/login', methods=['POST'])
def login():
    return login_handler()

@app.route('/logout', methods=['POST'])
def logout():
    session.pop("admin_logged_in", None)
    return jsonify({"message": "Logged out"}), 200

@app.route('/uploads/<path:filename>')
def serve_image(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
