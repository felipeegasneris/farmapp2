import type { DrugstoreRepository } from '@farmapp2/core';
import { getDrugstoresUseCase } from '@farmapp2/core';

function useDrugstoresViewModel(store: DrugstoreRepository) {
  const drugstores = getDrugstoresUseCase({ drugstores: store.drugstores });

  return {
    drugstores,
    isLoading: store.isLoading,
    isError: store.isError,
  };
}

export { useDrugstoresViewModel };
