const jwt = require("jsonwebtoken");
const JWT_SECRET = "Sunbeam@DMCFeb2025"; // process.env.JWT_SECRET

function createToken(user) {
  const payload = { id: user.id, role: user.role };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
  return token;
}

function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (err) {
    console.log("token verification failed:", err);
    return null;
  }
}

// JWT authentication middleware -- verify the JWT token
function jwtAuth(req, resp, next) {
  // if url is to be allowed for all users, pass request to next.


  const nonProtectedUrls = ["/users/signin", "/users/signup"  ];
  
  if (nonProtectedUrls.indexOf(req.url) >= 0) {
    next();
    return;
  }
  // if no authorization header, return error (403)
  if (!req.headers.authorization)
    resp.status(403).send("Unauthoized Access - No authorization header");
  // get req header - authorization and get the incoming token from it.
  const [bearer, token] = req.headers.authorization.split(" ");
  // verify the token
  const decoded = verifyToken(token);
  console.log("incoming user token:", decoded);
  // if not valid token, return error (403)
  if (!decoded) resp.status(403).send("Unauthoized Access - Invalid token");
  else {
    // otherwise, pass request to next.
    req.user = { id: decoded.id, role: decoded.role };
    next();
  }
}

module.exports = {
  createToken,
  jwtAuth,
};
