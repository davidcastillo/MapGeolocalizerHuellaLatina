

const LocationInfoBox = ({info}) => {
    return (
        <div className="location-info">
            <h3>Informacion del Asociado</h3>
            <ul>
                <li><strong>User: </strong> {info.user}</li>
                <li><strong>Location:</strong> {info.location}</li>
                <li><strong>Status: </strong> {info.status}</li>
            </ul>

        </div>
    )
}

export default LocationInfoBox
