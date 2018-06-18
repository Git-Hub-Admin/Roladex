import { Buffer } from 'buffer';

import fetchApi from './fetchApi';

const endPoints = {
  create: '/roladex/ajax/create_user',
};

export const create = payload => fetchApi(endPoints.create, payload, 'post');

export const authenticate = (email, password) => fetchApi(endPoints.authenticate, {}, 'post', {
  Authorization: `Basic ${Buffer.from(`${email}:${password}`).toString('base64')}`,
});
