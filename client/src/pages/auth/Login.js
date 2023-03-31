import React, { useState } from "react";
import Layout from "../../components/Layout/Layout.js";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth";

const Login = () => {
  //   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  //   const [phone, setPhone] = useState("");
  //   const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const locate = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const res = await axios.post(`/api/v1/auth/login`, {
        // name,
        email,
        password,
        // phone,
        // address,
      });

      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(locate.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong !");
    }
  };
  return (
    <>
      <Layout title="Register-Shoppers">
        <div className="register">
          <h1>Login Page</h1>
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="form-control"
                id="EmailInput"
                placeholder="Enter your Email"
                required
              />
            </div>
            <div class="mb-3">
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="form-control"
                id="PasswordInput"
                placeholder="Enter your Password"
                required
              />
            </div>

            {/* <button
              type="submit"
              class="btn btn-primary"
              onClick={() => {
                navigate("/forgot-password");
              }}
              style={{ marginRight: "10px" }}
            >
              Forgot Password
            </button> */}

            <button type="submit" class="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Login;
