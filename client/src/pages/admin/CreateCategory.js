import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout.js";
import AdminMenu from "../../components/Layout/AdminMenu.js";
import { toast } from "react-hot-toast";
import axios from "axios";

const CreateCategory = () => {

  const [categories, setCategories] = useState([]);

  const getAllCategory = async () => {

    try {
      const { data } = await axios.get('/api/v1/category/getall-category');
      console.log("data--->", data);
      if (data.success) {
        console.log("Data in SetCat");
        setCategories(data.category);
      }
    }
    catch (error) {
      console.log(error);  
      toast.error("Something went wrong");
    }
  }

  useEffect(() => {
    getAllCategory();
  }, [])
  console.log("Table------>", categories);
  return (
    <Layout title={"AdminCreateCategory-Shoppers"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Manage Category</h1>
            <div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>

                    {categories.map((item) => {
                      <td colspan="2">{item.name}</td>

                    })}

                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
