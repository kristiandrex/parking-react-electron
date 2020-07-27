import React from "react";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";
import '../styles/Incomes.scss';

export default function Incomes() {
    const incomes = useSelector((state) => state.incomes);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch({ type: 'HIDE_INCOMES' });
    };

    if (!incomes.show) {
        return null;
    }

    return (
        <Modal>
            <div className="incomes">
                <table className="centered">
                    <thead>
                        <tr>
                            <th>Automóviles</th>
                            <th>Motocicletas</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${incomes.cars}</td>
                            <td>${incomes.motorcycles}</td>
                            <td>${incomes.cars + incomes.motorcycles}</td>
                        </tr>
                    </tbody>
                </table>
                <button type="button" className="btn primary" onClick={handleClose}>
                    <i className="material-icons">clear</i>
                </button>
            </div>
        </Modal>
    );
}