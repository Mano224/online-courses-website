import { Link } from 'react-router-dom';
import HeaderAndSideBar from '../HeaderAndSideBar/HeaderAndSideBar';
import Footer from '../Footer/Footer';

const Teachers = () => {
  return (
    <>
      <HeaderAndSideBar />

      <section className="teachers">
        <h1 className="heading">Expert Teachers</h1>

        <form action="" method="post" className="search-tutor">
          <input
            type="text"
            name="search_box"
            placeholder="Search tutors..."
            required
            maxLength="100"
          />
          <button type="submit" className="fas fa-search" name="search_tutor"></button>
        </form>

        <div className="box-container">
          {/* "Become a Tutor" Box */}
          <div className="box offer">
            <h3>Become a Tutor</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, itaque ipsam fuga ex et aliquam.</p>
            <Link to="/register" className="inline-btn">Get Started</Link>
          </div>

          {/* First Teacher Box */}
          <div className="box">
            <div className="tutor">
              <img src="/images/pic-2.jpg" alt="John Deo" />
              <div>
                <h3>John Deo</h3>
                <span>Developer</span>
              </div>
            </div>
            <p>Total playlists: <span>4</span></p>
            <p>Total videos: <span>18</span></p>
            <p>Total likes: <span>1208</span></p>
            <Link to="/teacher-profile" className="inline-btn">View Profile</Link>
          </div>

          {/* Tutor Box 2 */}
          <div className="box">
            <div className="tutor">
              <img src="/images/pic-3.jpg" alt="John Deo" />
              <div>
                <h3>John Deo</h3>
                <span>Developer</span>
              </div>
            </div>
            <p>Total playlists: <span>4</span></p>
            <p>Total videos: <span>18</span></p>
            <p>Total likes: <span>1208</span></p>
            <Link to="/teacher-profile" className="inline-btn">View Profile</Link>
          </div>

          {/* Tutor Box 3 */}
          <div className="box">
            <div className="tutor">
              <img src="/images/pic-4.jpg" alt="John Deo" />
              <div>
                <h3>John Deo</h3>
                <span>Developer</span>
              </div>
            </div>
            <p>Total playlists: <span>4</span></p>
            <p>Total videos: <span>18</span></p>
            <p>Total likes: <span>1208</span></p>
            <Link to="/teacher-profile" className="inline-btn">View Profile</Link>
          </div>

          {/* Tutor Box 4 */}
          <div className="box">
            <div className="tutor">
              <img src="/images/pic-5.jpg" alt="John Deo" />
              <div>
                <h3>John Deo</h3>
                <span>Developer</span>
              </div>
            </div>
            <p>Total playlists: <span>4</span></p>
            <p>Total videos: <span>18</span></p>
            <p>Total likes: <span>1208</span></p>
            <Link to="/teacher-profile" className="inline-btn">View Profile</Link>
          </div>

          {/* Tutor Box 5 */}
          <div className="box">
            <div className="tutor">
              <img src="/images/pic-6.jpg" alt="John Deo" />
              <div>
                <h3>John Deo</h3>
                <span>Developer</span>
              </div>
            </div>
            <p>Total playlists: <span>4</span></p>
            <p>Total videos: <span>18</span></p>
            <p>Total likes: <span>1208</span></p>
            <Link to="/teacher-profile" className="inline-btn">View Profile</Link>
          </div>

          {/* Tutor Box 6 */}
          <div className="box">
            <div className="tutor">
              <img src="/images/pic-7.jpg" alt="John Deo" />
              <div>
                <h3>John Deo</h3>
                <span>Developer</span>
              </div>
            </div>
            <p>Total playlists: <span>4</span></p>
            <p>Total videos: <span>18</span></p>
            <p>Total likes: <span>1208</span></p>
            <Link to="/teacher-profile" className="inline-btn">View Profile</Link>
          </div>

          {/* Tutor Box 7 */}
          <div className="box">
            <div className="tutor">
              <img src="/images/pic-8.jpg" alt="John Deo" />
              <div>
                <h3>John Deo</h3>
                <span>Developer</span>
              </div>
            </div>
            <p>Total playlists: <span>4</span></p>
            <p>Total videos: <span>18</span></p>
            <p>Total likes: <span>1208</span></p>
            <Link to="/teacher-profile" className="inline-btn">View Profile</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Teachers;
