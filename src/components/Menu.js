import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from './Input';
import '../styles/Menu.scss';

function Menu() {
    const { config, count, vehicles } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleAddVehicle = (event) => {
        event.preventDefault();

        const category = event.target.category.value;
        const inputs = event.target.querySelectorAll('.input-field input');

        if (category.trim().length === 0) {
            return alert('Rellene todos los campos');
        }

        for (let input of inputs) {
            if (input.value.trim().length === 0) {
                return alert('Rellene todos los campos');
            }
        }

        const vehicleID = event.target.vehicleID.value;
        const exists = vehicles.some((vehicle) => vehicle.vehicleID === vehicleID);

        if(exists) {
            return alert('Este vehículo ya está registrado');
        }

        const vehicle = {
            category,
            vehicleID,
            owner: event.target.owner.value,
            ownerID: event.target.ownerID.value,
            phone: event.target.phone.value,
            entry: new Date()
        };

        const currentSpaces = vehicle.category === 'CAR'
            ? count.cars
            : count.motorcycles;

        const spacesLeft = vehicle.category === 'CAR'
            ? config.spaces.cars
            : config.spaces.motorcycles;

        if (currentSpaces === spacesLeft) {
            return alert('Está lleno');
        }

        dispatch({
            type: 'ADD_VEHICLE',
            payload: vehicle
        });

        dispatch({
            type: vehicle.category === 'CAR'
                ? 'ADD_COUNT_CARS'
                : 'ADD_COUNT_MOTORCYCLES'
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
        <div id='menu' className='col s3'>
            <form onSubmit={handleAddVehicle}>
                <div className='btn-group-category'>
                    <input type='radio' name='category' value='CAR' id='category-car' />
                    <label htmlFor='category-car' className='btn waves-effect waves-light'>
                        <i className='material-icons'>directions_car</i>${config.price.cars}
                    </label>
                    <input type='radio' name='category' value='MOTORCYCLE' id='category-motorcycle' />
                    <label htmlFor='category-motorcycle' className='btn waves-effect waves-light'>
                        <i className='material-icons'>motorcycle</i>${config.price.motorcycles}
                    </label>
                </div>
                <div className='time'>
                    Tiempo mínimo: {config.time} minutos
				</div>
                <Input id='vehicleID' label='Placa' prefix='money' type='text'/>
                <Input id='owner' label='Propietario' prefix='person' type='text'/>
                <Input id='ownerID' label='Identificación' prefix='fingerprint' type='text'/>
                <Input id='phone' label='Teléfono' prefix='phone' type='number'/>
                <table className='spaces-left'>
                    <caption>Espacios disponibles</caption>
                    <tbody>
                        <tr>
                            <td><i className='material-icons'>directions_car</i></td>
                            <td id='cars-parking-spaces'>{config.spaces.cars - count.cars}</td>
                        </tr>
                        <tr>
                            <td><i className='material-icons'>motorcycle</i></td>
                            <td id='motorcycles-parking-spaces'>
                                {config.spaces.motorcycles - count.motorcycles}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='btn-group-actions'>
                    <button type='submit' className='btn waves-effect white'>
                        <i className='material-icons'>done</i>
                    </button>
                    <button
                        type='button'
                        className='waves-effect waves-light btn-flat light'
                        onClick={handleShowIncomes}
                    >
                        Registro
						<i className='material-icons right'>assignment</i>
                    </button>
                    <button
                        type='button'
                        className='btn-flat light waves-effect waves-light'
                        onClick={handleShowConfig}
                    >
                        <i className='material-icons'>build</i>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default memo(Menu);