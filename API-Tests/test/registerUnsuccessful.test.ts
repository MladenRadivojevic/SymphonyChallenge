import { ReqresApi, RegisterDTO } from '../src';
import axios from 'axios';
import faker from 'faker';

describe('Unsuccessful registraion', () => {
    it('Registration shoul be unsuccessful', async () => {

        const generatedEmail =  faker.internet.email(); // Generating fake data ( email and password ), due the unsuccesful registration is tested 
        const generatedPassword = faker.internet.password();
    try
    {
        await axios.post(ReqresApi.registerUnsuccessful, new RegisterDTO({email: generatedEmail, password: generatedPassword}));
    }
    catch(e){
        
        console.log(`Data used for testing: Email: ${generatedEmail}, Password: ${generatedPassword}`);
        expect(e.response.status).toBe(400);
        expect(e.response.data.error).toBe("Note: Only defined users succeed registration");
    }

  });
});
  