import React, { useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle/useTitle";
import { toast } from "react-hot-toast";
import axios from "axios";

const AllUser = () => {
  useTitle("AllSeller");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://e-shoppers-bd.vercel.app/users").then((data) => {
      const users = data.data;

      setUsers(users);
    });
  });

  const handleMakeAdmin = (id) => {
    fetch(`https://e-shoppers-bd.vercel.app/users/admin/${id}`, {
      method: "PUT",
      // headers: {
      //   authorization: `bearer ${localStorage.getItem("accessToken")}`,
      // },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Make verify successful.");
      });
  };

  const handleDelete = (product) => {
    console.log("delete");
    fetch(`https://e-shoppers-bd.vercel.app/users/${product._id}`, {
      method: "DELETE",
      // headers: {
      //   "content-type": "application/json",
      // },
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Are you DELETE this product");
        const remaining = users.filter(
          (products) => products._id !== product._id
        );
        setUsers(remaining);
      });
  };
  return (
    <div>
      <div>
        <h2 className="text-3xl text-center my-10 font-bold">All User List</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>User Type</th>
                <th>Approved</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <>
                  {user.userType === "normalUser" && (
                    <tr key={user._id}>
                      <th>
                        <div className="w-24 rounded-full">
                          <img src={user.image} alt="" />
                        </div>
                      </th>
                      <td>{user.name}</td>
                      <td>{user.email}</td>

                      <td>{user.userType}</td>
                      <td>Make Admin</td>

                      <td>
                        <button
                          onClick={() => handleDelete(user)}
                          className="btn btn-xs btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
