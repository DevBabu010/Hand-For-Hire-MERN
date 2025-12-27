import React from 'react'
import './Wedding.css'
import underline from  "../assets/yellow-underline.svg";
import decor from  "../assets/decor.webp";
import eventplanner from  "../assets/eventplanner.webp";
import destination from  "../assets/destination.webp";
import bride from  "../assets/bride.webp";
import groom from  "../assets/groom.webp";
import redbg from  "../assets/redbg.webp";


const Wedding = () => {
    return (
    <div className='wedding-div'>
        <div className='wedding-heading'>
            <div><p className='wedding-heading-txt'>Wedding Services</p></div>
            <div><img className='wedding-heading-underline' src={underline} alt="und" /></div>
            
        </div>
        <div className='wedding-body'>
            <div className='new-tag-div'>
                <div><img className='astro-body-img' src={bride} alt="pl" /></div>
                <div><p className='astro-body-txt'>Bridal Makeup</p></div>
                <button className='newtag'>New</button>
            </div>
            <div>
                <div><img className='astro-body-img' src={groom} alt="pl" /></div>
                <div><p className='astro-body-txt'>Groom Makeup</p></div>
            </div>
            <div>
                <div><img className='astro-body-img' src={destination} alt="pl" /></div>
                <div><p className='astro-body-txt'>Destination wedding</p></div>
            </div>
            <div className='new-tag-div'>
                <div><img className='astro-body-img' src={decor} alt="pl" /></div>
                <div><p className='astro-body-txt'>Wedding decor</p></div>
                <button className='newtag'>New</button>
            </div>
            <div>
                <div><img className='astro-body-img' src={eventplanner} alt="pl" /></div>
                <div><p className='astro-body-txt'>Event Planner</p></div>
            </div>
            <div>
                <div className='img-container'>
                    <img className='astro-body-img-wt' src={redbg} alt="pl"/>     
                        <p className='astro-body-txt-wt'>View All Services</p>
                </div>
                <div className='astro-body-txt'><p>All Services</p></div>
            </div>

        </div>

        
    </div>
    )
}

export default Wedding
