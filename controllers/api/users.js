// controllers/api/users.js

module.exports = {
  create: createUser,
};

function createUser(req, res) {
  console.log(req.body);
  res.json({
    user: {
      name: req.body.name,
      email: req.body.email,
    },
  });
}
