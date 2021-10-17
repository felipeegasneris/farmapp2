import type { DrugstoreRepository } from '@farmapp2/core';
import { getDrugstores } from '@farmapp2/core';
import { useQuery } from 'react-query';

const useDrugstoreRepositoryImpl = (): DrugstoreRepository => {
  const query = useQuery('all', getDrugstores, { initialData: [] });

  return {
    drugstores: query.data,
    isLoading: query.isLoading,
  };
};

export { useDrugstoreRepositoryImpl };
