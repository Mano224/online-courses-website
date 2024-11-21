import { Link } from 'react-router-dom';
import HeaderAndSideBar from '../HeaderAndSideBar/HeaderAndSideBar';
import Footer from '../Footer/Footer';

const Courses = () => {
  return (
    <>
      <HeaderAndSideBar />
      <section className="courses">
        <h1 className="heading">our courses</h1>
        <div className="box-container">
          <div className="box">
            <div className="tutor">
              <img src="/images/pic-2.jpg" alt="tutor" />
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img src="/images/thumb-1.png" alt="course thumbnail" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete HTML tutorial</h3>
            <Link to="/playlist" className="inline-btn">view playlist</Link>
          </div>

          <div className="box">
            <div className="tutor">
              <img src="/images/pic-3.jpg" alt="tutor" />
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img src="/images/thumb-2.png" alt="course thumbnail" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete CSS tutorial</h3>
            <Link to="/playlist" className="inline-btn">view playlist</Link>
          </div>

          <div className="box">
            <div className="tutor">
              <img src="/images/pic-4.jpg" alt="tutor" />
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img src="/images/thumb-3.png" alt="course thumbnail" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete JS tutorial</h3>
            <Link to="/playlist" className="inline-btn">view playlist</Link>
          </div>

          <div className="box">
            <div className="tutor">
              <img src="/images/pic-5.jpg" alt="tutor" />
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img src="/images/thumb-4.png" alt="course thumbnail" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete Bootstrap tutorial</h3>
            <Link to="/playlist" className="inline-btn">view playlist</Link>
          </div>

          <div className="box">
            <div className="tutor">
              <img src="/images/pic-6.jpg" alt="tutor" />
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img src="/images/thumb-5.png" alt="course thumbnail" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete JQuery tutorial</h3>
            <Link to="/playlist" className="inline-btn">view playlist</Link>
          </div>

          <div className="box">
            <div className="tutor">
              <img src="/images/pic-7.jpg" alt="tutor" />
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img src="/images/thumb-6.png" alt="course thumbnail" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete SASS tutorial</h3>
            <Link to="/playlist" className="inline-btn">view playlist</Link>
          </div>

          <div className="box">
            <div className="tutor">
              <img src="/images/pic-8.jpg" alt="tutor" />
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img src="/images/thumb-7.png" alt="course thumbnail" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete PHP tutorial</h3>
            <Link to="/playlist" className="inline-btn">view playlist</Link>
          </div>

          <div className="box">
            <div className="tutor">
              <img src="/images/pic-9.jpg" alt="tutor" />
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img src="/images/thumb-8.png" alt="course thumbnail" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete MySQL tutorial</h3>
            <Link to="/playlist" className="inline-btn">view playlist</Link>
          </div>

          <div className="box">
            <div className="tutor">
              <img src="/images/pic-1.jpg" alt="tutor" />
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img src="/images/thumb-9.png" alt="course thumbnail" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete react tutorial</h3>
            <Link to="/playlist" className="inline-btn">view playlist</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Courses;
