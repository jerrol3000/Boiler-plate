const express =  require("express");
const path = require("path");
const app = express();
const morgan = require('morgan')



app.use(morgan('dev'));

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(express.static(path.join(__dirname, '../public')))

app.use('/api', require('./api'))


// Make sure this is right at the end of your server logic!
// The only thing after this might be a piece of middleware to serve up 500 errors for server problems
// (However, if you have middleware to serve up 404s, that go would before this as well)

//Send this index.html if request doesnt match api routes
app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// error handling middleware
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== 'test') console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

 module.exports = app
