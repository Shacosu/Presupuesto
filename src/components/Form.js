import React, { useState } from "react";
import Error from './Error'
import shortid from 'shortid'
import PropTypes from 'prop-types';


const Form = ({ setGasto, setShowGasto }) => {
  const [name, setName] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);
  const addGasto = (e) => {
    e.preventDefault();
    if (cantidad < 1 || isNaN(cantidad) || name.trim() === '') {
        setError(true);
        return;
    }
    setError(false);
    const gasto = {
        id: shortid.generate(), 
        name,
        cantidad
    }
    setGasto(gasto);
    setShowGasto(true);
    setName('');
    setCantidad(0);
  };
  return (
    <form onSubmit={addGasto}>
      <h2>Agrega tus gastos aqui</h2>
      { error ? <Error msg="Los 2 campos son obligatorios!" /> : null }
      <div className="campo">
        <label>Nombre del gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej: Agua, luz, Transporte..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad del gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="$25.000"
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value || cantidad))}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-witdh"
        value="Agregar gasto"
      />
    </form>
  );
};

Form.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setShowGasto: PropTypes.func.isRequired
}

export default Form;
