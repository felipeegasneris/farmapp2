import {DrugstoreStoreService} from '../application/ports';
import {useStore} from './store';

export const useDrugstoreStorage = (): DrugstoreStoreService => useStore()
