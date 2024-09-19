import Body from "./components/Body";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="main">
        <Navbar />
        <Body />
      </div>
    </Provider>
  )
}