UPDATING GIT

git add .
git commit -m "message"
git branch
git push origin main

persistence of account
https://www.shawndsilva.com/blog/web-development/mern-sessions-authentication-app-part-1-nodejs-and-express-backend
the 3 ways of persistence of account
:: JWT token to store user data in the browser’s LocalStorage upon a successful login, and pass it to the server with each request manually by the clients side code.
:: Using a Cookie to store user data, and this is automatically attached to each request made to the server by the web browser.
:: The most secure, is using Sessions based authentication.

https://www.shawndsilva.com/blog/web-development/mern-sessions-authentication-app-part-1-nodejs-and-express-backend
https://www.section.io/engineering-education/session-management-in-nodejs-using-expressjs-and-express-session/
https://medium.com/@cirtica.welcome/nodejs-express-and-mongodb-atlas-connection-using-mongoose-2021-9b51836e4e65
https://www.mongodb.com/developer/languages/javascript/mongoose-versus-nodejs-driver/

FOR CRUD MONGO DB
https://www.digitalocean.com/community/tutorials/nodejs-crud-operations-mongoose-mongodb-atlas

https://www.youtube.com/watch?v=jZ-dzj6ut54

What is the JSON Web Token structure?

In its compact form, JSON Web Tokens consist of three parts separated by dots (.), which are:

    Header
    Payload
    Signature

https://jwt.io/introduction

JSON Web Tokens (JWTs) are a popular way to handle authentication in web applications. Here is a general outline of how you might use JWTs for login, register, and logout in a web application:

    Login: When a user logs in to the application, the server will verify their credentials (e.g., username and password) and, if they are valid, create a JWT that contains information about the user. The JWT is then sent back to the client and stored in a secure cookie or local storage.

    Register: When a user registers for the application, the server will create a new user account and generate a JWT for the user. The JWT is then sent back to the client and stored in a secure cookie or local storage.

    Logout: When a user logs out of the application, the server will invalidate the JWT by marking it as expired or by deleting it from the server. On the client side, the JWT can be deleted from the secure cookie or local storage.

Here is an example of how you might implement JWT-based authentication in an Express application using the jsonwebtoken package:

const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

// Secret key for signing JWTs
const JWT_SECRET = 'my-secret';

// Generate a JWT for a user
function createJWT(user) {
return jwt.sign(user, JWT_SECRET, { expiresIn: '1h' });
}

// Login route
app.post('/login', (req, res) => {
// Verify user credentials
const user = verifyCredentials(req.body.username, req.body.password);

if (!user) {
// If credentials are invalid, return a 401 status
return res.status(401).send('Invalid username or password');
}

// If credentials are valid, generate a JWT
const token = createJWT(user);

// Send the JWT in the response
res.send({ token });
});

// Register route
app.post('/register', (req, res) => {
// Create a new user account
const user = createUser(req.body.username, req.body.password);

// Generate a JWT for the new user
const token = createJWT(user);

// Send the JWT in the response
res.send({ token });
});

// Logout route
app.get('/logout', (req, res) => {
// Invalidate the JWT by marking it as expired
req.session.jwtExpires = Date.now();

// Redirect to the login page
res.redirect('/login');
});

app.listen(3000, () => {
console.log('Listening on port 3000');
});

In this example, the createJWT() function is used to generate a JWT for a user, the /login route is used to handle user login, the /register route is used to handle user registration, and the /logout route is used to handle logout.

It is important to note that this is just a general outline of how JWTs can be used for authentication, and there are many other considerations and

function verifyCredentials(username, password) {
// Look up the user in the database
const user = findUserByUsername(username);

// If no user is found, return null
if (!user) {
return null;
}

// If a user is found, verify their password
const isValid = comparePasswords(password, user.passwordHash);

// If the password is invalid, return null
if (!isValid) {
return null;
}

// If the password is valid, return the user
return user;
}

cookies, sessions, or OAuth2 // types of authorization
