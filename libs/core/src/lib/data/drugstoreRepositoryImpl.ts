import type { DrugstoreRepository } from '@farmapp2/core';
import { getDrugstores } from '@farmapp2/core';
import { useQuery } from 'react-query';

const useDrugstoreRepositoryImpl = (): DrugstoreRepository => {
  const query = useQuery('all', getDrugstores, { initialData: [] });

  console.log(query);
  return <DrugstoreRepository>{
    drugstores: query.data ?? [],
    isLoading: query.isLoading,
    isError: query.isError,
  };
};

export { useDrugstoreRepositoryImpl };
