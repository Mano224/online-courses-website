import { useEffect, useState } from "react";
import axios from "axios";
import HeaderAndSideBar from "../HeaderAndSideBar/HeaderAndSideBar";
import Footer from "../Footer/Footer";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/Courses.json'); 
        setCourses(response.data.courses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <HeaderAndSideBar />
    <section className="courses">
      <h1 className="heading">Our Courses</h1>

      <div className="box-container">
        {courses.map((course) => (
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
            <a href={course.link} className="inline-btn">View Playlist</a>
          </div>
        ))}
      </div>
    </section>
    <Footer />
    </div>
  );
};

export default Courses;