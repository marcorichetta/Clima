import React from "react";

import Card from "./Card";

const Bottom = (props) => {

    const { forecast } = props;

    return (
        <div className="bottom">
            { /* Usamos map para iterar sobre el array de los días */}
            {forecast.forecastday.map(dia => {
                /* Acá tenemos los datos sobre los días */
                return (
                    /* Acá iteramos sobre nuestro componente */
                    <Card dia={dia} key={dia.date} />
                )
            }
            )}
        </div>
    )
}

export default Bottom;