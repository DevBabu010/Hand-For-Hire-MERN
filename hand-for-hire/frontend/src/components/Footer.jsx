import React from 'react'
import "./Footer.css";

const Footer = () => {
    return (
    <div className='footer'>
        <div>
            <div className='footer-heading'>
                <p>Hand For Hire - Your One-Stop Solution for All Your Needs</p>
            </div>

            <div className='footer-para'>
                <p>Hand For Hire is a leading online platform connecting you with expert service providers across a wide range of categories. From home services like carpentry, plumbing, 
                    and painting to education support with tutors, coaching centers, and career guidance, Sulekha makes life easier by bringing trusted professionals to your doorstep. 
                    Plan your perfect wedding or event with Sulekha's vast network of caterers, decorators, and venues. Find or list properties for buying, selling, or renting houses, 
                    and leverage the platform's free listings to showcase your business or personal offerings. With Hand For Hire, discover solutions tailored to your unique needs, ensuring 
                    convenience, quality, and peace of mind—all in one place</p>
            </div>
        </div>
        <div className='corporate'>
            <div className='corporate-heading'><p className='corporate'>Corporate</p></div>
            <div className='corporate-content-container'>
                <div className='corporate-content'>
                    <div>About us</div>
                    <div>Madia coverage</div>
                    <div>Terms & conditions</div>

                </div>
                <div className='corporate-content'>
                    <div>Careers</div>
                    <div>Ads</div>
                    <div>Privacy Policy</div>

                </div>
            </div>
            
        </div>

        <div className='domains'>
            <div className='domain-heading'><p className='sub-domains'>Doamins</p></div>
            <div className='domain-content'>
                <div>Study Abroad</div>
                <div>Property</div>
                <div>Real Estate</div>
            </div>
            
        </div>

        
    </div>
    )
}

export default Footer
