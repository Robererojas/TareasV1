import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GaleriaPage } from './GaleriaPage';
import { ReportesAvanzadosPage } from './ReportesAvanzadosPage';
import PrivateRoute from './PrivateRoute'; // Assuming you have a PrivateRoute component for JWT protection

function App() {
    return (
        <Router>
            <Switch>
                {/* Other routes */}
                <PrivateRoute path="/galeria" component={GaleriaPage} />
                <PrivateRoute path="/reportes-avanzados" component={ReportesAvanzadosPage} />
                {/* Fallback route */}
            </Switch>
        </Router>
    );
}

export default App;