import Home from "./Home";
import GestureRecognition from "./GestureRecognition";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route
					exact
					path="/"
					element={<Home />}
				/>
				<Route
					exact
					path="/gesture-recognition"
					element={<GestureRecognition />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
