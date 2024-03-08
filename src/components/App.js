import React from "react";
import Nav from "./Nav";
import TileList from './TileList'

import hogs from "../porkers_data";

function App() {
	
	return (
		<div className="App">
			<Nav />
			<TileList hogs={hogs}/>
		</div>
	);
}

export default App;
