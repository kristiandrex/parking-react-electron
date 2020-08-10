import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "../Input/Input";
import { SHOW_CONFIG, SHOW_HISTORY } from "../../redux/types";

export default function FormVehicle({ onSubmit }) {
    const { config, count } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleShowConfig = () => {
        dispatch({ type: SHOW_CONFIG });
    };

    const handleShowIncomes = () => {
        dispatch({ type: SHOW_HISTORY });
    };

    return (
        <div id="menu" className="col s3">
            <form onSubmit={onSubmit}>
                <div className="btn-group-category">
                    <input type="radio" name="category" value="CAR" id="category-car" />
                    <label htmlFor="category-car" className="btn waves-effect waves-light">
                        <i className="material-icons">directions_car</i>${config.price.cars}
                    </label>
                    <input type="radio" name="category" value="MOTORCYCLE" id="category-motorcycle" />
                    <label htmlFor="category-motorcycle" className="btn waves-effect waves-light">
                        <i className="material-icons">motorcycle</i>${config.price.motorcycles}
                    </label>
                </div>
                <div className="time">
                    Tiempo mínimo: {config.time} minutos
				</div>
                <Input id="vehicleID" label="Placa" prefix="money" type="text" />
                <Input id="owner" label="Propietario" prefix="person" type="text" />
                <Input id="ownerID" label="Identificación" prefix="fingerprint" type="text" />
                <Input id="phone" label="Teléfono" prefix="phone" type="number" />
                <table className="spaces-left">
                    <caption>Espacios disponibles</caption>
                    <tbody>
                        <tr>
                            <td><i className="material-icons">directions_car</i></td>
                            <td id="cars-parking-spaces">{config.spaces.cars - count.cars}</td>
                        </tr>
                        <tr>
                            <td><i className="material-icons">motorcycle</i></td>
                            <td id="motorcycles-parking-spaces">
                                {config.spaces.motorcycles - count.motorcycles}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="btn-group-actions">
                    <button type="submit" className="btn waves-effect white">
                        <i className="material-icons">done</i>
                    </button>
                    <button
                        type="button"
                        className="waves-effect waves-light btn-flat light"
                        onClick={handleShowIncomes}
                    >
                        Registro
                    </button>
                    <button
                        type="button"
                        className="btn-flat light waves-effect waves-light"
                        onClick={handleShowConfig}
                    >
                        <i className="material-icons">build</i>
                    </button>
                </div>
            </form>
        </div>
    );
}
