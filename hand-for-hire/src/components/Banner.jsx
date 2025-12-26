import React from 'react'
import "./Banner.css";
import underline from "../assets/yellow-underline.svg";
import pl from  "../assets/property-lawyer.webp";
import hr from  "../assets/home-rent.webp";
import mk from  "../assets/modular-kitchen.webp";
import is from  "../assets/interior-services.webp";

import ps from  "../assets/playschool.webp";
import sch from  "../assets/school.webp";
import eec from  "../assets/eec.webp";
import jt from  "../assets/job-training.webp";

import clean from  "../assets/clean.webp";
import loan from  "../assets/loan.webp";
import security from  "../assets/security.webp";
import pest from  "../assets/pest.webp";


const Banner = () => {
    return (
        <div className='banner-div'>
            <div className='banner-div-top'>
                <div>
                    <p className='fast'>Fast, Free way to get experts</p>
                </div>
                <div>
                    <p className='discover'>Discover Top Experts in <span className='bold-lko'>Lucknow</span></p>
                </div>
                <div>
                    <p className='skilled'>Skilled, Trusted, Reliable!</p>
                </div>
                <div>
                    <img src={underline} alt="ul" />
                </div>

                <div className='three-div-container'>
                        <div className='home'>Home</div>
                        <div className='Education'>Education</div>
                        <div className='Services'>Services</div>
                </div> 
            </div>

            <div className='banner-div-bottom'>
                <div className='home-content'>
                    <div>
                        <div><img className='content-img' src={pl} alt="pl" /></div>
                        <div><p className='content-txt'>Buy/Sell</p></div>

                    </div>
                    <div>
                        <div><img className='content-img' src={hr} alt="hr" /></div>
                        <div><p className='content-txt'>Rent</p></div>

                    </div>
                    <div>
                        <div><img className='content-img' src={mk} alt="hr" /></div>
                        <div><p className='content-txt'>Relocate</p></div>
                    </div>
                    <div>
                        <div><img className='content-img' src={is} alt="hr" /></div>
                        <div><p className='content-txt'>Interiors</p></div>
                    </div>
                </div>
                <div className='Education-content'>
                    <div>
                        <div><img className='content-img' src={ps} alt="hr" /></div>
                        <div><p className='content-txt'>Playschool</p></div>
                    </div>
                    <div>
                        <div><img className='content-img' src={sch} alt="hr" /></div>
                        <div><p className='content-txt'>School</p></div>
                    </div>
                    <div>
                        <div><img className='content-img' src={eec} alt="hr" /></div>
                        <div><p className='content-txt'>School Tutions</p></div>
                    </div>
                    <div>
                        <div><img className='content-img' src={jt} alt="hr" /></div>
                        <div><p className='content-txt'>Top Coolleges</p></div>
                    </div>
                </div>
                <div className='Services-content'>
                    <div>
                            <div><img className='content-img' src={clean} alt="hr" /></div>
                        <div><p className='content-txt'>Cleaning Services</p></div>
                    </div>
                    <div>
                        <div><img className='content-img' src={loan} alt="hr" /></div>
                        <div><p className='content-txt'>Loan</p></div>
                    </div>
                    <div>
                        <div><img className='content-img' src={security} alt="hr" /></div>
                        <div><p className='content-txt'>Security</p></div>
                    </div>
                    <div>
                        <div><img className='content-img' src={pest} alt="hr" /></div>
                        <div><p className='content-txt'>Pest Control</p></div>
                    </div>
                </div>

            </div>      
        </div>
    )
}

export default Banner
