import React, { FC } from 'react';
import ButtonA from '../buttons/btn-A/ButtonA';
import './Counter.css'
import { useDispatch, useSelector } from 'react-redux';
import { addCashAction, getCashAction } from '../../redux/store/cashReducer';

interface ICounter {
    btnOne: string;
    btnTwo: string;
}

const Counter: FC<ICounter> = ({ btnOne, btnTwo }) => {
    const dispatch = useDispatch();
    const cash = useSelector((state: any) => state.cashReducer.cash);
    
    const handleAddCash = () => {
        const amountStr = prompt('Введіть суму для додавання:') || '0';
        const amount = parseInt(amountStr, 10);
        if (!isNaN(amount)) {
            dispatch(addCashAction(amount));
        } else {
            alert('Невірний формат числа!');
        }
    };

    const handleGetCash = () => {
        const amountStr = prompt('Введіть суму для зняття:') || '0';
        const amount = parseInt(amountStr, 10);
        if (!isNaN(amount)) {
            dispatch(getCashAction(amount));
        } else {
            alert('Невірний формат числа!');
        }
    };
    
    return (
        <div className='counter-container'>
            <h1>{cash}</h1>

            <div className='counter-btns-container'>
                <ButtonA onClick={handleAddCash}>{btnOne}</ButtonA>
                <ButtonA onClick={handleGetCash}>{btnTwo}</ButtonA>
            </div>
        </div>
    );
};

export default Counter;