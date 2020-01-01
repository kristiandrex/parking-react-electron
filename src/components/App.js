import React, { createContext } from "react";
import Sidebar from "./Sidebar";
import ListVehicles from "./ListVehicles";
import useLocalStorage from "../hooks/useLocalStorage";
import ModalConfig from "./ModalConfig";

export const StorageContext = createContext();

function App() {
	const [vehicles, setVehicles] = useLocalStorage("vehicles", []);
	const [config, setConfig] = useLocalStorage("config", null);

	const [countCars, setCountCars] = useLocalStorage("countCars", 0);
	const [countMotorcycles, setCountMotorcycles] = useLocalStorage("countMotorcycles", 0);

	return (
		<div id="App" className="row">
			{config ? (
				<StorageContext.Provider
					value={{
						vehicles,
						setVehicles,
						config,
						setConfig,
						countCars,
						setCountCars,
						countMotorcycles,
						setCountMotorcycles
					}}
				>
					<Sidebar></Sidebar>
					<ListVehicles></ListVehicles>
				</StorageContext.Provider>
			) : (
				<ModalConfig config={config} setConfig={setConfig} />
			)}
		</div>
	);
}

export default App;
