const router = require('express').Router();
const { User} = require("../db")



// Login
router.get('/login', async(req, res, next)=> {
  try {
    res.send(await User.findByToken(req.headers.authorization))
  }
  catch(ex){
    next(ex);
  }
});
router.post('/login', async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body)});
  } catch (err) {
    next(err)
  }
})



//Sign up
router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    console.log(req.body)
    res.send({token: await user.generateToken()})
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})


module.exports = router;

module.exports = router;
