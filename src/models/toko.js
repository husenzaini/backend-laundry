const connection = require('../configs/db')
module.exports = {
   
    insertToko: (data) => {
      return new Promise((resolve, reject) => {
        connection.query("INSERT INTO laundry SET ?", data, 
        (err, result) => {
          if (!err) {
            resolve(result);
            console.log('result')
          } else {
            reject(new Error(err));
          }
        })
      })
    },
}