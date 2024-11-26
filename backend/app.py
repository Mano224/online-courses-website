from flask import request,jsonify
from config import app,db
from models import Users


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
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")
    confirm_password = data.get("confirm_password")
    img_url = data.get("select_Profile")

    if not username or not email or not password or not confirm_password:
        return jsonify({'error': 'All fields are required'}), 400
    
    if password != confirm_password:
        return jsonify({'error': 'Passwords do not match'}), 400
    
    if Users.query.filter_by(username=username).first() or Users.query.filter_by(email=email).first():
        return jsonify({'error': 'Username or email already exists'}), 409
    
    # Create and save the new user
    user = Users(username=username, email=email, img_url=img_url)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()

    return jsonify({'message': 'User registered successfully'}), 201


# login
@app.route('/login',methods=["POST"])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('passwird') 
    
    if not username or not password:
        return jsonify({'error': 'Username and password are required'}), 400
    
    user = Users.query.filter_by(username=username).first()
    assert user , "user not exist"

    # check auth
    if user and user.check_password(password):
        # Authentication successful
        return jsonify({'message': f'Welcome, {user.username}!'}), 200
    else:
        # Authentication failed
        return jsonify({'error': 'Invalid username or password'}), 401








if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)