import React, { useState } from "react";
import Layout from "../../components/Layout/Layout.js";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, password, phone, address, answer);
    try {
      const res = await axios.post(`/api/v1/auth/register`, {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });

      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
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
    <>
      <Layout title="Register-Shoppers">
        <div className="register">
          <h1>Register Page</h1>
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="form-control"
                id="NameInput"
                placeholder="Enter your Name"
                required
              />
            </div>
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
            <div class="mb-3">
              <input
                type="text"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className="form-control"
                id="PhoneInput"
                placeholder="Enter your Phone Number"
                required
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                className="form-control"
                id="AddressInput"
                placeholder="Enter your Address"
                required
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                value={answer}
                onChange={(event) => setAnswer(event.target.value)}
                className="form-control"
                id="AddressInput"
                placeholder="What is your favourite sports"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Register;
