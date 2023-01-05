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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
the config, controllers, models, routes, and utils folders are commonly used to organize the code for the server-side of the application. Here is a brief overview of what each of these folders might be used for:

    config: The config folder is often used to store configuration files for the application. These might include files that define database connections, server settings, or other application-specific parameters.

    controllers: The controllers folder is typically used to store the code for the controllers in the application. Controllers are responsible for handling incoming HTTP requests, interacting with the model layer to retrieve or modify data, and returning appropriate responses to the client.

    models: The models folder is usually used to store the code for the models in the application. Models are typically used to define the structure of the data that is stored in the database, and they may include methods for interacting with the database to create, read, update, or delete data.

    routes: The routes folder is often used to store the code for the application's routes. Routes are responsible for mapping HTTP requests to the appropriate controller action, and they may also include middleware functions that perform tasks such as authentication or validation.

    utils: The utils folder is commonly used to store utility functions or helper modules that are shared across the application. These might include functions for handling common tasks such as parsing dates, formatting numbers, or sending email notifications.

<!-- App Directories -->

<!-- -server/
--config/
----database.js
----passport.js
--controllers/
----authController.js
----userController.js
----postController.js
--models/
----User.js
----Post.js
--routes/
----authRoutes.js
----userRoutes.js
----postRoutes.js
--utils/
----errorHandler.js
----index.js -->

<!-- client/
--public/
----index.html
----favicon.ico
----manifest.json
--src/
--assets/
---images/
----logo.png
--components/
---Auth/
-----Login.js
-----Login.css
-----Register.js
-----Register.css
--Layout/
-----Navbar.js
-----Navbar.css
-----Footer.js
-----Footer.css
------Posts/
--PostList.js
----PostList.css
----PostItem.js
----PostItem.css
----CreatePost.js
----CreatePost.css
--Users/
----UserList.js
----UserList.css
----UserItem.js
----UserItem.css
----UserProfile.js
----UserProfile.css
--pages/
---Home/
----Home.js
----Home.css
--Dashboard/
----Dashboard.js
----Dashboard.css
--store/

const dotenv = require('dotenv');
dotenv.config();

module.exports = {
development: {
database: {
host: process.env.DB_HOST,
port: process.env.DB_PORT,
name: process.env.DB_NAME,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
},
server: {
host: process.env.SERVER_HOST,
port: process.env.SERVER_PORT,
},
},
production: {
database: {
host: process.env.DB_HOST,
port: process.env.DB_PORT,
name: process.env.DB_NAME,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
},
server: {
host: process.env.SERVER_HOST,
port: process.env.SERVER_PORT,
},
},
}; -->

<!-- folder structure for react vite typescript -->

<!-- project
│   README.md
│   package.json
│   .viterc
│
└───client
│   │   main.tsx
│   │   tsconfig.json
│   │
│   └───components
│   └───containers
│   └───context
│   └───lib
│   └───pages
│   └───public
│   └───styles
│   └───tests
│
└───server
    │   index.ts
    │   tsconfig.json
    │
    └───config
    └───controllers
    └───database
    └───lib
    └───middleware
    └───models
    └───routes
    └───tests -->

stringConnection to mongo Shell : mongo "mongodb+srv://xxductusxx:<password>@chat-app.wlpx3lu.mongodb.net/test?retryWrites=true&w=majority" --username xxductusxx ||

mongosh "mongodb+srv://<username>:<password>@chat-app.wlpx3lu.mongodb.net/chat-app?retryWrites=true&w=majority

    main.tsx: This is the main entry point for the client-side of the application. It is typically responsible for bootstrapping the client-side application and rendering the root React component to the DOM.

    tsconfig.json: This file contains configuration options for the TypeScript compiler. It specifies how the TypeScript code in the project should be compiled, including the target JavaScript version, the type of source maps to generate, and any additional compiler options.

    components: This folder contains reusable UI components that are used throughout the application. These components may include things like buttons, form elements, navigation components, and other UI elements that are used to build the application's user interface.

    containers: This folder contains container components that are responsible for managing the application's state and rendering the appropriate UI components based on the application's state.

    context: This folder contains context providers and consumers that are used to manage global state in the application.

    lib: This folder contains utility functions and other code that is shared throughout the application.

    pages: This folder contains page components that are responsible for rendering the UI for a specific page in the application.

    public: This folder contains static assets that are served to the client-side of the application, such as images, fonts, and other resources.

    styles: This folder contains style sheets and other styling code that is specific to the client-side of the application.

    tests: This folder contains test files for the client-side of the application. These tests may include unit tests, integration tests, and other types of tests that are used to ensure that the client-side code is working correctly.

<!-- my-project/
├── client/
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   ├── react-app-env.d.ts
│   │   ├── tailwind.config.js
│   │   └── tailwind.css
│   ├── package.json
│   ├── tsconfig.json
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   ├── app.ts
│   │   ├── index.ts
│   ├── package.json
│   ├── tsconfig.json
├── package.json
└── tsconfig.json -->

<!-- user:{
    login: gotoPage()
    register: required
    logout: ?
    gotoPage: ()=>{
        {
            mainPage: "/Home"
        }
    }
} -->
