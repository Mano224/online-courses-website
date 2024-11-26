from config import db
from werkzeug.security import generate_password_hash, check_password_hash

class Users(db.Model):
    id = db.Column("id", db.Integer, primarykey=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(80), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), unique=True, nullable=False)
    img_url = db.Column(db.String(200), nullable=True)

    def set_password(self, password):
        self.password_hash =generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash,password)
    
    def to_json(self):
        return {
            "id": self.id,
            "user_Name": self.username,
            "imgUrl":self.img_url,

        }
