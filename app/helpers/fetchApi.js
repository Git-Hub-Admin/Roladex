import fetchival from 'fetchival';
import _ from 'lodash';
import apiConfig from '../config/apiConfig';
import

const fetchApi = (endPoint, payload = {}, method = 'get', headers = {}) => {
  const accessToken = 'blue';
  return fetchival(`${apiConfig.url}${endPoint}`, {
    headers: _.pickBy({
      ...(accessToken ? {
        Authorization: `Bearer ${accessToken}`,
      } : {
        'Client-ID': apiConfig.clientId,
      }),
      ...headers,
    }, item => !_.isEmpty(item)),
  })[method.toLowerCase()](payload);
};

export default fetchApi;
