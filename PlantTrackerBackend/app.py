from flask import Flask, send_from_directory, session, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from models import db
from routes.plant_routes import plant_bp
from routes.image_routes import image_bp
from auth import login_handler, logout_handler

import os

app = Flask(__name__)
app.secret_key = os.getenv("SECRET_KEY", "change-this-secret-key")
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///seed.db'
app.config['UPLOAD_FOLDER'] = os.path.join(os.getcwd(), 'uploads')
app.config['SESSION_COOKIE_SAMESITE'] = 'None'   # ✅ Allow cross-site cookies
app.config['SESSION_COOKIE_SECURE'] = True       # ✅ Required for HTTPS cookies

# ✅ Enable CORS with credentials and Netlify domain
CORS(app, origins=["https://seedplants.netlify.app"], supports_credentials=True)

# Initialize database
db.init_app(app)

# Register routes
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

@app.route('/init-db')
def init_db():
    with app.app_context():
        db.create_all()
    return jsonify({"message": "Database initialized ✅"})


if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=False)
