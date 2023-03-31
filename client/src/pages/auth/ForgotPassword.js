import React from "react";
import Layout from "../../components/Layout/Layout.js";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, newPassword);
    try {
      const res = await axios.post(`/api/v1/auth/forgot-password`, {
        // name,
        email,
        newPassword,
        answer,
        // phone,
        // address,
      });

      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        // setAuth({
        //   ...auth,
        //   user: res.data.user,
        //   token: res.data.token,
        // });
        // localStorage.setItem("auth", JSON.stringify(res.data));

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong !");
    }
  };
  return (
    <Layout title="ForgotPassword-Shoppers">
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
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
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
  );
};

export default ForgotPassword;
