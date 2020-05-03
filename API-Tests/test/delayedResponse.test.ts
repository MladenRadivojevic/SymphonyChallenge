import { ReqresApi } from '../src';
import axios from 'axios';

describe('List Users | Health check', () => {
  it('Should return list of users with delayed response', async () => {

    const delay_in_seconds = Math.random() * (4 - 1) + 1; // Generates random delay value in second between 1 and 4 seconds. 

    const request_sent_time = performance.now();
    await axios.get(`${ReqresApi.listUsers}?delay=${delay_in_seconds}`); 
    const response_returned_time = performance.now();

    const responseTime = (response_returned_time - request_sent_time)/1000; //Returns response time in seconds

    expect(responseTime).toBeGreaterThanOrEqual(delay_in_seconds);
  });
});
