import { useEffect, useState } from "react";
import axios from "axios";
import HeaderAndSideBar from "../HeaderAndSideBar/HeaderAndSideBar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import './Courses.css';

const Courses = () => {
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await axios.get('/Courses.json');
        setTracks(response.data.tracks);
      } catch (error) {
        console.error("Error fetching tracks:", error);
      }
    };

    fetchTracks();
  }, []);

  const handleTrackClick = (track) => {
    setSelectedTrack(track);
  };

  const handleBackClick = () => {
    setSelectedTrack(null);
  };

  // Utility function to chunk tracks into groups of three
  const chunkTracks = (tracks, chunkSize) => {
    const result = [];
    for (let i = 0; i < tracks.length; i += chunkSize) {
      result.push(tracks.slice(i, i + chunkSize));
    }
    return result;
  };

  return (
    <div>
      <HeaderAndSideBar />
      <section className="courses">
        <h1 className="heading">Our Courses</h1>

        {/* Show tracks as buttons with images */}
        {!selectedTrack ? (
          <div className="track-list">
            {chunkTracks(tracks, 2).map((trackGroup, index) => (
              <div className="track-row" key={index}>
                {trackGroup.map((track) => (
                  <div
                    className="track-btn"
                    key={track.name}
                    onClick={() => handleTrackClick(track)}
                  >
                    <img src={track.img} alt={track.name} className="track-img" />
                    <h3>{track.name}</h3>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          // Show courses of the selected track
          <div className="box-container">
            {selectedTrack.courses.map((course) => (
              <div className="box" key={course.id}>
                <div className="tutor">
                  <img src={course.tutorImage} alt={course.tutorName} />
                  <div className="info">
                    <h3>{course.tutorName}</h3>
                    <span>{course.date}</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src={course.thumbnail} alt={course.title} />
                  <span>{course.videoCount} videos</span>
                </div>
                <h3 className="title">{course.title}</h3>
                <Link to={course.link} className="inline-btn">View Playlist</Link>
              </div>
            ))}
            <button onClick={handleBackClick} className="back-btn">Back to Tracks</button>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default Courses;
