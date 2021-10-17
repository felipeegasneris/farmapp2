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
  const { drugstores, isLoading } = useDrugstoresViewModel(store);

  console.log(geoObj);
  return (
    <div className={styles.page}>
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
