import HeaderAndSideBar from '../HeaderAndSideBar/HeaderAndSideBar';
import Footer from '../Footer/Footer';
import reviewsData from '/public/reviews.json'; // Import the JSON data

const About = () => {
  return (
    <>
      <HeaderAndSideBar />
      <section className="about">
        {/* About section content */}
      </section>

      <section className="reviews">
        <h1 className="heading">Student's Reviews</h1>
        <div className="box-container">
          {reviewsData.reviews.map((review, index) => (
            <div className="box" key={index}>
              <p>{review.text}</p>
              <div className="student">
                <img src={review.student.image} alt="student" />
                <div>
                  <h3>{review.student.name}</h3>
                  <div className="stars">
                    {[...Array(5)].map((_, starIndex) => (
                      <i
                        key={starIndex}
                        className={
                          starIndex < Math.floor(review.student.rating)
                            ? "fas fa-star"
                            : starIndex < review.student.rating
                            ? "fas fa-star-half-alt"
                            : "fas fa-star-empty"
                        }
                      ></i>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
