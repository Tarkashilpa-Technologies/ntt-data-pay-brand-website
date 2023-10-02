import rootReducer from './reducers'; // Import your reducers
import { createStore } from "redux";

const store = createStore(rootReducer);

export default store;