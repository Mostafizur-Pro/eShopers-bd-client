import React, { useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle/useTitle";

const MyProducts = () => {
  useTitle("MyProducts");

  //   const { user } = useContext(AuthContext);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://e-shoppers-bd-server-dmq5bw2u1-mostafizur-pro.vercel.app/productAll"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllProducts(data);
      });
  }, []);
  // console.log("allProducts", allProducts);
  const {
    category,
    product_details,
    category_name,
    condition,
    image_url,
    originalPrice,
    resalePrice,
    title,
    usedYear,
    _id,
  } = allProducts;

  const handleDelete = (product) => {
    console.log("delete");
    fetch(
      `https://e-shoppers-bd-server-dmq5bw2u1-mostafizur-pro.vercel.app/${product._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log("DELETE DATA", data);
        alert("Are you DELETE this product");
        const remaining = allProducts.filter(
          (products) => products._id !== product._id
        );
        setAllProducts(remaining);
        // refetch();
      });
  };

  const handleAdvertisement = (product) => {
    fetch(
      "https://e-shoppers-bd-server-dmq5bw2u1-mostafizur-pro.vercel.app/advertisement",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <div>
        <h2 className="text-3xl text-center my-10 font-bold">
          All Product List
        </h2>
        <div className="overflow-x-auto ">
          <table className="table-normal w-full">
            <thead>
              <tr>
                <th>Image</th>

                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>Available</th>
                <th>Advertisement</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {allProducts.map((product, i) => (
                <>
                  <tr key={product._id}>
                    <th>
                      <img
                        className="rounded-xl w-24"
                        src={product.image}
                        alt=""
                      ></img>
                    </th>
                    <td>
                      {product.title} <br /> {product.sellerEmail}
                    </td>
                    <td>{product.category}</td>
                    <td>{product.resalePrice}</td>

                    <td>unsold</td>
                    <td>
                      <button
                        onClick={() => handleAdvertisement(product)}
                        className="btn btn-xs btn-success"
                      >
                        Advertisement
                      </button>
                    </td>

                    <td>
                      <button
                        onClick={() => handleDelete(product)}
                        className="btn btn-xs btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyProducts;
