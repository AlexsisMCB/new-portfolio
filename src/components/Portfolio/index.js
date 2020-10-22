import React from 'react';

function Portfolio() {

    const photos = 
        {
            name: 'Campground, INC.',
            category: "campgrounds",
            description: "National park campground search website",
            github: "www.github.com/alirueter/campgrounds-inc",
            link: "https://agile-journey-10175.herokuapp.com/",
            screenshot: "campground.png"
        };

    return (
        <section>
            <h1>{photos.name}</h1>
            <img src={require(`../../assets/images/${photos.screenshot}`)} className="card images" alt={photos.category} />
            <p>{photos.description}</p>
            <a href={photos.github}>{photos.github}</a>
            <br></br>
            <a href={photos.link}>{photos.link}</a>
        </section>
    );
}

export default Portfolio;