// import React from 'react'
import "./../../../../assets/css/main.css";
import Header from "./Header";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  const getApi = async () => {
    await axios.get("https://fakestoreapi.com/products").then(async (res) => {
      await setProduct(res.data.find((item) => item.id == id));
      console.log(product);
    });
  };
  useEffect(() => {
    getApi();
  }, []);
  if (!product) return <div>Loading...</div>;
  return (
    
    <>
    <Header />
    <section className="detail">
    <h2>Detail page</h2>
      <div className="cardDetail" key={product.id}>
        <img src={product.image} alt="" className="png" />
        <div className="txt">
          <div className="about">
            <h3>{product.title}</h3>
            <span>
              <h5>About:</h5>
              <i>{product.description}</i></span>
          </div>

          <span>Cost:<span>{product.price}$</span></span>
        </div>
      </div>
    </section>
    </>
  );
};

export default Detail;
