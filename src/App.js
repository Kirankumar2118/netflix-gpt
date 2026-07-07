import { Provider } from "react-redux";
import Body from "./Components/Layout/Body";
import Appstore from "./Redux/Appstore";

function App() {
  return (
    <Provider store={Appstore}>
      <Body />
    </Provider>
  );
}

export default App;
