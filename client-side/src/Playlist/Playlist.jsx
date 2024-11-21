import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HeaderAndSideBar from "../HeaderAndSideBar/HeaderAndSideBar";
import Footer from "../Footer/Footer";

const Playlist = () => {
  const [playlistDetails, setPlaylistDetails] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchPlaylistData = async () => {
      try {
        const response = await axios.get("/Playlists.json"); 
        setPlaylistDetails(response.data.playlistDetails);
        setVideos(response.data.videos);
      } catch (error) {
        console.error("Error fetching playlist data:", error);
      }
    };
    fetchPlaylistData();
  }, []);

  if (!playlistDetails || videos.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <HeaderAndSideBar />

      {/* Playlist Details Section */}
      <section className="playlist-details">
        <h1 className="heading">Playlist Details</h1>
        <div className="row">
          <div className="column">
            <form action="" method="post" className="save-playlist">
              <button type="submit">
                <i className="far fa-bookmark"></i> <span>Save Playlist</span>
              </button>
            </form>

            <div className="thumb">
              <img src={playlistDetails.thumbnail} alt="Playlist Thumbnail" />
              <span>{playlistDetails.videosCount} videos</span>
            </div>
          </div>
          <div className="column">
            <div className="tutor">
              <img
                src={playlistDetails.tutor.profileImage}
                alt={playlistDetails.tutor.name}
              />
              <div>
                <h3>{playlistDetails.tutor.name}</h3>
                <span>{playlistDetails.tutor.date}</span>
              </div>
            </div>

            <div className="details">
              <h3>{playlistDetails.title}</h3>
              <p>{playlistDetails.description}</p>
              <Link to="/teacher-profile" className="inline-btn">
                View Profile
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Playlist Videos Section */}
      <section className="playlist-videos">
        <h1 className="heading">Playlist Videos</h1>
        <div className="box-container">
          {videos.map((video) => (
            <Link className="box" to="/watch-video" key={video.id}>
              <i className="fas fa-play"></i>
              <img src={video.src} alt={video.title} />
              <h3>{video.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Playlist;
