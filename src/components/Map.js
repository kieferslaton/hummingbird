import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

export class MapContainer extends React.Component {
    render(){
        return(
            <Map
                className='map'
                google={this.props.google}
                zoom={12}
                initialCenter={{ lat: 32.3462244, lng: -90.8202866}}
            >
                <Marker lat={32.3462244} lng={-90.8202866} />
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAjQCpt88Qd8ML0MaE_uw56LmByPiekZiU'
})(MapContainer)