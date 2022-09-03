//CHECK VALID EMAILS
//Email stored in database
const subscribedEmail = 'helloworld@gmail.com';
//Inserted email from the user
const insertedEmail = prompt('Insert Email...');
//function to compare inserted email with the sotred email in database
const checkEmailValidation = function (storedEmail, loggedEmail) {
  // function takes 2 arguments the stored email in database and inserted email from user
  if (storedEmail === loggedEmail.toLowerCase().trim()) {
    // check the validation (lowercase and trim the inserted email)
    console.log(
      `Welcome back ${insertedEmail.slice(0, insertedEmail.indexOf('@'))}` // insertedemail.slice --- cut the name from start and before @ and make a greeting
    );
  } else {
    console.log('try again.LoggedOut...');
  }
};
//Calling the function
checkEmailValidation(subscribedEmail, insertedEmail);
