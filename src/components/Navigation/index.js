import React from 'react';

function Navigation() {

    const titles = [
        {
            name: "About Me"
        },
        {
            name: "Portfolio"
        },
        {
            name: "Contact"
        },
        {
            name: "Resume"
        },
    ];

    function titleSelected (name) {

    }

    return (
        <header className="d-flex justify-content-between">
            <div className="symbol-h1">
                <h1 className="display-4 font-italic"><span> </span>Alexsis Michelle</h1>
            </div>
            <nav>
                <ul className="nav">
                    {titles.map((title) => (
                        <ol
                            className="nav-item"
                            key={title.name}
                        >
                            <span onClick={() => titleSelected(title.name)}>
                                {title.name}
                            </span>
                        </ol>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;