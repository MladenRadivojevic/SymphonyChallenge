import { ReqresApi, RegisterDTO } from '../src';
import axios from 'axios';
import faker from 'faker';

describe('Unsuccessful registraion', () => {
    it('Registration shoul be unsuccessful', async () => {

    try
    {
        await axios.post(ReqresApi.registerUnsuccessful, new RegisterDTO({email: faker.internet.email(), password: faker.internet.password()}));
    }
    catch(e){
        expect(e.response.status).toBe(400);
        expect(e.response.data.error).toBe("Note: Only defined users succeed registration");
    }
    
  });
});
  