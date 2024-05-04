import React, { useState } from "react";
import "../Sidebar/sidebar.css";
import { CgProfile } from "react-icons/cg";
import { GrStorage } from "react-icons/gr";
import { FaFilter } from "react-icons/fa6";
import { BsShop } from "react-icons/bs";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { GrNotes } from "react-icons/gr";
import { VscNotebook } from "react-icons/vsc";
import { IoEyedropOutline } from "react-icons/io5";
import { useNavigate, Outlet } from "react-router-dom";

function sidebar() {
	const navigate = useNavigate();
	const [activeTab, setActiveTab] = useState("");

	const handleTabClick = (tabName) => {
		setActiveTab(tabName);
		if (
			tabName.toLowerCase() === "patients" ||
			tabName.toLowerCase() === "labs" ||
			tabName.toLowerCase() === "pharma" ||
			tabName.toLowerCase() === "registration" ||
			tabName.toLowerCase() === "construction" ||
			tabName.toLowerCase() === "tests" ||
			tabName.toLowerCase() === "billing"
		) {
			navigate("/patients");
		} else {
			navigate("/" + tabName.toLowerCase());
		}
	};

	return (
		<>
			<div className="sidebar">
				<div>
					<span>Dashboards</span>
					<div className="cardsMainDiv">
						<div
							className={activeTab === "Patients" ? "cards active" : "cards"}
							onClick={() => handleTabClick("Patients")}
						>
							<CgProfile style={{ marginTop: "2vh" }} size={25} />
							<span>Patients</span>
						</div>
						<div
							className={
								activeTab === "dashboard" ? "cardsTwo active" : "cardsTwo"
							}
							onClick={() => handleTabClick("dashboard")}
						>
							<GrStorage style={{ marginTop: "2vh" }} size={25} />
							<span>HR</span>
						</div>
						<div
							className={activeTab === "Labs" ? "cardsTwo active" : "cardsTwo"}
							onClick={() => handleTabClick("Labs")}
						>
							<FaFilter style={{ marginTop: "2vh" }} size={25} />
							<span>Labs</span>
						</div>
						<div
							className={
								activeTab === "Pharma" ? "cardsThree active" : "cardsThree"
							}
							onClick={() => handleTabClick("Pharma")}
						>
							<BsShop style={{ marginTop: "2vh" }} size={25} />
							<span>Pharma</span>
						</div>
					</div>
				</div>
				<div style={{ marginTop: "1vh" }}>
					<span>Process</span>
					<div className="cardsMainDiv">
						<div
							className={
								activeTab === "Registration" ? "cards active" : "cards"
							}
							onClick={() => handleTabClick("Registration")}
						>
							<VscNotebook style={{ marginTop: "2vh" }} size={25} />
							<span>Registration</span>
						</div>
						<div
							className={
								activeTab === "Construction" ? "cardsTwo active" : "cardsTwo"
							}
							onClick={() => handleTabClick("Construction")}
						>
							<GrNotes style={{ marginTop: "2vh" }} size={25} />
							<span>Construction</span>
						</div>
						<div
							className={activeTab === "Tests" ? "cardsTwo active" : "cardsTwo"}
							onClick={() => handleTabClick("Tests")}
						>
							<IoEyedropOutline style={{ marginTop: "2vh" }} size={25} />
							<span>Tests & Reports</span>
						</div>
						<div
							className={
								activeTab === "Billing" ? "cardsThree active" : "cardsThree"
							}
							onClick={() => handleTabClick("Billing")}
						>
							<HiOutlineBanknotes style={{ marginTop: "2vh" }} size={25} />
							<span>Billing</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default sidebar;
