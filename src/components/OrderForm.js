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
    const [state, dispatch] = useReducer(formReducer, initialState);

    const handleDropdownChange = (value) => {
        dispatch({ type: 'SET_BURGER_TYPE', payload: value })
    }; 
    const handleCheckboxesChange = (selectedOptions) => {
        dispatch ({ type: 'SET_TOPPINGS', payload: selectedOptions })
    };

    const handleRadioButtonChange = (value) => {
        dispatch({ type: 'SET_BUN_TYPE', payload: value})
    };

    const handleWantSideChange = (value) => {
        dispatch({ type: 'SET_WANT_SIDE', payload: value})
    };

    const handleSideOptionChange = (value) => {
        dispatch({ type: 'SET_SIDE_OPTION', payload: value})
    };

    const handleSubmit = () => {
        console.log("GEEAAAAASSSSSY", state)
    }


    return (
        <>
            <Dropdown 
                label='Burger Type' 
                options={['Rare', 'Medium Rare', 'Medium', 'Well Done', 'Chicken', 'Vegan']} 
                selectedOption={state.burgerType}
                onChange={handleDropdownChange} 
            />
            <Checkboxes 
                label='Toppings'
                options={['American Cheese', 'Cheddar', 'Pickles', 'Red Onion', 'Lettuce',]}
                selectedOption={state.toppings}
                onChange={handleCheckboxesChange}
            />
            <RadioButtons
                label='Bun Type'
                options={['Regular', 'Potato', 'Gluten Free', 'Hawaiian']}
                selectedOption={state.bunType}
                onChange={handleRadioButtonChange}
            />
            <Checkboxes
                label='Want A Side?'
                options={['YES!']}
                selectedOption={state.wantSide ? ['YES!'] : []}
                onChange={handleWantSideChange}
            />
            {state.wantSide && (
                <Dropdown
                    label='Side Options'
                    options={['Salad', 'Fries', 'Potatoes', 'All Dressed Chips', 'Veggies']}
                    selectedOption={state.sideOption}
                    onChange={handleSideOptionChange}
                />
            )}
            <Button
                label="SUBMIT ORDER"
                onClick={handleSubmit}
            />
        </>
    )
}

export default OrderForm;