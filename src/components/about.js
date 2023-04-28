import React from "react"
import { useState } from "react";

const profiles = [
    {
        name: 'Kunal Kapur',
        description: "His name was cited by the Limca Book of Records for creating India's largest Chocolate Tower.He is the recipient of The Indian Television Academy Award for the Best Jury/Anchor for Junior MasterChef India.",
        url: '/img/kk.jpg',
        alt: 'kunal kapoor image'
    },
    {
        name: 'Vikas Khanna',
        description: "Khanna had worked at Salaam Bombay and The Café at the Rubin Museum of Art in New York before he joined Junoon, an upscale Indian restaurant in Flatiron district of Manhattan in the year 2011.",
        url:  '/img/vk.jpg',
        alt: 'Vikas Khanna image'
    },
    {
        name: 'Ranveer Singh Brar',
        description: "He has received recognition for his contribution to various cuisines by several institutions such as AIWF, AICA, as also the Mayor of Boston. In addition he has also represented India at the WPF.",
        url:  '/img/rb.jpg',
        alt: 'Ranveer Singh Brar image'
    },
    {
        name: 'Garima Arora',
        description: "Garima Arora is an Indian chef. In November 2018, she became the first Indian woman to win a Michelin star.In February 2019, Arora was named Asia's Best Female Chef for the year by World's 50 Best Restaurants.",
        url:  '/img/ga.jpg',
        alt: 'Garima Arora image'
    },
    {
        name: 'Harpal Singh Sokhi',
        description: "Sokhi has organized the Indian Food Festivals internationally. In 2001, he founded Khana Khazana Pvt. Ltd with others. He has also worked as a guest teacher at the N. L. Dalmia Institute of Management Studies and Research.",
        url:  '/img/hss.jpg',
        alt: 'Harpal Singh Sokhi image'
    },
]

export default function About() {

    const [index, setIndex] = useState(0)
    let chef = profiles[index]

    function handlePrev() {
        if (index === 0) {
            setIndex(profiles.length - 1);
        }
        else
            setIndex(prev => prev - 1);
    }

    function handleNext() {
        if (index === profiles.length - 1) {
            setIndex(0)
        }
        else
            setIndex(prev => prev + 1)
    }

    return (
        <div className="about-section container">
            <h1 className="about-title">Meet Our Chefs</h1>

            <div class="carousel">
                    <img src={chef.url} alt={chef.alt} />

                    <blockquote class="testimonial">
                        <h1 class="chef-name">{chef.name}</h1>
                        <p class="chef-description">{chef.description}</p>
                    </blockquote>

                    <button class="btn btn--left" onClick={handlePrev}>
                        <svg
                            fill="none"
                            stroke-width="3"
                            class="btn-icon"
                            >
                            <path d="M15.75 19.5L8.25 12l7.5-7.5"/>
                        </svg>
                    </button>

                    <button class="btn btn--right" onClick={handleNext}>
                        <svg
                            fill="none"
                            stroke-width="3"
                            stroke="currentColor"
                            class="btn-icon"
                        >
                            <path d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                        </svg>
                    </button>
            </div>
        </div>
    )
}