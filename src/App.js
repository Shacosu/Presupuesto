import React, { useState, useEffect } from "react";
import Question from "./components/Question";
import Form from "./components/Form";
import List from "./components/List";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [showquestion, setShowQuestion] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [showgasto, setShowGasto] = useState(false);
  useEffect(() => {
    if(showgasto) {
      setGastos([
        ...gastos,
        gasto
      ])
      const presupuestoFinal = restante - gasto.cantidad;
      setRestante(presupuestoFinal);
      setShowGasto(false);
    }
  }, [gasto, gastos, restante, showgasto])
  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
      </header>
      <div className="contenido-principal contenido">
        {showquestion ? (
          <Question
            setPresupuesto={setPresupuesto}
            setRestante={setRestante}
            setShowQuestion={setShowQuestion}
          />
        ) : (
          <div className="row">
            <div className="one-half column">
              <Form 
                setGasto={setGasto}
                setShowGasto={setShowGasto}
              />
            </div>
            <div className="one-half column">
              <List 
                gastos={gastos}
              />
              <ControlPresupuesto 
                presupuesto={presupuesto}
                restante={restante}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
