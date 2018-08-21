const express = require('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());

// Routes
app.use(require('./routes/cuentas'));

// Starting the Server
app.listen(app.get('port'), function () {
    console.log('Server listening on', app.get('port'));
});
