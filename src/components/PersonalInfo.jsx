function PersonalInfo({ setData, editMode }) {
	const onSubmit = (event) => {
		event.preventDefault();
		setData({
			name: event.target[0].value,
			email: event.target[1].value,
			phone: event.target[2].value,
			address: event.target[3].value,
		});
	};

	return (
		<div className="componentContainer">
			<h3>Personal Information</h3>
			<div className="container">
				<form onSubmit={onSubmit}>
					<div className="inputPair">
						<label htmlFor="name">Name:</label>
						<input
							type="text"
							id="name"
							disabled={!editMode}
							placeholder="Please insert your name"
							required
						/>
					</div>
					<div className="inputPair">
						<label htmlFor="email">Email:</label>
						<input
							type="email"
							id="email"
							disabled={!editMode}
							placeholder="Please insert your email"
							required
						/>
					</div>
					<div className="inputPair">
						<label htmlFor="phone">Phone:</label>
						<input
							type="tel"
							id="phone"
							disabled={!editMode}
							placeholder="#########"
							pattern="[0-9]{9}"
							required
							max={9}
						/>
					</div>
					<div className="inputPair">
						<label htmlFor="address">Address:</label>
						<input
							type="text"
							id="address"
							disabled={!editMode}
							placeholder="Some Adress"
							required
						/>
					</div>
					<button type="submit" disabled={!editMode}>
						Update Personal Info
					</button>
				</form>
			</div>
		</div>
	);
}

export default PersonalInfo;
