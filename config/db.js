module.exports = function() {

  // Connect OrientDB Database
  var OrientDB = require('orientjs');
  var server = OrientDB({
    host: 'pandoracube.iptime.org',
    port: 2424,
    username: 'root',
    password: 'password123' // Bad Method
  });
  var db = server.use('zzapcord');
  return db;
}
