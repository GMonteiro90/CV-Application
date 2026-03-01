function Display({ personalInfoData, educationInfoData, workInfoData }) {
	return (
		<div className="innerDisplayContainer">
			<div className="infoContainer">
				<h3>{personalInfoData.name}</h3>
				<p>{personalInfoData.email}</p>
				<p>Phone Number: {personalInfoData.phone}</p>
				<p>Address: {personalInfoData.address}</p>
				<hr />
			</div>
			<div className="infoContainer">
				<h3>{educationInfoData.schoolName}</h3>
				<p>{educationInfoData.course}</p>
				<p>Start: {educationInfoData.startDate}</p>
				<p>End: {educationInfoData.endDate}</p>
				<hr />
			</div>
			<div className="infoContainer">
				<h3>{workInfoData.companyName}</h3>
				<p>Position: {workInfoData.positionTitle}</p>
				<p>Responsibilities: {workInfoData.responsibilities}</p>
				<p>Start Date: {workInfoData.startDate}</p>
				<p>End Date: {workInfoData.endDate}</p>
				<hr />
			</div>
		</div>
	);
}

export default Display;
