import * as fromRest from '../util/rest';

// eslint-disable-next-line
export const get = (choice) =>
  fromRest.get(`/fpi-data-custom/${choice}`);
