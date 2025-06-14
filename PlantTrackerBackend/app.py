from flask import Flask, send_from_directory, session, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from models import db
from routes.plant_routes import plant_bp
from routes.image_routes import image_bp
from auth import login_handler, logout_handler

import os

app = Flask(__name__)

# ✅ Security + Uploads
app.secret_key = os.getenv("SECRET_KEY", "change-this-secret-key")
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///seed.db'
app.config['UPLOAD_FOLDER'] = os.path.join(os.getcwd(), 'uploads')
app.config['SESSION_COOKIE_SAMESITE'] = 'None'   # Cross-site for Netlify
app.config['SESSION_COOKIE_SECURE'] = True       # Required for HTTPS session cookies

# ✅ Allow Netlify to access
CORS(app, origins=["https://seedplants.netlify.app"], supports_credentials=True)

# ✅ Initialize DB
db.init_app(app)

# ✅ Register Blueprints
app.register_blueprint(plant_bp)
app.register_blueprint(image_bp)

# ✅ Login Route
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    if data.get("username") == "admin" and data.get("password") == "seed123":
        session["admin_logged_in"] = True
        return jsonify({"message": "Login successful"}), 200
    return jsonify({"error": "Invalid credentials"}), 401

# ✅ Logout Route
@app.route('/logout', methods=['POST'])
def logout():
    session.pop("admin_logged_in", None)
    return jsonify({"message": "Logged out"}), 200

# ✅ Serve Uploaded Images
@app.route('/uploads/<path:filename>')
def serve_image(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

# ✅ DB Creation on Startup (for Render)
if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=False)
