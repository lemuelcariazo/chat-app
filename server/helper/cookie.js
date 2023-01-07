const saveCookie = async (token, res) => {
  await res.cookie("jwt", token, {
    httpOnly: true,
    secure: true,
    sameSite: "None",
    // domain: "127.0.0.1:5173/chat",
    path: "/",

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
