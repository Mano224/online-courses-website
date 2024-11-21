import Footer from '../Footer/Footer';
import HeaderAndSideBar from '../HeaderAndSideBar/HeaderAndSideBar';

const Register = () => {
  return (
    <>
      <HeaderAndSideBar />

      <section className="form-container">
        <form action="" method="post" encType="multipart/form-data">
          <h3>Register Now</h3>

          <p>Your Name <span>*</span></p>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            maxLength="50"
            className="box"
          />

          <p>Your Email <span>*</span></p>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            maxLength="50"
            className="box"
          />

          <p>Your Password <span>*</span></p>
          <input
            type="password"
            name="pass"
            placeholder="Enter your password"
            required
            maxLength="20"
            className="box"
          />

          <p>Confirm Password <span>*</span></p>
          <input
            type="password"
            name="c_pass"
            placeholder="Confirm your password"
            required
            maxLength="20"
            className="box"
          />

          <p>Select Profile <span>*</span></p>
          <input type="file" accept="image/*" required className="box" />

          <input
            type="submit"
            value="Register New"
            name="submit"
            className="btn"
          />
        </form>
      </section>

      <Footer />
    </>
  );
};

export default Register;
