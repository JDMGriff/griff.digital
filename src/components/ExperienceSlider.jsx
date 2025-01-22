'use client'

import React, { useLayoutEffect } from "react";

// Components
import Glide from '@glidejs/glide';

const ExperienceSlider = () => {

    useLayoutEffect(() => {
        const sliders = document.querySelectorAll('.glide');
        const glideInstances = [];
    
        sliders.forEach(slider => {
            const glide = new Glide(slider, {
                startAt: 0,
                perView: 3,
                breakpoints: {
                    1280: {
                        perView: 2
                    },
                    640: {
                      perView: 1
                    }
                }                
            });
            glide.mount();
            glideInstances.push(glide);
        });
    
        // Clean up on unmount
        return () => {
            glideInstances.forEach(glide => glide.destroy());
        };
    }, []);


  return (
    <div className="my-32">
        <div className="glide">
            <div className="flex items-center mb-6">
                <h3 className="text-2xl font-bold mr-6">Experience:</h3>
                <div className="glide__arrows" data-glide-el="controls">
                    <button aria-label="Slide Carousel Left" title="Slide Left" className="glide__arrow glide__arrow--left mr-4" data-glide-dir="<"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20.657" height="11.314" viewBox="0 0 20.657 11.314">
                            <path id="Union_6" data-name="Union 6" d="M13.586,1.414l3.242,3.243H0v2H16.829L13.586,9.9,15,11.314l4.243-4.243,1.414-1.414L15,0Z" transform="translate(20.657 11.314) rotate(180)" fill="#fa0"/>
                        </svg>
                    </button>
                    <button aria-label="Slide Carousel Right" title="Slide Right" className="glide__arrow glide__arrow--right" data-glide-dir=">">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20.657" height="11.314" viewBox="0 0 20.657 11.314">
                            <path id="Union_4" data-name="Union 4" d="M13.586,9.9l3.242-3.243H0v-2H16.829L13.586,1.414,15,0l4.243,4.243,1.414,1.414L15,11.314Z" fill="#fa0"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides flex item-stretch justify-center">
                {[
                    { id: crypto.randomUUID(), company: 'Revive.Digital', role: 'Digital designer & front end developer', date: '2023 - Present' },
                    { id: crypto.randomUUID(), company: 'NWI', role: 'Jr. Full stack developer', date: '2022 - 2023' },
                    { id: crypto.randomUUID(), company: 'Revive.Digital', role: 'Digital designer & front end developer', date: '2021 - 2022' },
                    { id: crypto.randomUUID(), company: 'Page Creative Ltd:', role: 'Digital designer & front end developer', date: '2018 - 2021' },
                    { id: crypto.randomUUID(), company: 'TDI-Tuning Ltd:', role: 'Web & graphic design executive', date: '2016 - 2018' },
                    { id: crypto.randomUUID(), company: 'Freelance Web & Graphic Design:', role: 'Web & graphic designer', date: '2015 - 2016' },
                    { id: crypto.randomUUID(), company: 'Leonmedia/Grow Co:', role: 'Digital designer & front end developer', date: '2010 - 2015' },
                ].map(({ id, company, role, date }) => (
                    <li key={id} className="glide__slide h-[auto] bg-[--pale-primary] self-stretch block flex-grow p-10">
                        <p className="text-xl font-semibold">{company}</p>
                        <p className="my-2">{role}</p>
                        <p className="text-[--accent]">{date}</p>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ExperienceSlider
