function Display({personalInfoData, educationInfoData}) {
    return (
        <div>
            <p>{personalInfoData.name}</p>
            <p>{personalInfoData.email}</p>
            <p>{personalInfoData.phone}</p>
            <p>{personalInfoData.address}</p>
            <p>{educationInfoData.schoolName}</p>
            <p>{educationInfoData.course}</p>
            <p>{educationInfoData.date}</p>
        </div>
    )
}

export default Display;