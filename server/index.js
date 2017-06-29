const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

// Middleware
const checkForSession = require('./middlewares/checkForSession');

// Controllers
const swag_controller = require('./controllers/swag_controller');
const auth_controller = require('./controllers/auth_controller');

const app = express();

app.use( bodyParser.json() );
app.use( session({
  secret: 'sjdfl2j34j;jd jo234j23jjrljf',
  resave: false,
  saveUninitialized: false
}));
app.use( checkForSession );

// Swag
app.get( '/api/swag', swag_controller.read );

// Auth
app.post( '/api/login', auth_controller.login );
app.post( '/api/register', auth_controller.register );
app.post( '/api/signout', auth_controller.signout );
app.get( '/api/user', auth_controller.getUser );


const port = 3001;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );

