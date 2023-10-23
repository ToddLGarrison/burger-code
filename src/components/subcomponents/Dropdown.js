import React from 'react';

const Dropdown = ({ label, options, selectedOption, onChange}) => {
    return (
        <div>
            <label htmlFor="dropdown">{label}</label>
            <select 
                id="dropdown"
                value={selectedOption}
                onChange={(event) => onChange(event.target.value)}
            >
                <option value="">Select an Option</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown