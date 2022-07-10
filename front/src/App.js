import './App.css';
import Layout from "./Route/Layout";

import FactosRouter from "./Route/FactosRouter";
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
    },
}
const theme = extendTheme({ colors })

function App() {

    return (
        <div className="App">
            <ChakraProvider theme={theme}>
                <Layout>
                    <FactosRouter/>
                </Layout>
            </ChakraProvider>
        </div>
    );
}

export default App;