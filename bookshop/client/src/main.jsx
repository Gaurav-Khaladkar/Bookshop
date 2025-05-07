import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ToastContainer } from "react-toastify";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
		<BrowserRouter>
			<App />
			<ToastContainer autoClose={2000} />
		</BrowserRouter>
		</Provider>
	</StrictMode>
);
