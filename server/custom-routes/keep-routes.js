let Users = require('../models/user')
let Keeps = require('../models/keep')

export default {
    getKeeps: {
        path: '/keeps/public',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Return a list of public keeps'
            Keeps.find({ public: true })
                .then(keeps => {
                    res.send(handleResponse(action, keeps))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    }
}


function handleResponse(action, data, error) {
    var response = {
        action: action,
        data: data
    }
    if (error) {
        response.error = error
    }
    return response
}