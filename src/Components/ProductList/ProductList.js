import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../Axios";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = async () => {
    try {
      const response = await axiosInstance.get("/products");
      console.log(response.data.products);
      setProductList(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container p-2">
      <div className="row">
        {productList.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card">
              <Carousel >
                {product.images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={image}
                      alt={`Slide ${index + 1}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <div className="card-body">
                <h4 className="card-title mb-4">Title of product: {product.title}</h4>
                <div className="row">
                  <div className="col-sm-6">
                    <h6 className="card-subtitle mb-2 text-muted">
                    <strong>Description:</strong> {product.description}
                    </h6>
                    <p className="card-text mt-4">
                      <strong>Brand:</strong> {product.brand}
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p></p>
                    <p className="card-text">
                      <strong>Category:</strong> {product.category}
                    </p>
                    <p className="card-text">
                      <strong>Product Price:</strong> {product.price}
                    </p>
                  </div>
                </div>
                <hr />
                <button className="btn btn-primary" key={product.id}>
                  <Link to={`/product-details/${product.id}`}>
                    Show Details
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
