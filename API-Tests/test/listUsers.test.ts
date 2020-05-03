import { ReqresApi } from '../src';
import axios, { AxiosResponse } from 'axios';
import { responseValidation } from '../src/validation/validateResponse';
import * as get_list_of_users_json_schema from '../src/json/list-users/list-users-.json';

describe('List Users | Health check', () => {
  it('Should return list of users', async () => {
    const get_list_of_users: AxiosResponse = await axios.get(
      ReqresApi.listUsers
    );
    expect(get_list_of_users.status).toEqual(200);
    expect(typeof get_list_of_users.data).toBe('object');
  });
});

describe('List Users | Response Validation', () => {
  it('Response should be valid', async () => {
    const get_list_of_users: AxiosResponse = await axios.get(
      ReqresApi.listUsers
    );
    const is_response_valid = responseValidation(
      get_list_of_users_json_schema,
      get_list_of_users
    );
    if (!is_response_valid.is_valid) console.log(is_response_valid.errors);
    expect(is_response_valid.is_valid).toBe(true);
  });
});
