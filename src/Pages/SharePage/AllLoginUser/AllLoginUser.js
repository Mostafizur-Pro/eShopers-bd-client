import React, { useEffect, useState } from "react";

const AllLoginUser = (email) => {
  const [sellerInfo, setSellerInfo] = useState([]);

  useEffect(() => {
    if (email) {
      fetch(
        `https://e-shoppers-bd-server-dmq5bw2u1-mostafizur-pro.vercel.app/users/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setSellerInfo(data);
        });
    }
  }, [email]);
  return [sellerInfo];
};

export default AllLoginUser;
