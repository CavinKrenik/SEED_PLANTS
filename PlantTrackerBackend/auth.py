
from flask import session, jsonify, request

ADMIN_USERNAME = "admin"
ADMIN_PASSWORD = "password123"  # Replace in production with a hashed secret

def check_login():
    return session.get("admin_logged_in", False)

def login_handler():
    data = request.get_json()
    if data.get("username") == ADMIN_USERNAME and data.get("password") == ADMIN_PASSWORD:
        session["admin_logged_in"] = True
        return jsonify({"message": "Logged in"}), 200
    return jsonify({"error": "Invalid credentials"}), 401

def logout_handler():
    session.pop("admin_logged_in", None)
    return jsonify({"message": "Logged out"}), 200
