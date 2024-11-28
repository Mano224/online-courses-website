from config import db
from werkzeug.security import generate_password_hash, check_password_hash


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
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

class Video(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(200), nullable=False)
    video_url = db.Column(db.String(200), nullable=False)
    thumbnail = db.Column(db.String(200), nullable=False)
    playlist_id = db.Column(db.Integer, db.ForeignKey('playlist.id'), nullable=False)

class Playlist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    Videos = db.relationship('Video', backref='playlist', lazy=True)



def init_db():
    playlist = Playlist(title= "Complete HTML Tutorial")
    video1 = Video(
                title = "Complete HTML Tutorial (Part 01)",
                description = "Introduction and What I Need To Learn",
                video_url = "static/videos/Html_v1.mp4",
                thumbnail = "static/imgs/html-1.png",
                playlist=playlist
    )
    video2 = Video(
                title = "Complete HTML Tutorial (Part 02)",
                description = "Elements And Browser",
                video_url = "static/videos/Html_v1.mp4", # missed
                thumbnail = "static/imgs/html-2.png",
                playlist=playlist
    )
    video3 = Video(
                title = "Complete HTML Tutorial (Part 03)",
                description = "First Project And First Page",
                video_url = "static/videos/Html_v1.mp4", # missed
                thumbnail = "static/imgs/html-3.png",
                playlist=playlist
    )
    video4 = Video(
                title = "Complete HTML Tutorial (Part 04)",
                description = "Head And Nested Elements",
                video_url = "static/videos/Html_v1.mp4", # missed
                thumbnail = "static/imgs/html-4.png",
                playlist=playlist
    )
    video5 = Video(
                title = "Complete HTML Tutorial (Part 05)",
                description = "Comments And Use Cases",
                video_url = "static/videos/Html_v1.mp4", # missed
                thumbnail = "static/imgs/html-5.png",
                playlist=playlist
    )
    video6 = Video(
                title = "Complete HTML Tutorial (Part 06)",
                description = "Doctype And Standard And Quirks Mode",
                video_url = "static/videos/Html_v1.mp4", # missed
                thumbnail = "static/imgs/html-6.png",
                playlist=playlist
    )

    db.session.add(playlist)
    db.session.add_all([video1, video2, video3, video4, video5, video6])
    db.session.commit()