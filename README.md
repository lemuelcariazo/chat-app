# chat-app

Make a chat app that can communicate with single or multiple users
Analogy is the best way to understand the basics

The ecosystem is good enough to handle user requests
TODO: When deployed the set-cookie is not behaving what it should be; the browser cant store the set-cookie coming from
the header for unkown reason..

Expextation: the set-cookie must automatically store in the Browser's Cookie

How I set my Cookie

const saveCookie = async (token, res) => {
await res.cookie("jwt", token, {
httpOnly: true,
secure: true,
sameSite: "none",
// path: "/",
expires: new Date(Date.now() + 3600000),
});
};

the request must have credential=true and the set-cookie will only works on https and localhost.
