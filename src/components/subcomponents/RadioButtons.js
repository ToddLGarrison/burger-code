import React from 'react';

const RadioButton = ({ label, options, selectedOption, onChange }) => {
    return (
        <div>
            <label>{label}</label>
            <div>
                {options.map((option) => (
                    <div key={option}>
                        <input 
                            type="radio"
                            id={option}
                            value={option}
                            checked={option === selectedOption}
                            onChange={() => onChange(handleRadioButtonChange(option))}
                        />
                        <label htmlFor={option}>{option}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

const handleRadioButtonChange = (option) => {
    return option
}

export default RadioButton;