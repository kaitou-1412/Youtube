import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import store from "./redux/store";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
