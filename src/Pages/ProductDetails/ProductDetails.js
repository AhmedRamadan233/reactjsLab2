import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../Axios";
import { Carousel } from "react-bootstrap";
import Header from "../../Components/Header/Header";

const ProductDetails = () => {
  const { productId } = useParams();

  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    try {
      const response = await axiosInstance.get(`/products/${productId}`);
      console.log(response.data);
      setProductDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return productDetails ? (
    <>
    <Header/>
    <div className="container p-2">
        <div className="card-body">
            <div className="text-center mb-4">
            <h4 className="card-title">Title of product: {productDetails.title}</h4>
            </div>
            <div className="d-flex justify-content-center mb-4">
            <Carousel style={{ width: "500px", height: "500px" }}>
                {productDetails.images.map((image, index) => (
                <Carousel.Item key={index}>
                    <img
                    className="d-block w-100"
                    src={image}
                    alt={`Slide ${index + 1}`}
                    style={{ width: "100%", height: "100%" }}
                    />
                </Carousel.Item>
                ))}
            </Carousel>
            </div>
            <div className="card-footer">
            <div className="row">
                <div className="col-sm-6">
                <h6 className="card-subtitle mb-2">
                    <strong>Description:</strong> {productDetails.description}
                </h6>
                <p className="card-text mt-4">
                    <strong>Brand:</strong> {productDetails.brand}
                </p>
                </div>
                <div className="col-sm-6">
                <p></p>
                <p className="card-text">
                    <strong>Category:</strong> {productDetails.category}
                </p>
                <p className="card-text">
                    <strong>Product Price:</strong> {productDetails.price}
                </p>
                </div>
            </div>
            </div>
        </div>
    </div>

    </>
  ) : (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default ProductDetails;
