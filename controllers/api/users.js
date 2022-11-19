const { JsonWebTokenError } = require("jsonwebtoken");
const User = require("../../models/user");

module.exports = {
  create,
};

// Promise version
// function create(req, res) {
//   // create the user in the db from the request body
//   User.create(req.body)
//     .then(user => {
//       // send a json object back to the client that contains the created user
//       res.json(user)
//     })
// .then (make it blue)
// .then (make it yellow)

//     .catch(error => {
//       console.log(error)
//     })

// async/await
async function create(req, res) {
  // do things
  // try: what should happen assuming everything is successful
  try {
    const user = await User.create(req.body);
    // token will be a string
    const token = createJWT(token);
    res.json(token);
  } catch (error) {
    // error stuff
    console.log(error);
  }
}

/* Helper Functions */
function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}
