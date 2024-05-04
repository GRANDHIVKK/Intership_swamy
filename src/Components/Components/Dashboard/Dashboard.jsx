import React from "react";
import "../Dashboard/dashboard.css";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdGroups } from "react-icons/md";
import { MdEditNote } from "react-icons/md";
import { HiBanknotes } from "react-icons/hi2";
import { HiArrowUturnRight } from "react-icons/hi2";
import { HiArrowSmallDown } from "react-icons/hi2";

function Dashboard() {
	return (
		<div className="dashboard">
			<div className="divOneInDashboard">
				<div className="textContainer">
					<HiOutlineUserGroup size={25} className="logo" />
					<div className="text">Consultants</div>
				</div>
			</div>
			<div className="divTwoInDashboard">
				<span className="filterSpan">Filter</span>
				<div class="triangle"></div>

				<div className="divTwoOneInDashboard">
					<div>
						{" "}
						<select
							className="dropdownoptionsInDashboard"
							id="Patients"
							name="Patients"
						>
							<option value="Patients">Select Range</option>
							<option value="Ramana">1 to 100</option>
							<option value="Ramarao">100 to 200</option>
							<option value="Ramesh">200 to 300</option>
						</select>
					</div>
					<div className="radioButtonStylings">
						<input type="radio" style={{ height: "20px", width: "20px" }} />
						Summary
					</div>
					<div className="radioButtonStylings">
						<input type="radio" style={{ height: "20px", width: "20px" }} />
						Branch Wise
					</div>
				</div>
			</div>
			<div className="divThreeInDashboard">
				<div className="card">
					<div className="sideStripInCards"></div>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<div className="cardTextAndImg">
							<div className="spanContainers">
								<span className="textInCard">Consultant Count</span> <br></br>
								<span className="stylingNumbers">90/900</span>
							</div>
							<div>
								<div className="imagesarranging">
									<MdGroups size={20} />
								</div>
							</div>
						</div>
						<span className="lastSpanInCard">Today/Period</span>
					</div>
				</div>

				<div className="card">
					<div className="sideStripInCardsTwo"></div>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<div className="cardTextAndImg">
							<div className="spanContainers">
								<span className="textInCard">Consultations</span> <br></br>
								<span className="stylingNumbers">11/25</span>
							</div>
							<div>
								<div className="imagesarrangingTwo">
									<MdEditNote size={20} />
								</div>
							</div>
						</div>
						<span className="lastSpanInCard">Today/Period</span>
					</div>
				</div>

				<div className="card">
					<div className="sideStripInCardsThree"></div>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<div className="cardTextAndImg">
							<div className="spanContainers">
								<span className="textInCard">Labs</span> <br></br>
								<span className="stylingNumbers">25/560</span>
							</div>
							<div>
								<div className="imagesarrangingThree">
									<HiBanknotes size={20} />
								</div>
							</div>
						</div>
						<span className="lastSpanInCard">Today/Period</span>
					</div>
				</div>

				<div style={{ marginRight: "1%" }} className="card">
					<div className="sideStripInCardsFour"></div>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<div className="cardTextAndImg">
							<div className="spanContainers">
								<span className="textInCard">Diet Plans</span> <br></br>
								<span className="stylingNumbers">25/560</span>
							</div>
							<div>
								<div className="imagesarrangingFour">
									<MdGroups size={20} />
								</div>
							</div>
						</div>
						<span className="lastSpanInCard">Today/Period</span>
					</div>
				</div>
			</div>

			<div className="divFourInDashboard">
				<div className="tableTitleandArrowsArrangement">
					<h4>Consultants</h4>
					<div style={{ display: "flex", gap: "10%" }}>
						<span className="arrangingArrowsInCircle">
							<HiArrowUturnRight size={25} />
						</span>
						<span className="arrangingArrowsInCircle">
							<HiArrowSmallDown size={25} />
						</span>
					</div>
				</div>
				<div className="tableStylings">
					<table>
						<tr>
							<th>NAME</th>
							<th>PATIENTS COUNT</th>
							<th>LABS</th>
							<th>DIET PLAN</th>
						</tr>
						<tr>
							<td>Peter</td>
							<td>12</td>
							<td>3</td>
							<td>6</td>
						</tr>
						<tr>
							<td>John Smith</td>
							<td>8</td>
							<td>2</td>
							<td>4</td>
						</tr>
						<tr>
							<td>Mark Johnson</td>
							<td>6</td>
							<td>1</td>
							<td>2</td>
						</tr>
						<tr>
							<td>Mary Lee</td>
							<td>10</td>
							<td>4</td>
							<td>8</td>
						</tr>
						<tr>
							<td>David Chen</td>
							<td>14</td>
							<td>5</td>
							<td>9</td>
						</tr>
						<tr>
							<td>Peter</td>
							<td>14</td>
							<td>5</td>
							<td>9</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
