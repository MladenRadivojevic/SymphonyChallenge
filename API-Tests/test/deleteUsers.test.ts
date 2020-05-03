import { ReqresApi } from '../src';
import axios, { AxiosResponse } from 'axios';

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
});
