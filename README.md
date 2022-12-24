# chat-app

Make a chat app that can communicate with single or multiple users

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

{
    username: {
        type: string,
        
    }
}
