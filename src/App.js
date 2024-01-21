import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/body/Body";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen flex flex-col">
        <Header></Header>
        <Body></Body>
      </div>
    </Provider>
  );
}

export default App;
