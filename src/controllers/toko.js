const tokoModel = require('../models/toko')
const miscHelper = require('../helpers/helpers');
module.exports = {

  insertToko: (req, res) => {
      const {name, address, user_id, description, phone} = req.body;
      const data = {
        name,
        address,
        user_id,
        description,
        phone,
        image: process.env.URL_IMG + `toko/${req.file.filename}`}
    console.log('oke')
      tokoModel.insertToko(data)
        .then((result) => {
          miscHelper.response(res, result, 201)
        })
        .catch(err=>{
            miscHelper.response(res, {}, res.status, err)
          })
    }
}