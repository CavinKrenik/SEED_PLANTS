from flask import request, session, jsonify

def login_handler():
    data = request.get_json()
    if data.get("username") == "admin" and data.get("password") == "seed123":
        session["admin_logged_in"] = True
        return jsonify({"message": "Login successful"}), 200
    return jsonify({"error": "Invalid credentials"}), 401

def logout_handler():
    session.pop("admin_logged_in", None)
    return jsonify({"message": "Logged out"}), 200

def is_logged_in():
    return session.get("admin_logged_in", False)
