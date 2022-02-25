import styles from './index.module.css';
import {
  useDrugstoresViewModel,
  useDrugstoreRepositoryImpl,
} from '@farmapp2/core';

import Map from '../components/Map';
import { useGeolocation } from 'rooks';

export function Index() {
  const geoObj = useGeolocation();
  const store = useDrugstoreRepositoryImpl();
  const { drugstores, isLoading, isError } = useDrugstoresViewModel(store);

  console.log('drugstores: ', drugstores);
  return (
    <div className={styles.page}>
      {isError && <div>error</div>}
      {isLoading && <div>Loading data...</div>}

      {geoObj && (
        <Map
          drugstores={drugstores}
          homeLocation={[geoObj?.lat, geoObj?.lng]}
        />
      )}
    </div>
  );
}

export default Index;
