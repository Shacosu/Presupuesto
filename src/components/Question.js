import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error'

const Question = ({ setPresupuesto, setRestante, setShowQuestion }) => {
    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)
    const addPresuspuesto = (e) => {
        e.preventDefault()
        if (cantidad < 1 || isNaN(cantidad) ) {
            setError(true);
            return;
        }
        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setShowQuestion(false)
    }
    return ( 
        <React.Fragment>
            <h2>Ingresa tu presupuesto</h2>
            { error ? <Error msg="El presupuesto es incorrecto!"/> : null }
            <form onSubmit={addPresuspuesto}>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ingresa tu presupuesto"
                    onChange={e => setCantidad(parseInt(e.target.value, 10))}
                />
                <input 
                    type="submit"
                    className="u-full-width button-primary"
                    value="Definir presupuesto"
                />
            </form>
        </React.Fragment>
     );
}

Question.propTypes = {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setShowQuestion: PropTypes.func.isRequired
}
 
export default Question;