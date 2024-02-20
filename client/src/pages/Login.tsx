import axios from "axios";
import "../style/register-login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [ error ,setError ] = useState();
  

  async function handleLogin(ev: any) {
    try {
      ev.preventDefault();
      const username = ev.target.elements.username.value;
      const password = ev.target.elements.password.value;
      if (!username) throw new Error("No name");
      if (!password) throw new Error("No Password");
      const loginUser: any = { username, password };

      const { data } = await axios.post("/api/user/get-user", loginUser);
      setError(data.error)
      console.log(data.error,"data");
      const { ok } = data;
      if (ok) {
        navigate("/");
      }
    } catch (error: any) {
      setError(error.message)
      console.error(setError);
    }
  }
  return (
    <>
      <div className="box">
        <div className="container">
          <div className="title">Login</div>
          <form onSubmit={handleLogin}>
            <div className="user_details">
              <div className="input_pox">
                <span className="datails">Username</span>
                <input
                  name="username"
                  type="text"
                  placeholder="enter your Username"
                  required
                />
              </div>
              <div className="input_pox">
                <span className="datails">Password</span>
                <input
                  name="password"
                  type="text"
                  placeholder="enter your Password"
                  required
                />
              </div>
            </div>
            <div className="button">
              <input type="submit" value="Login" />
            {error && <p className="error">{error}</p>}
            </div>
            <p>
              Not yet registered:
              <Link
                className="datails"
                style={{ color: "red" }}
                to={"/register"}
              >
                {" "}
                register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
