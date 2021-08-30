import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';

function Map({ searchResults }) {
    const [selectedLocation, setSelectedLocation] = useState({});

    const coordinates = searchResults?.map(({ lat, long }) => (
        {
            latitude: lat,
            longitude: long,
        }
    ));

    const center = getCenter(coordinates);
    
    const [viewport, setViewport] = useState(
        {
            width: '100%',
            height: '100%',
            latitude: center.latitude,
            longitude: center.longitude,
            zoom: 11,
        }
    );

    return <ReactMapGL
        { ...viewport }
        mapStyle={`mapbox://styles/narendra-patel/cksjy16590dcp17p40hoqixl9`}
        mapboxApiAccessToken={process.env.mapbox_access_token}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
        {
            searchResults?.map(result => (
                <div key={result.long}>
                    <Marker
                        latitude={result.lat}
                        longitude={result.long}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p 
                            className="cursor-pointer text-2xl animate-bounce"
                            onClick={() => setSelectedLocation(result)}
                            aria-label="push-pin"
                            role="img"
                        >📌</p>
                    </Marker>

                    {/* The popup that should show if we click on a Marker */}
                    {
                        selectedLocation.long === result.long
                        ? (
                            <Popup
                                closeOnClick={true}
                                onClose={() => setSelectedLocation({})}
                                latitude={result.lat}
                                longitude={result.long}
                            >
                                {result.title}
                            </Popup>
                        )
                        : ( false )
                    }
                </div>
            ))
        }
    </ReactMapGL>;
}

export default Map;