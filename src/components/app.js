import React from 'preact/compat'
import MiddleLayer from "./MiddleLayer";
import Router from "./router";

const App = () => (
	<MiddleLayer>
		<Router/>
	</MiddleLayer>
)

export default App
