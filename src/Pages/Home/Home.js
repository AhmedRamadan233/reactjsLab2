import React  from "react";

import Header from "../../Components/Header/Header";
import ProductList from "../../Components/ProductList/ProductList";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container p-5">
      <ProductList /> 
      </div>
    </>
  );
}

export default Home;
