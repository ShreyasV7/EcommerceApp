import React from "react";
import Layout from "../../components/Layout/Layout.js";
import UserMenu from "../../components/Layout/UserMenu.js";
import { useAuth } from "../../context/auth.js";

const Dashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout title={"Dashboard-Shoppers"}>
      <div className="container-flui m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>

          <div className="col-md-9">
            <h1>Dashboard</h1>
            <div className="card w-75 p-3">
              <h3>Name : {auth?.user?.name}</h3>
              <h3>Email : {auth?.user?.email}</h3>
              <h3>Address : {auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
