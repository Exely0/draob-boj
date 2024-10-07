const connection = require("../config/db");

const GenericModel = {
  getAll: (tableName, callback) => {
    const query = `SELECT * FROM ${tableName}`;
    connection.query(query, (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  getById: (tableName, id, callback) => {
    const query = `SELECT * FROM ${tableName} WHERE id = ?`;
    connection.query(query, [id], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results[0]);
    });
  },

  create: (tableName, data, callback) => {
    const query = `INSERT INTO ${tableName} SET ?`;
    connection.query(query, data, (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  update: (tableName, id, data, callback) => {
    const query = `UPDATE ${tableName} SET ? WHERE id = ?`;
    connection.query(query, [data, id], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  delete: (tableName, id, callback) => {
    const query = `DELETE FROM ${tableName} WHERE id = ?`;
    connection.query(query, [id], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  },
};

module.exports = GenericModel;
