import { h } from "react-hyperscript-helpers";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { rootReducer } from "../state/reducers";
import Layout from "./Layout";

const store = createStore(rootReducer);

const App = () => h(Provider, { store }, [h(Layout)]);

export default App;
