import React, { createContext, useState } from "react";
import Sidebar from "./Sidebar";
import ListVehicles from "./ListVehicles";
import useLocalStorage from "../hooks/useLocalStorage";
import ModalConfig from "./ModalConfig";
import ModalIncomes from "./ModalIncomes";
import Toast from "./Toast";

export const GeneralContext = createContext();

function App() {
	const [vehicles, setVehicles] = useLocalStorage("vehicles", []);
	const [config, setConfig] = useLocalStorage("config", null);
	const [countCars, setCountCars] = useLocalStorage("countCars", 0);
	const [countMotorcycles, setCountMotorcycles] = useLocalStorage("countMotorcycles", 0);
	const [incomesCars, setIncomesCars] = useLocalStorage("incomesCars", 0);
	const [incomesMotorcycles, setIncomesMotorcycles] = useLocalStorage("incomesMotorcycles", 0);

	const [messageAlert, setMessageAlert] = useState("");
	const [showAlert, setShowAlert] = useState(false);

	const showToast = message => {
		setMessageAlert(message);
		setShowAlert(true);

		setTimeout(() => {
			setShowAlert(false);
		}, 3000);
	};

	const [showConfig, setShowConfig] = useState(!config);
	const [showIncomes, setShowIncomes] = useState(false);

	return (
		<div id="App" className="row" style={{ position: "relative" }}>
			<ModalConfig
				config={config}
				setConfig={setConfig}
				show={showConfig}
				setShow={setShowConfig}
			/>
			<ModalIncomes
				show={showIncomes}
				setShow={setShowIncomes}
				incomesCars={incomesCars}
				incomesMotorcycles={incomesMotorcycles}
			/>
			{config && (
				<GeneralContext.Provider
					value={{
						config,
						vehicles,
						setVehicles,
						countCars,
						setCountCars,
						countMotorcycles,
						setCountMotorcycles
					}}
				>
					<Toast message={messageAlert} show={showAlert} />
					<Sidebar
						config={config}
						setShowConfig={setShowConfig}
						setShowIncomes={setShowIncomes}
						showToast={showToast}
					></Sidebar>
					<ListVehicles
						incomesCars={incomesCars}
						setIncomesCars={setIncomesCars}
						incomesMotorcycles={incomesMotorcycles}
						setIncomesMotorcycles={setIncomesMotorcycles}
					></ListVehicles>
				</GeneralContext.Provider>
			)}
		</div>
	);
}

export default App;
