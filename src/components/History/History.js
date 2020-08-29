import React, { useCallback } from "react";
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

    const handleClose = useCallback(() => dispatch({ type: HIDE_HISTORY }), [dispatch]);

    if (!history.show) {
        return null;
    }

    return (
        <Modal>
            <div className="history">
                <div className="vehicles">
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
                </div>
                <table className="centered incomes">
                    <caption>Ingresos</caption>
                    <tbody>
                        <tr>
                            <th>Automóviles</th>
                            <td>${history.cars}</td>
                        </tr>
                        <tr>
                            <th>Motocicletas</th>
                            <td>${history.motorcycles}</td>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <td>${history.cars + history.motorcycles}</td>
                        </tr>
                    </tbody>
                </table>
                <table className="incomes"></table>
                <div className="button border-top">
                    <button
                        className="btn primary"
                        onClick={handleClose}
                        type="button"
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </Modal>
    );
}