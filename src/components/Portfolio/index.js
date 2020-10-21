import React from 'react';
import photo from "../../assets/images/campground.png";

function Portfolio(props) {

    const testSample = {
        name: "Campground, Inc",
        description: "Second group project",
        image: photo
    };

    return (
        <section>
            <h1>{testSample.name}</h1>
            <p>{testSample.description}</p>
            <div>
                <img src={testSample.image} style={{width: "25%" }} alt="Campground website" />
            </div>
        </section>
    );
}

export default Portfolio;