from flask import request, jsonify
from config import create_app, db
from models import Users, Playlist, Video, init_db
from werkzeug.utils import secure_filename
import os

app = create_app()


# get-user
@app.route('/profile', methods=["GET"])
def get_user():
    users = Users.query.all()
    result = [user.to_json() for user in users]
    return jsonify(result)

# register
@app.route('/register',methods=["POST"])
def register():
    data = request.get_json()
    username = data.get("name")
    email = data.get("email")
    password = data.get("pass")
    confirm_password = data.get("c_pass")
    img_url = request.files['img_url']

    if not username or not email or not password or not confirm_password:
        return jsonify({'error': 'All fields are required'}), 400
    
    if password != confirm_password:
        return jsonify({'error': 'Passwords do not match'}), 400
    
    if Users.query.filter_by(username=username).first() or Users.query.filter_by(email=email).first():
        return jsonify({'error': 'Username or email already exists'}), 409
    
    if img_url:
        filename = secure_filename(img_url.filename)  
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], f"{username}_{filename}")
        img_url.save(file_path)
    # Create and save the new user
    user = Users(username=username, email=email, img_url=img_url)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()

    return jsonify({'message': 'User registered successfully', 'img_url': file_path}), 201


# login
@app.route('/login',methods=["POST"])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('pass') 
    
    if not email or not password:
        return jsonify({'error': 'Username and password are required'}), 400
    
    user = Users.query.filter_by(email=email).first()
    if not user:
        return jsonify({"message": "user Not exsit"})

    # check auth
    if user and user.check_password(password):
        # Authentication successful
        return jsonify({'message': f'Welcome, {user.username}!'}), 200
    else:
        # Authentication failed
        return jsonify({'message': 'Invalid email or password'}), 401


# update-profile
@app.route('/update-profile/<int:id>', methods=['PATCH'])
def update_profile(id):
    try:
        user = Users.query.get(id)
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        data = request.json
        user.username = data.get("username")
        user.email = data.get("email")
        old_password = data.get("old_password")
        new_password = data.get("new_password")
        confirm_password = data.get("confirm_password")

        if old_password:
            if user.check_password(old_password):
                return jsonify({'error': 'Old password is incorrect'}), 400
            if new_password != confirm_password:
                return jsonify({"error": "New password and confirm password do not match"}), 400
            user.set_password(old_password)


        if 'img_url' in request.files:
            img_url = request.files['img_url']
        if img_url:
            filename = secure_filename(img_url.filename) 
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], f"user_{id}_{filename}")
            img_url.save(file_path)
            user.img_url = file_path


    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
    
@app.route('/courses', methods=["GET"])
def courses():
    Playlists = Playlist.query.all()
    return jsonify([{
        "id" : p.id,
        "title": p.title,
    } for p in Playlists])

@app.route('/courses/<int:playlist_id>', methods=["GET"])
def videos(playlist_id):
    playlist = Playlist.query.get(playlist_id)

    if not playlist:
        return jsonify({"message" : " No playlist found"})
    
    videos = Video.query.filter_by(playlist_id=playlist_id).all()
    return jsonify([{
        "id" : v.id,
        "title" : v.title,
        "description" : v.description,
        "thumbnail" : v.thumbnail,
        "video_url": v.video_url
    } for v in videos])










if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        init_db()

    app.run(debug=True)