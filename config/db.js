const mysql = require("serverless-mysql")();
mysql.config({
  host: "sptdatabase.cra01zi9ewcg.ap-northeast-2.rds.amazonaws.com",
  database: "sptdatabase",
  user: "admin",
  password: "awsWNS!gml6628",
});

const executeQuery = (query, arraParms) => {
  return new Promise((resolve, reject) => {
    try {
      mysql.query(query, arraParms, (err, data) => {
        if (err) {
          console.log("error in executing the query");
          reject(err);
        }
        resolve(data);
      });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = { executeQuery };
