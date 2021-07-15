

const LocationInfoBox = ({info}) => {
    return (
        <div className="location-info">
            <h2>Informacion del Asociado</h2>
            <ul>
                <li>Id: {info.id}</li>
                <li>Location: {info.location}</li>
                <li>User: {info.user}</li>
            </ul>

        </div>
    )
}

export default LocationInfoBox
