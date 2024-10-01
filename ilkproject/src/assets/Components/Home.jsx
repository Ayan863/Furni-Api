import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import { useEffect } from "react";
import { useState } from "react";
const Home = () => {
    // const [data,setData]=useState([])

    useEffect(()=>{
        console.log("hello");
    },[])
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Footer />
    </>
  );
};

export default Home;
