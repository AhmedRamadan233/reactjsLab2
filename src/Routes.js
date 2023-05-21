import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ProductList from "./Components/ProductList/ProductList";
import Counter from "./Pages/Counter/Counter";
import ProducDetails from "./Pages/ProductDetails/ProductDetails";
const Routes = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/product-details/:productId",

		element: <ProducDetails />,
	},
	{
		path: "/counter",
		element: <Counter />,
	},
	
]);

export default Routes;
