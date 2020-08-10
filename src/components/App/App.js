import React from "react";
import { Provider } from "react-redux";
import Menu from "../Menu/Menu";
import ListVehicles from "../ListVehicles/ListVehicles";
import store from "../../redux/store";

export default function App() {
	return (
		<div id="App" className="row">
			<Provider store={store}>
				<Menu />
				<ListVehicles />
			</Provider>
		</div>
	);
}