export class HomePage { 
    static signInButton = 'a.login';
}

export class SignInPage {
    static emailInputField = 'input[id=email_create]';
    static createEmailButton = 'button[id=SubmitCreate]';
    static existingEmail = 'input[id=email]';
    static existingPassword = 'input[id=passwd]';
    static subbmitLoginButton = 'button[id="SubmitLogin"]';
}

export class AccountCreationPage {
    static genderRadioButtonMale = 'input[id="id_gender1"]';
    static genderRadioButtonFemale = 'input[id="id_gender2"]'; 
    static customerFirstName = 'input[id="customer_firstname"]';
    static customerLastName = 'input[id="customer_lastname"]';
    static customerPassword = 'input[id="passwd"]';
}

export class LoggedInHomePage {
    static signOutButton = 'a.logout';
    static searchInput = 'input[id="search_query_top"]';

}