var mongoose = require('mongoose');
var config = require('./config');

if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
  config.dbPath = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
  process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
  process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
  process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
  process.env.OPENSHIFT_APP_NAME;
}

mongoose.connect(config.dbPath);
var db = mongoose.connection;

db.on('error', function() {
    console.log('error occured from db');
});

db.once('open', function dbOpen() {
    console.log('successfully opened the db');
});

exports.mongoose = mongoose;