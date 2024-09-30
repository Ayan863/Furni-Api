import React from "react";
import axios from "axios"
import { useEffect, useState } from "react";
const Section2 = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    getApi()
  },[])
  const getApi=()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
        setData(res.data)
        // console.log(res.data);
    })
  }

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
         
            {
              data && data.map((item)=>(
                <div className="card" key={item.id}>
                <img src={item.image} alt="" className="png"/>
            <div className="txt">
            <h3>{item.title}</h3>
            <strong>{item.price}$</strong>
            </div>
            <div className="plusImg">
              <img
                src="https://themewagon.github.io/furni/images/cross.svg"
                className="plus"
                alt=""
              />
            </div>
            </div>
              ))
            }
            
          
          {/* <div className="card">
            <img
              src="https://themewagon.github.io/furni/images/product-2.png"
              alt="" className="png"
            />
            <div className="txt">
            <h3>Kruzo Aero Chair</h3>
            <strong>$78.00</strong>
            </div>
            <div className="plusImg">
              <img
                src="https://themewagon.github.io/furni/images/cross.svg"
                className="plus"
                alt="" 
              />
            </div>
          </div> */}
          {/* <div className="card">
            <img
              src="https://themewagon.github.io/furni/images/product-3.png"
              alt="" className="png"
            />
            <div className="txt">
            <h3>Ergonomic Chair</h3>
            <strong>$43.00</strong>
            </div>
            <div className="plusImg">
              <img
                src="https://themewagon.github.io/furni/images/cross.svg"
                className="plus"
                alt=""
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Section2;
