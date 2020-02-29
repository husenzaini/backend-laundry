const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
module.exports = {
    response : (res, result, status, err) =>{
        let resultPrint = {}
        resultPrint.status = status === 200 || 201 ?'Succes':'error';
        resultPrint.status_code = status;
        resultPrint.result= result;
        resultPrint.err = err || null 
        return res.json(resultPrint);
    }
}