const oracledb = require('oracledb');
// hr schema password
var password = 'w12345' 
// checkConnection asycn function
async function checkConnection() {
  try {
    connection = await oracledb.getConnection({
        user: "wilson",
        password: password,
        connectString: "localhost:1521/orcl"
    });
    console.log('connected to database');
  } catch (err) {
    console.error(err.message);
  } finally {
    if (connection) {
      try {
        // Always close connections
        await connection.close(); 
        console.log('close connection success');
      } catch (err) {
        console.error(err.message);
      }
    }
  }
}

export default checkConnection().checkConnection;