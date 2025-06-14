from flask import request, session, jsonify

# ✅ Used in route protection
def check_login():
    if not session.get("admin_logged_in"):
        return jsonify({"error": "Unauthorized"}), 401

# ✅ Login handler used in /login
def login_handler():
    data = request.get_json()
    if data.get("username") == "admin" and data.get("password") == "seed123":
        session["admin_logged_in"] = True
        return jsonify({"message": "Login successful"}), 200
    return jsonify({"error": "Invalid credentials"}), 401

# ✅ Logout handler used in /logout
def logout_handler():
    session.pop("admin_logged_in", None)
    return jsonify({"message": "Logged out"}), 200
