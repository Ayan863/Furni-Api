import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Section2 = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getApi();
  }, []);
  const getApi = async () => {
    await axios.get("https://fakestoreapi.com/products").then(async (res) => {
      await setData(res.data);
    });
  };

  return (
    <section className="products">
      <h4>Products</h4>
      <div className="chairsGeneral">
        <div className="material">
          <h2>Crafted with excellent material.</h2>
          <p>
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <button>Explore</button>
        </div>
        <div className="chair">
          {data &&
            data.map((item) => (
              <div className="card" key={item.id}>
                <img src={item.image} alt="" className="png" />
                <div className="txt">
                  <h3 onClick={() => navigate(`/detail/${item.id}`)}>
                    {item.title}
                  </h3>
                  <span>{item.price}$</span>
                </div>
                <div className="plusImg">
                  <img
                    src="https://themewagon.github.io/furni/images/cross.svg"
                    className="plus"
                    alt=""
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
