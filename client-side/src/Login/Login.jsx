import HeaderAndSideBar from '../HeaderAndSideBar/HeaderAndSideBar';
const Login = () => {
  return (
    <>
    <HeaderAndSideBar />
      <section className="form-container">
        <form action="" method="post" encType="multipart/form-data">
          <h3>login now</h3>
          <p>your email <span>*</span></p>
          <input type="email" name="email" placeholder="enter your email" required maxLength="50" className="box" />
          <p>your password <span>*</span></p>
          <input type="password" name="pass" placeholder="enter your password" required maxLength="20" className="box" />
          <input type="submit" value="login now" name="submit" className="btn" />
        </form>
      </section>

      <footer className="footer">
        &copy; copyright @ 2022 by <span>mr. web designer</span> | all rights reserved!
      </footer>
    </>
  );
};

export default Login;
