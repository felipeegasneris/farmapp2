import axios from 'axios';
import { DrugstoreEntity } from '@farmapp2/core';
import { create } from '../domain/DrugstoreModel';
import { transformData } from './utils';

const baseURL = `https://api.allorigins.win/get?url=${encodeURIComponent(
  'https://farmanet.minsal.cl/index.php/ws/getLocales'
)}`;
function getDrugstores(): Promise<DrugstoreEntity[] | void> {
  return axios
    .get(baseURL)
    .then((res) => {
      return create(transformData(JSON.parse(res.data.contents.trim())));
    })
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
}

export { getDrugstores };
