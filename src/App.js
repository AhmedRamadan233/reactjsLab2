// import logo from './logo.svg';
import './App.css';
import { Component } from "react";

import { RouterProvider } from "react-router-dom";
import Routes from "./Routes";

class App extends Component {
	render() {
		return (
			<div className="App">
				<RouterProvider router={Routes} />
			</div>
		);
	}
}

export default App;
