import { DrugstoreEntity } from '@farmapp2/core';

export type DrugstoreJSON = {
  fecha: string;
  local_id: string;
  local_nombre: string;
  comuna_nombre: string;
  localidad_nombre: string;
  local_direccion: string;
  funcionamiento_hora_apertura: string;
  funcionamiento_hora_cierre: string;
  local_telefono: string;
  local_lat: string;
  local_lng: string;
  funcionamiento_dia: string;
  fk_region: string;
  fk_comuna: string;
  fk_localidad: string;
};

const transformData = (input: DrugstoreJSON[]): DrugstoreEntity[] => {
  return input
    .map((inputDrugstore) => {
      return {
        closingHour: inputDrugstore.funcionamiento_hora_cierre,
        premisesAddress: inputDrugstore.local_direccion,
        premisesId: inputDrugstore.local_id,
        premisesName: inputDrugstore.local_nombre,
        premisesPhone: inputDrugstore.local_telefono,
        premisesLatitude: Number(inputDrugstore.local_lat) || 0,
        premisesLongitude: Number(inputDrugstore.local_lng) || 0,
        date: inputDrugstore.fecha,
        communeName: inputDrugstore.comuna_nombre,
        locality: inputDrugstore.fk_localidad,
        localityName: inputDrugstore.local_nombre,
        operatingDay: inputDrugstore.funcionamiento_dia,
        commune: inputDrugstore.fk_comuna,
        region: inputDrugstore.fk_region,
        openingHour: inputDrugstore.funcionamiento_hora_apertura,
      };
    })
    .filter(
      (drugstore) =>
        drugstore.premisesLatitude !== 0 &&
        drugstore.premisesLongitude !== 0 &&
        !Number.isInteger(drugstore.premisesLongitude) &&
        !Number.isInteger(drugstore.premisesLatitude)
    );
};

export { transformData };
