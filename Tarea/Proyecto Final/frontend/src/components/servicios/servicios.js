import React from "react";

const ServicioItem = (props) => {
    const { title, description, imagen, body } = props;

    return (
        <div className="servicios">
            <h1>{title}</h1>
            <h2>{description}</h2>
            <img src={imagen}></img>
            <div dangerouslySetInnerHTML={{ __html: body }}></div>
            <hr />
        </div>
    );
};

export default ServicioItem;