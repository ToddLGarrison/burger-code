import React from "react";

const Checkboxes = ({ label, options, selectedOptions, onChange }) => {
    return (
        <div>
            <label>{label}</label>
            <div>
                {options.map((option) => (
                    <div key={option}>
                        <input 
                            type="checkbox"
                            id={option}
                            value={option}
                            checked={selectedOptions.includes(option)}
                            onChange={() => onChange((option))} 
                        />
                        <label htmlFor={option}>{option}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Checkboxes