import React, { useReducer } from "react";
import { Dropdown, Checkboxes, RadioButtons, Button } from "./subcomponents";

const initialState = {
    burgerType: '',
    toppings: [],
    bunType: '',
    wantSide: false,
    sideOption: '',
}

const formReducer = (state, action) => {
    switch (action.type) {
        case 'SET_BURGER_TYPE':
            return { ...state, burgerType: action.payload };
        case 'SET_TOPPINGS':
            return { ...state, toppings: action.payload };
        case 'SET_BUN_TYPE':
            return { ...state, bolType: action.payload };
        case 'SET_WANT_SIDE':
            return { ...state, wantSide: action.payload };
        case 'SET_SIDE_OPTION':
            return { ...state, sideOption: action.payload };    
        
        default:
            return state;
    }
};


const OrderForm = () => {

    return (
        <>
            <Dropdown 
                label='Burger Type' 
                options={['Rare', 'Medium Rare', 'Medium', 'Well Done']} 
                selectedOption={state.burgerType}
                onChange={handleDropdownChange} 
            />
        </>
    )
}

export default OrderForm;