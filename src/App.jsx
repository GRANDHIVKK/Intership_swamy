import "./App.css";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./Components/Components/Sidebar/Sidebar";
import Dashboard from "./Components/Components/Dashboard/Dashboard";
import Patients from "./Components/Components/patients";

function App() {
	return (
		<div>
			<BrowserRouter>
				<div>
					<nav className="navbar">
						<>
							<div className="firstDivInNavbar">
								<select
									className="dropdownoptions"
									id="Patients"
									name="Patients"
								>
									<option value="Patients">Patients</option>
									<option value="Ramana">Ramana</option>
									<option value="Ramarao">Ramarao</option>
									<option value="Ramesh">Ramesh</option>
									<option value="Rao">Rao</option>
								</select>
								<input
									className="inputInNavbar"
									placeholder="Search"
									type="text"
								/>
								<IoSearch style={{ color: "#e3e6e8" }} size={25} />
							</div>
							<div>
								<button className="button">
									<FaPlus /> Add New
								</button>
							</div>
						</>
						<div className="secondDivNavbar">
							<IoIosNotifications style={{ color: "white" }} size={30} />
							<CgProfile style={{ color: "white" }} size={30} />
						</div>
					</nav>
				</div>
				<div style={{ display: "flex" }}>
					<Sidebar />
					<div style={{ flex: 1 }}>
						<Routes>
							<Route path="/" element={<Dashboard />} />
							<Route path="/dashboard" element={<Dashboard />} />
							<Route path="/patients" element={<Patients />} />
							{/* Add routes for other components */}
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
