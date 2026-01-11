import React from 'react'
import { useState } from "react";
const Loginform = ({ onClose }) => {

        const [userType, setUsertype] = useState("");

    return (
    <div className="modal-overlay">
        <div className="modal-box">
        <span className="close-btn" onClick={onClose}>✖</span>

        <h2>Welcome back! Log in to your account</h2>
        <div className='username'>
        <i class="fa-solid fa-user"></i><input type="text" placeholder="Username" />
        </div>
        <div className='username'>
            <i class="fa-solid fa-lock"></i><input type="password" placeholder="Password" />
        </div>
        
        

        
        
            {/* Login type selector */}
            <div> 
        <h3>Select User Type</h3>

        <label>
            <input
            type="radio"
            name="User_Type"
            value="Service Provider"
            checked={userType === "Service Provider"}
            onChange={(e) => setUsertype(e.target.value)}
            />
            Service Provider
        </label>

        <br />

        <label>
            <input
            type="radio"
            name="User_Type"
            value="Service User"
            checked={userType === "Service User"}
            onChange={(e) => setUsertype(e.target.value)}
            />
            Service User
        </label>

        <br />

        <p> Selected: {userType}</p>
            </div>
            <button className="login-btn">Login</button>
        </div>
        

        </div>
    
    );
};

export default Loginform;
