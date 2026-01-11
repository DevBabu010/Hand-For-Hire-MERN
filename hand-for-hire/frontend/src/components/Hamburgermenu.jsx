import React from 'react'

export default function Hamburgermenu({onHbClose}) {
    return (
        <div className='modal-overlay'>
            <div className='hamburger-menu-window'>
            <div className='hm-heading'>Menu</div>
            <div className='hm-body'>
                <div>
                    <i class="fa-solid fa-house"></i>
                    
                    <span className='hb-headings'>Home Management</span>
                </div>
                <div>
                    <i class="fa-solid fa-user"></i>
                    <span className='hb-headings'> User Dashboard</span>
                </div>
                <div>
                    <i class="fa-solid fa-sliders"></i>
                    

                    <span  className='hb-headings'>Services</span>

                </div>

                <div>
                    <i class="fa-solid fa-graduation-cap"></i>
                    <span className='hb-headings'>Education & Training</span>
                    

                </div>
            </div>
            <button onClick={onHbClose} className='close-btn-1'>✖</button>
            
            </div>
        </div>
    )
}


