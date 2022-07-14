import './App.css';
import Layout from "./Route/Layout";

import FactosRouter from "./Route/FactosRouter";


function App() {

    return (
        <div className="App">
            {/*여기 있는 div랑 지금 여기에 import된 css에도 스타일 추가해봤는데 몰겟네,,*/}
            {/*index.js에 reactdom에 뭔가 있는 것 같긴한데*/}
            <Layout>
                <FactosRouter/>
            </Layout>
        </div>
    );
}

export default App;