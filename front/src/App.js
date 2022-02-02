import './App.css';
import Login from "./User/Login";
import Layout from "./Route/Layout";
import FactosRouter from "./Route/FactosRouter";

function App() {
  return (
    <div className="App">
        <Layout>
            <FactosRouter/>
        </Layout>
    </div>
  );
}

export default App;
