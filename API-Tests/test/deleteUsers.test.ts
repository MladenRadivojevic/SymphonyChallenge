import { ReqresApi } from '../src';
import axios, { AxiosResponse } from 'axios';
import faker from 'faker';

describe('List Users | Health check', () => {
  it('Should return list of users', async () => {
    const get_list_of_users: AxiosResponse = await axios.get(
      ReqresApi.listUsers
    );
    expect(get_list_of_users.status).toEqual(200);
  });
});

describe('Users | Should delete user with id', () => {
  it('Should delete user from list', async () => {
    const get_list_of_users: AxiosResponse = await axios.get(
      ReqresApi.listUsers
    );
    var list_of_users = get_list_of_users.data.data;
    const random_user_id: number =
      list_of_users[Math.floor(Math.random() * list_of_users.length)].id;
    const delete_random_user: AxiosResponse = await axios.delete(
      `${ReqresApi.listUsers}/${random_user_id}`
    );
    expect(delete_random_user.status).toBe(204);
    console.log(`User with id ${random_user_id} successfuly deleted!`);
  });

  it('Negative test with non-existing user id', async () => {
    const get_list_of_users: AxiosResponse = await axios.get(
      ReqresApi.listUsers
    );
    var list_of_users = get_list_of_users.data.data;
    const random_user_id: number =
      list_of_users[Math.floor(Math.random() * list_of_users.length)].id +
      faker.random.number();
    const delete_random_user: AxiosResponse = await axios.delete(
      `${ReqresApi.listUsers}/${random_user_id}`
    );
    expect(delete_random_user.status).toBe(400); // Test fails - Since the data on reqres is mocked and the response status code is always 204 on this EP.
  });
});
