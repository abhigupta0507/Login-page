
import Layout from "../components/layout";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SignupPage({ username }) {

    
  const router = useRouter();
  const { msg } = router.query;

  
  return (
    <Layout pageTitle="Signup">
      <div className="container">
        <nav className="index__navbar">
        <Link className='nav__link' href="/api/logout">HOME</Link>
          <div className="nav__link__container">
            <Link className="nav__link" href="/login">
              LOGIN
            </Link>
            <br />
            <Link className="nav__link" href="/signup">
              REGISTER
            </Link>
          </div>
        </nav>

        <section className="login__form__container">
          <form action="/api/signup" className="login__form" method="POST">
            <p className="login__text">Sign Up</p>
            <label className="input__field__name">
              Username
            </label>
            <input
              className="input__field"
              minLength="3"
              name="username"
              id="username"
              type="text"
              required
            ></input>
            <br />
            <label className="input__field__name">
              Password
            </label>
            <input
              className="input__field"
              minLength="5"
              name="password"
              id="password"
              type="password"
              required
            ></input>
            <br />
            <label className="input__field__name">
              Confirm Password
            </label>
            <input
              minLength="5"
              name="passwordagain"
              id="passwordagain"
              className="input__field"
              type="password"
              required
            ></input>
            <br />
            <div className="login__button__container">
              <input
                type="submit"
                value="Signup"
                className="input__submit__button input__submit__signup__button"
              />
            </div>

            <p className="login__signup__redirect">
              Already have an account?{" "}
              <Link className="login__signup__redirect__link" href="/login">
                Log In!
              </Link>
            </p>

            <div className="line__text">
              <hr className="line__"></hr>
              Or Register with
              <hr className="line__"></hr>
            </div>

            <button type="button" className="login-with-google-btn">
              Sign Up with Google
            </button>
          </form>
        </section>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  var username = getCookie("username", { req, res });
  if (username != undefined) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
  return { props: { username: false } };
}
