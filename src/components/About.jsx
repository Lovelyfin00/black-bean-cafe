import { useState } from 'react'
import { aboutData } from '../data/AboutData'

const About = () => {
    const [hoverStates, setHoverStates] = useState(Array(aboutData.length).fill(false));

    const handleHover = (index) => {
        const checkState = hoverStates.map((states, i) => {
            const match = i===index ? true : false;
            return match;
        })
        setHoverStates(checkState);
    };

    return (
        <section id="about-section" className="section-margin about-section">
            <div className='about-title'>
                <h2 className='leading-3 about-heading '>EXPLORE THE COFFEE EXPERIENCE</h2>
            </div>
            <div className="about-title">
                <p className='mt-3 px-1 py-1'>The Cafe is a pleasant place to have a quick lunch or a relaxing cappuccino.</p>
            </div>       
            <div className="grid grid-cols-1 lg:gap-4 gap-14 md:grid-cols-2 md:gap-16 lg:grid-cols-3 mt-20">
                {
                    aboutData.map((aboutDetails, index) => {
                        const hover = hoverStates[index];

                        const hoverBgClasses = hover ? "about-card relative" : "about-card";
                        const hoverDescriptClasses = hover ? "descrip-div absolute show-card-desc about-card-bg-hover" : "descrip-div ";

                        return(
                            <div 
                                className={hoverBgClasses} 
                                key={aboutDetails.id} 
                                onMouseEnter={() => handleHover(index)}
                                onMouseLeave={() => handleHover(-2)}
                            >
                                <img src={aboutDetails.image} alt="about" className="about-image mb-1 lg:mb-5 md:mb-1" />
                                <a href='#' className='about-card-links'>{aboutDetails.text}</a>
                                <div className={hoverDescriptClasses}>
                                    <p className=''>{aboutDetails.descrip}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default About
