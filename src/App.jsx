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
					element={
						<Home url="https://mansong.ff-demo.co.uk" />
					}
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
