import { Map, Marker, ZoomControl } from 'pigeon-maps';
import { DrugstoreEntity } from '@farmapp2/core';

const MapComponent = ({
  drugstores,
  homeLocation,
}: {
  drugstores: DrugstoreEntity[];
  homeLocation: [number, number];
}) => {
  return (
    <Map
      center={homeLocation ?? [-33.448891, -70.669266]}
      zoom={15}
      height={300}
    >
      <ZoomControl />
      <Marker
        width={30}
        key={0}
        anchor={homeLocation}
        color={'red'}
        onClick={() => console.log('home!')}
      />
      {drugstores.map(
        ({
          premisesLatitude,
          premisesLongitude,
          premisesId,
          localityName,
          premisesAddress,
          communeName,
          region,
        }) => (
          <Marker
            width={30}
            key={premisesId}
            anchor={[premisesLatitude, premisesLongitude]}
            onClick={() =>
              console.log(
                `${premisesId} - ${localityName} - ${communeName} - ${region} - ${premisesAddress}`
              )
            }
          />
        )
      )}
    </Map>
  );
};

export default MapComponent;
