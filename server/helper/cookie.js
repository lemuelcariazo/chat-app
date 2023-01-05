const saveCookie = async (token, res) => {
  await res.cookie("jwt", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    // domain: "http://127.0.0.1",
    // path: "/",
    expires: new Date(Date.now() + 3600000),
  });
};

const deleteCookie = async (res) => {
  const deletedCookie = await res.cookie("jwt", "", {
    expires: new Date(Date.now() - 3600000), // expire one hour ago
    httpOnly: true,
  });

  return deletedCookie;
};

module.exports = { saveCookie, deleteCookie };

// import { useEffect, useState } from "react";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const jwtCookie = getCookie("jwt");
//     if (jwtCookie) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   return (
//     <div>
//       {isLoggedIn ? (
//         <button onClick={logout}>Log out</button>
//       ) : (
//         <button onClick={login}>Log in</button>
//       )}
//     </div>
//   );
// }

// function getCookie(name) {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   if (parts.length === 2) {
//     return parts.pop().split(';').shift();
//   }
// }

// function login() {
//   fetch('/login', {
//     method: 'POST',
//     body: JSON.stringify({ username: 'user', password: 'pass' }),
//     headers: { 'Content-Type': 'application/json' },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.success) {
//         setIsLoggedIn(true);
//       }
//     });
// }

// function logout() {
//   document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
//   setIsLoggedIn(false);
// }
