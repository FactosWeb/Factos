import './App.css';
import Layout from "./Route/Layout";

import FactosRouter from "./Route/FactosRouter";
import CssBaseline from '@mui/material/CssBaseline';


function App() {

    return (
        <div className="App">
            <CssBaseline />
            <Layout>
                <FactosRouter />
            </Layout>
        </div>
    );
}

export default App;