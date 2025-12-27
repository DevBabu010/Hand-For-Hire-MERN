import React from 'react'

export default function Hamburgermenu({onHbClose}) {
    return (
        <div className='modal-overlay'>
            <div className='hamburger-menu-window'>
            <div className='hm-heading'>Menu</div>
            <div className='hm-body'>
                <div>
                    <i class="fa-solid fa-house"></i>
                    Home Management
                </div>
                <div>
                    <i class="fa-solid fa-user"></i>
                    User Dashboard
                </div>
                <div>
                    <i class="fa-solid fa-sliders"></i>
                    Services

                </div>

                <div>
                    <i class="fa-solid fa-graduation-cap"></i>
                    Education & Training

                </div>
            </div>
            <button onClick={onHbClose} className='close-btn-1'>✖</button>
            
            </div>
        </div>
    )
}


