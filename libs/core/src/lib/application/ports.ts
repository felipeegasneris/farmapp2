import {Drugstore} from '@farmapp2/core';

export interface DrugstoreStoreService {
  drugstores?: Drugstore[],
  updateDrugstore(drugstore: Drugstore): void;
}


