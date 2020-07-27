import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/Sidebar.scss";

function Sidebar() {
    const { config, count } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleAddVehicle = (event) => {
        event.preventDefault();

        const vehicle = {
            category: event.target.category.value,
            vehicleID: event.target.vehicleID.value,
            owner: event.target.owner.value,
            ownerID: event.target.ownerID.value,
            phone: event.target.phone.value,
            time: {
                seconds: 0,
                minutes: 0,
                hours: 0
            },
            price: 0
        };

        dispatch({
            type: 'ADD_VEHICLE',
            payload: vehicle
        });

        event.target.reset();
    };

    const handleShowConfig = () => {
        dispatch({ type: 'SHOW_CONFIG' });
    };

    const handleShowIncomes = () => {
        dispatch({ type: 'SHOW_INCOMES' });
    };

    return (
        <div id="sidebar" className="col s3">
            <form onSubmit={handleAddVehicle}>
                <div className="btn-group-category">
                    <input type="radio" name="category" value="CAR" id="category-car" className="input-category" />
                    <label htmlFor="category-car" className="btn btn-category waves-effect waves-light">
                        <i className="material-icons">directions_car</i>${config.price.cars}
                    </label>
                    <input
                        type="radio"
                        name="category"
                        value="MOTORCYCLE"
                        id="category-motorcycle"
                        className="input-category"
                    />
                    <label
                        htmlFor="category-motorcycle"
                        className="btn btn-category waves-effect waves-light"
                    >
                        <i className="material-icons">motorcycle</i>${config.price.motorcycles}
                    </label>
                </div>
                <div className="time">
                    Tiempo mínimo: {config.time} minutos
				</div>
                <div className="input-field">
                    <i className="material-icons prefix">money</i>
                    <input type="text" id="vehicleID" name="vehicleID" />
                    <label htmlFor="vehicleID">Placa</label>
                </div>
                <div className="input-field">
                    <i className="material-icons prefix">person</i>
                    <input type="text" id="owner" name="owner" />
                    <label htmlFor="owner">Propietario</label>
                </div>
                <div className="input-field">
                    <i className="material-icons prefix">fingerprint</i>
                    <input type="text" id="owner-id" name="ownerID" />
                    <label htmlFor="owner-id">Identificación</label>
                </div>
                <div className="input-field">
                    <i className="material-icons prefix">phone</i>
                    <input type="number" id="phone" name="phone" />
                    <label htmlFor="phone">Teléfono</label>
                </div>
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
                        Recaudado
						<i className="material-icons right">assignment</i>
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

export default memo(Sidebar);