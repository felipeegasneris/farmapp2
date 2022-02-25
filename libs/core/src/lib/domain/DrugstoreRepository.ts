import type { DrugstoreEntity } from '@farmapp2/core';

interface DrugstoreRepository {
  isLoading: boolean;
  isError: boolean;
  drugstores: DrugstoreEntity[] | undefined;
}

export type { DrugstoreRepository };
