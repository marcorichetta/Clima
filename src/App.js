import React, { Component } from "react";

import Top from "./components/Top";
import Bottom from "./components/Bottom";

import "./App.css";

class App extends Component {
  // Agregamos el constructor y definimos el estado
  constructor(props) {
    super(props);
    this.state = {
      clima: {},
      isLoaded: false,
    };
  }

  // Definimos el método componentDidMount con fetch.
  // Después de que el componente se monte y renderice 
  // se hace el fetch de la data
  componentDidMount() {
    fetch(
      `/.netlify/functions/getWeather`
    )
      .then(response => response.json())
      .then(jsonData => {

        // Reemplazamos el tamaño del ícono en la URL recibida
        jsonData.current.condition.icon = jsonData.current.condition.icon.replace(
          '64x64',
          '128x128',
        )

        this.setState({
          clima: jsonData,
          isLoaded: true,
        });
      });
  }

  render() {

    const { location, current, forecast, } = this.state.clima;
    return this.state.isLoaded ? (

      <div className="App">
        <div className="container">

          {/* Utilizamos nuestros componentes con sus respectivas props */}
          <Top current={current} location={location} />

          <Bottom forecast={forecast} />

        </div>
      </div>
    ) : (
        <div className="App">
          Cargando...
      </div>
      )
  }
}

export default App;