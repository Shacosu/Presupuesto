import React from 'react';
import PropTypes from 'prop-types';
import { revisarPresupuesto } from '../helpers';

const ControlPresupuesto = ({ presupuesto, restante}) => {
    return ( 
        <React.Fragment>
            <div className="alert alert-primary">
                Presupuesto inicial: $ {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: $ {restante}
            </div>
        </React.Fragment>
     );
}

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}
 
export default ControlPresupuesto;