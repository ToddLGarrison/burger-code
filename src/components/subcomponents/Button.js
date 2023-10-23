import React from "react";

const Button = ({ label, onClick }) => {
    return (
        <div>
            <button type="button" onClick={onClick}>
                {label}
            </button>
        </div>
    )
}

export default Button