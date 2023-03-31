import React from "react";
import Layout from "../../components/Layout/Layout.js";
import AdminMenu from "../../components/Layout/AdminMenu.js";

const CreateProduct = () => {
  return (
    <Layout title={"AdminCreateProduct-Shoppers"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Create-Product</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;
