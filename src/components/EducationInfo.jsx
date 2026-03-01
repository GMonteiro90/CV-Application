function EducationInfo({ setData, editMode }) {
	const onSubmit = (event) => {
		event.preventDefault();
		setData({
			schoolName: event.target[0].value,
			course: event.target[1].value,
			startDate: event.target[2].value,
			endDate: event.target[3].value,
		});
	};

	return (
		<div className="componentContainer">
			<h3>Education</h3>
			<div className="container">
				<form onSubmit={onSubmit}>
					<div className="inputPair">
						<label htmlFor="schoolName">School Name:</label>
						<input
							type="text"
							id="schoolName"
							placeholder="Please insert a school"
							required
							disabled={!editMode}
						/>
					</div>
					<div className="inputPair">
						<label htmlFor="course">Course:</label>
						<input
							type="text"
							id="course"
							placeholder="Please insert your major"
							required
							disabled={!editMode}
						/>
					</div>
					<div className="inputPair">
						<label htmlFor="startDate">Starting Date:</label>
						<input type="date" id="startDate" required disabled={!editMode} />
					</div>
					<div className="inputPair">
						<label htmlFor="endDate">Until:</label>
						<input type="date" id="endDate" required disabled={!editMode}/>
					</div>
					<button type="submit" disabled={!editMode}>
						Update Education Info
					</button>
				</form>
			</div>
		</div>
	);
}

export default EducationInfo;
