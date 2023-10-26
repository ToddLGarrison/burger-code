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
            return { ...state, bunType: action.payload };
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
        <div className="form-container">
            <div className="form-section">
            <Dropdown 
                label='Burger Type' 
                options={['Rare', 'Medium Rare', 'Medium', 'Well Done', 'Chicken', 'Vegan']} 
                selectedOption={state.burgerType}
                onChange={handleDropdownChange} 
            />
            </div>
            <div className="form-section">
                <Checkboxes 
                    label='Toppings'
                    options={['American Cheese', 'Cheddar', 'Pickles', 'Red Onion', 'Lettuce',]}
                    selectedOptions={state.toppings}
                    onChange={handleCheckboxesChange}
                />
            </div>
            <div className="form-section">
                <RadioButtons
                    label='Bun Type'
                    options={['Regular', 'Potato', 'Gluten Free', 'Hawaiian']}
                    selectedOption={state.bunType}
                    onChange={handleRadioButtonChange}
                />
            </div>
            <div className="form-section">
                <Checkboxes
                    label='Want A Side?'
                    options={['YES!']}
                    selectedOptions={state.wantSide ? ['YES!'] : []}
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
            </div>
            <div className="form-section">
                <Button
                    label="SUBMIT ORDER"
                    onClick={handleSubmit}
                />
            </div>
        </div>
    )
}

export default OrderForm;