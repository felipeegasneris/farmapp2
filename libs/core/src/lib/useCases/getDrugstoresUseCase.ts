import type { DrugstoreRepository } from '@farmapp2/core';

type GetDrugstoresByRegionRepository = Pick<DrugstoreRepository, 'drugstores'>;

const getDrugstoresUseCase = (store: GetDrugstoresByRegionRepository) => {
  return store.drugstores;
};

export { getDrugstoresUseCase };
