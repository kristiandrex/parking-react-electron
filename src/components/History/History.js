import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../Modal/Modal";
import ItemListHistory from "./ItemListHistory";
import { HIDE_HISTORY } from "../../redux/types";
import "./History.scss";

export default function History() {
    const history = useSelector((state) => state.history);
    const dispatch = useDispatch();

    const list = history.list.map(vehicle =>
        <ItemListHistory
            key={vehicle.entry}
            vehicle={vehicle}
        />
    );

    const handleClose = () => {
        dispatch({ type: HIDE_HISTORY });
    };

    if (!history.show) {
        return null;
    }

    return (
        <Modal>
            <div className="history">
                <div className="container">
                    <table className="centered">
                        <caption>Historial</caption>
                        <thead>
                            <tr>
                                <th>Placa</th>
                                <th>Entrada</th>
                                <th>Salida</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list}
                        </tbody>
                    </table>
                    <table className="centered incomes">
                        <caption>Ingresos</caption>
                        <thead>
                            <tr>
                                <th>Automóviles</th>
                                <th>Motocicletas</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${history.cars}</td>
                                <td>${history.motorcycles}</td>
                                <td>${history.cars + history.motorcycles}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button type="button" className="btn primary" onClick={handleClose}>
                    Cerrar
                </button>
            </div>
        </Modal>
    );
}