import axios from 'axios';
import { DrugstoreEntity } from '@farmapp2/core';
import { create } from '../domain/DrugstoreModel';
import { transformData } from './utils';

const baseURL = `https://api.allorigins.win/get?url=${encodeURIComponent(
  'https://farmanet.minsal.cl/maps/index.php/ws/getLocalesRegion?id_region=7'
)}`;
function getDrugstores(): Promise<DrugstoreEntity[]> {
  return axios
    .get(baseURL)
    .then((res) => create(transformData(JSON.parse(res.data.contents))));
}

export { getDrugstores };
