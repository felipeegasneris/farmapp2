import { Drugstore } from '@farmapp2/core';
import {DrugstoreStoreService} from './ports';
import {useDrugstoreStorage} from '../services/storageAdapter';
import axios from 'axios';

export function useGetDrugstores() {

  const storage: DrugstoreStoreService = useDrugstoreStorage();
  //TODO: poner servicio de api (axios)

  async function getDrugstores() :Promise<Drugstore[]> {
    const DsResponse = await axios.get('https://farmanet.minsal.cl/index.php/ws/getLocales')
    storage.updateDrugstore(DsResponse.data)
    return DsResponse.data;
  }

  return {
    drugstores: storage.drugstores,
    getDrugstores
  }
}
